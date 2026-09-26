// Researched 2026-09-26 from vendor pricing pages. Prices are USD list prices; GBP-only plans are converted at the
// FX snapshot. G2 ratings come from search snippets (G2 blocks direct reads). See each product's sources and confidence note.
export default [
  {
    "id": "shiptheory",
    "name": "Shiptheory",
    "company": "Shiptheory Ltd (UK)",
    "url": "https://shiptheory.com/pricing",
    "category": "shipping",
    "pricingModel": "subscription",
    "tiers": [
      {
        "name": "Pluto",
        "price": 33.12,
        "annual": 25.17,
        "perSeat": false,
        "quota": "£19/mo (£25 monthly); up to 250 shipments/month, 1 user, 1 channel, 1 carrier; £0.03 per shipment",
        "highlights": ["1 sales channel", "1 carrier", "Email support"]
      },
      {
        "name": "Earth",
        "price": 62,
        "annual": 50,
        "perSeat": false,
        "quota": "£39/mo (£49 monthly); up to 1,500 shipments/month, 1 user, 1 channel, 2 carriers; £0.03 per shipment",
        "highlights": ["1 sales channel", "2 carriers", "Email support"]
      },
      {
        "name": "Saturn",
        "price": 150,
        "annual": 125,
        "perSeat": false,
        "quota": "£99/mo (£119 monthly); up to 3,000 shipments/month, 3 users, 3 channels, unlimited carriers; £0.03 per shipment",
        "highlights": ["3 sales channels", "Unlimited carriers", "Tailored onboarding"]
      },
      {
        "name": "Jupiter",
        "price": 325,
        "annual": 275,
        "perSeat": false,
        "quota": "£217/mo (£255 monthly); up to 8,000 shipments/month, 10 users, unlimited channels/carriers; £0.02 per shipment",
        "highlights": ["Unlimited channels and carriers", "10 users", "Phone support", "Tailored onboarding"]
      },
      {
        "name": "Cosmos",
        "price": 750,
        "annual": 550,
        "perSeat": false,
        "quota": "£433/mo (£590 monthly); up to 20,000 shipments/month, unlimited users/channels/carriers; £0.02 per shipment",
        "highlights": ["ERP, API and WMS plan", "Unlimited channels and carriers", "Branded tracking", "Extended support"]
      },
      {
        "name": "Enterprise",
        "price": null,
        "perSeat": false,
        "custom": true,
        "quota": "Over 20,000 shipments a month; bespoke pricing",
        "highlights": ["White-glove service", "Tailored onboarding"]
      }
    ],
    "metrics": {
      "regions": ["UK", "EU", "US"],
      "pricingBasis": "Monthly plan sized by shipment volume (20% off annually); bring your own carrier accounts",
      "cheapestPaidUSD": 33.12,
      "entryShipments": 250,
      "usersIncluded": 1,
      "ukCarriers": ["Royal Mail", "Parcelforce", "DPD", "Evri", "DHL", "Whistl", "UPS", "FedEx"],
      "usCarriers": ["USPS", "UPS", "FedEx"],
      "discountedRates": false,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": true,
      "returnsPortal": true,
      "inventory": false,
      "integrations": 4,
      "apiAvailable": true
    },
    "ratings": {
      "trustpilot": { "score": 4.8, "reviews": 380 },
      "g2": { "score": 4.8, "reviews": 166 },
      "capterra": { "score": 4.8, "reviews": 59 }
    },
    "scores": { "value": 4, "ease": 4, "depth": 4, "team": 3, "free": 1 },
    "commercial": null,
    "api": true,
    "bestFor": "UK e-commerce brands that ship with their own Royal Mail, DPD or Evri accounts and want rules to pick the carrier automatically.",
    "strategy": "Monthly plans sized by shipment volume, with channel, carrier and user limits rising per tier; revenue comes from subscriptions rather than postage mark-up.",
    "strengths": ["Deep UK carrier coverage", "Generous shipment allowance on entry plans", "Excellent review scores"],
    "weaknesses": ["No discounted postage of its own", "Entry plan limited to 1 user, 1 channel and 1–2 carriers", "No free plan (14-day trial only)"],
    "confidence": "high - plans and GBP prices read from shiptheory.com/pricing on 2026-09-26; USD from the vendor's own USD prices, except Pluto (converted from GBP at the FX snapshot); G2 rating from search snippet",
    "sources": [
      "https://shiptheory.com/pricing",
      "https://uk.trustpilot.com/review/shiptheory.com",
      "https://www.capterra.com/p/147813/Shiptheory/reviews/"
    ]
  },
  {
    "id": "shipstation",
    "name": "ShipStation",
    "company": "Auctane (ShipStation)",
    "url": "https://www.shipstation.com/pricing/",
    "category": "shipping",
    "pricingModel": "subscription",
    "tiers": [
      {
        "name": "Free (UK only)",
        "price": 0,
        "perSeat": false,
        "quota": "UK only: 50 shipments a month, 1 user, 1 store",
        "highlights": ["Tracking emails", "Chatbot support"]
      },
      {
        "name": "Starter",
        "price": 14.99,
        "annual": 11.99,
        "perSeat": false,
        "quota": "From 50 shipments a month, 3 users; $29.99 at 100, $39.99 at 500, $79.99 at 1,000, $119.99 at 2,000, $174.99 at 5,000 (UK from £10)",
        "highlights": ["Discounted carrier rates", "Unlimited store connections", "Rate shopping and basic automations", "Return labels"]
      },
      {
        "name": "Standard",
        "price": 29.99,
        "annual": 23.99,
        "perSeat": false,
        "quota": "From 50 shipments a month, 10 users; $59.99 at 100, $89.99 at 500, $149.99 at 1,000, $174.99 at 2,000, $249.99 at 5,000, $349.99 at 7,500, $449.99 at 10,000, up to $3,599.99 at 100,000 (UK from £25)",
        "highlights": ["Use your own carrier accounts", "Returns portal and branded tracking", "Unlimited automations and API", "Phone support"]
      },
      {
        "name": "Premium",
        "price": 349.99,
        "annual": 279.99,
        "perSeat": false,
        "quota": "From 50 shipments a month, 15 users; $399.99 at 100, $449.99 at 500, $599.99 at 1,000, $699.99 at 2,000, $799.99 at 5,000, $949.99 at 7,500, $1,099.99 at 10,000, up to $7,499.99 at 100,000 (UK from £270)",
        "highlights": ["Advanced inventory and purchase orders", "Auto-routing and pick-to-tote", "Dedicated onboarding", "Custom analytics"]
      }
    ],
    "metrics": {
      "regions": ["US", "UK", "CA", "AU"],
      "pricingBasis": "Monthly plan priced by shipment volume (50 to 100,000 a month), with users included per tier; 20% off annually",
      "cheapestPaidUSD": 14.99,
      "entryShipments": 50,
      "usersIncluded": 3,
      "ukCarriers": ["Royal Mail", "Parcelforce", "DPD", "Evri", "InPost", "DHL", "UPS", "FedEx"],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL", "Amazon Shipping"],
      "discountedRates": true,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": true,
      "returnsPortal": true,
      "inventory": true,
      "integrations": 5,
      "apiAvailable": true
    },
    "ratings": {
      "trustpilot": { "score": 3.3, "reviews": 619 },
      "g2": { "score": 4.3, "reviews": 587 },
      "capterra": { "score": 4.6, "reviews": 961 }
    },
    "scores": { "value": 3, "ease": 4, "depth": 5, "team": 4, "free": 2 },
    "commercial": null,
    "api": true,
    "bestFor": "Multi-channel sellers in the US (and UK) who want one place to import orders, compare carriers and print labels in bulk.",
    "strategy": "Three feature tiers (since July 2025), each priced on a sliding scale by monthly shipments, plus revenue from discounted postage and add-ons such as fulfilment and insurance.",
    "strengths": ["Largest store and marketplace integration list", "Strong automation and batch tools", "Discounted US and UK postage"],
    "weaknesses": ["Own carrier accounts, returns portal and API need Standard or above", "Price climbs steeply with volume", "Support quality often criticised"],
    "confidence": "high - tier prices, volume bands, users and features read from the US and UK pricing pages on 2026-09-26; carrier lists and G2 rating from search snippets",
    "sources": [
      "https://www.shipstation.com/pricing/",
      "https://www.shipstation.com/en-gb/pricing/",
      "https://www.trustpilot.com/review/shipstation.com",
      "https://www.capterra.com/p/155621/ShipStation/"
    ]
  },
  {
    "id": "shippo",
    "name": "Shippo",
    "company": "Shippo (Popout, Inc.)",
    "url": "https://goshippo.com/pricing",
    "category": "shipping",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Starter",
        "price": 0,
        "perSeat": false,
        "quota": "Up to 30 labels a month, 1 user; 5¢ per label on your own carrier accounts",
        "highlights": ["Discounted carrier rates", "Unlimited store connections", "Automations and return labels"]
      },
      {
        "name": "Pro",
        "price": 17,
        "annual": 17,
        "perSeat": false,
        "quota": "Up to 200 labels ($17/mo); $29 at 201–500, $54 at 501–1,000, $79 at 1,001–2,500, $139 at 2,501–5,000, $199 at 5,001–10,000; then $0.08 per label over 10,000; 5+ users",
        "highlights": ["Free own-carrier connections", "Branded tracking, emails and packing slips", "Chat and phone support"]
      },
      {
        "name": "Premier",
        "price": null,
        "perSeat": false,
        "custom": true,
        "quota": "Custom; unlimited shipments, 15+ users",
        "highlights": ["Dedicated account manager", "Custom carrier rates"]
      }
    ],
    "metrics": {
      "regions": ["US", "UK", "CA"],
      "pricingBasis": "Free plan up to 30 labels, then Pro priced by monthly label volume (10% off annually); API billed per label and per call",
      "cheapestPaidUSD": 17,
      "entryShipments": 200,
      "usersIncluded": 5,
      "ukCarriers": ["Royal Mail", "Evri", "DPD", "UPS", "DHL"],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL", "OnTrac"],
      "discountedRates": true,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": true,
      "returnsPortal": false,
      "inventory": false,
      "integrations": 4,
      "apiAvailable": true
    },
    "ratings": {
      "trustpilot": { "score": 3.2, "reviews": 560 },
      "g2": { "score": 4.2, "reviews": 77 },
      "capterra": { "score": 4.8, "reviews": 827 }
    },
    "scores": { "value": 4, "ease": 4, "depth": 3, "team": 4, "free": 3 },
    "commercial": null,
    "api": true,
    "bestFor": "Small US sellers and developers who want cheap discounted labels and a well-documented, pay-per-use shipping API.",
    "strategy": "Freemium: a free 30-label plan, then Pro priced by label volume with generous user counts; monetised through postage margins and per-call API fees.",
    "strengths": ["Free plan with discounted rates", "Excellent developer API", "Many users included on Pro"],
    "weaknesses": ["Free plan capped at 30 labels", "No self-service returns portal", "UK carrier range narrower and UK pricing unclear"],
    "confidence": "high - plan prices, label bands, users and fees read from goshippo.com/pricing on 2026-09-26; USD only, UK billing unconfirmed; G2 rating from a search snippet",
    "sources": [
      "https://goshippo.com/pricing",
      "https://goshippo.com/pricing/api",
      "https://goshippo.com/carriers",
      "https://www.trustpilot.com/review/goshippo.com",
      "https://www.capterra.com/p/146146/Shippo/"
    ]
  },
  {
    "id": "sendcloud",
    "name": "Sendcloud",
    "company": "Sendcloud B.V.",
    "url": "https://www.sendcloud.com/en-uk/pricing/",
    "category": "shipping",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "perSeat": false,
        "quota": "20 parcels a month, 1 user, max. 2 shops; Sendcloud rates only",
        "highlights": ["Pre-negotiated rates with 70+ couriers", "Basic label printing"]
      },
      {
        "name": "Lite",
        "price": 11.92,
        "annual": 9.27,
        "perSeat": false,
        "quota": "£7/mo (£9 monthly) + £0.07 per label; up to 400 labels/month, 3 users, 3 integrations",
        "highlights": ["Use your own courier contracts", "5 shipping rules", "Pack & Go and customs documents"]
      },
      {
        "name": "Growth",
        "price": 51.66,
        "annual": 41.07,
        "perSeat": false,
        "quota": "£31/mo (£39 monthly) + £0.06 per label; up to 1,000 labels/month, 5 users, 5 integrations",
        "highlights": ["Branded tracking page", "Branded returns portal", "Phone support"]
      },
      {
        "name": "Premium",
        "price": 131.14,
        "annual": 104.65,
        "perSeat": false,
        "quota": "£79/mo (£99 monthly) + £0.05 per label; up to 10,000 labels/month, 10 users, unlimited integrations",
        "highlights": ["Advanced returns", "Shipping analytics", "White label and unlimited rules"]
      },
      {
        "name": "Pro",
        "price": null,
        "perSeat": false,
        "custom": true,
        "quota": "On request; £0.05 per label, up to 30,000 labels a month, unlimited users",
        "highlights": ["Dynamic checkout", "Dedicated customer success manager"]
      },
      {
        "name": "Enterprise",
        "price": null,
        "perSeat": false,
        "custom": true,
        "quota": "Custom volume and service levels",
        "highlights": ["Custom integrations", "Technical support manager"]
      }
    ],
    "metrics": {
      "regions": ["UK", "EU"],
      "pricingBasis": "Monthly plan plus a per-label fee, capped by label volume (+£0.15 per label over the cap); 20% off annually",
      "cheapestPaidUSD": 11.92,
      "entryShipments": 400,
      "usersIncluded": 3,
      "ukCarriers": ["Royal Mail", "DPD", "Evri", "DHL", "UPS", "FedEx", "InPost"],
      "usCarriers": [],
      "discountedRates": true,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": true,
      "returnsPortal": true,
      "inventory": false,
      "integrations": 4,
      "apiAvailable": true
    },
    "ratings": {
      "trustpilot": { "score": 4.6, "reviews": 2600 },
      "g2": { "score": 4.5, "reviews": 153 },
      "capterra": { "score": 4.0, "reviews": 97 }
    },
    "scores": { "value": 4, "ease": 4, "depth": 4, "team": 4, "free": 3 },
    "commercial": null,
    "api": true,
    "bestFor": "UK and European shops that want cheap entry plans, strong returns handling and a wide choice of European carriers.",
    "strategy": "Freemium entry, then low monthly plans that add a per-label fee and cap label volume, plus margin on pre-negotiated carrier rates.",
    "strengths": ["Very low entry price", "Wide UK and EU carrier choice with published rates", "Branded returns portal from Growth"],
    "weaknesses": ["Cannot ship from the US", "Per-label fees on top of the plan price", "Branded tracking and returns need Growth or above"],
    "confidence": "high - GBP plans, label fees and caps read from sendcloud.com/en-uk/pricing on 2026-09-26 (USD converted at the FX snapshot); G2 rating from a search snippet",
    "sources": [
      "https://www.sendcloud.com/en-uk/pricing/",
      "https://uk.trustpilot.com/review/sendcloud.com",
      "https://www.capterra.com/p/189663/SendCloud/reviews/"
    ]
  },
  {
    "id": "veeqo",
    "name": "Veeqo",
    "company": "Amazon (Veeqo)",
    "url": "https://www.veeqo.com/pricing",
    "category": "shipping",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Shipping",
        "price": 0,
        "perSeat": false,
        "quota": "Free; unlimited orders, users and warehouses. Veeqo takes a commission on labels bought through it",
        "highlights": ["Discounted carrier rates, up to 5% back in credits", "Bulk shipping and automation rules", "Rate-shopping API"]
      },
      {
        "name": "Inventory",
        "price": 19,
        "perSeat": false,
        "quota": "From $19/mo (UK from £17 inc. VAT); scales with seller-fulfilled orders",
        "highlights": ["Inventory sync and demand forecasting", "Digital picking with scanner", "Suppliers and purchase orders"]
      },
      {
        "name": "High Volume",
        "price": 350,
        "perSeat": false,
        "quota": "From $350/mo (UK from £313 inc. VAT)",
        "highlights": ["NetSuite ERP integration", "Dedicated account manager", "Priority support"]
      }
    ],
    "metrics": {
      "regions": ["UK", "US"],
      "pricingBasis": "Shipping is free (commission on labels); inventory plans scale with monthly seller-fulfilled orders",
      "cheapestPaidUSD": 19,
      "entryShipments": "unlimited",
      "usersIncluded": "unlimited",
      "ukCarriers": ["Royal Mail", "Parcelforce", "DPD", "Evri", "UPS", "FedEx", "Amazon Shipping"],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL", "OnTrac", "Amazon Shipping"],
      "discountedRates": true,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": false,
      "returnsPortal": false,
      "inventory": true,
      "integrations": 4,
      "apiAvailable": true
    },
    "ratings": {
      "trustpilot": { "score": 2.0, "reviews": 309 },
      "g2": { "score": 4.5, "reviews": 47 },
      "capterra": { "score": 4.2, "reviews": 87 }
    },
    "scores": { "value": 5, "ease": 3, "depth": 4, "team": 4, "free": 5 },
    "commercial": null,
    "api": true,
    "bestFor": "Amazon and multi-channel sellers in the UK or US who want free shipping software, with inventory tools available as a paid add-on.",
    "strategy": "Shipping software given away free by Amazon and funded by commission on labels; inventory and warehouse features moved to paid plans scaled by order volume.",
    "strengths": ["Free shipping software with unlimited users", "Wide discounted UK and US carrier range", "Strong Amazon integration and A-to-Z protected labels"],
    "weaknesses": ["Inventory features are no longer free", "Connecting your own carrier accounts hides Veeqo rates", "Tied to Amazon's priorities (UK moved to Buy Shipping in 2026)"],
    "confidence": "high - plans and prices read from the US and UK pricing pages and help centre on 2026-09-26; G2 rating from a search snippet",
    "sources": [
      "https://www.veeqo.com/pricing",
      "https://www.veeqo.com/gb/uk/pricing",
      "https://help.veeqo.com/en/articles/14729298-veeqo-plans-overview",
      "https://www.trustpilot.com/review/veeqo.com",
      "https://www.capterra.com/p/150907/Veeqo/reviews/"
    ]
  },
  {
    "id": "easyship",
    "name": "Easyship",
    "company": "Easyship Pte Ltd",
    "url": "https://www.easyship.com/plans",
    "category": "shipping",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "perSeat": false,
        "quota": "Up to 50 shipments a month, 1 user; no own carrier accounts",
        "highlights": ["Discounted rates up to 91% off", "Import tax and duty calculator", "Return labels"]
      },
      {
        "name": "Plus",
        "price": 29,
        "annual": 23,
        "perSeat": false,
        "quota": "From $29/mo (UK from £29); up to 500 shipments a month, 3 users, 1 own carrier account ($0.05 per label on it)",
        "highlights": ["Live rates at checkout", "Shipping rules and automations", "Branded tracking page"]
      },
      {
        "name": "Premier",
        "price": 69,
        "annual": 55,
        "perSeat": false,
        "quota": "From $69/mo (UK from £69); up to 2,500 shipments a month, 5 users, 2 own carrier accounts",
        "highlights": ["Taxes and duties at checkout", "Prepaid return labels", "24/7 phone support"]
      },
      {
        "name": "Scale",
        "price": 99,
        "annual": 79,
        "perSeat": false,
        "quota": "From $99/mo (UK from £99); up to 5,000 shipments, 8 users; $149 for 7,500 and $199 for 10,000",
        "highlights": ["3PL fulfilment network add-on", "Personal onboarding", "Up to 12 users"]
      },
      {
        "name": "Enterprise",
        "price": null,
        "perSeat": false,
        "custom": true,
        "quota": "Over 10,000 shipments a month",
        "highlights": ["Custom users and carrier accounts", "Dedicated account manager"]
      }
    ],
    "metrics": {
      "regions": ["US", "UK", "CA", "AU", "HK", "SG"],
      "pricingBasis": "Monthly plan by shipment volume (20% off annually); same figures in £ for the UK; per-label fee on own carrier accounts",
      "cheapestPaidUSD": 29,
      "entryShipments": 500,
      "usersIncluded": 3,
      "ukCarriers": ["Royal Mail", "Parcelforce", "Evri", "DPD", "DHL", "UPS", "FedEx"],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL", "GlobalPost"],
      "discountedRates": true,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": true,
      "returnsPortal": false,
      "inventory": false,
      "integrations": 4,
      "apiAvailable": true
    },
    "ratings": {
      "trustpilot": { "score": 1.6, "reviews": 697 },
      "g2": { "score": 4.4, "reviews": 183 },
      "capterra": { "score": 4.4, "reviews": 288 }
    },
    "scores": { "value": 4, "ease": 4, "depth": 4, "team": 3, "free": 4 },
    "commercial": null,
    "api": true,
    "bestFor": "Sellers shipping internationally who need landed-cost duties and taxes shown at checkout.",
    "strategy": "Free entry plan and volume-tiered subscriptions that ration own carrier accounts and users, with margin on discounted international rates and per-call API fees.",
    "strengths": ["Strong cross-border tools", "Free plan with 50 shipments", "550+ courier services worldwide"],
    "weaknesses": ["Own carrier accounts limited and charged per label", "No dedicated returns portal", "Poor recent Trustpilot reviews"],
    "confidence": "high - prices, shipment limits, users and fees read from easyship.com/plans and its February 2026 pricing data on 2026-09-26; G2 rating from a search snippet",
    "sources": [
      "https://www.easyship.com/plans",
      "https://www.easyship.com/en-gb/couriers",
      "https://www.trustpilot.com/review/www.easyship.com",
      "https://www.capterra.com/p/170399/Easyship/"
    ]
  },
  {
    "id": "pirate_ship",
    "name": "Pirate Ship",
    "company": "Pirate Ship LLC",
    "url": "https://www.pirateship.com/",
    "category": "shipping",
    "pricingModel": "usage",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "perSeat": false,
        "quota": "No subscription, label or payment fees; pay postage only",
        "highlights": ["USPS Commercial Pricing (up to 87% off) and discounted UPS", "Batch labels from spreadsheets", "Shopify, eBay, WooCommerce and 10+ store imports"]
      }
    ],
    "metrics": {
      "regions": ["US"],
      "pricingBasis": "Free; earns from carrier postage agreements",
      "cheapestPaidUSD": null,
      "entryShipments": "unlimited",
      "usersIncluded": "unlimited",
      "ukCarriers": [],
      "usCarriers": ["USPS", "UPS"],
      "discountedRates": true,
      "ownCarrierAccounts": false,
      "automationRules": false,
      "brandedTracking": false,
      "returnsPortal": false,
      "inventory": false,
      "integrations": 3,
      "apiAvailable": false
    },
    "ratings": {
      "trustpilot": { "score": 4.7, "reviews": 1387 },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": 4.9, "reviews": 1006 }
    },
    "scores": { "value": 5, "ease": 5, "depth": 2, "team": 2, "free": 5 },
    "commercial": null,
    "api": false,
    "bestFor": "US small businesses and hobby sellers who just want the cheapest USPS and UPS labels with no subscription.",
    "strategy": "No fees to the seller; revenue comes from carrier agreements on the postage it sells.",
    "strengths": ["Free with no label fees", "Very easy to use", "Cheap USPS and UPS rates"],
    "weaknesses": ["US only", "Only USPS and UPS (no FedEx or DHL)", "No automation rules, own carrier accounts or public API"],
    "confidence": "high - free model, carriers and integrations read from pirateship.com on 2026-09-26; lack of own-account support inferred from the support FAQ; G2 rating not verified",
    "sources": [
      "https://www.pirateship.com/",
      "https://www.pirateship.com/features",
      "https://support.pirateship.com/feature-and-settings-questions/does-pirate-ship-have-an-api",
      "https://www.trustpilot.com/review/pirateship.com",
      "https://www.capterra.com/p/172133/Pirate-Ship/reviews/"
    ]
  },
  {
    "id": "shippingeasy",
    "name": "ShippingEasy",
    "company": "Auctane (ShippingEasy)",
    "url": "https://shippingeasy.com/pricing/",
    "category": "shipping",
    "pricingModel": "subscription",
    "tiers": [
      {
        "name": "Starter",
        "price": 0,
        "perSeat": false,
        "quota": "Up to 25 shipments a month, 3 stores",
        "highlights": ["Discounted USPS and UPS rates", "Automation rules"]
      },
      {
        "name": "Growth",
        "price": 19.99,
        "perSeat": false,
        "quota": "Up to 200 shipments a month",
        "highlights": ["Unlimited stores and marketplaces", "Branded tracking", "Phone, email and chat support"]
      },
      {
        "name": "Basic",
        "price": 29.99,
        "perSeat": false,
        "quota": "Up to 500 shipments a month",
        "highlights": ["Custom logos on labels", "Detailed reporting"]
      },
      {
        "name": "Plus",
        "price": 49.99,
        "perSeat": false,
        "quota": "Up to 1,500 shipments a month",
        "highlights": ["Higher volume", "All Growth features"]
      },
      {
        "name": "Select",
        "price": 69.99,
        "perSeat": false,
        "quota": "Up to 3,000 shipments a month",
        "highlights": ["Higher volume", "All Growth features"]
      },
      {
        "name": "Premium",
        "price": 119.99,
        "perSeat": false,
        "quota": "Up to 6,000 shipments a month",
        "highlights": ["Higher volume", "All Growth features"]
      },
      {
        "name": "Enterprise",
        "price": 189.99,
        "perSeat": false,
        "quota": "Up to 10,000 shipments a month",
        "highlights": ["Multiple locations", "User permissions", "Customisation"]
      }
    ],
    "metrics": {
      "regions": ["US"],
      "pricingBasis": "Monthly plan by shipment volume; no annual billing",
      "cheapestPaidUSD": 19.99,
      "entryShipments": 200,
      "usersIncluded": null,
      "ukCarriers": [],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL", "OnTrac"],
      "discountedRates": true,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": true,
      "returnsPortal": false,
      "inventory": false,
      "integrations": 4,
      "apiAvailable": true
    },
    "ratings": {
      "trustpilot": { "score": 2.8, "reviews": 6 },
      "g2": { "score": 4.6, "reviews": 114 },
      "capterra": { "score": 4.8, "reviews": 1133 }
    },
    "scores": { "value": 4, "ease": 4, "depth": 3, "team": 3, "free": 3 },
    "commercial": null,
    "api": true,
    "bestFor": "US online stores that want low-cost, volume-banded shipping software with discounted USPS and UPS rates and US-based support.",
    "strategy": "Free starter tier, then seven narrow volume bands priced monthly; shares ShipStation's parent and carrier deals, and charges extra to connect your own carrier accounts.",
    "strengths": ["Free starter plan", "Cheap low-volume paid plan", "Highly rated US-based support"],
    "weaknesses": ["US only", "No returns portal; inventory tool closed to new customers", "Own carrier accounts cost an extra $5–80 a month"],
    "confidence": "high - plan prices and shipment bands read from shippingeasy.com/pricing on 2026-09-26; own-account fee, inventory status and G2 rating from search snippets; user counts not published",
    "sources": [
      "https://shippingeasy.com/pricing/",
      "https://support.shippingeasy.com/hc/en-us/articles/16048650528027-Bring-Your-Own-Carrier-Account-Overview",
      "https://www.trustpilot.com/review/shippingeasy.com",
      "https://www.capterra.com/p/128334/ShippingEasy/"
    ]
  }
]