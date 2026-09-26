<script setup>
import { computed, ref } from 'vue'
import { state, removeCompare, setCompare } from '../store.js'
import { t, tx, pText } from '../i18n/index.js'
import { PRODUCT_BY_ID } from '../data/products/index.js'
import { CATEGORY_BY_ID } from '../data/categories.js'
import {
  costAt,
  defaultTierIndex,
  entryPrice,
  growthSeries,
  hasFreeTier,
  paidTiers,
  reputation,
  tierAt,
  tierUnitPrice,
  topPrice,
} from '../lib/pricing.js'
import { money, moneyLocal, num, pct, toCurrency } from '../lib/format.js'
import { bestIds, formatMetric, metricRank } from '../lib/metrics.js'
import { useSeriesColor } from '../lib/colors.js'
import LineChart from './LineChart.vue'

const color = useSeriesColor()
const items = computed(() => state.compare.map((id) => PRODUCT_BY_ID[id]).filter(Boolean))
const cats = computed(() => [...new Set(items.value.map((p) => p.category))].map((id) => CATEGORY_BY_ID[id]))
const cross = computed(() => cats.value.length > 1)
const N = computed(() => Math.max(1, Math.round(state.users) || 1))

const SAMPLES = [
  { key: 'sample.leave', ids: ['vacation_tracker', 'timetastic', 'day_off', 'bamboohr', 'deel'] },
  { key: 'sample.assistants', ids: ['chatgpt', 'claude', 'google_gemini', 'perplexity'] },
  { key: 'sample.video', ids: ['runway', 'kling_ai', 'heygen', 'google_flow_veo'] },
  { key: 'sample.creator', ids: ['chatgpt', 'heygen', 'suno', 'canva'] },
]

// ---------- plan choice & money helpers ----------
const choiceOf = (p) => state.tierChoice[p.id] ?? defaultTierIndex(p)
function setChoice(p, v) {
  state.tierChoice = { ...state.tierChoice, [p.id]: v === 'auto' ? 'auto' : Number(v) }
}
const costN = (p) => costAt(p, N.value, choiceOf(p), state.billing)
const tierN = (p) => tierAt(p, N.value, choiceOf(p), state.billing)
const marginOf = (p) => state.margins[p.category]
const fm = (usd, opts) => money(usd, state.currency, state.locale, opts)
const fnum = (v, opts) => num(v, state.locale, opts)
const dash = '—'

function tierOptionLabel(tier) {
  if (tier.custom) return `${tier.name} · ${t('card.quote')}`
  if (tier.price === 0) return `${tier.name} · ${t('card.free')}`
  return `${tier.name} · ${fm(tierUnitPrice(tier, state.billing))}`
}

// ---------- team size (log slider 1 → 10,000) ----------
const slider = computed({
  get: () => Math.round((Math.log10(N.value) / 4) * 1000),
  set: (v) => {
    const raw = 10 ** ((v / 1000) * 4)
    state.users = raw < 20 ? Math.round(raw) : raw < 200 ? Math.round(raw / 5) * 5 : Math.round(raw / 50) * 50
  },
})
const PRESETS = [5, 10, 25, 50, 100, 250, 1000]

// ---------- matrix ----------
function ratingCell(p, k) {
  const r = p.ratings[k]
  if (!r || r.score == null) return dash
  return r.reviews ? `${r.score.toFixed(1)} · ${fnum(r.reviews, { compact: true })}` : r.score.toFixed(1)
}
const yn = (v) => (v === true ? `✓ ${t('yes')}` : v === false ? `✕ ${t('no')}` : dash)
const dots = (v) => (v == null ? dash : `${'●'.repeat(v)}${'○'.repeat(5 - v)}`)

