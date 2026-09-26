<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  xs: { type: Array, required: true },
  series: { type: Array, required: true }, // [{ id, label, color, values }]
  xScale: { type: String, default: 'linear' },
  xTicks: { type: Array, default: null },
  formatX: { type: Function, default: (v) => String(v) },
  formatY: { type: Function, default: (v) => String(v) },
  formatYTick: { type: Function, default: null },
  marker: { type: Number, default: null },
  markerLabel: { type: String, default: '' },
  height: { type: Number, default: 300 },
  label: { type: String, default: '' },
})

const box = ref(null)
const width = ref(640)
let ro
onMounted(() => {
  ro = new ResizeObserver(([e]) => (width.value = Math.max(280, e.contentRect.width)))
  ro.observe(box.value)
})
onBeforeUnmount(() => ro?.disconnect())

const M = { top: 14, right: 18, bottom: 34, left: 70 }
const innerW = computed(() => width.value - M.left - M.right)
const innerH = computed(() => props.height - M.top - M.bottom)

const x0 = computed(() => props.xs[0])
const x1 = computed(() => props.xs[props.xs.length - 1])
function sx(v) {
  if (props.xScale === 'log') {
    const a = Math.log(x0.value)
    const b = Math.log(x1.value)
    return M.left + ((Math.log(v) - a) / (b - a || 1)) * innerW.value
  }
  return M.left + ((v - x0.value) / (x1.value - x0.value || 1)) * innerW.value
}

function niceStep(raw) {
  const p = 10 ** Math.floor(Math.log10(raw))
  const f = raw / p
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p
}
const yTicks = computed(() => {
  const vals = props.series.flatMap((s) => s.values).filter((v) => v != null && Number.isFinite(v))
  const max = Math.max(0, ...vals)
  const min = Math.min(0, ...vals)
  const step = niceStep(((max - min) || 1) / 4)
  const lo = Math.floor(min / step) * step
  const ticks = []
  for (let v = lo; v <= max + step * 0.999; v += step) ticks.push(+v.toFixed(10))
  if (ticks.length < 2) ticks.push(lo + step)
  return ticks
})
const yMin = computed(() => yTicks.value[0])
const yMax = computed(() => yTicks.value[yTicks.value.length - 1])
const sy = (v) => M.top + innerH.value - ((v - yMin.value) / (yMax.value - yMin.value || 1)) * innerH.value

const ticksX = computed(() => (props.xTicks || props.xs).filter((v) => v >= x0.value && v <= x1.value))

const paths = computed(() =>
  props.series.map((s) => {
    let d = ''
    let pen = false
    let last = null
    s.values.forEach((v, i) => {
      if (v == null || !Number.isFinite(v)) {
        pen = false
        return
      }
      d += `${pen ? 'L' : 'M'}${sx(props.xs[i]).toFixed(1)},${sy(v).toFixed(1)}`
      pen = true
      last = i
    })
    return { ...s, d, last }
  }),
)

const hover = ref(null)
const pxs = computed(() => props.xs.map(sx))
function nearest(px) {
  let best = 0
  let dist = Infinity
  pxs.value.forEach((p, i) => {
    const dd = Math.abs(p - px)
    if (dd < dist) {
      dist = dd
      best = i
    }
  })
  return best
}
function onMove(e) {
  const r = box.value.getBoundingClientRect()
  hover.value = nearest(e.clientX - r.left)
}
function onKey(e) {
  const n = props.xs.length
  if (e.key === 'ArrowRight') hover.value = Math.min(n - 1, (hover.value ?? -1) + 1)
  else if (e.key === 'ArrowLeft') hover.value = Math.max(0, (hover.value ?? n) - 1)
  else if (e.key === 'Escape') hover.value = null
  else return
  e.preventDefault()
}
const tip = computed(() => {
  if (hover.value == null) return null
  const i = hover.value
  const x = pxs.value[i]
  return {
    x,
    flip: x > width.value * 0.6,
    title: props.formatX(props.xs[i]),
    rows: props.series.map((s) => ({ id: s.id, label: s.label, color: s.color, v: s.values[i] })),
  }
})
</script>

