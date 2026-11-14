# syntax=docker/dockerfile:1.7
# Firms: one image with the Rust server (API, MCP, AI agent), the built SPA, the seed data and the
# python harmonization tools.
#
#   docker build --secret id=gh_token,env=GITHUB_TOKEN -t firms .
#   docker run -p 8080:8080 -v firms-data:/data --env-file .env -e FIRMS_PUBLIC_ORIGIN=http://localhost:8080 firms
#
# The `gh_token` secret (a GitHub token that can read feeefapp/ui) is only mounted for `npm ci`;
# nothing is written to a layer. Without it the git dependency is fetched anonymously.

# --- Web app (Vite build) ------------------------------------------------------
# The full Node image ships git, which npm needs for the github: dependency.
FROM node:22-bookworm AS web
WORKDIR /web
COPY web/ ./
# With the `gh_token` build secret (a GitHub token that can read the private feeefapp/ui kit) the SPA is
# built from source. Without it, the committed bundle in web/prebuilt is used, so a deploy never blocks
# on the secret. Refresh web/prebuilt with `npm run build && rm -rf prebuilt && cp -r dist prebuilt`.
# The lockfile resolves @feeef.dev/ui to git+ssh://git@github.com/feeefapp/ui; git rewrites GitHub SSH
# URLs to HTTPS with the token for this command only, through GIT_CONFIG_* variables.
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=secret,id=gh_token,required=false \
    set -eu; \
    if [ -s /run/secrets/gh_token ]; then \
      https="https://x-access-token:$(cat /run/secrets/gh_token)@github.com/"; \
      export GIT_CONFIG_COUNT=3 \
        GIT_CONFIG_KEY_0="url.${https}.insteadOf" GIT_CONFIG_VALUE_0="ssh://git@github.com/" \
        GIT_CONFIG_KEY_1="url.${https}.insteadOf" GIT_CONFIG_VALUE_1="git@github.com:" \
        GIT_CONFIG_KEY_2="url.${https}.insteadOf" GIT_CONFIG_VALUE_2="https://github.com/"; \
      npm ci --no-audit --no-fund && npm run build; \
    else \
      echo "gh_token build secret not set: using the committed web/prebuilt bundle"; \
      test -f prebuilt/index.html; rm -rf dist; cp -r prebuilt dist; \
    fi

# --- Rust server -------------------------------------------------------------
FROM rust:1-slim-bookworm AS build
WORKDIR /src
COPY server/Cargo.toml server/Cargo.lock ./
COPY server/src ./src
# Limits parallel rustc processes (and peak memory) on small build hosts.
ARG CARGO_BUILD_JOBS=2
ENV CARGO_BUILD_JOBS=${CARGO_BUILD_JOBS}
RUN --mount=type=cache,target=/usr/local/cargo/registry \
    --mount=type=cache,target=/src/target \
    cargo build --release --locked \
    && cp target/release/firms-server /usr/local/bin/firms-server

# --- Runtime -----------------------------------------------------------------
FROM debian:bookworm-slim AS runtime
# python3 runs tools/harmonize.py (region builds) and tools/fetch_data.py (globe days): stdlib only.
# curl serves the container health check.
RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates python3 tini curl \
    && rm -rf /var/lib/apt/lists/* \
    && useradd --system --uid 10001 --home-dir /data --create-home firms
COPY --from=build /usr/local/bin/firms-server /usr/local/bin/firms-server
COPY --from=web /web/dist /app/web
COPY data /app/seed
COPY tools /app/tools
ENV FIRMS_BIND=0.0.0.0:8080 \
    FIRMS_DATA_DIR=/data \
    FIRMS_SEED_DIR=/app/seed \
    FIRMS_WEB_DIR=/app/web \
    FIRMS_TOOLS_DIR=/app/tools \
    PYTHONDONTWRITEBYTECODE=1
USER firms
WORKDIR /data
VOLUME ["/data"]
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s CMD curl -fsS http://127.0.0.1:8080/healthz || exit 1
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["firms-server"]
