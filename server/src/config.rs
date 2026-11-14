//! Environment configuration (all variables prefixed `FIRMS_`, see docs/ARCHITECTURE.md).

use std::path::PathBuf;

#[derive(Clone)]
pub struct Config {
    pub bind: String,
    pub public_origin: String,
    pub api_url: String,
    pub accounts_url: String,
    pub client_id: String,
    pub client_secret: String,
    pub redirect_uri: String,
    pub map_key: Option<String>,
    pub data_dir: PathBuf,
    pub seed_dir: Option<PathBuf>,
    pub web_dir: PathBuf,
    pub tools_dir: PathBuf,
    pub python: String,
    pub ai_model: String,
    pub ai_disabled: bool,
    pub session_key: Option<Vec<u8>>,
    /// Extra origins accepted by the CSRF check (e.g. the Vite dev server `http://localhost:5190`).
    pub extra_origins: Vec<String>,
    /// Extra browser origins accepted on /mcp (FIRMS_MCP_ORIGINS).
    pub mcp_origins: Vec<String>,
}

impl std::fmt::Debug for Config {
    // Never print secrets.
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Config")
            .field("bind", &self.bind)
            .field("public_origin", &self.public_origin)
            .field("api_url", &self.api_url)
            .field("accounts_url", &self.accounts_url)
            .field("client_id_set", &!self.client_id.is_empty())
            .field("client_secret_set", &!self.client_secret.is_empty())
            .field("redirect_uri", &self.redirect_uri)
            .field("map_key_set", &self.map_key.is_some())
            .field("data_dir", &self.data_dir)
            .field("seed_dir", &self.seed_dir)
            .field("web_dir", &self.web_dir)
            .field("tools_dir", &self.tools_dir)
            .field("ai_model", &self.ai_model)
            .field("ai_disabled", &self.ai_disabled)
            .finish()
    }
}

fn var(name: &str) -> Option<String> {
    std::env::var(name).ok().map(|v| v.trim().to_owned()).filter(|v| !v.is_empty())
}

impl Config {
    pub fn from_env() -> Self {
        let public_origin = var("FIRMS_PUBLIC_ORIGIN")
            .unwrap_or_else(|| "http://localhost:8787".into())
            .trim_end_matches('/')
            .to_owned();
        let redirect_uri = var("FIRMS_FEEEF_REDIRECT_URI")
            .unwrap_or_else(|| format!("{public_origin}/auth/feeef/callback"));
        let session_key = var("FIRMS_SESSION_KEY").map(|k| hex::decode(&k).unwrap_or_else(|_| k.into_bytes()));
        Self {
            bind: var("FIRMS_BIND").unwrap_or_else(|| "0.0.0.0:8080".into()),
            api_url: var("FIRMS_FEEEF_API_URL")
                .unwrap_or_else(|| "https://api.beta.feeef.org/v1".into())
                .trim_end_matches('/')
                .to_owned(),
            accounts_url: var("FIRMS_FEEEF_ACCOUNTS_URL")
                .unwrap_or_else(|| "https://accounts.beta.feeef.org".into())
                .trim_end_matches('/')
                .to_owned(),
            client_id: var("FIRMS_FEEEF_CLIENT_ID").unwrap_or_default(),
            client_secret: var("FIRMS_FEEEF_CLIENT_SECRET").unwrap_or_default(),
            redirect_uri,
            map_key: var("FIRMS_MAP_KEY"),
            data_dir: var("FIRMS_DATA_DIR").map_or_else(|| PathBuf::from("/data"), PathBuf::from),
            seed_dir: var("FIRMS_SEED_DIR").map(PathBuf::from),
            web_dir: var("FIRMS_WEB_DIR").map_or_else(|| PathBuf::from("/app/web"), PathBuf::from),
            tools_dir: var("FIRMS_TOOLS_DIR").map_or_else(|| PathBuf::from("/app/tools"), PathBuf::from),
            python: var("FIRMS_PYTHON").unwrap_or_else(|| "python3".into()),
            ai_model: var("FIRMS_AI_MODEL").unwrap_or_else(|| "openai/gpt-4.1-mini".into()),
            ai_disabled: var("FIRMS_AI_DISABLED").is_some_and(|v| v == "1" || v.eq_ignore_ascii_case("true")),
            extra_origins: var("FIRMS_EXTRA_ORIGINS")
                .map(|v| v.split(',').map(|o| o.trim().trim_end_matches('/').to_ascii_lowercase()).filter(|o| !o.is_empty()).collect())
                .unwrap_or_default(),
            mcp_origins: var("FIRMS_MCP_ORIGINS")
                .map(|v| v.split(',').map(|o| o.trim().trim_end_matches('/').to_ascii_lowercase()).filter(|o| !o.is_empty()).collect())
                .unwrap_or_default(),
            public_origin,
            session_key,
        }
    }

    #[cfg(test)]
    pub fn for_tests(data_dir: PathBuf) -> Self {
        Self {
            bind: "127.0.0.1:0".into(),
            public_origin: "http://localhost:8787".into(),
            api_url: "http://127.0.0.1:9/v1".into(),
            accounts_url: "http://127.0.0.1:9".into(),
            client_id: String::new(),
            client_secret: String::new(),
            redirect_uri: "http://localhost:8787/auth/feeef/callback".into(),
            map_key: None,
            data_dir,
            seed_dir: None,
            web_dir: PathBuf::from("/nonexistent"),
            tools_dir: PathBuf::from("/nonexistent"),
            python: "python3".into(),
            ai_model: "openai/gpt-4.1-mini".into(),
            ai_disabled: true,
            session_key: None,
            extra_origins: Vec::new(),
            mcp_origins: Vec::new(),
        }
    }

    pub fn secure_cookies(&self) -> bool {
        self.public_origin.starts_with("https://")
    }
}
