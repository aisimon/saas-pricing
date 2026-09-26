export function tierUnitPrice(tier, billing) {
  return billing === 'annual' && tier.annual != null ? tier.annual : tier.price
}

export const availableFor = (tier, billing) => !(tier.annualOnly && billing !== 'annual')

export function tierCost(tier, users, billing) {
  if (!tier || tier.custom || tier.price == null || !availableFor(tier, billing)) return null
  if (tier.maxUsers && users > tier.maxUsers) return null
  const unit = tierUnitPrice(tier, billing)
  const seats = Math.max(Math.max(users, tier.minSeats || 1) - (tier.freeSeats || 0), 0)
  const base =
    tier.perSeat === false ? unit * (tier.seatsIncluded ? Math.ceil(users / tier.seatsIncluded) : 1) : unit * seats
  return Math.max(base, tier.minMonthly || 0)
}

export const paidTiers = (p, billing = 'monthly') =>
  p.tiers.filter((t) => !t.custom && t.price > 0 && availableFor(t, billing))
export const hasFreeTier = (p) => p.tiers.some((t) => t.price === 0 && !t.custom)

export function entryPrice(p, billing = 'monthly') {
  const prices = paidTiers(p, billing).map((t) => tierUnitPrice(t, billing))
  return prices.length ? Math.min(...prices) : null
}

export function topPrice(p, billing = 'monthly') {
  const prices = paidTiers(p, billing).map((t) => tierUnitPrice(t, billing))
  return prices.length ? Math.max(...prices) : null
}

export function defaultTierIndex(p, billing = 'monthly') {
  const i = p.tiers.findIndex((t) => !t.custom && t.price > 0 && availableFor(t, billing))
  return i === -1 ? 0 : i
}

// Falls back to the default plan when the chosen one isn't sold under the current billing period.
export function resolveChoice(p, choice, billing = 'monthly') {
  if (choice === 'auto') return 'auto'
  const tier = Number.isInteger(choice) ? p.tiers[choice] : null
  return tier && !tier.custom && availableFor(tier, billing) ? choice : defaultTierIndex(p, billing)
}

export function costAt(p, users, choice, billing) {
  const c = resolveChoice(p, choice, billing)
  if (c !== 'auto') return tierCost(p.tiers[c], users, billing)
  const costs = p.tiers.map((t) => tierCost(t, users, billing)).filter((v) => v != null)
  return costs.length ? Math.min(...costs) : null
}

export function tierAt(p, users, choice, billing) {
  const c = resolveChoice(p, choice, billing)
  if (c !== 'auto') return p.tiers[c]
  let best = null
  let bestCost = Infinity
  for (const t of p.tiers) {
    const v = tierCost(t, users, billing)
    if (v != null && v < bestCost) {
      best = t
      bestCost = v
    }
  }
  return best
}

// Trustpilot skews negative for mass-market consumer apps; blend with G2/Capterra, weighting by review volume.
export function reputation(p) {
  const r = p.ratings || {}
  let sum = 0
  let weight = 0
  for (const key of ['trustpilot', 'g2', 'capterra']) {
    const s = r[key]
    if (s && s.score != null) {
      const w = Math.log10((s.reviews || 0) + 10)
      sum += s.score * w
      weight += w
    }
  }
  return weight ? sum / weight : null
}

export function growthSeries(p, choice, billing, margin, { start, rate, churn, months }, perAccount = false) {
  const out = []
  let users = start
  let cumGp = 0
  let cumRevenue = 0
  for (let m = 1; m <= months; m++) {
    if (m > 1) users = users * (1 + (rate - churn) / 100)
    const seats = Math.max(1, Math.round(users))
    const unit = perAccount ? costAt(p, 1, choice, billing) : null
    const revenue = perAccount ? (unit == null ? null : unit * seats) : costAt(p, seats, choice, billing)
    const gp = revenue == null ? null : revenue * margin
    if (revenue != null) {
      cumGp += gp
      cumRevenue += revenue
    }
    out.push({ month: m, users: seats, revenue, gp, cumGp: revenue == null ? null : cumGp, cumRevenue })
  }
  return out
}
