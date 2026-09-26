import { state } from '../store.js'
import { PALETTES, SERIES } from '../palettes.js'

// Color follows the product (its slot assigned when added), never its position in the list.
export function useSeriesColor() {
  return (id) => {
    const dark = PALETTES.find((p) => p.id === state.palette)?.dark
    const set = dark ? SERIES.dark : SERIES.light
    return set[(state.slots[id] ?? 0) % set.length]
  }
}
