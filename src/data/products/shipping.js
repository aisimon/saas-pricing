// Compiled 2026-09-26 from prior knowledge: vendor sites and web search were unavailable, so every price is an
// unverified estimate (GBP plans converted at the FX snapshot) and ratings are left empty. Verify before relying on them.
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
        "name": "Starter",
        "price": 72.86,
        "perSeat": false,
        "estimate": true,
        "quota": "≈ £55/mo, around 250 shipments a month",
        "highlights": ["Unlimited users", "Rules-based carrier selection", "Royal Mail, DPD, Evri, DHL"]
      },
      {
        "name": "Standard",
        "price": 131.14,
        "perSeat": false,
        "estimate": true,
        "quota": "≈ £99/mo, around 1,000 shipments a month",
        "highlights": ["Multi-channel order import", "Branded tracking emails", "Returns labels"]
      },
      {
        "name": "Pro",
        "price": 263.61,
        "perSeat": false,
        "estimate": true,
        "quota": "≈ £199/mo, around 3,000 shipments a month",
        "highlights": ["Higher shipment volume", "Priority support", "Warehouse workflows"]
      },
      {
        "name": "Enterprise",
        "price": null,
        "perSeat": false,
        "custom": true,
        "quota": "Custom volume and onboarding",
        "highlights": ["Dedicated account manager", "Custom integrations"]
      }
    ],
    "metrics": {
      "regions": ["UK", "EU"],
      "pricingBasis": "Monthly plan sized by shipment volume; bring your own carrier accounts",
      "cheapestPaidUSD": 72.86,
      "entryShipments": 250,
      "usersIncluded": "unlimited",
      "ukCarriers": ["Royal Mail", "DPD", "Evri", "DHL", "Parcelforce", "UPS", "FedEx"],
      "usCarriers": ["UPS", "FedEx", "DHL"],
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
      "trustpilot": { "score": null, "reviews": null },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": null, "reviews": null }
    },
    "scores": { "value": 3, "ease": 4, "depth": 4, "team": 4, "free": 1 },
    "commercial": null,
    "api": true,
    "bestFor": "UK e-commerce brands that ship with their own Royal Mail, DPD or Evri accounts and want rules to pick the carrier automatically.",
    "strategy": "Flat monthly plans sized by shipment volume with unlimited users; revenue comes from subscriptions rather than postage mark-up.",
    "strengths": ["Deep UK carrier coverage", "Powerful shipping rules", "No per-user fees"],
    "weaknesses": ["No discounted postage of its own", "Priced above US label tools", "Mainly UK and EU focused"],
    "confidence": "low - vendor site and search unavailable during this update; tier prices and shipment allowances are estimates from prior knowledge and may have changed",
    "sources": ["https://shiptheory.com/pricing"]
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
        "name": "Starter",
        "price": 9.99,
        "perSeat": false,
        "estimate": true,
        "quota": "50 shipments a month, 1 user",
        "highlights": ["Discounted USPS and UPS rates", "Store integrations", "Branded labels"]
      },
      {
        "name": "Bronze",
        "price": 29.99,
        "perSeat": false,
        "estimate": true,
        "quota": "500 shipments a month, 1 user",
        "highlights": ["Automation rules", "Batch label printing"]
      },
      {
        "name": "Silver",
        "price": 59.99,
        "perSeat": false,
        "estimate": true,
        "quota": "1,500 shipments a month, 2 users",
        "highlights": ["More users", "Returns portal"]
      },
      {
        "name": "Gold",
        "price": 99.99,
        "perSeat": false,
        "estimate": true,
        "quota": "3,000 shipments a month, 3 users",
        "highlights": ["Higher volume", "Advanced reporting"]
      },
      {
        "name": "Enterprise",
        "price": 229.99,
        "perSeat": false,
        "estimate": true,
        "quota": "10,000 shipments a month, 10 users",
        "highlights": ["Largest listed plan", "Priority support"]
      }
    ],
    "metrics": {
      "regions": ["US", "UK", "CA", "AU"],
      "pricingBasis": "Monthly plan sized by shipment volume, with users included per tier",
      "cheapestPaidUSD": 9.99,
      "entryShipments": 50,
      "usersIncluded": 1,
      "ukCarriers": ["Royal Mail", "DPD", "Evri", "DHL", "UPS"],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL"],
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
      "trustpilot": { "score": null, "reviews": null },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": null, "reviews": null }
    },
    "scores": { "value": 3, "ease": 4, "depth": 5, "team": 4, "free": 1 },
    "commercial": null,
    "api": true,
    "bestFor": "Multi-channel sellers in the US (and UK) who want one place to import orders, compare carriers and print labels in bulk.",
    "strategy": "Volume-tiered monthly subscriptions that also cap users, plus revenue from discounted postage and add-ons such as insurance.",
    "strengths": ["Largest store and marketplace integration list", "Strong automation and batch tools", "Discounted US postage"],
    "weaknesses": ["Users capped on lower tiers", "List prices have risen in recent years", "Support quality often criticised"],
    "confidence": "low - vendor site and search unavailable during this update; tiers reflect ShipStation's long-standing US list prices, which have likely risen since",
    "sources": ["https://www.shipstation.com/pricing/"]
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
        "quota": "Pay as you go; small fee per label on some carriers",
        "highlights": ["Discounted USPS and UPS rates", "Store integrations", "1 user"]
      },
      {
        "name": "Pro",
        "price": 19,
        "perSeat": false,
        "estimate": true,
        "quota": "Flat monthly fee, no per-label fee, multiple users",
        "highlights": ["Multi-user access", "Automation and rules", "Branded tracking"]
      },
      {
        "name": "Premier",
        "price": null,
        "perSeat": false,
        "custom": true,
        "quota": "Custom for high volume",
        "highlights": ["Dedicated support", "Custom carrier rates"]
      }
    ],
    "metrics": {
      "regions": ["US", "UK", "CA"],
      "pricingBasis": "Free pay-per-label plan or flat monthly plan; revenue from postage",
      "cheapestPaidUSD": 19,
      "entryShipments": "unlimited",
      "usersIncluded": "unlimited",
      "ukCarriers": ["Evri", "DPD", "UPS", "DHL"],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL"],
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
      "trustpilot": { "score": null, "reviews": null },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": null, "reviews": null }
    },
    "scores": { "value": 4, "ease": 4, "depth": 3, "team": 3, "free": 4 },
    "commercial": null,
    "api": true,
    "bestFor": "Small US sellers and developers who want cheap discounted labels and a well-documented shipping API.",
    "strategy": "Freemium: free pay-per-label plan and a low flat Pro fee, monetised mainly through postage margins and API volume.",
    "strengths": ["Free plan with discounted rates", "Excellent developer API", "Simple interface"],
    "weaknesses": ["Fewer automation features than ShipStation", "UK carrier range narrower", "Per-label fees on the free plan"],
    "confidence": "low - vendor site and search unavailable during this update; plan names and prices are estimates from prior knowledge",
    "sources": ["https://goshippo.com/pricing"]
  },
  {
    "id": "sendcloud",
    "name": "Sendcloud",
    "company": "Sendcloud B.V.",
    "url": "https://www.sendcloud.com/pricing/",
    "category": "shipping",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "perSeat": false,
        "quota": "Pay per label with Sendcloud rates; limited features",
        "highlights": ["Pre-negotiated carrier rates", "Basic label printing"]
      },
      {
        "name": "Lite",
        "price": 38.42,
        "perSeat": false,
        "estimate": true,
        "quota": "≈ £29/mo; shipment allowance by volume band",
        "highlights": ["Use your own carrier contracts", "Shipping rules", "Branded tracking"]
      },
      {
        "name": "Growth",
        "price": 91.4,
        "perSeat": false,
        "estimate": true,
        "quota": "≈ £69/mo; higher volume band",
        "highlights": ["Returns portal", "Pick lists and packing slips", "Analytics"]
      },
      {
        "name": "Premium",
        "price": 157.64,
        "perSeat": false,
        "estimate": true,
        "quota": "≈ £119/mo; highest listed band",
        "highlights": ["Advanced automation", "Priority support"]
      }
    ],
    "metrics": {
      "regions": ["UK", "EU"],
      "pricingBasis": "Monthly plan by shipment band, or free pay-per-label",
      "cheapestPaidUSD": 38.42,
      "entryShipments": null,
      "usersIncluded": null,
      "ukCarriers": ["Royal Mail", "DPD", "Evri", "DHL", "UPS", "InPost"],
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
      "trustpilot": { "score": null, "reviews": null },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": null, "reviews": null }
    },
    "scores": { "value": 3, "ease": 4, "depth": 4, "team": 4, "free": 3 },
    "commercial": null,
    "api": true,
    "bestFor": "UK and European shops that want strong returns handling and a wide choice of European carriers.",
    "strategy": "Freemium pay-per-label entry, then monthly plans banded by shipment volume, plus margin on pre-negotiated carrier rates.",
    "strengths": ["Wide UK and EU carrier choice", "Good returns portal", "Free entry plan"],
    "weaknesses": ["No meaningful US coverage", "Plan limits tied to shipment bands", "Prices change often"],
    "confidence": "low - vendor site and search unavailable during this update; GBP plan prices and shipment bands are estimates",
    "sources": ["https://www.sendcloud.com/pricing/"]
  },
  {
    "id": "veeqo",
    "name": "Veeqo",
    "company": "Amazon (Veeqo)",
    "url": "https://www.veeqo.com/pricing",
    "category": "shipping",
    "pricingModel": "usage",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "perSeat": false,
        "quota": "Free software; pay only for postage",
        "highlights": ["Discounted carrier rates", "Inventory and order management", "Amazon Shipping integration"]
      }
    ],
    "metrics": {
      "regions": ["UK", "US"],
      "pricingBasis": "Free software funded by carrier rates; pay postage only",
      "cheapestPaidUSD": null,
      "entryShipments": "unlimited",
      "usersIncluded": "unlimited",
      "ukCarriers": ["Royal Mail", "DPD", "Evri", "UPS", "Amazon Shipping"],
      "usCarriers": ["USPS", "UPS", "FedEx", "Amazon Shipping"],
      "discountedRates": true,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": false,
      "returnsPortal": false,
      "inventory": true,
      "integrations": 4,
      "apiAvailable": false
    },
    "ratings": {
      "trustpilot": { "score": null, "reviews": null },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": null, "reviews": null }
    },
    "scores": { "value": 5, "ease": 3, "depth": 4, "team": 4, "free": 5 },
    "commercial": null,
    "api": false,
    "bestFor": "Amazon and multi-channel sellers in the UK or US who want free shipping software with inventory management included.",
    "strategy": "Software given away free by Amazon to win shipping volume; monetised through carrier rates and Amazon Shipping.",
    "strengths": ["Completely free software", "Inventory and warehouse tools included", "Strong Amazon integration"],
    "weaknesses": ["Tied to Amazon's priorities", "Setup is more complex", "Fewer branding options"],
    "confidence": "medium - Veeqo's free model is well known, but features and carrier lists are from prior knowledge and not re-verified",
    "sources": ["https://www.veeqo.com/pricing"]
  },
  {
    "id": "easyship",
    "name": "Easyship",
    "company": "Easyship Pte Ltd",
    "url": "https://www.easyship.com/pricing",
    "category": "shipping",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "perSeat": false,
        "quota": "Around 50 shipments a month",
        "highlights": ["Discounted global rates", "Duties and taxes calculator"]
      },
      {
        "name": "Plus",
        "price": 29,
        "perSeat": false,
        "estimate": true,
        "quota": "Around 500 shipments a month",
        "highlights": ["Branded tracking", "Automation rules", "More users"]
      },
      {
        "name": "Premier",
        "price": 69,
        "perSeat": false,
        "estimate": true,
        "quota": "Around 2,000 shipments a month",
        "highlights": ["Returns management", "Priority support"]
      },
      {
        "name": "Enterprise",
        "price": null,
        "perSeat": false,
        "custom": true,
        "quota": "Custom volume",
        "highlights": ["Dedicated account manager"]
      }
    ],
    "metrics": {
      "regions": ["US", "UK", "CA", "AU", "HK", "SG"],
      "pricingBasis": "Monthly plan by shipment volume with discounted global rates",
      "cheapestPaidUSD": 29,
      "entryShipments": 500,
      "usersIncluded": null,
      "ukCarriers": ["Royal Mail", "Evri", "DHL", "UPS", "FedEx"],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL"],
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
      "trustpilot": { "score": null, "reviews": null },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": null, "reviews": null }
    },
    "scores": { "value": 4, "ease": 4, "depth": 4, "team": 3, "free": 4 },
    "commercial": null,
    "api": true,
    "bestFor": "Sellers shipping internationally who need landed-cost duties and taxes shown at checkout.",
    "strategy": "Free entry plan and volume-tiered subscriptions, with margin on discounted international carrier rates.",
    "strengths": ["Strong cross-border tools", "Free plan", "Wide country coverage"],
    "weaknesses": ["Less UK-specific depth", "Automation lighter than ShipStation", "Plan details change often"],
    "confidence": "low - vendor site and search unavailable during this update; plan prices and allowances are estimates",
    "sources": ["https://www.easyship.com/pricing"]
  },
  {
    "id": "pirate_ship",
    "name": "Pirate Ship",
    "company": "Pirate Ship LLC",
    "url": "https://www.pirateship.com/pricing",
    "category": "shipping",
    "pricingModel": "usage",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "perSeat": false,
        "quota": "No subscription or label fees; pay postage only",
        "highlights": ["Deep USPS and UPS discounts", "Batch labels from spreadsheets", "Store imports"]
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
      "integrations": 2,
      "apiAvailable": false
    },
    "ratings": {
      "trustpilot": { "score": null, "reviews": null },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": null, "reviews": null }
    },
    "scores": { "value": 5, "ease": 5, "depth": 2, "team": 2, "free": 5 },
    "commercial": null,
    "api": false,
    "bestFor": "US small businesses and hobby sellers who just want the cheapest USPS and UPS labels with no subscription.",
    "strategy": "No fees to the seller; revenue comes from carrier agreements on the postage it sells.",
    "strengths": ["Free with no label fees", "Very easy to use", "Cheap USPS and UPS rates"],
    "weaknesses": ["US only", "Only USPS and UPS", "No automation or own carrier accounts"],
    "confidence": "medium - free model and US-only carriers are well known; details from prior knowledge, not re-verified",
    "sources": ["https://www.pirateship.com/pricing"]
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
        "quota": "Around 50 shipments a month",
        "highlights": ["Discounted USPS rates", "Basic store integrations"]
      },
      {
        "name": "Basic",
        "price": 29,
        "perSeat": false,
        "estimate": true,
        "quota": "Around 500 shipments a month",
        "highlights": ["Automation rules", "Branded tracking emails"]
      },
      {
        "name": "Plus",
        "price": 69,
        "perSeat": false,
        "estimate": true,
        "quota": "Around 1,500 shipments a month",
        "highlights": ["Inventory management", "Customer marketing tools"]
      },
      {
        "name": "Select",
        "price": 99,
        "perSeat": false,
        "estimate": true,
        "quota": "Around 3,000 shipments a month",
        "highlights": ["Higher volume", "More users"]
      }
    ],
    "metrics": {
      "regions": ["US"],
      "pricingBasis": "Monthly plan by shipment volume",
      "cheapestPaidUSD": 29,
      "entryShipments": 500,
      "usersIncluded": null,
      "ukCarriers": [],
      "usCarriers": ["USPS", "UPS", "FedEx", "DHL"],
      "discountedRates": true,
      "ownCarrierAccounts": true,
      "automationRules": true,
      "brandedTracking": true,
      "returnsPortal": false,
      "inventory": true,
      "integrations": 4,
      "apiAvailable": true
    },
    "ratings": {
      "trustpilot": { "score": null, "reviews": null },
      "g2": { "score": null, "reviews": null },
      "capterra": { "score": null, "reviews": null }
    },
    "scores": { "value": 4, "ease": 4, "depth": 3, "team": 3, "free": 3 },
    "commercial": null,
    "api": true,
    "bestFor": "US online stores that want shipping plus simple inventory and customer email tools in one subscription.",
    "strategy": "Free starter tier, then volume-tiered monthly plans; shares ShipStation's parent and carrier deals.",
    "strengths": ["Free starter plan", "Inventory tools on mid tiers", "Discounted US postage"],
    "weaknesses": ["US only", "Smaller integration list than ShipStation", "Plan details change often"],
    "confidence": "low - vendor site and search unavailable during this update; plan prices and allowances are estimates",
    "sources": ["https://shippingeasy.com/pricing/"]
  }
]
