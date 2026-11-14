//! A small built-in gazetteer for `find_region`: every loaded region (name / Arabic title / English
//! title / country) plus country names in Arabic, English and French with an approximate bbox,
//! the FIRMS country file name (for region builds) and the calibrated region of that country.

use serde_json::{Value, json};

use crate::data::Regions;

pub struct Country {
    pub key: &'static str,
    pub en: &'static str,
    pub ar: &'static str,
    pub fr: &'static str,
    /// FIRMS country file name (archives by country).
    pub firms: &'static str,
    pub aliases: &'static [&'static str],
    /// [W, S, E, N] (mainland / main extent, approximate).
    pub bbox: [f64; 4],
}

pub const COUNTRIES: &[Country] = &[
    Country { key: "algeria", en: "Algeria", ar: "الجزائر", fr: "Algérie", firms: "Algeria", aliases: &["dz"], bbox: [-8.7, 18.9, 12.0, 37.1] },
    Country { key: "tunisia", en: "Tunisia", ar: "تونس", fr: "Tunisie", firms: "Tunisia", aliases: &[], bbox: [7.5, 30.2, 11.6, 37.6] },
    Country { key: "morocco", en: "Morocco", ar: "المغرب", fr: "Maroc", firms: "Morocco", aliases: &["maroc", "المملكة المغربية"], bbox: [-13.2, 27.6, -1.0, 35.95] },
    Country { key: "libya", en: "Libya", ar: "ليبيا", fr: "Libye", firms: "Libya", aliases: &[], bbox: [9.3, 19.5, 25.2, 33.2] },
    Country { key: "egypt", en: "Egypt", ar: "مصر", fr: "Égypte", firms: "Egypt", aliases: &[], bbox: [24.7, 22.0, 36.9, 31.7] },
    Country { key: "spain", en: "Spain", ar: "إسبانيا", fr: "Espagne", firms: "Spain", aliases: &["españa", "espana", "اسبانيا"], bbox: [-9.4, 35.9, 3.4, 43.8] },
    Country { key: "france", en: "France", ar: "فرنسا", fr: "France", firms: "France", aliases: &[], bbox: [-5.2, 41.3, 9.6, 51.1] },
    Country { key: "italy", en: "Italy", ar: "إيطاليا", fr: "Italie", firms: "Italy", aliases: &["italia", "ايطاليا"], bbox: [6.6, 36.6, 18.6, 47.1] },
    Country { key: "portugal", en: "Portugal", ar: "البرتغال", fr: "Portugal", firms: "Portugal", aliases: &[], bbox: [-9.6, 36.9, -6.1, 42.2] },
    Country { key: "greece", en: "Greece", ar: "اليونان", fr: "Grèce", firms: "Greece", aliases: &["hellas"], bbox: [19.3, 34.8, 29.7, 41.8] },
    Country { key: "turkey", en: "Turkey", ar: "تركيا", fr: "Turquie", firms: "Turkey", aliases: &["türkiye", "turkiye"], bbox: [25.6, 35.8, 44.8, 42.1] },
    Country { key: "india", en: "India", ar: "الهند", fr: "Inde", firms: "India", aliases: &[], bbox: [68.1, 6.7, 97.4, 35.5] },
    Country { key: "bolivia", en: "Bolivia", ar: "بوليفيا", fr: "Bolivie", firms: "Bolivia", aliases: &[], bbox: [-69.6, -22.9, -57.5, -9.7] },
    Country { key: "brazil", en: "Brazil", ar: "البرازيل", fr: "Brésil", firms: "Brazil", aliases: &["brasil"], bbox: [-74.0, -33.8, -34.8, 5.3] },
    Country { key: "south_sudan", en: "South Sudan", ar: "جنوب السودان", fr: "Soudan du Sud", firms: "South_Sudan", aliases: &["s. sudan"], bbox: [24.1, 3.5, 35.9, 12.2] },
    Country { key: "sudan", en: "Sudan", ar: "السودان", fr: "Soudan", firms: "Sudan", aliases: &[], bbox: [21.8, 8.7, 38.6, 22.2] },
    Country { key: "lebanon", en: "Lebanon", ar: "لبنان", fr: "Liban", firms: "Lebanon", aliases: &[], bbox: [35.1, 33.05, 36.65, 34.7] },
    Country { key: "syria", en: "Syria", ar: "سوريا", fr: "Syrie", firms: "Syria", aliases: &["سورية"], bbox: [35.7, 32.3, 42.4, 37.3] },
    Country { key: "australia", en: "Australia", ar: "أستراليا", fr: "Australie", firms: "Australia", aliases: &["استراليا"], bbox: [112.9, -43.7, 153.7, -10.6] },
    Country {
        key: "usa",
        en: "United States",
        ar: "الولايات المتحدة",
        fr: "États-Unis",
        firms: "United_States",
        aliases: &["usa", "us", "u.s.", "america", "united states of america", "أمريكا", "امريكا", "الولايات المتحدة الأمريكية"],
        bbox: [-125.0, 24.5, -66.9, 49.4],
    },
    Country { key: "canada", en: "Canada", ar: "كندا", fr: "Canada", firms: "Canada", aliases: &[], bbox: [-141.0, 41.7, -52.6, 83.1] },
];

