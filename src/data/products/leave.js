// Researched 2026-09-26. Prices are USD list prices; see each product's sources and confidence note.
export default [
  {
    "id": "vacation_tracker",
    "name": "Vacation Tracker",
    "company": "Vacation Tracker (vacationtracker.io)",
    "url": "https://vacationtracker.io/pricing/",
    "category": "leave",
    "pricingModel": "per_seat",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "quota": "Unlimited users; 1 leave type, 1 approver",
        "highlights": [
          "Slack, Teams, Google Workspace bots",
          "One leave type only",
          "Single approver"
        ]
      },
      {
        "name": "Core",
        "price": 2,
        "annual": 1.8,
        "minMonthly": 50,
        "quota": "Per active user; $50/mo minimum; 3 locations, 10 departments",
        "highlights": [
          "Unlimited leave policies",
          "Reports and API access",
          "Up to 3 locations"
        ]
      },
      {
        "name": "Complete",
        "price": 4,
        "annual": 3.6,
        "minMonthly": 100,
        "quota": "Per active user; $100/mo minimum; unlimited locations/departments",
        "highlights": [
          "Accruals and hourly leave",
          "Multi-level approvals",
          "Scheduled reports"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "freeTierUserLimit": null,
      "slackTeams": true,
      "accruals": true,
      "halfDayHourly": true,
      "approvalWorkflowLevels": "Single approver (Free/Core); multi-level approvals on Complete",
      "calendarSync": [
        "Google",
        "Outlook",
        "iCal"
      ],
      "reportingDepth": 3,
      "hrisBreadth": 1,
      "mobileApp": false,
      "publicHolidayCountries": "Many countries (auto-import); exact count not verified"
    },
    "ratings": {
      "trustpilot": {
        "score": 3.5,
        "reviews": 2
      },
      "g2": {
        "score": 4.5,
        "reviews": 43
      },
      "capterra": {
        "score": 4.7,
        "reviews": 117
      }
    },
    "scores": {
      "value": 5,
      "ease": 4,
      "depth": 3,
      "team": 3,
      "free": 5
    },
    "commercial": null,
    "api": true,
    "bestFor": "Remote teams that live in Slack or Microsoft Teams and want leave requests handled in chat.",
    "strategy": "Freemium land-and-expand: free forever with one leave type, then per-active-user tiers with monthly minimums and ~10% annual discount.",
    "strengths": [
      "Lives inside Slack/Teams/Google Workspace",
      "Free plan with unlimited users",
      "Cheap per-user pricing"
    ],
    "weaknesses": [
      "Minimum monthly charges ($50/$100)",
      "Accruals, hourly, multi-level approval gated to Complete",
      "No dedicated native mobile app (uses Slack/Teams apps); not verified"
    ],
    "confidence": "medium - prices consistent across search snippets (official page not fetchable); annual per-month is ~10% estimate (annual priced in user bands); Trustpilot has only 2 reviews; mobile app flag uncertain",
    "sources": [
      "https://vacationtracker.io/pricing/",
      "https://vacationtracker.io/blog/best-free-leave-tracking-tools/",
      "https://www.capterra.com/p/189276/Vacation-Tracker/",
      "https://www.g2.com/products/vacation-tracker/reviews",
      "https://www.trustpilot.com/review/vacationtracker.io"
    ]
  },
  {
    "id": "timetastic",
    "name": "Timetastic",
    "company": "Timetastic Ltd (UK)",
    "url": "https://timetastic.co.uk/pricing/",
    "category": "leave",
    "pricingModel": "per_seat",
    "tiers": [
      {
        "name": "Timetastic",
        "price": 1.5,
        "quota": "Per user, monthly; no minimum; 30-day trial (GBP 1.20)",
        "highlights": [
          "No minimum team size",
          "Wallchart and leave requests",
          "Mobile apps included"
        ]
      },
      {
        "name": "Pro",
        "price": 2.5,
        "quota": "Per user, monthly; no minimum (GBP 2.00)",
        "highlights": [
          "Accruals and capped leave types",
          "Slack/Teams and calendar sync",
          "SSO and absence trend reports",
          "Burnout risk alerts"
        ]
      }
    ],
    "metrics": {
      "freeTier": false,
      "freeTierUserLimit": null,
      "slackTeams": true,
      "accruals": true,
      "halfDayHourly": true,
      "approvalWorkflowLevels": "Single approver per department (with backup approvers); no multi-stage chain",
      "calendarSync": [
        "Google",
        "Outlook",
        "iCal"
      ],
      "reportingDepth": 3,
      "hrisBreadth": 1,
      "mobileApp": true,
      "publicHolidayCountries": "3,000+ regions (per vendor)"
    },
    "ratings": {
      "trustpilot": {
        "score": 4.9,
        "reviews": 90
      },
      "g2": {
        "score": 4.7,
        "reviews": 32
      },
      "capterra": {
        "score": 4.7,
        "reviews": 588
      }
    },
    "scores": {
      "value": 4,
      "ease": 5,
      "depth": 3,
      "team": 3,
      "free": 1
    },
    "commercial": null,
    "api": true,
    "bestFor": "Small and mid-size teams (esp. UK) wanting a dead-simple leave wallchart with no minimum spend.",
    "strategy": "Simple two-tier per-user monthly subscription with a 30-day trial and no minimums or annual lock-in.",
    "strengths": [
      "Very simple, well-loved UX",
      "No minimums, low per-user price",
      "Excellent reviews and iOS/Android apps"
    ],
    "weaknesses": [
      "No free tier",
      "Accruals/integrations largely on Pro",
      "Monthly billing only, no annual discount"
    ],
    "confidence": "medium - USD $1.50/$2.50 from third-party snippets (official page priced in local currency, GBP 1.20/2.00); Trustpilot review count approximate (~90); hourly booking not fully confirmed",
    "sources": [
      "https://timetastic.co.uk/pricing/",
      "https://www.leavewizard.com/timetastic-pricing/",
      "https://saasrat.com/products/timetastic",
      "https://www.trustpilot.com/review/timetastic.co.uk",
      "https://www.capterra.com/p/146655/Timetastic/reviews/"
    ]
  },
  {
    "id": "day_off",
    "name": "Day Off",
    "company": "Enozom (day-off.app)",
    "url": "https://day-off.app/pricing/",
    "category": "leave",
    "pricingModel": "per_seat",
    "tiers": [
      {
        "name": "Free",
        "price": 0,
        "maxUsers": 10,
        "quota": "Up to 10 employees",
        "highlights": [
          "Leave types and accruals",
          "Shared team calendar",
          "Single-level approvals"
        ]
      },
      {
        "name": "Pro",
        "price": 2,
        "minMonthly": 20,
        "quota": "Per user; $20/mo minimum; 14-day trial",
        "highlights": [
          "Integrations and API",
          "Custom leave types",
          "Detailed reporting"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "freeTierUserLimit": 10,
      "slackTeams": true,
      "accruals": true,
      "halfDayHourly": true,
      "approvalWorkflowLevels": "Single level on Free; multi-level chain (up to 2 approvers) on Pro",
      "calendarSync": [
        "Google",
        "Outlook"
      ],
      "reportingDepth": 3,
      "hrisBreadth": 1,
      "mobileApp": true,
      "publicHolidayCountries": "Many countries (import by country); exact count not verified"
    },
    "ratings": {
      "trustpilot": {
        "score": 3.7,
        "reviews": null
      },
      "g2": {
        "score": null,
        "reviews": 2
      },
      "capterra": {
        "score": 4.7,
        "reviews": 90
      }
    },
    "scores": {
      "value": 4,
      "ease": 4,
      "depth": 3,
      "team": 2,
      "free": 4
    },
    "commercial": null,
    "api": true,
    "bestFor": "Micro and small businesses wanting a free, mobile-first PTO tracker.",
    "strategy": "Freemium: free up to 10 employees, then flat $2/user/mo Pro with a $20 minimum.",
    "strengths": [
      "Generous free plan for ≤10 users",
      "Native iOS/Android apps",
      "Accruals and hourly leave even on low tiers"
    ],
    "weaknesses": [
      "$20 monthly minimum on Pro",
      "Small review footprint outside Capterra",
      "Trustpilot score only average"
    ],
    "confidence": "medium - note product domain is day-off.app (dayoffapp.com not seen); pricing from snippets; annual pricing not found; Trustpilot count and G2 score unknown",
    "sources": [
      "https://day-off.app/pricing/",
      "https://www.capterra.com/p/182523/Day-Off-Leave-Tracker/",
      "https://www.trustpilot.com/review/day-off.app",
      "https://day-off.app/leave-management-app/"
    ]
  },
  {
    "id": "bamboohr",
    "name": "BambooHR",
    "company": "BambooHR LLC",
    "url": "https://www.bamboohr.com/pricing/",
    "category": "leave",
    "pricingModel": "per_seat",
    "tiers": [
      {
        "name": "Core",
        "price": 10,
        "minMonthly": 250,
        "custom": false,
        "quota": "Per employee >25 staff; flat ~$250/mo for ≤25",
        "highlights": [
          "HR records and time off",
          "Onboarding and reporting",
          "Mobile app"
        ],
        "estimate": true
      },
      {
        "name": "Pro",
        "price": 17,
        "custom": false,
        "quota": "Per employee (estimate)",
        "highlights": [
          "Adds performance management",
          "Engagement surveys",
          "Advanced HR workflows"
        ],
        "estimate": true
      },
      {
        "name": "Elite",
        "price": 25,
        "custom": false,
        "quota": "Per employee (estimate)",
        "highlights": [
          "Adds compensation tools",
          "Premium support and security"
        ],
        "estimate": true
      }
    ],
    "metrics": {
      "freeTier": false,
      "freeTierUserLimit": null,
      "slackTeams": true,
      "accruals": true,
      "halfDayHourly": true,
      "approvalWorkflowLevels": "Configurable multi-step approval workflows",
      "calendarSync": [
        "Outlook",
        "Google (iCal feed)"
      ],
      "reportingDepth": 4,
      "hrisBreadth": 5,
      "mobileApp": true,
      "publicHolidayCountries": "Holiday calendars configured manually per company; no auto country import verified"
    },
    "ratings": {
      "trustpilot": {
        "score": 2.6,
        "reviews": 131
      },
      "g2": {
        "score": 4.4,
        "reviews": 5641
      },
      "capterra": {
        "score": 4.6,
        "reviews": 3463
      }
    },
    "scores": {
      "value": 2,
      "ease": 3,
      "depth": 5,
      "team": 5,
      "free": 1
    },
    "commercial": null,
    "api": true,
    "bestFor": "SMBs (25-500 staff) wanting a full HRIS where time off is one module.",
    "strategy": "Quote-based per-employee-per-month tiers with a flat minimum for small companies, upselling payroll, benefits and performance add-ons.",
    "strengths": [
      "Full HRIS with payroll/benefits add-ons",
      "Mature reporting and workflows",
      "Huge review base on G2/Capterra"
    ],
    "weaknesses": [
      "Quote-based pricing, ~$250/mo floor",
      "Overkill if you only need leave tracking",
      "Poor Trustpilot score (support, price increases)"
    ],
    "confidence": "low-medium - BambooHR does not publish prices; Core/Pro/Elite $10/$17/$25 and $250 floor are third-party estimates; old Essentials/Advantage names replaced; Trustpilot varies 2.6-3.4 across pages",
    "sources": [
      "https://www.bamboohr.com/pricing/",
      "https://www.pin.com/blog/bamboohr-pricing/",
      "https://prepzo.ai/blog/bamboohr-pricing",
      "https://www.trustpilot.com/review/bamboohr.com",
      "https://www.g2.com/sellers/bamboohr",
      "https://www.capterra.com/p/110968/BambooHR/reviews/"
    ]
  },
  {
    "id": "deel",
    "name": "Deel (HR / Time Off)",
    "company": "Deel Inc.",
    "url": "https://www.deel.com/pricing",
    "category": "leave",
    "pricingModel": "hybrid",
    "tiers": [
      {
        "name": "Deel HR (Free)",
        "price": 0,
        "maxUsers": 200,
        "quota": "Free up to 200 employees",
        "highlights": [
          "HRIS, org chart, PTO tracking",
          "Performance basics",
          "Free up to 200 people"
        ]
      },
      {
        "name": "Deel HR (200+ staff)",
        "price": 5,
        "quota": "Per employee beyond 200",
        "highlights": [
          "Advanced workflows",
          "Audit logs and custom roles"
        ],
        "freeSeats": 200
      },
      {
        "name": "Global Payroll",
        "price": 29,
        "custom": false,
        "quota": "Per employee; entity required",
        "highlights": [
          "Multi-country payroll",
          "Setup fees may apply"
        ]
      },
      {
        "name": "Employer of Record",
        "price": 599,
        "custom": false,
        "quota": "Per employee; volume discounts",
        "highlights": [
          "Hire without local entity",
          "Compliance and benefits handled"
        ]
      }
    ],
    "metrics": {
      "freeTier": true,
      "freeTierUserLimit": 200,
      "slackTeams": true,
      "accruals": true,
      "halfDayHourly": true,
      "approvalWorkflowLevels": "Configurable approval policies (manager/multi-step); details not verified",
      "calendarSync": [
        "Google",
        "Outlook"
      ],
      "reportingDepth": 4,
      "hrisBreadth": 5,
      "mobileApp": true,
      "publicHolidayCountries": "100+ countries with localized holiday calendars"
    },
    "ratings": {
      "trustpilot": {
        "score": 4.6,
        "reviews": 8959
      },
      "g2": {
        "score": 4.8,
        "reviews": 13900
      },
      "capterra": {
        "score": 4.8,
        "reviews": 4260
      }
    },
    "scores": {
      "value": 4,
      "ease": 3,
      "depth": 4,
      "team": 5,
      "free": 5
    },
    "commercial": null,
    "api": true,
    "bestFor": "Distributed/international companies already using or considering Deel for payroll, EOR or contractors.",
    "strategy": "Free HRIS/time-off as a loss leader to cross-sell high-margin global payroll ($29), contractor ($49) and EOR ($599) per-worker services.",
    "strengths": [
      "HRIS incl. PTO free up to 200 staff",
      "Global compliance and holiday calendars",
      "Pairs with payroll/EOR/contractor services"
    ],
    "weaknesses": [
      "PTO module less deep than dedicated tools",
      "Real revenue from pricey payroll/EOR",
      "Complex product surface"
    ],
    "confidence": "medium - HR free ≤200 and $5 beyond from multiple third-party 2026 guides; payroll/EOR list prices widely reported; G2/Capterra counts approximate (single secondary source); Trustpilot count from snippet",
    "sources": [
      "https://www.deel.com/pricing",
      "https://www.pin.com/blog/deel-pricing/",
      "https://www.compono.com/articles/deel-hr-pricing-guide-2026",
      "https://www.trustpilot.com/review/deel.com",
      "https://www.gloroots.com/blog/deel-reviews"
    ]
  }
]
