// Researched 2026-09-26. Prices are USD list prices; see each product's sources and confidence note.
// PRICE CURRENCY RULE: every record has "currency": "USD", and every numeric price field (price, annual, minMonthly,
// cheapestPaidUSD) must be in US dollars. Convert GBP/EUR/etc. with src/data/fx.js before writing; local-currency
// amounts (e.g. "£49/mo") belong only in quota/highlight text, never in the numeric fields.
// "lastUpdated" (YYYY-MM-DD) is the date the record's data was last checked; set it whenever you change the record.
export default [
  {
    "id": "suno",
    "name": "Suno",
    "company": "Suno, Inc.",
    "url": "https://suno.com",
    "category": "music",
    "pricingModel": "hybrid",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "50 credits/day (~10 songs); 7 lifetime downloads",
        "highlights": [
          "Non-commercial use only",
          "7 downloads lifetime",
          "Daily credit refresh"
        ]
      },
      {
        "name": "Pro",
        "price": 10,
        "annual": 8,
        "quota": "2,500 credits/mo (~500 songs); 20 downloads/mo",
        "highlights": [
          "Commercial-use rights",
          "20 downloads per month",
          "Latest models incl. v6",
          "Extra downloads purchasable"
        ]
      },
      {
        "name": "Premier",
        "price": 30,
        "annual": 24,
        "quota": "10,000 credits/mo (~2,000 songs); 60 downloads/mo",
        "highlights": [
          "Suno Studio DAW editor",
          "MIDI export and stems",
          "60 downloads (Studio unlimited)",
          "Commercial-use rights"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 10,
      "tracksPerMonthCheapestPaid": 20,
      "vocals": true,
      "commercialUseCheapestPaid": true,
      "ownershipOfOutput": "licensed (perpetual commercial license; Suno retains authorship since WMG deal)",
      "stemsExport": true,
      "midiExport": true,
      "maxTrackMinutes": 8,
      "editingTools": 5,
      "downloadOnFree": true,
      "apiAvailable": false,
      "royaltyFreeForCreators": true
    },
    "ratings": {
      "trustpilot": {
        "score": 1.7,
        "reviews": 147
      },
      "g2": {
        "score": 4,
        "reviews": 8
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 4,
      "ease": 5,
      "depth": 5,
      "team": 2,
      "free": 4
    },
    "commercial": true,
    "api": false,
    "bestFor": "Creators and hobbyists wanting complete vocal songs in any genre at very low cost.",
    "strategy": "Freemium credit subscriptions, now gating value via monthly download caps, paid extra downloads and Premier-only Studio features.",
    "strengths": [
      "Best-in-class full songs with vocals",
      "v6 licensed model (WMG, BMG, Believe)",
      "Studio editor with stems/MIDI on Premier",
      "Huge credit allowance per dollar"
    ],
    "weaknesses": [
      "Download caps since Sep 3 2026 (20/60 per month)",
      "Ownership language downgraded to license",
      "Free-tier songs never commercially usable",
      "Poor Trustpilot support/billing reviews"
    ],
    "confidence": "high - prices/caps confirmed by multiple Sep 2026 sources; songs/mo is a credit estimate (10 credits per 2-song generation) but only 20 downloadable on Pro; downloadOnFree = 7 lifetime; MIDI is Premier-only; maxTrackMinutes approximate; Trustpilot figure is suno.com page (separate suno.ai page has ~820 reviews, score not captured); suno.com blocked from direct fetch.",
    "sources": [
      "https://techjacksolutions.com/ai-tools/suno/suno-pricing/",
      "https://www.aimusicpreneur.com/ai-tools-news/suno-download-caps-free-pro-premier-september-2026/",
      "https://www.musicbusinessworldwide.com/suno-limits-subscribers-downloads-per-month/",
      "https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/",
      "https://www.aimusicpreneur.com/ai-tools-news/suno-v6-v6-wild-v6-mini-launch/",
      "https://www.digitalmusicnews.com/2026/07/03/suno-is-opening-an-api-partner-program/",
      "https://help.suno.com/en/articles/8128193",
      "https://www.trustpilot.com/review/suno.com",
      "https://www.g2.com/products/suno-ai/reviews"
    ]
  },
  {
    "id": "udio",
    "name": "Udio",
    "company": "Uncharted Labs, Inc.",
    "url": "https://www.udio.com",
    "category": "music",
    "pricingModel": "credits",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "10 credits/day, 100/mo cap (~3 full songs/day)",
        "highlights": [
          "No downloads (walled garden)",
          "Daily credit refresh"
        ]
      },
      {
        "name": "Standard",
        "price": 10,
        "annual": 8,
        "quota": "2,400 credits/mo",
        "highlights": [
          "In-app creation and streaming",
          "Extend and inpaint editing",
          "No audio/stem downloads"
        ]
      },
      {
        "name": "Pro",
        "price": 30,
        "annual": 24,
        "quota": "6,000 credits/mo",
        "highlights": [
          "2.5x Standard credits",
          "Priority generation",
          "No audio/stem downloads"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 10,
      "tracksPerMonthCheapestPaid": 0,
      "vocals": true,
      "commercialUseCheapestPaid": false,
      "ownershipOfOutput": "licensed, in-platform only (no export since UMG deal)",
      "stemsExport": false,
      "midiExport": false,
      "maxTrackMinutes": null,
      "editingTools": 4,
      "downloadOnFree": false,
      "apiAvailable": false,
      "royaltyFreeForCreators": false
    },
    "ratings": {
      "trustpilot": {
        "score": 1.6,
        "reviews": 52
      },
      "g2": {
        "score": null,
        "reviews": null
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 1,
      "ease": 4,
      "depth": 4,
      "team": 1,
      "free": 2
    },
    "commercial": false,
    "api": false,
    "bestFor": "Fans who want to create and share AI songs inside a label-licensed platform, not export them.",
    "strategy": "Credit-metered subscriptions pivoting to a label-licensed, streaming-style walled garden with artist opt-in revenue shares.",
    "strengths": [
      "High-fidelity vocal generations",
      "Inpainting and extend editing",
      "Label-licensed (UMG, WMG) future platform"
    ],
    "weaknesses": [
      "Downloads disabled since Oct/Nov 2025",
      "Outputs cannot go to Spotify/YouTube",
      "Licensed relaunch still pending in 2026",
      "Very poor Trustpilot rating"
    ],
    "confidence": "medium - prices consistent across sources but platform in transition; tracks/mo (~700) is a rough estimate from free-tier ratio (10 credits ~3 songs); stems exist in-app but cannot be exported; G2 listing has 0 reviews.",
    "sources": [
      "https://www.billboard.com/pro/umg-udio-ai-deal-faq-artist-payments-user-downloads-lawsuit/",
      "https://margabagus.com/udio-pricing-2026/",
      "https://www.eesel.ai/blog/udio-pricing",
      "https://techcrunch.com/2025/11/19/warner-music-settles-copyright-lawsuit-with-udio-signs-deal-for-ai-music-platform/",
      "https://www.chartlex.com/blog/business/udio-umg-walled-garden-explained-2026",
      "https://www.trustpilot.com/review/udio.com"
    ]
  },
  {
    "id": "aiva",
    "name": "AIVA",
    "company": "Aiva Technologies SARL",
    "url": "https://www.aiva.ai",
    "category": "music",
    "pricingModel": "subscription",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "3 downloads/mo, tracks up to 3 min",
        "highlights": [
          "MP3 and MIDI downloads",
          "AIVA owns copyright",
          "Attribution required, no monetization"
        ]
      },
      {
        "name": "Standard",
        "price": 15,
        "annual": 11,
        "quota": "15 downloads/mo, up to 5 min",
        "highlights": [
          "Monetize on YouTube/Twitch/TikTok/Instagram",
          "AIVA keeps copyright, credit required",
          "MIDI export"
        ]
      },
      {
        "name": "Pro",
        "price": 49,
        "annual": 33,
        "quota": "300 downloads/mo, up to 5.5 min",
        "highlights": [
          "You own full copyright",
          "Unrestricted commercial use",
          "WAV and high-quality formats"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 15,
      "tracksPerMonthCheapestPaid": 15,
      "vocals": false,
      "commercialUseCheapestPaid": false,
      "ownershipOfOutput": "platform owns (Free/Standard); user owns on Pro",
      "stemsExport": null,
      "midiExport": true,
      "maxTrackMinutes": 5.5,
      "editingTools": 4,
      "downloadOnFree": true,
      "apiAvailable": null,
      "royaltyFreeForCreators": true
    },
    "ratings": {
      "trustpilot": {
        "score": 2.8,
        "reviews": 3
      },
      "g2": {
        "score": null,
        "reviews": null
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 3,
      "ease": 3,
      "depth": 4,
      "team": 2,
      "free": 3
    },
    "commercial": false,
    "api": null,
    "bestFor": "Composers and game/film creators who want editable instrumental scores and MIDI.",
    "strategy": "License-ladder subscriptions where higher tiers buy copyright ownership and more downloads.",
    "strengths": [
      "MIDI export for DAW workflows",
      "Full copyright ownership on Pro",
      "Strong orchestral/cinematic composition",
      "Piano-roll style editing"
    ],
    "weaknesses": [
      "Instrumental only, no vocals",
      "Standard requires AIVA credit",
      "Prices set in EUR, VAT extra",
      "Dated, unintuitive interface per reviews"
    ],
    "confidence": "medium - list prices are EUR (15/11, 49/33) shown here as USD at face value; Standard allows social monetization only (hence commercialUse false, royaltyFree true); stems and API not verified; G2 has too few reviews to rate.",
    "sources": [
      "https://music.loop.fans/ai/aiva-ai-music-generator",
      "https://vocuno.com/ai-tools/aiva",
      "https://omr.com/en/reviews/product/aiva/pricing",
      "https://www.trustpilot.com/review/www.aiva.ai",
      "https://www.g2.com/sellers/aiva-technologies-sarl"
    ]
  },
  {
    "id": "soundraw",
    "name": "Soundraw",
    "company": "SOUNDRAW Inc.",
    "url": "https://soundraw.io",
    "category": "music",
    "pricingModel": "subscription",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Creator",
        "price": 16.99,
        "annual": 11.04,
        "quota": "Unlimited MP3 downloads",
        "highlights": [
          "Royalty-free for videos, podcasts, ads",
          "Client work allowed",
          "License perpetual after cancel"
        ]
      },
      {
        "name": "Artist Starter",
        "price": 19.49,
        "annualOnly": true,
        "quota": "10 downloads/mo",
        "highlights": [
          "Distribute to Spotify/DSPs",
          "No stems",
          "MP3 only"
        ]
      },
      {
        "name": "Artist Pro",
        "price": 23.39,
        "annualOnly": true,
        "quota": "20 downloads/mo",
        "highlights": [
          "WAV and stems",
          "DSP distribution rights"
        ]
      },
      {
        "name": "Artist Unlimited",
        "price": 32.49,
        "annualOnly": true,
        "quota": "Unlimited downloads",
        "highlights": [
          "MP3, WAV and stems",
          "No download limits",
          "DSP distribution rights"
        ]
      },
      {
        "name": "Custom / API",
        "price": null,
        "custom": true,
        "quota": "Custom",
        "highlights": [
          "Music API for apps/games"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 16.99,
      "tracksPerMonthCheapestPaid": "unlimited",
      "vocals": false,
      "commercialUseCheapestPaid": true,
      "ownershipOfOutput": "licensed (perpetual royalty-free license)",
      "stemsExport": true,
      "midiExport": null,
      "maxTrackMinutes": 5,
      "editingTools": 3,
      "downloadOnFree": false,
      "apiAvailable": true,
      "royaltyFreeForCreators": true
    },
    "ratings": {
      "trustpilot": {
        "score": 2,
        "reviews": null
      },
      "g2": {
        "score": null,
        "reviews": null
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 4,
      "ease": 4,
      "depth": 3,
      "team": 2,
      "free": 2
    },
    "commercial": true,
    "api": true,
    "bestFor": "YouTubers and marketers needing unlimited royalty-free background music.",
    "strategy": "Tiered subscriptions with steep (~35%) annual discounts, splitting creator sync licenses from artist distribution rights, plus B2B API.",
    "strengths": [
      "Unlimited downloads on Creator",
      "Trained on in-house music, clean licensing",
      "Section/energy editing of tracks",
      "Official music API"
    ],
    "weaknesses": [
      "Instrumental only",
      "Artist tiers cap downloads",
      "Trial-to-annual billing complaints",
      "Can sound repetitive"
    ],
    "confidence": "medium - Creator monthly/annual confirmed; Artist tiers only annual-per-month figures found (monthly likely ~$29.99/$35.99/$49.99 but unverified, left null); tracks/mo null because unlimited; Trustpilot count only '30+'; no G2 reviews.",
    "sources": [
      "https://cybernews.com/ai-tools/soundraw-ai-music-generator-review/",
      "https://www.saasworthy.com/product/soundraw-io/pricing",
      "https://soundraw.io/license",
      "https://soundraw.io/api",
      "https://docs.channel.io/soundraw-faq/en/articles/Can-I-make-a-song-longer-than-5-minutes-1e787a47",
      "https://www.trustpilot.com/review/soundraw.io",
      "https://appsumo.com/products/soundraw/reviews/"
    ]
  },
  {
    "id": "boomy",
    "name": "Boomy",
    "company": "Boomy Corporation",
    "url": "https://boomy.com",
    "category": "music",
    "pricingModel": "subscription",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Limited saves and releases",
        "highlights": [
          "Generate songs instantly",
          "Distribute to streaming"
        ]
      },
      {
        "name": "Creator",
        "price": 9.99,
        "quota": "500 saves, 10 MP3 downloads/mo, 3 releases/mo",
        "highlights": [
          "Full commercial rights on download",
          "Faster release review",
          "Revenue share on streams"
        ]
      },
      {
        "name": "Pro",
        "price": 29.99,
        "quota": "Unlimited saves",
        "highlights": [
          "100% revenue share (after fees)",
          "Stems for some tracks",
          "Priority support"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 9.99,
      "tracksPerMonthCheapestPaid": 10,
      "vocals": null,
      "commercialUseCheapestPaid": true,
      "ownershipOfOutput": "licensed (full commercial rights on paid downloads)",
      "stemsExport": true,
      "midiExport": null,
      "maxTrackMinutes": null,
      "editingTools": 2,
      "downloadOnFree": null,
      "apiAvailable": null,
      "royaltyFreeForCreators": true
    },
    "ratings": {
      "trustpilot": {
        "score": null,
        "reviews": 27
      },
      "g2": {
        "score": null,
        "reviews": null
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 3,
      "ease": 5,
      "depth": 2,
      "team": 1,
      "free": 3
    },
    "commercial": true,
    "api": null,
    "bestFor": "Beginners who want to generate simple tracks and release them to streaming services quickly.",
    "strategy": "Low-cost subscriptions plus a cut of streaming royalties from distributed releases.",
    "strengths": [
      "Built-in streaming distribution",
      "Very cheap entry tier",
      "Fast one-click generation"
    ],
    "weaknesses": [
      "Simplistic output vs Suno/Udio",
      "Royalty payout complaints",
      "Few editing controls",
      "Little product news in 2025-2026"
    ],
    "confidence": "low - pricing from third-party 2026 reviews (annual price not found; $119.88/yr = no discount); vocals, MIDI, API, free downloads unverified; Trustpilot score not captured (27 reviews, mostly payout complaints); service operational per status page.",
    "sources": [
      "https://www.codaone.ai/tools/boomy/",
      "https://singify.fineshare.com/blog/ai-music-apps/boomy",
      "https://support.boomy.com/hc/en-us/articles/15261769042829-Can-I-use-Boomy-songs-royalty-free",
      "https://support.boomy.com/hc/en-us/articles/15261378066957-What-is-my-share-of-royalties-and-how-is-it-calculated",
      "https://status.boomy.com/",
      "https://www.trustpilot.com/review/boomy.com"
    ]
  },
  {
    "id": "mubert",
    "name": "Mubert",
    "company": "Mubert Inc.",
    "url": "https://mubert.com",
    "category": "music",
    "pricingModel": "subscription",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Ambassador (Free)",
        "price": 0,
        "quota": "Up to ~25-50 tracks/mo, MP3",
        "highlights": [
          "Non-commercial, attribution required",
          "MP3 only"
        ]
      },
      {
        "name": "Creator",
        "price": 14,
        "annual": 11.69,
        "quota": "Tracks for social/personal use",
        "highlights": [
          "Social media content",
          "No monetized/commercial use (2026 terms)"
        ]
      },
      {
        "name": "Pro",
        "price": 39,
        "annual": 32.49,
        "quota": "500 tracks/mo",
        "highlights": [
          "Commercial use and monetization",
          "Full Track Editor with stems",
          "Tracks up to 25 min"
        ]
      },
      {
        "name": "Business",
        "price": 199,
        "annual": 149.29,
        "quota": "Broad commercial licensing",
        "highlights": [
          "Client work, apps, games",
          "Agency usage"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 14,
      "tracksPerMonthCheapestPaid": null,
      "vocals": false,
      "commercialUseCheapestPaid": false,
      "ownershipOfOutput": "licensed (Mubert retains copyright)",
      "stemsExport": true,
      "midiExport": null,
      "maxTrackMinutes": 25,
      "editingTools": 3,
      "downloadOnFree": true,
      "apiAvailable": true,
      "royaltyFreeForCreators": true
    },
    "ratings": {
      "trustpilot": {
        "score": 1.7,
        "reviews": 20
      },
      "g2": {
        "score": 3.7,
        "reviews": null
      },
      "capterra": {
        "score": null,
        "reviews": 0
      }
    },
    "scores": {
      "value": 3,
      "ease": 4,
      "depth": 3,
      "team": 3,
      "free": 3
    },
    "commercial": false,
    "api": true,
    "bestFor": "Streamers, app developers and creators needing large volumes of long background tracks.",
    "strategy": "License-tier subscriptions (usage rights drive price) plus B2B API licensing.",
    "strengths": [
      "Very long tracks (up to 25 min)",
      "High monthly track volume",
      "Developer API for apps/streams",
      "DMCA-safe for social platforms"
    ],
    "weaknesses": [
      "Instrumental only",
      "Commercial rights need Pro",
      "Licensing confusion and refund complaints",
      "Loops can feel repetitive"
    ],
    "confidence": "medium - prices consistent; sources conflict on Creator quota (25 vs 500 tracks) and whether Creator allows social monetization; G2 3.7 review count not found; Capterra has 0 reviews.",
    "sources": [
      "https://mubert.com/render/pricing",
      "https://costbench.com/software/ai-music-generators/mubert/",
      "https://jackrighteous.com/en-us/blogs/music-creation-process-guide/mubert-ai-review-licensing-limits-and-best-uses-for-creators",
      "https://www.trustpilot.com/review/mubert.com",
      "https://www.producthunt.com/products/mubert/reviews",
      "https://www.capterra.com/p/10015573/Mubert-Render/"
    ]
  },
  {
    "id": "beatoven_ai",
    "name": "Beatoven.ai",
    "company": "Beatoven.ai (Bengaluru)",
    "url": "https://www.beatoven.ai",
    "category": "music",
    "pricingModel": "hybrid",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Generate/preview only; no downloads",
        "highlights": [
          "Try Maestro music and SFX",
          "No downloads"
        ]
      },
      {
        "name": "Creator",
        "price": 10,
        "annual": 8.33,
        "quota": "30 download-minutes/mo (~10 tracks)",
        "highlights": [
          "Unlimited generations",
          "Exclusive license per download",
          "Advanced track editing"
        ]
      },
      {
        "name": "Visionary",
        "price": 20,
        "annual": 16.67,
        "quota": "60 download-minutes/mo (~20 tracks)",
        "highlights": [
          "Unlimited generations",
          "Stem downloads",
          "Exclusive license"
        ]
      },
      {
        "name": "Pay as you go",
        "price": null,
        "custom": true,
        "quota": "$3 per download-minute",
        "highlights": [
          "No subscription needed"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 10,
      "tracksPerMonthCheapestPaid": 10,
      "vocals": false,
      "commercialUseCheapestPaid": true,
      "ownershipOfOutput": "licensed (exclusive license per download)",
      "stemsExport": true,
      "midiExport": null,
      "maxTrackMinutes": null,
      "editingTools": 3,
      "downloadOnFree": false,
      "apiAvailable": true,
      "royaltyFreeForCreators": true
    },
    "ratings": {
      "trustpilot": {
        "score": null,
        "reviews": null
      },
      "g2": {
        "score": 4.5,
        "reviews": 4
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 4,
      "ease": 4,
      "depth": 3,
      "team": 2,
      "free": 2
    },
    "commercial": true,
    "api": true,
    "bestFor": "Video creators and podcasters wanting ethically licensed, mood-based background music.",
    "strategy": "Subscriptions metered by download minutes with unlimited generation, plus per-minute top-ups and API.",
    "strengths": [
      "Fully licensed Maestro model, pays artists",
      "Mood/instrument editing after generation",
      "Stems (bass, chords, melody, percussion)",
      "Public API and SFX generation"
    ],
    "weaknesses": [
      "Instrumental only, vocals 'coming soon'",
      "Download-minute caps",
      "Slow generation times",
      "No free downloads"
    ],
    "confidence": "medium - Creator/Visionary $10/$20 (annual $100/$200) confirmed; some sources also cite a $3 'Creator Lite' tier (unverified, omitted); tracks/mo assumes ~3-min tracks; no Trustpilot page found.",
    "sources": [
      "https://www.beatoven.ai/pricing",
      "https://www.saasworthy.com/product/beatoven-ai/pricing",
      "https://www.beatoven.ai/api",
      "https://github.com/api-evangelist/beatoven",
      "https://www.recordoftheday.com/news-and-press/beatovenai-unveils-maestro-the-largest-fully-licensed-generative-ai-model-for-music-that-pays-artists-for-every-output",
      "https://www.g2.com/products/beatoven-ai/reviews",
      "https://appsumo.com/products/beatovenai/reviews/"
    ]
  }
]
