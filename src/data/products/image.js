// Researched 2026-09-26. Prices are USD list prices; see each product's sources and confidence note.
// PRICE CURRENCY RULE: every record has "currency": "USD", and every numeric price field (price, annual, minMonthly,
// cheapestPaidUSD) must be in US dollars. Convert GBP/EUR/etc. with src/data/fx.js before writing; local-currency
// amounts (e.g. "£49/mo") belong only in quota/highlight text, never in the numeric fields.
// "priceUnit" is what one price buys: "user" (per seat) or "account" (one subscription regardless of team size).
// It must agree with every plan's perSeat flag (perSeat: false <=> "account"), or the category refuses to load.
// "lastUpdated" (YYYY-MM-DD) is the date the record's data was last checked; set it whenever you change the record.
export default [
  {
    "id": "adobe_photoshop",
    "name": "Adobe Photoshop",
    "company": "Adobe",
    "url": "https://www.adobe.com/products/photoshop.html",
    "category": "image",
    "pricingModel": "subscription",
    "currency": "USD",
    "priceUnit": "user",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Photography plan",
        "price": 19.99,
        "quota": "Photoshop + Lightroom, 1TB; annual commitment billed monthly",
        "highlights": [
          "Photoshop plus Lightroom bundle",
          "1TB cloud storage",
          "Annual commitment required"
        ]
      },
      {
        "name": "Photoshop (single app)",
        "price": 34.49,
        "annual": 22.99,
        "quota": "25 generative credits/mo for new subscribers (since Jun 2025); $22.99 = annual billed monthly, $263.88 prepaid",
        "highlights": [
          "Desktop, web, iPad and mobile",
          "Generative Fill via Firefly",
          "Only 25 gen credits/mo"
        ]
      },
      {
        "name": "Photoshop for teams",
        "price": 37.99,
        "annualOnly": true,
        "quota": "Per license, annual; admin console",
        "highlights": [
          "Per-license business pricing",
          "Admin console and license management",
          "Business-grade support"
        ]
      },
      {
        "name": "Creative Cloud Pro for teams",
        "price": 99.99,
        "annualOnly": true,
        "quota": "All Apps incl. Photoshop, per license, annual",
        "highlights": [
          "All Creative Cloud apps",
          "Larger generative credit pool"
        ]
      }
    ],
    "metrics": {
      "freeTier": false,
      "cheapestPaidUSD": 19.99,
      "platforms": [
        "web",
        "windows",
        "mac",
        "ios",
        "android"
      ],
      "generativeAI": true,
      "aiCreditsCheapestPaid": "25 generative credits/mo (new subscribers)",
      "backgroundRemoval": true,
      "layersProTools": 5,
      "templates": true,
      "batchEditing": true,
      "commercialUseCheapestPaid": true,
      "watermarkOnFree": null,
      "teamCollaboration": true,
      "apiAvailable": true,
      "learningCurve": 5
    },
    "ratings": {
      "trustpilot": {
        "score": 1.2,
        "reviews": 7000
      },
      "g2": {
        "score": null,
        "reviews": 13378
      },
      "capterra": {
        "score": 4.8,
        "reviews": 2372
      }
    },
    "scores": {
      "value": 2,
      "ease": 1,
      "depth": 5,
      "team": 4,
      "free": 1
    },
    "commercial": true,
    "api": true,
    "bestFor": "Professional photographers, retouchers and designers who need pixel-level control and industry-standard file compatibility.",
    "strategy": "Subscription with annual lock-in discounts (monthly-billed annual vs. month-to-month), bundles (Photography, CC Pro), per-license team plans and generative-credit add-ons.",
    "strengths": [
      "Industry-standard precision: layers, masks, RAW, smart objects",
      "Generative Fill/Expand integrated with Firefly",
      "Deep Creative Cloud ecosystem integration"
    ],
    "weaknesses": [
      "Expensive; month-to-month costs $34.49",
      "Annual contracts with early-cancellation fees",
      "Steep learning curve; heavy on hardware",
      "New single-app subs get only 25 generative credits"
    ],
    "confidence": "medium - adobe.com not fetchable; prices from 2026 third-party guides. Trustpilot figure is for adobe.com overall, not Photoshop. G2 star score not visible in snippets.",
    "sources": [
      "https://petapixel.com/how-much-is-photoshop/",
      "https://photutorial.com/photoshop-pricing-explained/",
      "https://helpx.adobe.com/account/individual/subscriptions-and-plans/plan-types-and-eligibility/changes-to-individual-plan.html",
      "https://design-offset.com/en/adobe-photoshop-for-teams-plans-and-pricing/",
      "https://www.trustpilot.com/review/www.adobe.com",
      "https://www.g2.com/products/adobe-photoshop/reviews",
      "https://www.capterra.com/p/229092/Adobe-Photoshop/reviews/"
    ]
  },
  {
    "id": "canva",
    "name": "Canva",
    "company": "Canva",
    "url": "https://www.canva.com",
    "category": "image",
    "pricingModel": "per_seat",
    "currency": "USD",
    "priceUnit": "user",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Limited AI (approx. 200 standard / 20 premium AI uses/mo)",
        "highlights": [
          "Free templates and elements",
          "Commercial use of free content",
          "Limited AI uses"
        ]
      },
      {
        "name": "Pro",
        "price": 18,
        "annual": 15,
        "quota": "~10x Free AI allowance (approx. 2,000 standard / 200 premium / 20 ultra uses/mo); $180/yr",
        "highlights": [
          "Full premium template library",
          "Background remover and Magic Studio",
          "Brand kit, 1TB storage"
        ]
      },
      {
        "name": "Business",
        "price": 25,
        "annual": 20.83,
        "quota": "Per person; ~4,000 standard / 400 premium / 40 ultra AI uses/mo; $250/yr per seat; no seat minimum",
        "highlights": [
          "Per-seat, no minimum",
          "Team brand controls and approvals",
          "Higher AI allowance"
        ]
      },
      {
        "name": "Enterprise",
        "price": null,
        "custom": true,
        "quota": "Custom quote; reportedly large seat minimum",
        "highlights": [
          "SSO and advanced security",
          "Dedicated support"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 15,
      "platforms": [
        "web",
        "windows",
        "mac",
        "ios",
        "android"
      ],
      "generativeAI": true,
      "aiCreditsCheapestPaid": "~2,000 standard / 200 premium AI uses/mo (10x Free)",
      "backgroundRemoval": true,
      "layersProTools": 2,
      "templates": true,
      "batchEditing": true,
      "commercialUseCheapestPaid": true,
      "watermarkOnFree": false,
      "teamCollaboration": true,
      "apiAvailable": true,
      "learningCurve": 1
    },
    "ratings": {
      "trustpilot": {
        "score": 4,
        "reviews": 6180
      },
      "g2": {
        "score": 4.7,
        "reviews": 4500
      },
      "capterra": {
        "score": 4.7,
        "reviews": 13235
      }
    },
    "scores": {
      "value": 4,
      "ease": 5,
      "depth": 3,
      "team": 5,
      "free": 5
    },
    "commercial": true,
    "api": true,
    "bestFor": "Marketers, small businesses and teams producing social, presentation and marketing visuals quickly from templates.",
    "strategy": "Freemium funnel to a single-user Pro plan, per-seat Business plan for teams, quoted Enterprise, plus AI Pass add-on for heavy AI use.",
    "strengths": [
      "Huge template and stock library",
      "Very easy for non-designers",
      "Real-time team collaboration and brand kits",
      "Generous free plan"
    ],
    "weaknesses": [
      "Limited pro-grade photo editing (no RAW, basic masking)",
      "Repeated price increases since 2024",
      "Billing/refund complaints; AI limits now pooled and opaque"
    ],
    "confidence": "medium - canva.com blocked; sources disagree on Pro annual ($120/$144/$180 per yr), used latest ($180). G2 count ~4,500+ product page (6,833 across Canva products). AI quotas approximate.",
    "sources": [
      "https://designrr.io/canva-pricing/",
      "https://costbench.com/software/design/canva/",
      "https://www.stylefactoryproductions.com/blog/canva-pricing",
      "https://www.eesel.ai/blog/canva-ai-pricing",
      "https://techsifted.com/guides/canva-ai-pricing-2026/",
      "https://www.trustpilot.com/review/canva.com",
      "https://www.g2.com/products/canva/reviews",
      "https://www.capterra.com/p/168956/Canva/reviews/"
    ]
  },
  {
    "id": "midjourney",
    "name": "Midjourney",
    "company": "Midjourney, Inc.",
    "url": "https://www.midjourney.com",
    "category": "image",
    "pricingModel": "subscription",
    "currency": "USD",
    "priceUnit": "user",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Basic",
        "price": 10,
        "annual": 8,
        "quota": "~3.3 fast GPU hrs/mo (~200 images); no Relax mode",
        "highlights": [
          "Entry-level fast GPU time",
          "Web and Discord access",
          "Commercial use (under $1M revenue)"
        ]
      },
      {
        "name": "Standard",
        "price": 30,
        "annual": 24,
        "quota": "15 fast GPU hrs/mo + unlimited Relax",
        "highlights": [
          "Unlimited Relax image generation",
          "15 fast hours monthly"
        ]
      },
      {
        "name": "Pro",
        "price": 60,
        "annual": 48,
        "quota": "30 fast GPU hrs/mo + unlimited Relax; Stealth mode",
        "highlights": [
          "Stealth (private) generation",
          "Required for >$1M revenue companies"
        ]
      },
      {
        "name": "Mega",
        "price": 120,
        "annual": 96,
        "quota": "60 fast GPU hrs/mo + unlimited Relax; Stealth",
        "highlights": [
          "Maximum fast GPU time",
          "High-volume/video studios"
        ]
      }
    ],
    "metrics": {
      "freeTier": false,
      "cheapestPaidUSD": 8,
      "platforms": [
        "web"
      ],
      "generativeAI": true,
      "aiCreditsCheapestPaid": "~3.3 fast GPU hours/mo",
      "backgroundRemoval": false,
      "layersProTools": 1,
      "templates": false,
      "batchEditing": false,
      "commercialUseCheapestPaid": true,
      "watermarkOnFree": null,
      "teamCollaboration": false,
      "apiAvailable": false,
      "learningCurve": 3
    },
    "ratings": {
      "trustpilot": {
        "score": 1.6,
        "reviews": 320
      },
      "g2": {
        "score": 4.4,
        "reviews": 102
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 4,
      "ease": 3,
      "depth": 4,
      "team": 1,
      "free": 1
    },
    "commercial": true,
    "api": false,
    "bestFor": "Artists, concept designers and marketers who want the highest-quality AI-generated imagery rather than photo editing.",
    "strategy": "Tiered subscriptions selling fast GPU time, with privacy (Stealth) and revenue-based commercial terms pushing larger users to Pro/Mega; 20% off annual.",
    "strengths": [
      "Best-in-class aesthetic image quality",
      "Unlimited Relax generations from Standard up",
      "Strong style/character references and video"
    ],
    "weaknesses": [
      "No free tier or trial",
      "Images public unless on Pro/Mega",
      "No official public API; strict refund policy",
      "Very poor Trustpilot reputation"
    ],
    "confidence": "medium-high - pricing consistent across sources; docs.midjourney.com blocked. Trustpilot count approximate (~320).",
    "sources": [
      "https://www.eesel.ai/blog/midjourney-pricing",
      "https://costbench.com/software/ai-image-generators/midjourney/",
      "https://computertech.co/midjourney-review-2026-the-ai-art-king-with-a-1-5-star-reputation/",
      "https://www.trustpilot.com/review/www.midjourney.com",
      "https://www.g2.com/sellers/midjourney"
    ]
  },
  {
    "id": "picsart",
    "name": "Picsart",
    "company": "Picsart",
    "url": "https://picsart.com",
    "category": "image",
    "pricingModel": "hybrid",
    "currency": "USD",
    "priceUnit": "user",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Limited daily AI credits, ads",
        "highlights": [
          "Basic editing and templates",
          "Limited AI credits"
        ]
      },
      {
        "name": "Pro",
        "price": 15,
        "annual": 10.5,
        "quota": "~500 AI credits/mo; $126/yr",
        "highlights": [
          "All photo and video tools",
          "Background and object removal",
          "Batch edit up to 50 images"
        ]
      },
      {
        "name": "Ultra",
        "price": 45,
        "annual": 37.5,
        "maxUsers": 15,
        "quota": "~10x Pro usage; $450/yr; extra seats ~$31.66/mo annual, max 15",
        "highlights": [
          "10x Pro AI usage",
          "Add team seats",
          "Batch edit up to 100"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 10.5,
      "platforms": [
        "web",
        "windows",
        "ios",
        "android"
      ],
      "generativeAI": true,
      "aiCreditsCheapestPaid": "~500 AI credits/mo",
      "backgroundRemoval": true,
      "layersProTools": 2,
      "templates": true,
      "batchEditing": true,
      "commercialUseCheapestPaid": true,
      "watermarkOnFree": null,
      "teamCollaboration": true,
      "apiAvailable": true,
      "learningCurve": 1
    },
    "ratings": {
      "trustpilot": {
        "score": 4,
        "reviews": 1378
      },
      "g2": {
        "score": 4.5,
        "reviews": 716
      },
      "capterra": {
        "score": null,
        "reviews": null
      }
    },
    "scores": {
      "value": 4,
      "ease": 5,
      "depth": 3,
      "team": 3,
      "free": 3
    },
    "commercial": true,
    "api": true,
    "bestFor": "Creators and social-media sellers who edit on mobile and want quick AI effects and templates.",
    "strategy": "Freemium with credit-based AI usage, Pro/Ultra subscriptions, seat add-ons on Ultra, and a separate paid developer API.",
    "strengths": [
      "Mobile-first all-in-one editor with strong AI",
      "Templates, stickers and social content tools",
      "Developer API for background removal/upscaling"
    ],
    "weaknesses": [
      "Many features paywalled; upsell pop-ups",
      "Credit system and tier changes are confusing",
      "Subscription/trial billing complaints"
    ],
    "confidence": "low-medium - picsart.com blocked; sources conflict on Ultra annual ($24.50 vs $37.50/mo) and credit counts; older Plus tier ($13) may be discontinued. G2 716-770 reviews.",
    "sources": [
      "https://wizcommerce.com/blog/picsart-pricing-plans-and-subscription-costs-guide/",
      "https://flowith.io/blog/picsart-pricing-free-vs-plus-vs-pro-plan/",
      "https://aisotools.com/picsart-pricing",
      "https://www.trustpilot.com/review/www.picsart.com",
      "https://www.g2.com/sellers/picsart"
    ]
  },
  {
    "id": "photoroom",
    "name": "Photoroom",
    "company": "Photoroom",
    "url": "https://www.photoroom.com",
    "category": "image",
    "pricingModel": "hybrid",
    "currency": "USD",
    "priceUnit": "user",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Watermarked exports, limited AI",
        "highlights": [
          "Background removal",
          "Watermark on exports"
        ]
      },
      {
        "name": "Pro",
        "price": 12.99,
        "annual": 7.5,
        "quota": "Unlimited background removal, no watermark; weekly $4.99 option",
        "highlights": [
          "No watermark, HD exports",
          "Unlimited background removal",
          "Batch editing"
        ]
      },
      {
        "name": "Max",
        "price": 34.99,
        "annual": 20.83,
        "quota": "More generative AI and batch volume",
        "highlights": [
          "Higher AI generation limits",
          "Larger batch exports"
        ]
      },
      {
        "name": "Ultra",
        "price": 99,
        "annual": 82.5,
        "quota": "From 5,000 batch exports/mo; scales to $990/mo for 50,000",
        "highlights": [
          "High-volume batch exports",
          "Usage-scaled sub-tiers"
        ]
      },
      {
        "name": "Enterprise",
        "price": null,
        "custom": true,
        "quota": "Custom",
        "highlights": [
          "Custom volume and support"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 7.5,
      "platforms": [
        "web",
        "ios",
        "android"
      ],
      "generativeAI": true,
      "aiCreditsCheapestPaid": null,
      "backgroundRemoval": true,
      "layersProTools": 1,
      "templates": true,
      "batchEditing": true,
      "commercialUseCheapestPaid": true,
      "watermarkOnFree": true,
      "teamCollaboration": true,
      "apiAvailable": true,
      "learningCurve": 1
    },
    "ratings": {
      "trustpilot": {
        "score": 1.9,
        "reviews": 237
      },
      "g2": {
        "score": 4.3,
        "reviews": 18
      },
      "capterra": {
        "score": 4.8,
        "reviews": 13
      }
    },
    "scores": {
      "value": 4,
      "ease": 5,
      "depth": 2,
      "team": 3,
      "free": 3
    },
    "commercial": true,
    "api": true,
    "bestFor": "E-commerce sellers and marketplaces producing large volumes of clean product photos.",
    "strategy": "Freemium app upsell (weekly/monthly/annual), volume-scaled Ultra tiers based on batch exports, and a metered API (monthly fee + per-image).",
    "strengths": [
      "Best-in-class background removal for product photos",
      "AI backgrounds and batch editing for e-commerce",
      "Separate API ($0.02/image remove-bg)"
    ],
    "weaknesses": [
      "Limited general-purpose editing",
      "Billing/cancellation complaints; low Trustpilot score",
      "Watermark on free exports"
    ],
    "confidence": "medium - site blocked; Ultra monthly price inferred from $99/mo x1 sub-tier. Team seats reportedly included on paid plans (unverified). G2 snippet conflict (one source said 3,209 reviews; G2-domain result says 18).",
    "sources": [
      "https://www.eesel.ai/blog/photoroom-pricing",
      "https://pikes.ai/blog/photoroom-pricing-2026",
      "https://wizcommerce.com/blog/photoroom-pricing/",
      "https://www.photoroom.com/api/pricing",
      "https://www.trustpilot.com/review/www.photoroom.com",
      "https://www.g2.com/products/photoroom/reviews",
      "https://www.capterra.com/p/10012666/PhotoRoom/reviews/"
    ]
  },
  {
    "id": "pixlr",
    "name": "Pixlr",
    "company": "Inmagine (Pixlr)",
    "url": "https://pixlr.com",
    "category": "image",
    "pricingModel": "hybrid",
    "currency": "USD",
    "priceUnit": "user",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Limited AI credits, ads",
        "highlights": [
          "Browser editor with layers",
          "Ads and limited AI"
        ]
      },
      {
        "name": "Plus",
        "price": 2.49,
        "annual": 1.99,
        "quota": "80 AI credits/mo",
        "highlights": [
          "Ad-free editing",
          "Small AI credit pool"
        ]
      },
      {
        "name": "Premium",
        "price": 9.99,
        "annual": 7.99,
        "quota": "1,000 AI credits/mo",
        "highlights": [
          "All image/video/audio AI models",
          "Full template library"
        ]
      },
      {
        "name": "Ultra",
        "price": 24.99,
        "annual": 19.99,
        "quota": "5,000 AI credits/mo; Ultra MAX $49.99 ($39.99 annual) = 10,000",
        "highlights": [
          "Unlimited fast image generation (fair use)",
          "Ultra MAX for 10k credits"
        ]
      },
      {
        "name": "Team",
        "price": null,
        "maxUsers": 5,
        "custom": true,
        "quota": "Contact sales; reported ~5 users, prices conflict ($12.99-$29.99/mo)",
        "highlights": [
          "Up to 5 users (reported)"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 1.99,
      "platforms": [
        "web",
        "windows",
        "mac",
        "ios",
        "android"
      ],
      "generativeAI": true,
      "aiCreditsCheapestPaid": "80 AI credits/mo",
      "backgroundRemoval": true,
      "layersProTools": 3,
      "templates": true,
      "batchEditing": true,
      "commercialUseCheapestPaid": null,
      "watermarkOnFree": null,
      "teamCollaboration": null,
      "apiAvailable": null,
      "learningCurve": 2
    },
    "ratings": {
      "trustpilot": {
        "score": 1.6,
        "reviews": 171
      },
      "g2": {
        "score": 4.4,
        "reviews": 743
      },
      "capterra": {
        "score": 4.4,
        "reviews": 119
      }
    },
    "scores": {
      "value": 5,
      "ease": 4,
      "depth": 3,
      "team": 1,
      "free": 4
    },
    "commercial": null,
    "api": null,
    "bestFor": "Budget-conscious users who want a Photoshop-like browser editor with some AI tools.",
    "strategy": "Ad-supported freemium plus low-cost tiers differentiated mainly by monthly AI credit allowance.",
    "strengths": [
      "Very cheap entry tier",
      "Photoshop-like layer editor in the browser",
      "Credit-based AI across image/video"
    ],
    "weaknesses": [
      "Email-only support; poor Trustpilot rating",
      "Browser-cache saving risks lost work",
      "Team plan pricing opaque"
    ],
    "confidence": "medium - individual tiers consistent across sources; Team plan unverified; Trustpilot count ~171-178.",
    "sources": [
      "https://comparedge.com/tools/pixlr/pricing",
      "https://appscribed.com/software/pixlr-photo-editor-review/",
      "https://checkthat.ai/brands/pixlr/pricing",
      "https://www.trustpilot.com/review/www.pixlr.com",
      "https://www.capterra.com/p/198210/Pixlr-X/reviews/"
    ]
  },
  {
    "id": "fotor",
    "name": "Fotor",
    "company": "Everimaging (Fotor)",
    "url": "https://www.fotor.com",
    "category": "image",
    "pricingModel": "hybrid",
    "currency": "USD",
    "priceUnit": "user",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Watermark on some outputs, limited AI",
        "highlights": [
          "Basic editing and templates",
          "Watermarks on some exports"
        ]
      },
      {
        "name": "Pro",
        "price": 8.99,
        "annual": 3.33,
        "quota": "100 AI credits/mo; $39.99/yr",
        "highlights": [
          "No watermark, HD export",
          "Batch editing",
          "100 AI credits monthly"
        ]
      },
      {
        "name": "Pro+",
        "price": 19.99,
        "annual": 7.5,
        "quota": "300 AI credits/mo; $89.99/yr",
        "highlights": [
          "Commercial-use stock photos",
          "Brand kits, custom fonts",
          "300 AI credits monthly"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 3.33,
      "platforms": [
        "web",
        "windows",
        "mac",
        "ios",
        "android"
      ],
      "generativeAI": true,
      "aiCreditsCheapestPaid": "100 AI credits/mo",
      "backgroundRemoval": true,
      "layersProTools": 2,
      "templates": true,
      "batchEditing": true,
      "commercialUseCheapestPaid": null,
      "watermarkOnFree": true,
      "teamCollaboration": null,
      "apiAvailable": true,
      "learningCurve": 1
    },
    "ratings": {
      "trustpilot": {
        "score": 4,
        "reviews": 1544
      },
      "g2": {
        "score": 4.2,
        "reviews": 342
      },
      "capterra": {
        "score": 4.6,
        "reviews": 1081
      }
    },
    "scores": {
      "value": 5,
      "ease": 5,
      "depth": 2,
      "team": 1,
      "free": 3
    },
    "commercial": null,
    "api": true,
    "bestFor": "Casual users and small businesses wanting cheap one-click AI photo enhancement and simple designs.",
    "strategy": "Freemium with watermarks, cheap annual Pro/Pro+ subscriptions tiered by AI credits, plus one-time credit packs.",
    "strengths": [
      "Very low annual price",
      "One-click AI enhance, background removal, generators",
      "Beginner-friendly with templates"
    ],
    "weaknesses": [
      "Advanced AI features paywalled",
      "Trial-to-paid billing complaints",
      "Limited pro-level control"
    ],
    "confidence": "low-medium - one source lists Pro at $12.99/mo or $8.99/mo annual ($107.88/yr); used $8.99/$39.99 which more sources show. Trustpilot flags Fotor's review solicitation.",
    "sources": [
      "https://www.g2.com/products/fotor-photo-editor/pricing",
      "https://flowith.io/blog/fotor-pricing-2026-free-vs-pro-vs-pro-plus/",
      "https://support.fotor.com/hc/en-us/articles/17765370790297-How-many-credits-do-Pro-members-have-per-month-Do-the-credits-stack-up",
      "https://www.trustpilot.com/review/www.fotor.com",
      "https://www.g2.com/products/fotor-photo-editor/reviews",
      "https://www.capterra.com/p/181589/Fotor/reviews/"
    ]
  },
  {
    "id": "affinity",
    "name": "Affinity by Canva",
    "company": "Canva (Serif)",
    "url": "https://www.affinity.studio",
    "category": "image",
    "pricingModel": "hybrid",
    "currency": "USD",
    "priceUnit": "user",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "All vector, pixel and layout tools free forever; no watermark",
        "highlights": [
          "Pro photo editing free",
          "No watermarks or time limits",
          "Desktop app"
        ]
      },
      {
        "name": "With Canva Pro",
        "price": 18,
        "annual": 15,
        "quota": "Unlocks Canva AI in Affinity (Generative Fill/Expand, image gen)",
        "highlights": [
          "Adds generative AI tools",
          "Canva Pro AI allowance"
        ]
      },
      {
        "name": "With Canva Business",
        "price": 25,
        "annual": 20.83,
        "quota": "Per seat; Canva Business AI allowance",
        "highlights": [
          "Team plan via Canva Business"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "cheapestPaidUSD": 15,
      "platforms": [
        "windows",
        "mac"
      ],
      "generativeAI": true,
      "aiCreditsCheapestPaid": "Canva Pro AI allowance (~2,000 standard / 200 premium uses/mo)",
      "backgroundRemoval": true,
      "layersProTools": 5,
      "templates": false,
      "batchEditing": true,
      "commercialUseCheapestPaid": true,
      "watermarkOnFree": false,
      "teamCollaboration": false,
      "apiAvailable": false,
      "learningCurve": 4
    },
    "ratings": {
      "trustpilot": {
        "score": 2.1,
        "reviews": 10
      },
      "g2": {
        "score": null,
        "reviews": 228
      },
      "capterra": {
        "score": 4.8,
        "reviews": 99
      }
    },
    "scores": {
      "value": 5,
      "ease": 2,
      "depth": 5,
      "team": 1,
      "free": 5
    },
    "commercial": true,
    "api": false,
    "bestFor": "Designers and photographers who want a free Photoshop-class desktop editor.",
    "strategy": "Core app free forever as a funnel into Canva; monetized through Canva Pro/Business subscriptions that unlock AI features.",
    "strengths": [
      "Professional-grade pixel, vector and layout tools at $0",
      "PSD compatibility, RAW, masks, macros/batch",
      "AI optional via Canva plan"
    ],
    "weaknesses": [
      "Generative AI requires paid Canva plan",
      "Desktop-only (no web/mobile yet)",
      "Some users distrust Canva ownership; stability reports"
    ],
    "confidence": "medium - free status well documented; ratings are for legacy Affinity Photo (Capterra/G2) and a tiny Trustpilot sample; G2 star score not found.",
    "sources": [
      "https://www.canva.com/newsroom/news/all-new-affinity/",
      "https://www.canva.com/newsroom/news/affinity-free/",
      "https://en.wikipedia.org/wiki/Affinity_(software)",
      "https://www.trustpilot.com/review/www.affinity.studio",
      "https://www.capterra.com/p/228748/Affinity-Photo/reviews/",
      "https://www.g2.com/products/affinity-designer/reviews"
    ]
  }
]