const groups = computed(() => {
  const n = N.value
  const g = [
    {
      id: 'overview',
      title: t('grp.overview'),
      rows: [
        { id: 'cat', label: t('row.category'), cell: (p) => `${CATEGORY_BY_ID[p.category].glyph} ${tx(CATEGORY_BY_ID[p.category].name)}` },
        { id: 'company', label: t('row.company'), cell: (p) => p.company },
        { id: 'model', label: t('row.model'), cell: (p) => t(`model.${p.pricingModel}`) },
      ],
    },
    {
      id: 'pricing',
      title: t('grp.pricing'),
      rows: [
        { id: 'free', label: t('row.free'), cell: (p) => yn(hasFreeTier(p)), rank: (p) => (hasFreeTier(p) ? 1 : 0) },
        {
          id: 'entry',
          label: t('row.entry'),
          cell: (p) => {
            const tiers = paidTiers(p)
            return tiers.length ? fm(Math.min(...tiers.map((x) => tierUnitPrice(x, state.billing)))) : dash
          },
          rank: (p) => (entryPrice(p) == null ? null : -Math.min(...paidTiers(p).map((x) => tierUnitPrice(x, state.billing)))),
        },
        { id: 'top', label: t('row.top'), cell: (p) => (topPrice(p) == null ? dash : fm(topPrice(p))) },
        { id: 'plan', label: t('row.plan'), cell: (p) => tierN(p)?.name ?? dash },
        { id: 'min', label: t('row.min'), cell: (p) => (tierN(p)?.minMonthly ? fm(tierN(p).minMonthly) : dash) },
        {
          id: 'cost',
          label: t('row.costN', { n: fnum(n) }),
          cell: (p) => (costN(p) == null ? dash : (tierN(p)?.estimate ? '≈' : '') + fm(costN(p))),
          rank: (p) => (costN(p) == null ? null : -costN(p)),
          strong: true,
        },
        {
          id: 'perUser',
          label: t('row.perUserN'),
          cell: (p) => (costN(p) == null ? dash : fm(costN(p) / n)),
          rank: (p) => (costN(p) == null ? null : -costN(p)),
        },
        {
          id: 'annual',
          label: t('row.annualN', { n: fnum(n) }),
          cell: (p) => (costN(p) == null ? dash : fm(costN(p) * 12, { compact: true })),
          rank: (p) => (costN(p) == null ? null : -costN(p)),
        },
      ],
    },
    {
      id: 'reputation',
      title: t('grp.reputation'),
      rows: [
        ...['trustpilot', 'g2', 'capterra'].map((k) => ({
          id: k,
          label: t(`row.${k}`),
          cell: (p) => ratingCell(p, k),
          rank: (p) => p.ratings[k]?.score ?? null,
        })),
        {
          id: 'rep',
          label: t('row.reputation'),
          cell: (p) => (reputation(p) == null ? dash : `${reputation(p).toFixed(2)} / 5`),
          rank: (p) => reputation(p),
          strong: true,
        },
      ],
    },
    {
      id: 'editorial',
      title: t('grp.editorial'),
      rows: [
        ['value', 'row.value'],
        ['ease', 'row.ease'],
        ['depth', 'row.depth'],
        ['team', 'row.team'],
        ['free', 'row.freeScore'],
      ].map(([k, key]) => ({ id: 's-' + k, label: t(key), cell: (p) => dots(p.scores[k]), rank: (p) => p.scores[k] })),
    },
    {
      id: 'business',
      title: t('grp.business'),
      rows: [
        { id: 'commercial', label: t('row.commercial'), cell: (p) => (p.commercial == null ? t('na') : yn(p.commercial)), rank: (p) => (p.commercial == null ? null : +p.commercial) },
        { id: 'api', label: t('row.api'), cell: (p) => yn(p.api), rank: (p) => (p.api == null ? null : +p.api) },
        { id: 'margin', label: t('row.margin'), cell: (p) => pct(marginOf(p), state.locale) },
        {
          id: 'gp',
          label: t('row.gpN', { n: fnum(n) }),
          cell: (p) => (costN(p) == null ? dash : fm(costN(p) * marginOf(p))),
          rank: (p) => (costN(p) == null ? null : costN(p) * marginOf(p)),
          strong: true,
        },
        { id: 'strategy', label: t('row.strategy'), cell: (p) => pText(p, 'strategy'), text: true },
        { id: 'bestFor', label: t('row.bestFor'), cell: (p) => pText(p, 'bestFor'), text: true },
      ],
    },
  ]
  for (const c of cats.value) {
    g.push({
      id: 'cat-' + c.id,
      title: t('grp.metrics', { cat: tx(c.name) }),
      category: c.id,
      rows: c.metrics.map((m) => ({
        id: m.key,
        label: tx(m.label),
        cell: (p) => formatMetric(p, m),
        rank: (p) => metricRank(p, m),
        text: m.type === 'text',
      })),
    })
  }
  return g
})

