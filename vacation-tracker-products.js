/*
Vacation tracker–style products with costing strategy.
Use this as a comment or data file; each product can be rendered into a comparison table.
*/

const vacationTrackerProducts = [
  {
    id: "vacation_tracker",
    name: "Vacation Tracker",
    type: "Dedicated leave tracker",
    pricingModel: "Per active user per month, with minimum monthly charge",
    entryPriceUSD: 2.0,
    entryPriceNote: "$2/user/month (Core), $50/month minimum; annual billing ≈10% discount",
    tiers: [
      {
        name: "Free",
        pricePerUserPerMonth: 0,
        minimumMonthlyCharge: 0,
        keyLimits: "Basic leave requests/approvals, limited reporting, single admin"
      },
      {
        name: "Core",
        pricePerUserPerMonth: 2,
        minimumMonthlyCharge: 50,
        keyFeatures: "PTO accruals, calendar integrations, unlimited locations/departments, Slack/Teams"
      },
      {
        name: "Complete",
        pricePerUserPerMonth: 4,
        minimumMonthlyCharge: 100,
        keyFeatures: "Advanced controls (notice periods, duration limits, max concurrent leave), richer reporting"
      }
    ],
    costingStrategy: "Low per‑user price but enforced minimums to guarantee MRR; upsell via ‘advanced features’ and higher tier.",
    bestFor: "Chat‑native teams (Slack/Teams) that want a simple, focused PTO tracker"
  },
  {
    id: "timetastic",
    name: "Timetastic",
    type: "Dedicated leave tracker",
    pricingModel: "Flat per‑user per month, no minimum",
    entryPriceUSD: 1.5,
    entryPriceNote: "$1.50–$2.50/user/month depending on plan; no free tier, no minimum",
    tiers: [
      {
        name: "Business",
        pricePerUserPerMonth: 1.5,
        minimumMonthlyCharge: 0,
        keyFeatures: "Basic holiday tracking, calendar sync, simple approvals"
      },
      {
        name: "Pro",
        pricePerUserPerMonth: 2.5,
        minimumMonthlyCharge: 0,
        keyFeatures: "Advanced insights, burnout alerts, more integrations"
      }
    ],
    costingStrategy: "Very low, transparent per‑seat pricing with no minimums; compete on simplicity and wellbeing features.",
    bestFor: "Small–mid teams wanting a straightforward holiday tracker without minimum charges"
  },
  {
    id: "day_off",
    name: "Day Off",
    type: "Dedicated leave tracker",
    pricingModel: "Per‑user per month with small minimum",
    entryPriceUSD: 2.0,
    entryPriceNote: "From ~$2/user/month with ~$20/month minimum; free tier for very small teams",
    tiers: [
      {
        name: "Free",
        pricePerUserPerMonth: 0,
        minimumMonthlyCharge: 0,
        keyLimits: "Up to ~10 users, basic leave tracking"
      },
      {
        name: "Pro",
        pricePerUserPerMonth: 2,
        minimumMonthlyCharge: 20,
        keyFeatures: "Custom leave types, calendar sync, Slack/Teams integration"
      }
    ],
    costingStrategy: "Freemium to attract small teams; low per‑seat price with a small minimum to ensure revenue as teams grow.",
    bestFor: "Small teams that may start free and then scale with a simple paid plan"
  },
  {
    id: "bamboohr",
    name: "BambooHR",
    type: "All‑in‑one HRIS with leave module",
    pricingModel: "Per employee per month, often with minimum monthly charge",
    entryPriceUSD: 10.0,
    entryPriceNote: "From ~$10/employee/month; often ~$250/month minimum for small accounts",
    tiers: [
      {
        name: "Essentials",
        pricePerUserPerMonth: 10,
        minimumMonthlyCharge: 250,
        keyFeatures: "Core HRIS + PTO/leave, ‘Who’s Out’ calendar, basic reporting"
      },
      {
        name: "Advantage",
        pricePerUserPerMonth: null,
        minimumMonthlyCharge: null,
        keyFeatures: "More advanced HR workflows, integrations, analytics (pricing typically custom/quoted)"
      }
    ],
    costingStrategy: "Premium HRIS positioning; higher per‑seat price justified by full HR suite, not just leave tracking.",
    bestFor: "SMBs that want leave tracking as part of a broader HR system"
  },
  {
    id: "deel",
    name: "Deel (HR/Time Off module)",
    type: "Global HR/payroll platform with time‑off",
    pricingModel: "Per user per month; HR module sometimes free, paid via payroll/add‑ons",
    entryPriceUSD: 5.0,
    entryPriceNote: "HR/time‑off features often bundled; payroll from ~$5/employee/month; pricing can be modular",
    tiers: [
      {
        name: "HR / Time Off",
        pricePerUserPerMonth: 0,
        minimumMonthlyCharge: 0,
        keyFeatures: "Basic time‑off requests/approvals, global compliance features when combined with payroll"
      },
      {
        name: "Payroll + HR",
        pricePerUserPerMonth: 5,
        minimumMonthlyCharge: 0,
        keyFeatures: "Full payroll, contracts, compliance, time‑off as part of global workforce management"
      }
    ],
    costingStrategy: "Land with free/low‑cost HR/time‑off, monetize via payroll, compliance, and global hiring add‑ons.",
    bestFor: "Distributed/global teams needing leave tracking inside a full international HR/payroll stack"
  }
];

module.exports = vacationTrackerProducts;