/// Lowercase, strip Latin accents and Arabic diacritics / letter variants, collapse spaces.
pub fn normalize(s: &str) -> String {
    let mut out = String::with_capacity(s.len());
    for c in s.trim().to_lowercase().chars() {
        let c = match c {
            'à' | 'á' | 'â' | 'ä' | 'ã' => 'a',
            'é' | 'è' | 'ê' | 'ë' => 'e',
            'î' | 'ï' | 'í' => 'i',
            'ô' | 'ö' | 'ó' => 'o',
            'û' | 'ü' | 'ú' | 'ù' => 'u',
            'ç' => 'c',
            'ñ' => 'n',
            'أ' | 'إ' | 'آ' | 'ٱ' => 'ا',
            'ة' => 'ه',
            'ى' => 'ي',
            '_' | '-' | ',' | '،' | '.' => ' ',
            '\u{0640}' | '\u{064B}'..='\u{065F}' | '\u{0670}' => continue,
            c => c,
        };
        out.push(c);
    }
    out.split_whitespace().collect::<Vec<_>>().join(" ")
}

/// Also match without the Arabic article "ال".
fn variants(s: &str) -> Vec<String> {
    let n = normalize(s);
    let mut v = vec![n.clone()];
    if let Some(rest) = n.strip_prefix("ال") {
        if rest.chars().count() >= 3 {
            v.push(rest.to_owned());
        }
    }
    v
}

/// 1.0 exact, 0.85 whole-word containment, 0.7 prefix (≥ 3 chars); None otherwise.
fn score(query: &str, name: &str) -> Option<f64> {
    let mut best: Option<f64> = None;
    for q in variants(query) {
        for n in variants(name) {
            if n.is_empty() || q.is_empty() {
                continue;
            }
            let s = if q == n {
                1.0
            } else if n.chars().count() >= 3 && format!(" {q} ").contains(&format!(" {n} ")) {
                0.85
            } else if q.chars().count() >= 3 && format!(" {n} ").contains(&format!(" {q} ")) {
                0.8
            } else if q.chars().count() >= 3 && n.starts_with(&q) {
                0.7
            } else {
                continue;
            };
            best = Some(best.map_or(s, |b: f64| b.max(s)));
        }
    }
    best
}

fn area(b: &[f64; 4]) -> f64 {
    (b[2] - b[0]).max(0.0) * (b[3] - b[1]).max(0.0)
}

fn overlap(a: &[f64; 4], b: &[f64; 4]) -> f64 {
    area(&[a[0].max(b[0]), a[1].max(b[1]), a[2].min(b[2]), a[3].min(b[3])])
}