const winners = computed(() => {
  const out = {}
  for (const g of groups.value) {
    for (const r of g.rows) {
      if (!r.rank) continue
      const pool = g.category ? items.value.filter((p) => p.category === g.category) : items.value
      out[g.id + ':' + r.id] = bestIds(pool, r.rank)
    }
  }
  return out
})
const applies = (g, p) => !g.category || g.category === p.category
const opened = ref(new Set())
const collapsed = (g) => cross.value && g.category && !opened.value.has(g.id)
function toggleGroup(g) {
  const next = new Set(opened.value)
  next.has(g.id) ? next.delete(g.id) : next.add(g.id)
  opened.value = next
}

// ---------- insights ----------
function argBest(list, fn, dir = 1) {
  let best = null
  let bestV = null
  for (const p of list) {
    const v = fn(p)
    if (v == null || Number.isNaN(v)) continue
    if (bestV == null || v * dir > bestV * dir) {
      best = p
      bestV = v
    }
  }
  return best ? { p: best, v: bestV } : null
}

const insights = computed(() => {
  const list = items.value
  const n = N.value
  const tiles = []
  const cheap = argBest(list, costN, -1)
  if (cheap)
    tiles.push({
      id: 'cheap',
      label: t('ins.cheapest', { n: fnum(n) }),
      value: fm(cheap.v),
      unit: t('ins.perMonth'),
      p: cheap.p,
      note: tierN(cheap.p)?.name,
    })
  const rep = argBest(list, reputation)
  if (rep) tiles.push({ id: 'rep', label: t('ins.bestRated'), value: rep.v.toFixed(2), unit: '/ 5', p: rep.p, note: t('ins.bestRatedNote') })
  const gp = argBest(list, (p) => (costN(p) == null ? null : costN(p) * marginOf(p)))
  if (gp && gp.v > 0)
    tiles.push({ id: 'gp', label: t('ins.topProfit'), value: fm(gp.v), unit: t('ins.perMonth'), p: gp.p, note: t('ins.topProfitNote', { n: fnum(n) }) })

  if (!cross.value && cats.value[0]) {
    const cat = cats.value[0]
    for (const d of cat.derived) {
      const w = argBest(list, (p) => d.value(p, { tier: tierN }), d.better === 'lower' ? -1 : 1)
      if (!w) continue
      let value
      if (d.type === 'money') value = fm(w.v)
      else if (d.type === 'tokens') value = w.v >= 1e6 ? `${fnum(w.v / 1e6, { digits: 1 })}M` : `${fnum(w.v / 1e3)}K`
      else if (d.type === 'seconds') value = w.v >= 60 ? `${fnum(w.v / 60, { digits: 1 })} ${t('unit.min')}` : `${fnum(w.v)} ${t('unit.s')}`
      else if (d.type === 'minutes') value = `${fnum(w.v, { digits: 1 })} ${t('unit.min')}`
      else if (d.type === 'ratio') value = `${fnum(w.v, { digits: 1 })} ${tx(d.unit)}`
      else value = fnum(w.v)
      tiles.push({ id: d.id, label: tx(d.label), value, p: w.p, note: tx(cat.name) })
    }
  }

  const floor = list.find((p) => {
    const tier = tierN(p)
    return tier?.minMonthly && tier.price > 0 && tier.perSeat !== false && n * tierUnitPrice(tier, state.billing) < tier.minMonthly
  })
  if (floor) {
    const tier = tierN(floor)
    tiles.push({
      id: 'floor',
      label: t('ins.floor'),
      value: fm(tier.minMonthly),
      unit: t('ins.perMonth'),
      p: floor,
      note: t('ins.floorNote', {
        name: floor.name,
        min: fm(tier.minMonthly),
        n: fnum(Math.ceil(tier.minMonthly / tierUnitPrice(tier, state.billing))),
      }),
    })
  }
  return tiles
})

const stack = computed(() => {
  const parts = items.value.map((p) => ({ p, v: costN(p) ?? 0 }))
  const total = parts.reduce((a, b) => a + b.v, 0)
  return { parts, total }
})