<template>
  <figure class="chart">
    <ul class="legend">
      <li v-for="s in series" :key="s.id"><span class="dot" :style="{ background: s.color }"></span>{{ s.label }}</li>
    </ul>
    <div
      ref="box"
      class="plot"
      tabindex="0"
      role="img"
      :aria-label="label"
      @pointermove="onMove"
      @pointerleave="hover = null"
      @keydown="onKey"
      @blur="hover = null"
    >
      <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" aria-hidden="true">
        <g class="grid">
          <line v-for="v in yTicks" :key="'y' + v" :x1="M.left" :x2="width - M.right" :y1="sy(v)" :y2="sy(v)" />
        </g>
        <g class="axis-y">
          <text v-for="v in yTicks" :key="'yt' + v" :x="M.left - 8" :y="sy(v)" dy="0.32em" text-anchor="end">
            {{ (formatYTick || formatY)(v) }}
          </text>
        </g>
        <line class="baseline" :x1="M.left" :x2="width - M.right" :y1="sy(yMin)" :y2="sy(yMin)" />
        <g class="axis-x">
          <text v-for="v in ticksX" :key="'xt' + v" :x="sx(v)" :y="height - M.bottom + 20" text-anchor="middle">
            {{ formatX(v) }}
          </text>
        </g>
        <g v-if="marker != null && marker >= x0 && marker <= x1" class="marker">
          <line :x1="sx(marker)" :x2="sx(marker)" :y1="M.top" :y2="height - M.bottom" />
          <text :x="sx(marker) + 6" :y="M.top + 10">{{ markerLabel }}</text>
        </g>
        <path v-for="p in paths" :key="p.id" :d="p.d" :stroke="p.color" class="line" fill="none" />
        <g v-for="p in paths" :key="'e' + p.id">
          <circle
            v-if="p.last != null"
            :cx="sx(xs[p.last])"
            :cy="sy(p.values[p.last])"
            r="4.5"
            :fill="p.color"
            class="end"
          />
        </g>
        <g v-if="tip">
          <line class="cross" :x1="tip.x" :x2="tip.x" :y1="M.top" :y2="height - M.bottom" />
          <template v-for="r in tip.rows" :key="'h' + r.id">
            <circle v-if="r.v != null" :cx="tip.x" :cy="sy(r.v)" r="4.5" :fill="r.color" class="end" />
          </template>
        </g>
      </svg>
      <div v-if="tip" class="tip" :class="{ flip: tip.flip }" :style="{ left: tip.x + 'px', top: M.top + 'px' }">
        <p class="tip-title mono">{{ tip.title }}</p>
        <p v-for="r in tip.rows" :key="r.id" class="tip-row">
          <span class="dot" :style="{ background: r.color }"></span>
          <span class="tip-label">{{ r.label }}</span>
          <strong class="tabular">{{ r.v == null ? '—' : formatY(r.v) }}</strong>
        </p>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.chart {
  margin: 0;
  display: grid;
  gap: 10px;
  min-width: 0;
}
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: var(--ink-2);
}
.legend li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.plot {
  position: relative;
  width: 100%;
  contain: inline-size;
  touch-action: pan-y;
}
svg {
  display: block;
  overflow: visible;
}
.grid line {
  stroke: var(--grid);
  stroke-width: 1;
}
.baseline {
  stroke: var(--line-strong);
}
.axis-y text,
.axis-x text {
  fill: var(--muted);
  font-size: 11px;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}
.line {
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.end {
  stroke: var(--surface);
  stroke-width: 2;
}
.marker line {
  stroke: var(--ink-2);
  stroke-width: 1;
}
.marker text {
  fill: var(--ink-2);
  font-size: 11px;
  font-family: var(--font-mono);
}
.cross {
  stroke: var(--muted);
  stroke-width: 1;
}
.tip {
  position: absolute;
  transform: translateX(12px);
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: var(--r-sm);
  box-shadow: var(--shadow);
  padding: 8px 10px;
  font-size: 12.5px;
  pointer-events: none;
  min-width: 180px;
  max-width: 280px;
  z-index: 2;
}
.tip.flip {
  transform: translateX(calc(-100% - 12px));
}
.tip p {
  margin: 0;
}
.tip-title {
  font-size: 11px;
  color: var(--muted);
  margin-bottom: 4px !important;
}
.tip-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 0;
}
.tip-label {
  flex: 1;
  color: var(--ink-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
