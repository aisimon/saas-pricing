// Researched 2026-09-26. Prices are USD list prices; see each product's sources and confidence note.
// PRICE CURRENCY RULE: every record has "currency": "USD", and every numeric price field (price, annual, minMonthly,
// cheapestPaidUSD) must be in US dollars. Convert GBP/EUR/etc. with src/data/fx.js before writing; local-currency
// amounts (e.g. "£49/mo") belong only in quota/highlight text, never in the numeric fields.
// "lastUpdated" (YYYY-MM-DD) is the date the record's data was last checked; set it whenever you change the record.
export default [
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "company": "OpenAI",
    "url": "https://chatgpt.com/pricing",
    "category": "ai_assistant",
    "pricingModel": "hybrid",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Limited messages; 27K instant-model context",
        "highlights": [
          "Basic model access",
          "Limited image generation",
          "Web search and voice"
        ]
      },
      {
        "name": "Go",
        "price": 8,
        "quota": "Higher caps than Free; 256K reasoning context",
        "highlights": [
          "Cheapest paid ChatGPT tier",
          "Longer memory and context",
          "Voice with video"
        ]
      },
      {
        "name": "Plus",
        "price": 20,
        "quota": "Higher caps; 54K instant / 256K reasoning context",
        "highlights": [
          "Frontier and reasoning models",
          "Codex coding agent included",
          "Deep research, agent mode"
        ]
      },
      {
        "name": "Pro",
        "price": 100,
        "quota": "5x Plus usage; $200 Pro 20x tier (new sign-ups paused Sept 2026)",
        "highlights": [
          "5x Plus usage (20x at $200)",
          "400K reasoning context",
          "Exclusive Pro models"
        ]
      },
      {
        "name": "Business",
        "price": 25,
        "annual": 20,
        "minSeats": 2,
        "quota": "Standard seat; Premium seat $125/mo ($100 annual) for 5x usage",
        "highlights": [
          "SAML SSO and admin controls",
          "No training on business data",
          "60+ app connectors"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "individualPriceUSD": 8,
      "teamSeatPriceUSD": 25,
      "teamMinSeats": 2,
      "topTierPriceUSD": 200,
      "contextWindowTokens": 256000,
      "imageGeneration": true,
      "webSearch": true,
      "fileAnalysis": true,
      "voiceMode": true,
      "apiAvailable": true,
      "agentOrCoding": true,
      "businessDataNotTrained": true,
      "usageLimitsNote": "Plan-based message caps; context 256K reasoning on Go/Plus/Business, 400K on Pro (third-party reading of OpenAI plan table)"
    },
    "ratings": {
      "trustpilot": {
        "score": 1.6,
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
      "ease": 5,
      "depth": 5,
      "team": 4,
      "free": 4
    },
    "commercial": true,
    "api": true,
    "bestFor": "Individuals and teams wanting one all-round assistant with images, voice, agents and coding.",
    "strategy": "Freemium funnel into $8-$200 individual subscriptions plus per-seat Business/Enterprise and usage-based API.",
    "strengths": [
      "Broadest feature set (images, voice, agents, Codex)",
      "Cheap $8 Go entry tier",
      "Business seat cut to $20-25 in 2026"
    ],
    "weaknesses": [
      "Very low Trustpilot sentiment; chatbot-only support",
      "Frequent model/plan changes",
      "Smaller context on lower tiers than rivals"
    ],
    "confidence": "medium - openai.com blocked; prices from multiple consistent Sept-2026 secondary sources. Trustpilot 1.6 is the chat.openai.com listing (count unknown); G2/Capterra not retrieved.",
    "sources": [
      "https://techcrunch.com/2026/04/09/chatgpt-pro-plan-100-month-codex/",
      "https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers",
      "https://www.sayfeai.com/blog/chatgpt-business-pricing-2026",
      "https://www.ai-toolbox.co/chatgpt-models/chatgpt-context-window-token-limits-2026",
      "https://www.trustpilot.com/review/chat.openai.com"
    ]
  },
  {
    "id": "claude",
    "name": "Claude",
    "company": "Anthropic",
    "url": "https://claude.com/pricing",
    "category": "ai_assistant",
    "pricingModel": "hybrid",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Limited daily usage; Sonnet and Haiku",
        "highlights": [
          "Web search, code execution",
          "Artifacts and memory",
          "Up to 1M context (model-dependent)"
        ]
      },
      {
        "name": "Pro",
        "price": 20,
        "annual": 17,
        "quota": "At least 5x Free per 5-hour session",
        "highlights": [
          "Claude Code included",
          "All models incl. Opus",
          "Projects, Chrome, Microsoft 365"
        ]
      },
      {
        "name": "Max",
        "price": 100,
        "quota": "5x Pro usage at $100; 20x Pro at $200; monthly only",
        "highlights": [
          "5x or 20x Pro usage",
          "Priority access at peak",
          "Early access to features"
        ]
      },
      {
        "name": "Team Standard",
        "price": 25,
        "annual": 20,
        "minSeats": 2,
        "maxUsers": 150,
        "quota": "More usage than Pro; 2-150 seats",
        "highlights": [
          "SSO and admin controls",
          "No training by default",
          "Enterprise search, connectors"
        ]
      },
      {
        "name": "Team Premium",
        "price": 125,
        "annual": 100,
        "minSeats": 2,
        "maxUsers": 150,
        "quota": "5x standard seat usage",
        "highlights": [
          "5x Standard seat usage",
          "Claude Code for teams",
          "Mix with Standard seats"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "individualPriceUSD": 20,
      "teamSeatPriceUSD": 25,
      "teamMinSeats": 2,
      "topTierPriceUSD": 200,
      "contextWindowTokens": 1000000,
      "imageGeneration": false,
      "webSearch": true,
      "fileAnalysis": true,
      "voiceMode": true,
      "apiAvailable": true,
      "agentOrCoding": true,
      "businessDataNotTrained": true,
      "usageLimitsNote": "Usage metered per 5-hour session; Max 5x/20x of Pro; context up to 1M tokens depending on model"
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
      "value": 4,
      "ease": 4,
      "depth": 5,
      "team": 4,
      "free": 3
    },
    "commercial": true,
    "api": true,
    "bestFor": "Developers, writers and knowledge workers who need long-context reasoning and agentic coding.",
    "strategy": "Freemium into $20 Pro and $100/$200 Max usage tiers, per-seat Team (standard/premium), Enterprise seat plus API-rate usage.",
    "strengths": [
      "Strong coding (Claude Code in every paid plan)",
      "Up to 1M-token context",
      "Clear no-training default on Team/Enterprise"
    ],
    "weaknesses": [
      "No native image generation",
      "Session usage caps frustrate heavy users",
      "Reviewers cite bot-only billing support"
    ],
    "confidence": "high for pricing (official page fetched 2026-09-26); Max $200 tier from secondary sources; ratings not retrieved (search budget exhausted).",
    "sources": [
      "https://claude.com/pricing",
      "https://suprmind.ai/hub/claude/pricing/claude-max-pricing/"
    ]
  },
  {
    "id": "google_gemini",
    "name": "Google Gemini",
    "company": "Google",
    "url": "https://gemini.google/subscriptions/",
    "category": "ai_assistant",
    "pricingModel": "subscription",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Basic Gemini limits",
        "highlights": [
          "Gemini app and Live voice",
          "Image generation",
          "1M context model family"
        ]
      },
      {
        "name": "Google AI Plus",
        "price": 4.99,
        "quota": "2x Free limits; 400GB storage",
        "highlights": [
          "Gemini 3.1 Pro access",
          "400GB Google One storage",
          "Video generation, NotebookLM"
        ]
      },
      {
        "name": "Google AI Pro",
        "price": 19.99,
        "quota": "~4x Free; Deep Research 20/day; Veo 3/day",
        "highlights": [
          "Gemini 3.1 Pro, 1M context",
          "Deep Research and Veo",
          "5TB storage, Gemini in Gmail"
        ]
      },
      {
        "name": "Google AI Ultra",
        "price": 99.99,
        "quota": "5x Pro limits; 20x tier $199.99",
        "highlights": [
          "5x Pro usage (20x at $199.99)",
          "Deep Think, Antigravity priority",
          "20TB storage, YouTube Premium"
        ]
      },
      {
        "name": "Workspace Business Standard",
        "price": 16.8,
        "annual": 14,
        "maxUsers": 300,
        "quota": "Flexible plan price; Gemini bundled in Workspace apps",
        "highlights": [
          "Gemini in Gmail, Docs, Meet",
          "Includes full Workspace suite",
          "2TB pooled storage per user"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "individualPriceUSD": 4.99,
      "teamSeatPriceUSD": 16.8,
      "teamMinSeats": null,
      "topTierPriceUSD": 199.99,
      "contextWindowTokens": 1000000,
      "imageGeneration": true,
      "webSearch": true,
      "fileAnalysis": true,
      "voiceMode": true,
      "apiAvailable": true,
      "agentOrCoding": true,
      "businessDataNotTrained": true,
      "usageLimitsNote": "Tiered multiples of Free/Pro limits; AI Pro Deep Research 20/day, Veo 3/day; 1M-token context"
    },
    "ratings": {
      "trustpilot": {
        "score": null,
        "reviews": 891
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
      "depth": 5,
      "team": 4,
      "free": 4
    },
    "commercial": true,
    "api": true,
    "bestFor": "Google ecosystem users wanting strong multimodal AI bundled with storage and Workspace apps.",
    "strategy": "Bundles Gemini into Google One storage tiers for consumers and into Workspace seat prices for businesses; API billed by usage.",
    "strengths": [
      "Cheapest paid entry ($4.99) with flagship model",
      "Bundled storage and Google app integration",
      "1M-token context across models"
    ],
    "weaknesses": [
      "Reviewers report hallucinations and over-refusals",
      "Complex plan lineup with frequent changes",
      "Business AI tied to Workspace subscription"
    ],
    "confidence": "medium - Google pages blocked; prices from consistent 2026 secondary sources (I/O 2026 Ultra split, June 2026 AI Plus cut). Trustpilot review count from snippet, score unknown.",
    "sources": [
      "https://www.androidauthority.com/google-ai-ultra-pricing-3668211/",
      "https://www.engadget.com/2190039/google-cuts-the-price-of-its-ai-plus-plan-and-doubles-the-storage/",
      "https://www.digitalapplied.com/blog/google-ai-plans-free-plus-pro-ultra-2026",
      "https://www.emailvendorselection.com/google-workspace-pricing/",
      "https://www.trustpilot.com/review/gemini.google.com"
    ]
  },
  {
    "id": "microsoft_copilot",
    "name": "Microsoft Copilot",
    "company": "Microsoft",
    "url": "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing",
    "category": "ai_assistant",
    "pricingModel": "hybrid",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Copilot Free",
        "price": 0,
        "quota": "Basic Copilot chat",
        "highlights": [
          "Free Copilot chat app",
          "Web-grounded answers",
          "Image generation"
        ]
      },
      {
        "name": "Microsoft 365 Personal",
        "price": 9.99,
        "annual": 8.33,
        "quota": "Higher usage than free; AI credits for Office apps",
        "highlights": [
          "Copilot in Word, Excel, PowerPoint",
          "Includes Microsoft 365 apps",
          "Elevated image-gen limits"
        ]
      },
      {
        "name": "Microsoft 365 Premium",
        "price": 19.99,
        "annual": 16.67,
        "quota": "Extensive usage; limited agentic AI",
        "highlights": [
          "Replaced Copilot Pro",
          "Premium and Pro AI features",
          "Limited agentic AI usage"
        ]
      },
      {
        "name": "Microsoft 365 Pro",
        "price": 99.99,
        "quota": "Highest usage incl. agentic research",
        "highlights": [
          "Highest Copilot usage",
          "Highest agentic AI usage",
          "Max image-gen limits"
        ]
      },
      {
        "name": "Microsoft 365 Copilot Business",
        "price": 25.2,
        "annual": 21,
        "maxUsers": 300,
        "quota": "Add-on; requires M365 Business base license; promo $18 annual through 2026",
        "highlights": [
          "Researcher and Analyst agents",
          "Work data grounding (Work IQ)",
          "Enterprise Data Protection"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "individualPriceUSD": 9.99,
      "teamSeatPriceUSD": 25.2,
      "teamMinSeats": null,
      "topTierPriceUSD": 99.99,
      "contextWindowTokens": null,
      "imageGeneration": true,
      "webSearch": true,
      "fileAnalysis": true,
      "voiceMode": true,
      "apiAvailable": false,
      "agentOrCoding": true,
      "businessDataNotTrained": true,
      "usageLimitsNote": "Consumer plans use AI credits/usage levels; business add-on needs base M365 license (enterprise Copilot $30 annual)"
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
      "value": 3,
      "ease": 4,
      "depth": 4,
      "team": 5,
      "free": 3
    },
    "commercial": true,
    "api": false,
    "bestFor": "Organizations and households already using Microsoft 365 who want AI inside Office apps.",
    "strategy": "Upsells Microsoft 365 subscriptions with bundled AI and sells Copilot as a per-seat add-on on top of base licenses.",
    "strengths": [
      "Deep integration in Office apps",
      "Consumer plans bundle full Microsoft 365",
      "Enterprise Data Protection for business"
    ],
    "weaknesses": [
      "Business add-on requires separate base license",
      "Confusing plan lineup after Copilot Pro retirement",
      "No direct consumer API"
    ],
    "confidence": "high for pricing (official Microsoft pages fetched); context window unknown; ratings not retrieved.",
    "sources": [
      "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/individuals",
      "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing",
      "https://www.aguidetocloud.com/blog/microsoft-copilot-pricing-tiers-explained/"
    ]
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "company": "Perplexity AI",
    "url": "https://www.perplexity.ai/pro",
    "category": "ai_assistant",
    "pricingModel": "subscription",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Limited Pro searches",
        "highlights": [
          "Unlimited basic search",
          "Cited answers",
          "Free Comet browser"
        ]
      },
      {
        "name": "Pro",
        "price": 20,
        "annual": 16.67,
        "quota": "~300 Pro searches/day; limited Labs",
        "highlights": [
          "Choice of frontier models",
          "Image generation, file uploads",
          "Create files and apps (Labs)"
        ]
      },
      {
        "name": "Max",
        "price": 200,
        "annual": 166.67,
        "quota": "Highest individual limits",
        "highlights": [
          "Most advanced models",
          "Higher Labs and Computer credits",
          "Early feature access"
        ]
      },
      {
        "name": "Enterprise Pro",
        "price": 40,
        "annual": 33.33,
        "quota": "Per seat; $400/seat/year",
        "highlights": [
          "Org admin and SSO",
          "Internal file search",
          "Data not used for training"
        ]
      },
      {
        "name": "Enterprise Max",
        "price": 325,
        "annual": 270.83,
        "quota": "Per seat; $3,250/seat/year",
        "highlights": [
          "SCIM, audit logs, retention",
          "Model Council multi-model",
          "30x Pro Computer credits"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "individualPriceUSD": 20,
      "teamSeatPriceUSD": 40,
      "teamMinSeats": null,
      "topTierPriceUSD": 325,
      "contextWindowTokens": null,
      "imageGeneration": true,
      "webSearch": true,
      "fileAnalysis": true,
      "voiceMode": true,
      "apiAvailable": true,
      "agentOrCoding": true,
      "businessDataNotTrained": true,
      "usageLimitsNote": "Pro ~300 Pro searches/day; Labs and Computer credits scale by tier; Pro and Max seats can be mixed"
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
      "value": 3,
      "ease": 5,
      "depth": 3,
      "team": 3,
      "free": 4
    },
    "commercial": true,
    "api": true,
    "bestFor": "Researchers and teams who want fast, cited answers from the live web across multiple models.",
    "strategy": "Freemium search into $20/$200 individual subscriptions, $40/$325 enterprise seats, plus usage-based Sonar API.",
    "strengths": [
      "Best-in-class cited web answers",
      "Multi-model choice in one subscription",
      "Comet agentic browser free"
    ],
    "weaknesses": [
      "Enterprise seats pricier than rivals",
      "Less suited to long-form creation/coding",
      "Credit systems add complexity"
    ],
    "confidence": "medium - perplexity.ai blocked; prices consistent across Sept-2026 secondary sources; enterprise minimum seats unconfirmed; ratings not retrieved.",
    "sources": [
      "https://www.finout.io/blog/perplexity-pricing-in-2026",
      "https://perplexityaimagazine.com/perplexity-hub/perplexity-enterprise-pricing-pro-max/",
      "https://www.cloudzero.com/blog/perplexity-pricing/",
      "https://suprmind.ai/hub/perplexity/pricing/"
    ]
  },
  {
    "id": "mistral_le_chat",
    "name": "Mistral Le Chat",
    "company": "Mistral AI",
    "url": "https://mistral.ai/pricing",
    "category": "ai_assistant",
    "pricingModel": "subscription",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "~25 messages/day reported",
        "highlights": [
          "Mistral Medium and Small",
          "Web search",
          "Image generation"
        ]
      },
      {
        "name": "Pro",
        "price": 14.99,
        "quota": "6x messages, 30x Think, 40x images vs Free",
        "highlights": [
          "Vibe Code and Work modes",
          "Deep research, extended thinking",
          "Higher limits"
        ]
      },
      {
        "name": "Team",
        "price": 24.99,
        "annual": 19.99,
        "minMonthly": 50,
        "quota": "Pro-level limits per user; $50/month minimum",
        "highlights": [
          "Shared workspace and libraries",
          "Admin controls, central billing",
          "30GB storage per user"
        ]
      },
      {
        "name": "Enterprise",
        "price": null,
        "custom": true,
        "quota": "Quote-only; private/self-hosted deployment",
        "highlights": [
          "On-prem or private cloud",
          "Custom models and connectors"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "individualPriceUSD": 14.99,
      "teamSeatPriceUSD": 24.99,
      "teamMinSeats": null,
      "topTierPriceUSD": 24.99,
      "contextWindowTokens": null,
      "imageGeneration": true,
      "webSearch": true,
      "fileAnalysis": true,
      "voiceMode": true,
      "apiAvailable": true,
      "agentOrCoding": true,
      "businessDataNotTrained": true,
      "usageLimitsNote": "Pro/Team: 6x messages, 30x Think, 40x images vs Free; Team has $50/month minimum; student plan ~$5.99-6.99"
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
      "value": 4,
      "ease": 4,
      "depth": 3,
      "team": 3,
      "free": 4
    },
    "commercial": true,
    "api": true,
    "bestFor": "Cost-conscious or EU-focused users and teams wanting an affordable assistant with data-sovereignty options.",
    "strategy": "Low-priced freemium subscriptions and per-seat Team, with revenue from API usage and custom enterprise/on-prem deals.",
    "strengths": [
      "Lowest-priced full Pro tier ($14.99)",
      "European provider, self-hosting options",
      "Agentic Work/Code modes since Vibe rebrand"
    ],
    "weaknesses": [
      "Models trail frontier leaders on some tasks",
      "Fewer third-party integrations",
      "Rebrand (Le Chat to Vibe) may confuse buyers"
    ],
    "confidence": "medium - mistral.ai blocked; prices from secondary sources (reported unchanged after May 2026 Vibe rebrand); Pro annual price, context window, voice mode not verified; ratings not retrieved.",
    "sources": [
      "https://techjacksolutions.com/ai-tools/mistral/mistral-pricing/",
      "https://www.cloudzero.com/blog/mistral-api-pricing/",
      "https://cybernews.com/ai-news/mistral-rebrands-vibe/",
      "https://whichai.fyi/compare/mistral/"
    ]
  },
  {
    "id": "notion_ai",
    "name": "Notion AI",
    "company": "Notion Labs",
    "url": "https://www.notion.com/pricing",
    "category": "ai_assistant",
    "pricingModel": "hybrid",
    "currency": "USD",
    "lastUpdated": "2026-09-26",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Limited AI trial",
        "highlights": [
          "Core workspace",
          "Limited Notion AI trial"
        ]
      },
      {
        "name": "Plus",
        "price": 12,
        "annual": 10,
        "quota": "Limited AI trial only",
        "highlights": [
          "Unlimited blocks and uploads",
          "Limited AI trial"
        ]
      },
      {
        "name": "Business",
        "price": 24,
        "annual": 20,
        "quota": "Full Notion AI; Custom Agents billed $10 per 1,000 credits",
        "highlights": [
          "Full Notion AI included",
          "AI meeting notes, enterprise search",
          "Access to GPT and Claude models"
        ]
      },
      {
        "name": "Enterprise",
        "price": null,
        "custom": true,
        "quota": "Custom pricing",
        "highlights": [
          "Advanced security and controls",
          "Zero data retention with LLMs"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "individualPriceUSD": 24,
      "teamSeatPriceUSD": 24,
      "teamMinSeats": null,
      "topTierPriceUSD": 24,
      "contextWindowTokens": null,
      "imageGeneration": false,
      "webSearch": true,
      "fileAnalysis": true,
      "voiceMode": false,
      "apiAvailable": false,
      "agentOrCoding": true,
      "businessDataNotTrained": true,
      "usageLimitsNote": "Full AI only on Business ($24 monthly / $20 annual) and Enterprise; Custom Agents metered at $10 per 1,000 workspace credits"
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
      "value": 3,
      "ease": 4,
      "depth": 3,
      "team": 5,
      "free": 2
    },
    "commercial": true,
    "api": false,
    "bestFor": "Teams already running docs and wikis in Notion who want AI search, writing and agents over that content.",
    "strategy": "Bundles AI into the higher Business seat tier to drive upgrades, plus metered credits for Custom Agents.",
    "strengths": [
      "AI works over your Notion docs and connected apps",
      "Multiple frontier models inside one workspace",
      "Everyday AI not credit-metered"
    ],
    "weaknesses": [
      "Full AI requires Business plan",
      "Custom Agents add usage costs",
      "Not a standalone general chat app"
    ],
    "confidence": "medium - notion.com blocked; prices from secondary sources citing official page (Aug 2026). individualPriceUSD uses Business since Plus lacks full AI. apiAvailable false = no AI model API (Notion workspace API exists). Ratings not retrieved.",
    "sources": [
      "https://www.notion.com/pricing",
      "https://tinycommand.com/blogs/notion-pricing-explained",
      "https://coworker.ai/blog/notion-ai-pricing",
      "https://techjacksolutions.com/ai-tools/notion-ai/notion-ai-pricing/"
    ]
  }
]