// ---------- cost curve ----------
const xMax = computed(() => Math.max(1000, 10 ** Math.ceil(Math.log10(N.value))))
const costXs = computed(() => {
  const set = new Set()
  const steps = 140
  for (let i = 0; i <= steps; i++) set.add(Math.max(1, Math.round(xMax.value ** (i / steps))))
  set.add(N.value)
  return [...set].sort((a, b) => a - b)
})
const costSeries = computed(() =>
  items.value.map((p) => ({
    id: p.id,
    label: p.name,
    color: color(p.id),
    values: costXs.value.map((u) => {
      const c = costAt(p, u, choiceOf(p), state.billing)
      return toCurrency(c == null ? null : costMode.value === 'perUser' ? c / u : c, state.currency)
    }),
  })),
)
const costTicks = computed(() => [1, 5, 10, 50, 100, 500, 1000, 5000, 10000].filter((v) => v <= xMax.value))
const TABLE_USERS = [1, 5, 10, 25, 50, 100, 250, 500, 1000]
const showCostTable = ref(false)
const costMode = ref('total')
const fmtY = (v) => moneyLocal(v, state.currency, state.locale)
const fmtYTick = (v) => moneyLocal(v, state.currency, state.locale, { compact: true })
const fmtUsers = (v) => `${fnum(v, { compact: true })}`

// ---------- forecast ----------
const forecasts = computed(() =>
  items.value.map((p) => ({ p, rows: growthSeries(p, choiceOf(p), state.billing, marginOf(p), state.growth) })),
)
const monthXs = computed(() => Array.from({ length: state.growth.months }, (_, i) => i + 1))
const fcSeries = computed(() =>
  forecasts.value.map(({ p, rows }) => ({
    id: p.id,
    label: p.name,
    color: color(p.id),
    values: rows.map((r) => toCurrency(r[state.forecastMetric], state.currency)),
  })),
)
const showFcTable = ref(false)
const fcTableMonths = computed(() => monthXs.value.filter((m) => m === 1 || m % 3 === 0))
function setMargin(catId, e) {
  const v = Math.min(100, Math.max(0, Number(e.target.value)))
  state.margins = { ...state.margins, [catId]: v / 100 }
}
function setGrowth(key, e, min, max) {
  const v = Math.min(max, Math.max(min, Number(e.target.value) || 0))
  state.growth = { ...state.growth, [key]: v }
}
</script>

