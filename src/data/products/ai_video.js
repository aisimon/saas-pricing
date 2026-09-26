// Researched 2026-09-26. Prices are USD list prices; see each product's sources and confidence note.
export default [
  {
    "id": "runway",
    "name": "Runway",
    "company": "Runway AI, Inc.",
    "url": "https://runway.com/pricing",
    "category": "ai_video",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "125 one-time credits",
        "highlights": [
          "One-time 125 credits",
          "Watermarked exports",
          "No Gen-4.5 access"
        ]
      },
      {
        "name": "Standard",
        "price": 15,
        "annual": 12,
        "quota": "625 credits/mo (~52s Gen-4.5)",
        "highlights": [
          "All models unlocked",
          "No watermark, 4K upscale",
          "Credits don't roll over"
        ]
      },
      {
        "name": "Pro",
        "price": 35,
        "annual": 28,
        "maxUsers": 10,
        "quota": "2,250 credits/mo",
        "highlights": [
          "Up to 10 users/workspace",
          "3.6x Standard credits"
        ]
      },
      {
        "name": "Max",
        "price": 95,
        "annual": 76,
        "maxUsers": 10,
        "quota": "9,500 credits/mo, 1-month rollover",
        "highlights": [
          "Replaced Unlimited plan in 2026",
          "Credits roll over one month",
          "Up to 10 users/workspace"
        ]
      },
      {
        "name": "Enterprise",
        "price": null,
        "custom": true,
        "quota": "Custom credits",
        "highlights": [
          "SSO and workspace analytics",
          "Advanced security and compliance",
          "Priority support"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 15,
      "creditsPerMonthCheapestPaid": "625 credits",
      "approxVideoSecondsCheapestPaid": 52,
      "maxResolution": "4K",
      "maxClipSeconds": 10,
      "watermarkOnFree": true,
      "commercialUseCheapestPaid": true,
      "avatarsLipSync": true,
      "nativeAudio": null,
      "textToVideo": true,
      "imageToVideo": true,
      "apiAvailable": true,
      "videoType": "generative"
    },
    "ratings": {
      "trustpilot": {
        "score": 1.1,
        "reviews": 340
      },
      "g2": {
        "score": null,
        "reviews": 78
      },
      "capterra": {
        "score": null,
        "reviews": 2
      }
    },
    "scores": {
      "value": 3,
      "ease": 3,
      "depth": 5,
      "team": 4,
      "free": 2
    },
    "commercial": true,
    "api": true,
    "bestFor": "Creative professionals and studios wanting a full AI video toolkit with top-tier generative models.",
    "strategy": "Per-seat subscriptions bundling monthly credits consumed per second of generation, with top-ups, a Max tier with rollover, and enterprise contracts plus a separate usage-billed API.",
    "strengths": [
      "Strong cinematic Gen-4.5 model",
      "Full creative suite (editing, lip sync, audio tools)",
      "Commercial use and no watermark from Standard",
      "Developer API available"
    ],
    "weaknesses": [
      "Credits burn fast (~52s Gen-4.5 on Standard)",
      "Standard/Pro credits don't roll over",
      "Very poor Trustpilot score (billing/support complaints)"
    ],
    "confidence": "medium - official page blocked; prices/credits from multiple 2026 third-party summaries (monthly prices described as approximate). 52s assumes Gen-4.5 at 12 credits/s; cheaper models yield more. Gen-4.5 native 720p, 4K via upscale. Native audio status conflicting in sources (null). G2/Capterra scores not visible; only counts. Trustpilot is runwayml.com domain.",
    "sources": [
      "https://runway.com/pricing",
      "https://creatify.ai/blog/runway-pricing-(2026)-plans-credits-and-what-you-ll-actually-pay",
      "https://magichour.ai/blog/runway-ml-pricing",
      "https://melies.co/runway-ml-pricing",
      "https://imaginetovideo.com/runway-gen-4-5",
      "https://www.trustpilot.com/review/runwayml.com",
      "https://www.g2.com/products/runway-2022-01-04/reviews",
      "https://www.capterra.com/p/10014838/Runway-Gen-2/"
    ]
  },
  {
    "id": "pika",
    "name": "Pika",
    "company": "Pika Labs",
    "url": "https://pika.art/pricing",
    "category": "ai_video",
    "pricingModel": "credits",
    "tiers": [
      {
        "name": "Basic (Free)",
        "price": 0,
        "quota": "150 credits/mo",
        "highlights": [
          "Watermarked output",
          "No commercial use",
          "Pikaformance at 720p"
        ]
      },
      {
        "name": "Standard",
        "price": 10,
        "annual": 8,
        "quota": "700 credits/mo",
        "highlights": [
          "~35 five-second 720p clips",
          "Still no commercial rights",
          "Credits don't carry over"
        ]
      },
      {
        "name": "Pro",
        "price": 35,
        "annual": 28,
        "quota": "2,300 credits/mo",
        "highlights": [
          "Commercial use rights",
          "Watermark-free downloads"
        ]
      },
      {
        "name": "Fancy",
        "price": 95,
        "annual": 76,
        "quota": "6,000 credits/mo",
        "highlights": [
          "Highest credit allowance",
          "Commercial use, no watermark"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 10,
      "creditsPerMonthCheapestPaid": "700 credits",
      "approxVideoSecondsCheapestPaid": 175,
      "maxResolution": "1080p",
      "maxClipSeconds": 10,
      "watermarkOnFree": true,
      "commercialUseCheapestPaid": false,
      "avatarsLipSync": true,
      "nativeAudio": null,
      "textToVideo": true,
      "imageToVideo": true,
      "apiAvailable": null,
      "videoType": "generative"
    },
    "ratings": {
      "trustpilot": {
        "score": 1.7,
        "reviews": 49
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
      "free": 3
    },
    "commercial": false,
    "api": null,
    "bestFor": "Hobbyists and social creators making short, playful clips on a budget.",
    "strategy": "Credit-bundle subscriptions where commercial rights and watermark removal are gated to the Pro tier and above to drive upgrades.",
    "strengths": [
      "Cheapest entry price in category",
      "Fun effects and Pikaformance lip sync",
      "Simple credit costs per clip"
    ],
    "weaknesses": [
      "No commercial rights or watermark removal below Pro",
      "Max 1080p, short clips",
      "Poor support/billing reputation (1.7 Trustpilot)"
    ],
    "confidence": "medium - official page blocked; prices from third-party 2026 summaries (some conflicting). ~175s assumes 20 credits per 5s 720p clip (1080p 10s = 80 credits -> ~87s). Native audio and public API not confirmed (null). No G2/Capterra listing found.",
    "sources": [
      "https://pika.art/pricing",
      "https://magichour.ai/blog/pika-labs-pricing",
      "https://flowith.io/blog/pika-art-pricing-2026-free-vs-basic-vs-pro/",
      "https://techsifted.com/reviews/pika-pricing-2026/",
      "https://www.trustpilot.com/review/pika.art"
    ]
  },
  {
    "id": "luma_dream_machine",
    "name": "Luma Dream Machine",
    "company": "Luma AI",
    "url": "https://lumalabs.ai/pricing",
    "category": "ai_video",
    "pricingModel": "credits",
    "tiers": [
      {
        "name": "Plus",
        "price": 30,
        "annual": 25,
        "quota": "10,000 credits/mo",
        "highlights": [
          "Commercial use",
          "Ray3.14 and Luma Agents",
          "No permanent free plan"
        ]
      },
      {
        "name": "Pro",
        "price": 90,
        "annual": 75,
        "quota": "40,000 credits/mo",
        "highlights": [
          "4x Plus usage",
          "Luma Agents workflows"
        ]
      },
      {
        "name": "Ultra",
        "price": 300,
        "annual": 250,
        "quota": "150,000 credits/mo",
        "highlights": [
          "15x Plus usage",
          "For heavy production use"
        ]
      },
      {
        "name": "Enterprise",
        "price": null,
        "custom": true,
        "quota": "Custom",
        "highlights": [
          "Custom credits and terms"
        ]
      }
    ],
    "metrics": {
      "freeTier": false,
      "cheapestPaidUSD": 30,
      "creditsPerMonthCheapestPaid": "10,000 credits",
      "approxVideoSecondsCheapestPaid": 500,
      "maxResolution": "4K",
      "maxClipSeconds": 10,
      "watermarkOnFree": null,
      "commercialUseCheapestPaid": true,
      "avatarsLipSync": false,
      "nativeAudio": false,
      "textToVideo": true,
      "imageToVideo": true,
      "apiAvailable": true,
      "videoType": "generative"
    },
    "ratings": {
      "trustpilot": {
        "score": 1.6,
        "reviews": 53
      },
      "g2": {
        "score": 5,
        "reviews": 1
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 3,
      "ease": 4,
      "depth": 4,
      "team": 3,
      "free": 1
    },
    "commercial": true,
    "api": true,
    "bestFor": "Designers and filmmakers wanting high-fidelity, HDR-capable generative shots and agent-driven creative workflows.",
    "strategy": "Credit subscriptions (new Agents ladder since March 2026) priced by resolution, duration and HDR, plus a separately billed API and enterprise deals.",
    "strengths": [
      "High-quality Ray3.14 model with HDR",
      "Commercial use on entry plan",
      "API access to Ray models"
    ],
    "weaknesses": [
      "No free plan on current pricing page",
      "No native audio generation",
      "Expensive 1080p credit burn; poor Trustpilot score"
    ],
    "confidence": "medium - official page blocked. Legacy Dream Machine ladder (Free / Lite $9.99 [$7.99 annual, 3,200 credits, watermarked, non-commercial] / Plus $29.99 / Unlimited $94.99) reportedly still exists at dream-machine.lumalabs.ai; current ladder used here. ~500s assumes Ray3.14 720p at ~20 credits/s; 1080p SDR (400 credits/5s) gives ~125s. 4K is upscale. G2 = 1 review only.",
    "sources": [
      "https://lumalabs.ai/pricing",
      "https://magichour.ai/blog/luma-dream-machine-pricing",
      "https://melies.co/luma-dream-machine-pricing",
      "https://www.therundown.ai/tools/ray-3-14",
      "https://www.trustpilot.com/review/lumalabs.ai",
      "https://www.g2.com/sellers/luma-ai"
    ]
  },
  {
    "id": "kling_ai",
    "name": "Kling AI",
    "company": "Kuaishou Technology",
    "url": "https://kling.ai/app/membership/membership-plan",
    "category": "ai_video",
    "pricingModel": "credits",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Daily free credits",
        "highlights": [
          "Watermarked output",
          "Limited daily credits"
        ]
      },
      {
        "name": "Standard",
        "price": 8.8,
        "annual": 6.6,
        "quota": "660 credits/mo",
        "highlights": [
          "First month $6.99",
          "~110s 720p silent video"
        ]
      },
      {
        "name": "Pro",
        "price": 32.56,
        "annual": 24.42,
        "quota": "3,000 credits/mo",
        "highlights": [
          "First month $25.99",
          "Native audio generation"
        ]
      },
      {
        "name": "Premier",
        "price": 80.96,
        "annual": 60.72,
        "quota": "8,000 credits/mo",
        "highlights": [
          "First month $64.99",
          "For frequent creators"
        ]
      },
      {
        "name": "Ultra",
        "price": 159.99,
        "quota": "26,000 credits/mo",
        "highlights": [
          "No annual option",
          "First month $127.99"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 8.8,
      "creditsPerMonthCheapestPaid": "660 credits",
      "approxVideoSecondsCheapestPaid": 110,
      "maxResolution": "4K",
      "maxClipSeconds": 15,
      "watermarkOnFree": true,
      "commercialUseCheapestPaid": true,
      "avatarsLipSync": true,
      "nativeAudio": true,
      "textToVideo": true,
      "imageToVideo": true,
      "apiAvailable": true,
      "videoType": "generative"
    },
    "ratings": {
      "trustpilot": {
        "score": 1.3,
        "reviews": 307
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
      "value": 5,
      "ease": 4,
      "depth": 4,
      "team": 2,
      "free": 4
    },
    "commercial": true,
    "api": true,
    "bestFor": "Cost-conscious creators who want strong motion quality and native audio at the lowest price per second.",
    "strategy": "Discounted first-month credit subscriptions that renew at higher rates, with credits priced by resolution, duration and audio, plus a separate API.",
    "strengths": [
      "Very low per-second cost",
      "Kling 3.0 native audio and up to 4K",
      "Clips up to ~15s, multi-shot"
    ],
    "weaknesses": [
      "Worst-in-class Trustpilot (billing, support)",
      "Intro prices renew higher",
      "Ultra has no annual billing"
    ],
    "confidence": "medium - official page blocked; renewal prices and annual totals ($79.20/$293.04/$728.64 per yr, divided by 12) from third-party summaries; Ultra reported $160-180. ~110s assumes Kling 3.0 720p silent at 6 credits/s (1080p+audio 12 credits/s -> ~55s). 15s max clip and commercial use on Standard not confirmed on official page. Free daily credit amount not verified.",
    "sources": [
      "https://kling.ai/app/membership/membership-plan",
      "https://kling.ai/blog/kling-video-3-0-credit-cost-guide",
      "https://magichour.ai/blog/kling-ai-pricing",
      "https://www.eesel.ai/blog/kling-ai-pricing",
      "https://www.trustpilot.com/review/klingai.com"
    ]
  },
  {
    "id": "synthesia",
    "name": "Synthesia",
    "company": "Synthesia Ltd.",
    "url": "https://www.synthesia.io/pricing",
    "category": "ai_video",
    "pricingModel": "per_seat",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "10 min/mo",
        "highlights": [
          "~9 stock avatars",
          "Watermark, no MP4 download"
        ]
      },
      {
        "name": "Starter",
        "price": 29,
        "annual": 18,
        "quota": "10 video min/mo",
        "highlights": [
          "125+ avatars",
          "3 personal avatars",
          "Logo removal, downloads"
        ]
      },
      {
        "name": "Creator",
        "price": 89,
        "annual": 64,
        "quota": "30 video min/mo",
        "highlights": [
          "1 editor + 5 guests",
          "180+ avatars, 5 personal",
          "API access, interactive video"
        ]
      },
      {
        "name": "Enterprise",
        "price": null,
        "custom": true,
        "quota": "Unlimited minutes",
        "highlights": [
          "240+ avatars",
          "SAML/SSO, SCORM export",
          "Unlimited personal avatars"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 29,
      "creditsPerMonthCheapestPaid": "10 video minutes",
      "approxVideoSecondsCheapestPaid": 600,
      "maxResolution": "1080p",
      "maxClipSeconds": null,
      "watermarkOnFree": true,
      "commercialUseCheapestPaid": true,
      "avatarsLipSync": true,
      "nativeAudio": true,
      "textToVideo": true,
      "imageToVideo": null,
      "apiAvailable": true,
      "videoType": "avatar/presenter"
    },
    "ratings": {
      "trustpilot": {
        "score": 4,
        "reviews": 1805
      },
      "g2": {
        "score": 4.6,
        "reviews": 2555
      },
      "capterra": {
        "score": 4.6,
        "reviews": 314
      }
    },
    "scores": {
      "value": 3,
      "ease": 5,
      "depth": 4,
      "team": 5,
      "free": 2
    },
    "commercial": true,
    "api": true,
    "bestFor": "Companies producing training, onboarding and corporate explainer videos with AI presenters at scale.",
    "strategy": "Per-editor seat subscriptions with monthly video-minute allowances, gating API, collaboration and compliance features to higher tiers and enterprise contracts.",
    "strengths": [
      "Enterprise-grade avatar videos for L&D",
      "Express-2 full-body expressive avatars",
      "Strong reviews on G2/Capterra"
    ],
    "weaknesses": [
      "Low minute caps (10 min on Starter)",
      "Per-editor seat pricing",
      "Content restrictions frustrate some users"
    ],
    "confidence": "medium - prices consistent across sources; one source cites Starter $22. Max resolution not verified (1080p assumed; 4K may exist on higher tiers). No per-video cap (up to ~4h per video), so maxClipSeconds null. Trustpilot reviews 1,762-2,000 across snapshots; G2 also cited as 4.7 with 2,500+.",
    "sources": [
      "https://www.synthesia.io/pricing",
      "https://www.arcade.software/post/synthesia-pricing",
      "https://magichour.ai/blog/synthesia-pricing-2026",
      "https://www.trustpilot.com/review/synthesia.io",
      "https://www.g2.com/products/synthesia/reviews",
      "https://www.capterra.com/p/198045/Enact/reviews/"
    ]
  },
  {
    "id": "heygen",
    "name": "HeyGen",
    "company": "HeyGen Inc.",
    "url": "https://www.heygen.com/pricing",
    "category": "ai_video",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "3 videos/mo, 1 min max",
        "highlights": [
          "720p with watermark",
          "500+ stock avatars"
        ]
      },
      {
        "name": "Creator",
        "price": 29,
        "annual": 24,
        "quota": "600 credits/mo (~30 min Avatar IV)",
        "highlights": [
          "1080p export, no watermark",
          "175+ languages",
          "Up to 30 min per video"
        ]
      },
      {
        "name": "Pro",
        "price": 49,
        "quota": "1,000 credits/mo",
        "highlights": [
          "4K export",
          "More credits than Creator"
        ]
      },
      {
        "name": "Business",
        "price": 149,
        "annual": 119,
        "quota": "1,500 credits/mo",
        "highlights": [
          "$20 per extra seat",
          "Team collaboration"
        ]
      },
      {
        "name": "Enterprise",
        "price": null,
        "custom": true,
        "quota": "Custom",
        "highlights": [
          "Unlimited duration",
          "Multi-workspace management"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 29,
      "creditsPerMonthCheapestPaid": "600 credits",
      "approxVideoSecondsCheapestPaid": 1800,
      "maxResolution": "4K",
      "maxClipSeconds": 1800,
      "watermarkOnFree": true,
      "commercialUseCheapestPaid": true,
      "avatarsLipSync": true,
      "nativeAudio": true,
      "textToVideo": true,
      "imageToVideo": true,
      "apiAvailable": true,
      "videoType": "avatar/presenter"
    },
    "ratings": {
      "trustpilot": {
        "score": 4,
        "reviews": 3324
      },
      "g2": {
        "score": 4.8,
        "reviews": 1924
      },
      "capterra": {
        "score": 4.6,
        "reviews": 313
      }
    },
    "scores": {
      "value": 4,
      "ease": 5,
      "depth": 4,
      "team": 4,
      "free": 2
    },
    "commercial": true,
    "api": true,
    "bestFor": "Marketers and creators producing multilingual avatar, UGC-style and translated talking-head videos.",
    "strategy": "Credit-based subscriptions (credits per generated minute by avatar model) with per-seat add-ons on Business, plus separate API and enterprise pricing.",
    "strengths": [
      "Excellent lip sync and voice cloning",
      "175+ languages for translation",
      "Very high G2 rating"
    ],
    "weaknesses": [
      "Credit system confusing (Avatar IV 20 credits/min)",
      "Support/billing complaints on Trustpilot",
      "Pro/Business pricing opaque"
    ],
    "confidence": "medium-low - Pro conflicting ($49/mo in most sources; one says $99 monthly / $79 annual); Pro annual unknown. ~1800s assumes Avatar IV/V at 20 credits/min (Avatar III 3 credits/min gives far more). Trustpilot conflicting: US page ~4.0 (3,324-4,000+ reviews) vs one source citing 2.3; recorded 4.0. G2 count is seller-level.",
    "sources": [
      "https://www.heygen.com/pricing",
      "https://help.heygen.com/en/articles/15125761-heygen-credit-based-pricing-plans-explained",
      "https://www.arcade.software/post/heygen-pricing",
      "https://fluxnote.io/guides/heygen-pricing-2026",
      "https://www.trustpilot.com/review/heygen.com",
      "https://www.g2.com/sellers/heygen",
      "https://www.capterra.com/p/10015133/HeyGen/reviews/"
    ]
  },
  {
    "id": "google_flow_veo",
    "name": "Google Flow (Veo)",
    "company": "Google",
    "url": "https://gemini.google/subscriptions/",
    "category": "ai_video",
    "pricingModel": "subscription",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "50 Flow credits/day",
        "highlights": [
          "Veo 3.1 Lite/Fast access",
          "Visible Veo watermark"
        ]
      },
      {
        "name": "Google AI Plus",
        "price": 4.99,
        "quota": "200 Flow credits/mo + daily 50",
        "highlights": [
          "Cut from $7.99 in June 2026",
          "Veo 3.1 Fast",
          "400 GB storage"
        ]
      },
      {
        "name": "Google AI Pro",
        "price": 19.99,
        "quota": "1,000 Flow credits/mo + daily 50",
        "highlights": [
          "~50 Veo 3.1 Fast videos",
          "Gemini 3.1 Pro",
          "Still watermarked"
        ]
      },
      {
        "name": "Google AI Ultra",
        "price": 99.99,
        "quota": "10,000 Flow credits/mo",
        "highlights": [
          "New tier from I/O 2026",
          "5x Pro usage limits"
        ]
      },
      {
        "name": "Google AI Ultra (top)",
        "price": 199.99,
        "quota": "25,000 Flow credits/mo",
        "highlights": [
          "Lowered from $249.99",
          "20x Pro limits",
          "Watermark removal (Ultra)"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 4.99,
      "creditsPerMonthCheapestPaid": "200 credits (+50/day free)",
      "approxVideoSecondsCheapestPaid": 80,
      "maxResolution": "4K",
      "maxClipSeconds": 8,
      "watermarkOnFree": true,
      "commercialUseCheapestPaid": null,
      "avatarsLipSync": false,
      "nativeAudio": true,
      "textToVideo": true,
      "imageToVideo": true,
      "apiAvailable": true,
      "videoType": "generative"
    },
    "ratings": {
      "trustpilot": {
        "score": null,
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
      "value": 5,
      "ease": 4,
      "depth": 4,
      "team": 2,
      "free": 4
    },
    "commercial": null,
    "api": true,
    "bestFor": "Creators already in the Google ecosystem wanting high-quality clips with native sound at low entry cost.",
    "strategy": "Bundles Flow video credits into Google AI consumer subscriptions (storage + Gemini), with per-second Veo API billing via Gemini API/Vertex AI for developers.",
    "strengths": [
      "Native synchronized audio and dialogue",
      "Generous free daily credits",
      "Bundled with Gemini/storage subscription"
    ],
    "weaknesses": [
      "8-second clips",
      "Visible watermark below Ultra",
      "Video is part of broader AI bundle, not standalone"
    ],
    "confidence": "medium - chosen over OpenAI Sora, which was discontinued (app shut 26 Apr 2026, API sunset 24 Sep 2026). Tier prices from third-party summaries of I/O 2026 changes; annual prices not found. ~80s = 200 credits / 20 per 8s Veo 3.1 Fast clip, excluding daily free credits. Commercial-use terms not verified. No Trustpilot/G2/Capterra listing for Flow specifically.",
    "sources": [
      "https://gemini.google/subscriptions/",
      "https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/",
      "https://magichour.ai/blog/google-flow",
      "https://costgoat.com/pricing/google-flow",
      "https://www.digitalapplied.com/blog/google-ai-plans-free-plus-pro-ultra-2026",
      "https://whiskailabs.net/google-flow-veo-watermark-guide-2026/"
    ]
  }
]