/// The calibrated region for a country: same `country`, else the region with the largest overlap
/// (≥ 50% of the region inside the country).
pub fn region_for_country(regions: &Regions, c: &Country) -> Option<(String, &'static str)> {
    let cn = normalize(c.en);
    let by_country = regions.list.iter().find(|r| {
        r.country.as_deref().is_some_and(|x| normalize(x) == cn || normalize(x) == normalize(c.firms)) || r.name == c.key
    });
    let r = by_country.cloned().or_else(|| {
        regions
            .list
            .iter()
            .filter(|r| overlap(&r.bbox, &c.bbox) >= 0.5 * area(&r.bbox))
            .max_by(|a, b| overlap(&a.bbox, &c.bbox).total_cmp(&overlap(&b.bbox, &c.bbox)))
            .cloned()
    })?;
    let coverage = if area(&r.bbox) >= 0.6 * area(&c.bbox) { "full" } else { "partial" };
    Some((r.name.clone(), coverage))
}

pub fn find(regions: &Regions, query: &str, limit: usize) -> Value {
    let mut out: Vec<(f64, Value)> = Vec::new();
    for r in &regions.list {
        let mut names = vec![r.name.clone(), r.title.clone(), r.title_en.clone()];
        names.extend(r.title.split('،').map(str::to_owned));
        names.extend(r.title_en.split(',').map(str::to_owned));
        if let Some(c) = &r.country {
            names.push(c.clone());
        }
        if let Some(s) = names.iter().filter_map(|n| score(query, n)).reduce(f64::max) {
            out.push((
                s + 0.01, // a calibrated region wins a tie with its country
                json!({
                    "kind": "region",
                    "region": r.name,
                    "title": r.title,
                    "title_en": r.title_en,
                    "country": r.country,
                    "bbox": r.bbox,
                    "calibrated": true,
                }),
            ));
        }
    }
    for c in COUNTRIES {
        let mut names = vec![c.key, c.en, c.ar, c.fr, c.firms];
        names.extend(c.aliases.iter().copied());
        let Some(s) = names.iter().filter_map(|n| score(query, n)).reduce(f64::max) else { continue };
        let region = region_for_country(regions, c);
        out.push((
            s,
            json!({
                "kind": "country",
                "country": c.en,
                "names": { "en": c.en, "ar": c.ar, "fr": c.fr },
                "firms_country": c.firms,
                "bbox": c.bbox,
                "region": region.as_ref().map(|(n, _)| n.clone()),
                "region_coverage": region.as_ref().map(|(_, cov)| *cov),
                "calibrated": region.is_some(),
            }),
        ));
    }
    out.sort_by(|a, b| b.0.total_cmp(&a.0));
    let matches: Vec<Value> = out
        .into_iter()
        .take(limit)
        .map(|(s, mut v)| {
            v["score"] = json!((s.min(1.0) * 100.0).round() / 100.0);
            v
        })
        .collect();
    json!({
        "query": query,
        "count": matches.len(),
        "best": matches.first().cloned(),
        "matches": matches,
        "hint": "region = a calibrated monthly calendar (use get_calendar); a country without one can be built with build_region (firms_country + a bbox of at most 400 square degrees) or searched live with search_hotspots(bbox).",
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn normalizes_arabic_and_french() {
        assert_eq!(normalize("Algérie"), "algerie");
        assert_eq!(normalize("الإمارات"), "الامارات");
        assert_eq!(normalize("South_Sudan"), "south sudan");
    }

    #[test]
    fn finds_countries_in_three_languages() {
        let regs = Regions::load(&std::path::Path::new(env!("CARGO_MANIFEST_DIR")).join("../data/regions"));
        for q in ["Algeria", "الجزائر", "Algérie", "algerie"] {
            let v = find(&regs, q, 5);
            let best = &v["best"];
            assert!(best["country"] == "Algeria" || best["region"] == "algeria", "{q}: {best}");
        }
        let v = find(&regs, "جنوب السودان", 5);
        assert_eq!(v["best"]["region"], "ssudan");
        let v = find(&regs, "Soudan", 5);
        assert_eq!(v["best"]["country"], "Sudan");
        let v = find(&regs, "الولايات المتحدة", 5);
        assert_eq!(v["best"]["firms_country"], "United_States");
        let v = find(&regs, "India", 5);
        assert!(v["matches"].as_array().unwrap().iter().any(|m| m["region"] == "punjab"));
    }
}