<template>
  <div v-if="!items.length" class="empty">
    <h1>{{ t('compare.empty') }}</h1>
    <p>{{ t('compare.emptyHint') }}</p>
    <p class="eyebrow">{{ t('compare.samples') }}</p>
    <div class="samples">
      <button v-for="s in SAMPLES" :key="s.key" type="button" class="btn" @click="setCompare(s.ids)">{{ t(s.key) }}</button>
    </div>
  </div>

  <div v-else class="compare">
    <header class="top">
      <div class="title-row">
        <h1>{{ t('nav.compare') }}</h1>
        <span class="mode mono">
          {{ cross ? t('compare.modeCross', { n: cats.length }) : `${t('compare.modeSame')} · ${tx(cats[0].name)}` }}
        </span>
      </div>
      <p v-if="cross" class="cross-note">{{ t('compare.crossNote') }}</p>
      <div class="samples">
        <span class="eyebrow">{{ t('compare.samples') }}</span>
        <button v-for="s in SAMPLES" :key="s.key" type="button" class="btn btn-ghost small" @click="setCompare(s.ids)">{{ t(s.key) }}</button>
      </div>
    </header>

    <section class="controls" :aria-label="t('compare.teamSize')">
      <label class="team" for="users-slider">
        <span class="eyebrow">{{ t('compare.teamSize') }}</span>
        <span class="team-val"><strong class="tabular">{{ fnum(N) }}</strong> {{ t('compare.users') }}</span>
      </label>
      <input id="users-slider" v-model.number="slider" type="range" min="0" max="1000" step="1" class="range" />
      <input
        id="users-input"
        class="input tabular users-input"
        type="number"
        min="1"
        max="100000"
        :value="N"
        :aria-label="t('compare.teamSize')"
        @change="state.users = Math.min(100000, Math.max(1, Number($event.target.value) || 1))"
      />
      <div class="presets">
        <button v-for="v in PRESETS" :key="v" type="button" class="btn small" :class="{ 'is-on': N === v }" @click="state.users = v">
          {{ v }}
        </button>
      </div>
    </section>

    <section class="block">
      <h2>{{ t('sec.insights') }}</h2>
      <div class="tiles">
        <article v-for="tile in insights" :key="tile.id" class="tile">
          <p class="eyebrow">{{ tile.label }}</p>
          <p class="big">
            {{ tile.value }}<span v-if="tile.unit" class="big-unit"> {{ tile.unit }}</span>
          </p>
          <p class="who"><span class="dot" :style="{ background: color(tile.p.id) }"></span>{{ tile.p.name }}</p>
          <p v-if="tile.note" class="tile-note">{{ tile.note }}</p>
        </article>
        <article v-if="cross && stack.total > 0" class="tile wide">
          <p class="eyebrow">{{ t('ins.stack', { n: fnum(N) }) }}</p>
          <p class="big">{{ fm(stack.total) }}<span class="big-unit"> {{ t('ins.perMonth') }}</span></p>
          <div class="stackbar" role="img" :aria-label="t('ins.stack', { n: fnum(N) })">
            <span
              v-for="s in stack.parts.filter((x) => x.v > 0)"
              :key="s.p.id"
              :style="{ flexGrow: s.v, background: color(s.p.id) }"
              :title="`${s.p.name}: ${fm(s.v)}`"
            ></span>
          </div>
          <ul class="stack-legend">
            <li v-for="s in stack.parts" :key="s.p.id">
              <span class="dot" :style="{ background: color(s.p.id) }"></span>
              <span class="sl-name">{{ s.p.name }}</span>
              <span class="tabular">{{ fm(s.v) }}</span>
              <span class="tabular muted">{{ pct(s.v / stack.total, state.locale) }}</span>
            </li>
          </ul>
          <p class="tile-note">{{ t('ins.stackNote', { y: fm(stack.total * 12, { compact: true }), k: items.length }) }}</p>
        </article>
      </div>
    </section>

    <section class="block">
      <h2>{{ t('sec.matrix') }}</h2>
      <div class="matrix-wrap">
        <table class="matrix">
          <thead>
            <tr>
              <th class="corner" scope="col"><span class="sr-only">{{ t('row.category') }}</span></th>
              <th v-for="p in items" :key="p.id" scope="col" class="col-head">
                <div class="ch-top">
                  <span class="dot" :style="{ background: color(p.id) }"></span>
                  <button type="button" class="ch-name" @click="state.detailId = p.id">{{ p.name }}</button>
                  <button type="button" class="x" :aria-label="t('remove', { name: p.name })" @click="removeCompare(p.id)">×</button>
                </div>
                <label class="ch-plan">
                  <span class="sr-only">{{ t('row.plan') }} – {{ p.name }}</span>
                  <select :id="'plan-' + p.id" class="select" :value="choiceOf(p)" @change="setChoice(p, $event.target.value)">
                    <option value="auto">{{ t('plan.auto') }}</option>
                    <option v-for="(tier, i) in p.tiers" :key="tier.name" :value="i" :disabled="tier.custom">{{ tierOptionLabel(tier) }}</option>
                  </select>
                </label>
              </th>
            </tr>
          </thead>
          <tbody v-for="g in groups" :key="g.id">
            <tr class="group-row">
              <th :colspan="items.length + 1" scope="colgroup">
                <button v-if="cross && g.category" type="button" class="group-toggle" :aria-expanded="!collapsed(g)" @click="toggleGroup(g)">
                  <span aria-hidden="true">{{ collapsed(g) ? '▸' : '▾' }}</span> {{ g.title }}
                  <span class="gt-hint">{{ collapsed(g) ? t('grp.show', { n: g.rows.length }) : t('grp.hide') }}</span>
                </button>
                <template v-else>{{ g.title }}</template>
              </th>
            </tr>
            <tr v-for="r in collapsed(g) ? [] : g.rows" :key="r.id">
              <th scope="row" class="row-label">{{ r.label }}</th>
              <td
                v-for="p in items"
                :key="p.id"
                :class="{
                  best: winners[g.id + ':' + r.id]?.has(p.id),
                  na: !applies(g, p),
                  text: r.text,
                  strong: r.strong,
                }"
              >
                <template v-if="applies(g, p)">
                  {{ r.cell(p) }}
                  <span v-if="winners[g.id + ':' + r.id]?.has(p.id)" class="best-tag mono">▲ {{ t('best') }}</span>
                </template>
                <template v-else>{{ t('na') }}</template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="block">
      <div class="block-head">
        <div>
          <h2>{{ t('sec.cost') }}</h2>
          <p class="sub">{{ t('sec.costSub') }}</p>
        </div>
        <div class="seg" role="group" :aria-label="t('sec.cost')">
          <button type="button" :aria-pressed="costMode === 'total'" @click="costMode = 'total'">{{ t('cost.total') }}</button>
          <button type="button" :aria-pressed="costMode === 'perUser'" @click="costMode = 'perUser'">{{ t('cost.perUser') }}</button>
        </div>
        <button type="button" class="btn" :aria-expanded="showCostTable" @click="showCostTable = !showCostTable">
          {{ showCostTable ? t('chart.hideTable') : t('chart.showTable') }}
        </button>
      </div>
      <div class="panel">
        <LineChart
          :xs="costXs"
          :series="costSeries"
          x-scale="log"
          :x-ticks="costTicks"
          :format-x="(v) => `${fmtUsers(v)} ${t('compare.users')}`"
          :format-y="fmtY"
          :format-y-tick="fmtYTick"
          :marker="N"
          :marker-label="`${fnum(N)} ${t('compare.users')}`"
          :label="t('sec.cost')"
        />
        <div v-if="showCostTable" class="table-wrap">
          <table class="data">
            <thead>
              <tr>
                <th scope="col">{{ t('chart.users') }}</th>
                <th v-for="p in items" :key="p.id" scope="col" class="num">{{ p.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in TABLE_USERS" :key="u">
                <th scope="row" class="tabular">{{ fnum(u) }}</th>
                <td v-for="p in items" :key="p.id" class="num tabular">
                  {{ fm(costAt(p, u, choiceOf(p), state.billing)) }}
                  <span v-if="costAt(p, u, choiceOf(p), state.billing)" class="per mono">{{ fm(costAt(p, u, choiceOf(p), state.billing) / u) }}/u</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="block">
      <div class="block-head">
        <div>
          <h2>{{ t('sec.forecast') }}</h2>
          <p class="sub">{{ t('sec.forecastSub') }}</p>
        </div>
      </div>
      <div class="panel">
        <div class="fc-controls">
          <label class="field">
            <span>{{ t('fc.start') }}</span>
            <input id="fc-start" class="input tabular" type="number" min="1" max="100000" :value="state.growth.start" @change="setGrowth('start', $event, 1, 100000)" />
          </label>
          <label class="field">
            <span>{{ t('fc.growth') }} %</span>
            <input id="fc-growth" class="input tabular" type="number" min="0" max="100" step="0.5" :value="state.growth.rate" @change="setGrowth('rate', $event, 0, 100)" />
          </label>
          <label class="field">
            <span>{{ t('fc.churn') }} %</span>
            <input id="fc-churn" class="input tabular" type="number" min="0" max="100" step="0.5" :value="state.growth.churn" @change="setGrowth('churn', $event, 0, 100)" />
          </label>
          <label class="field">
            <span>{{ t('fc.horizon') }}</span>
            <select id="fc-horizon" class="select" :value="state.growth.months" @change="setGrowth('months', $event, 6, 60)">
              <option v-for="m in [12, 24, 36, 60]" :key="m" :value="m">{{ t('fc.months', { n: m }) }}</option>
            </select>
          </label>
          <fieldset class="field margins">
            <span>{{ t('fc.margins') }}</span>
            <div class="margin-list">
              <label v-for="c in cats" :key="c.id" class="margin">
                <span aria-hidden="true">{{ c.glyph }}</span>
                <span class="m-name">{{ tx(c.name) }}</span>
                <input
                  :id="'margin-' + c.id"
                  class="input tabular"
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  :value="Math.round(state.margins[c.id] * 100)"
                  @change="setMargin(c.id, $event)"
                />%
              </label>
            </div>
          </fieldset>
        </div>

        <div class="fc-metric">
          <span class="eyebrow">{{ t('fc.metric') }}</span>
          <div class="seg" role="group" :aria-label="t('fc.metric')">
            <button v-for="k in ['revenue', 'gp', 'cumGp']" :key="k" type="button" :aria-pressed="state.forecastMetric === k" @click="state.forecastMetric = k">
              {{ t(`fc.${k}`) }}
            </button>
          </div>
        </div>

        <LineChart
          :xs="monthXs"
          :series="fcSeries"
          :x-ticks="monthXs.filter((m) => m === 1 || m % (state.growth.months > 24 ? 6 : 3) === 0)"
          :format-x="(v) => `${t('chart.month')} ${v}`"
          :format-y="fmtY"
          :format-y-tick="fmtYTick"
          :label="t('sec.forecast')"
        />

        <div class="table-wrap">
          <table class="data">
            <thead>
              <tr>
                <th scope="col"><span class="sr-only">{{ t('row.company') }}</span></th>
                <th scope="col" class="num">{{ t('fc.usersAt', { m: state.growth.months }) }}</th>
                <th scope="col" class="num">{{ t('fc.mrrAt', { m: state.growth.months }) }}</th>
                <th scope="col" class="num">{{ t('fc.gpAt', { m: state.growth.months }) }}</th>
                <th scope="col" class="num">{{ t('fc.cumAt') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="f in forecasts" :key="f.p.id">
                <th scope="row"><span class="dot" :style="{ background: color(f.p.id) }"></span> {{ f.p.name }}</th>
                <td class="num tabular">{{ fnum(f.rows.at(-1).users) }}</td>
                <td class="num tabular">{{ fm(f.rows.at(-1).revenue, { compact: true }) }}</td>
                <td class="num tabular">{{ fm(f.rows.at(-1).gp, { compact: true }) }}</td>
                <td class="num tabular strong">{{ fm(f.rows.at(-1).cumGp, { compact: true }) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button type="button" class="btn" :aria-expanded="showFcTable" @click="showFcTable = !showFcTable">
          {{ showFcTable ? t('chart.hideTable') : t('chart.showTable') }}
        </button>
        <div v-if="showFcTable" class="table-wrap">
          <table class="data">
            <thead>
              <tr>
                <th scope="col">{{ t('chart.month') }}</th>
                <th v-for="f in forecasts" :key="f.p.id" scope="col" class="num">{{ f.p.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in fcTableMonths" :key="m">
                <th scope="row" class="tabular">{{ m }}</th>
                <td v-for="f in forecasts" :key="f.p.id" class="num tabular">
                  {{ fm(f.rows[m - 1][state.forecastMetric], { compact: true }) }}
                  <span class="per mono">{{ fnum(f.rows[m - 1].users) }} u</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.empty {
  padding-block: 40px;
  display: grid;
  gap: 12px;
  justify-items: start;
}
.empty h1 {
  font-size: 34px;
}
.empty p {
  margin: 0;
  color: var(--ink-2);
}
.samples {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
.small {
  padding: 4px 10px;
  font-size: 12.5px;
}
.compare {
  display: grid;
  gap: 36px;
}
.top {
  display: grid;
  gap: 12px;
  padding-top: 8px;
}
.title-row {
  display: flex;
  align-items: baseline;
  gap: 8px 16px;
  flex-wrap: wrap;
}
.title-row h1 {
  font-size: clamp(30px, 4vw, 42px);
}
.mode {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--ink);
}
.cross-note {
  margin: 0;
  color: var(--ink-2);
  max-width: 78ch;
}

.controls {
  position: sticky;
  top: calc(env(safe-area-inset-top, 0px) + 61px);
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 10px 18px;
  flex-wrap: wrap;
  padding: 12px 16px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  box-shadow: var(--shadow);
}
.team {
  display: grid;
  gap: 0;
}
.team-val {
  font-size: 14px;
  color: var(--ink-2);
}
.team-val strong {
  font-size: 22px;
  color: var(--ink);
  font-weight: 600;
}
.range {
  flex: 1;
  min-width: 160px;
  accent-color: var(--accent);
}
.users-input {
  width: 96px;
}
.presets {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
@media (max-width: 720px) {
  .controls {
    position: static;
  }
}

.block {
  display: grid;
  gap: 16px;
  min-width: 0;
}
.compare > *,
.block > * {
  min-width: 0;
}
.block h2 {
  font-size: 26px;
}
.block-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
}
.sub {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 14px;
  max-width: 76ch;
}
.panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  padding: 18px;
  display: grid;
  gap: 18px;
  min-width: 0;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 230px), 1fr));
  gap: 12px;
}
.tile {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  padding: 14px 16px;
  display: grid;
  gap: 6px;
  align-content: start;
}
.tile.wide {
  grid-column: 1 / -1;
}
.tile p {
  margin: 0;
}
.big {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.15;
}
.big-unit {
  font-size: 14px;
  font-weight: 400;
  color: var(--muted);
}
.who {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}
.tile-note {
  font-size: 12.5px;
  color: var(--muted);
}
.stackbar {
  display: flex;
  gap: 2px;
  height: 12px;
  margin-top: 6px;
}
.stackbar span {
  border-radius: 3px;
  min-width: 3px;
}
.stack-legend {
  list-style: none;
  margin: 4px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr));
  gap: 4px 20px;
  font-size: 13px;
}
.stack-legend li {
  display: flex;
  align-items: center;
  gap: 8px;
}
.sl-name {
  flex: 1;
}
.muted {
  color: var(--muted);
}

.matrix-wrap,
.table-wrap {
  overflow-x: auto;
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: var(--surface);
}
.matrix {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  font-size: 13.5px;
}
.matrix th,
.matrix td {
  padding: 9px 14px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}
.corner,
.row-label {
  position: sticky;
  left: 0;
  background: var(--surface);
  z-index: 1;
  min-width: 170px;
  max-width: 220px;
  border-right: 1px solid var(--line);
}
.row-label {
  font-weight: 400;
  color: var(--ink-2);
}
.col-head {
  min-width: 190px;
  background: var(--bg);
  vertical-align: bottom;
}
.corner {
  background: var(--bg);
}
.ch-top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.ch-name {
  flex: 1;
  border: 0;
  background: none;
  padding: 0;
  text-align: left;
  cursor: pointer;
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 600;
}
.ch-name:hover {
  text-decoration: underline;
}
.ch-plan .select {
  width: 100%;
  font-size: 12px;
}
.x {
  border: 0;
  background: none;
  cursor: pointer;
  color: var(--muted);
  font-size: 16px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
}
.x:hover {
  background: var(--surface-2);
  color: var(--ink);
}
.group-row th {
  position: sticky;
  left: 0;
  background: var(--surface-2);
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-2);
  padding-block: 7px;
}
.group-toggle {
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  color: inherit;
  display: inline-flex;
  gap: 8px;
  align-items: center;
}
.gt-hint {
  text-transform: none;
  letter-spacing: 0;
  color: var(--accent);
}
.matrix td.text {
  font-size: 12.5px;
  color: var(--ink-2);
  min-width: 220px;
}
.matrix td.strong {
  font-weight: 600;
}
.matrix td.na {
  color: var(--muted);
  font-style: italic;
  background: repeating-linear-gradient(135deg, transparent 0 6px, var(--grid) 6px 7px);
}
.matrix td.best {
  background: var(--accent-soft);
}
.best-tag {
  display: inline-block;
  margin-left: 6px;
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}
.matrix tbody:last-child tr:last-child > * {
  border-bottom: 0;
}

.data {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.data th,
.data td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  white-space: nowrap;
}
.data thead th {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  background: var(--bg);
}
.data tbody tr:last-child > * {
  border-bottom: 0;
}
.data .num {
  text-align: right;
}
.data .strong {
  font-weight: 600;
}
.per {
  display: block;
  font-size: 10.5px;
  color: var(--muted);
}

.fc-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 18px;
  align-items: flex-end;
}
.fc-controls .input {
  width: 110px;
}
.margins {
  border: 0;
  padding: 0;
  margin: 0;
}
.margin-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
}
.margin {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}
.margin .input {
  width: 64px;
}
.m-name {
  color: var(--ink-2);
}
.fc-metric {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
