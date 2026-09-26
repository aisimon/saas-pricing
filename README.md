# Pricing Lens

A Vue 3 app for comparing how SaaS products price, how well they are rated, and what they could earn. The gallery holds 42 products in six industries:

| Category | Products |
| --- | --- |
| Leave tracking | Vacation Tracker, Timetastic, Day Off, BambooHR, Deel |
| AI tools | ChatGPT, Claude, Google Gemini, Microsoft Copilot, Perplexity, Mistral Le Chat, Notion AI |
| AI video generation | Runway, Pika, Luma Dream Machine, Kling AI, Synthesia, HeyGen, Google Flow (Veo) |
| Music composing | Suno, Udio, AIVA, Soundraw, Boomy, Mubert, Beatoven.ai |
| Image editing | Adobe Photoshop, Canva, Midjourney, Picsart, Photoroom, Pixlr, Fotor, Affinity by Canva |
| Shipping & fulfilment (UK and US) | Shiptheory, ShipStation, Shippo, Sendcloud, Veeqo, Easyship, Pirate Ship, ShippingEasy |

## Features

- A card gallery grouped by category, with type-to-search (press `/`), category filters, a "has free plan" filter and sorting.
- Compare up to 6 products, including products from different industries:
  - **Same category**: the category's own metrics (for example video seconds per dollar, cost per track, context window, minimum charge), with the best value in each row marked.
  - **Cross-category**: shared rows (pricing structure, cost at your team size, reputation, editorial scores, business model) plus a combined stack budget. Category-specific rows are collapsed and only fill in for the products they apply to.
- A monthly cost curve by team size (total, or per user so minimum charges show up) on any plan, or on the cheapest plan that fits.
- A vendor revenue and gross-profit forecast with adjustable starting users, growth, churn, horizon and per-industry gross margins.
- 9 currencies: USD, GBP, EUR, HKD, JPY, CNY, SGD, AUD, CAD. Rates are a dated snapshot in `src/data/fx.js`.
- 3 languages: English, Traditional Chinese (Hong Kong) and Simplified Chinese. Simplified Chinese product text is converted from the Traditional text with OpenCC, plus a list of Hong Kong to Mainland word swaps.
- 5 colour palettes: Sage, Harbor, Orchid, Midnight and Terminal.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Deploy

`.github/workflows/deploy-pages.yml` builds the app and publishes `dist/` to GitHub Pages on every push to `main`, and can also be run by hand from the Actions tab. Turn it on once under **Settings → Pages → Source: GitHub Actions**. The site is served at `https://aisimon.github.io/saas-pricing/`.

## Data

- `src/data/products/<category>.js`: English product data (tiers, metrics, ratings, editorial scores, sources, confidence note).
  Every record carries `"currency": "USD"` and all numeric price fields are US dollars; convert other currencies with `src/data/fx.js` before writing them (the app refuses to load any other currency).
- `src/data/products/<category>.zh.js`: Traditional Chinese text for each product.
- `src/data/categories.js`: each category's comparison metrics and the "winner" insights it derives.
- `vacation-tracker-products.js`: the original leave-tracker dataset this project started from.

Prices and ratings were researched on 2026-09-26, mostly from third-party pricing guides and search snippets, because many vendor and review sites could not be fetched directly. Each product records its sources and a confidence note, and prices marked ≈ are estimates. Trustpilot scores for mass-market consumer apps skew low, so the reputation index blends Trustpilot, G2 and Capterra, weighted by review count. Most AI assistant ratings could not be found and are shown as missing rather than guessed. Editorial scores and gross margins are estimates for comparison, not vendor figures.

The shipping category was added without live research: vendor sites and web search were unavailable, so its prices come from prior knowledge, are all marked as estimates, and its ratings are left empty until they can be verified. Shipping plans are priced by parcel volume rather than seats, so that category compares cost per label, and the forecast counts merchant accounts for those products.
