export const PALETTES = [
  { id: 'sage', dark: false, swatch: ['#F1F4EF', '#2F6B4F'] },
  { id: 'harbor', dark: false, swatch: ['#EDF2F7', '#1F5FA6'] },
  { id: 'orchid', dark: false, swatch: ['#F5F0F4', '#8A3A78'] },
  { id: 'midnight', dark: true, swatch: ['#0D121B', '#86A8F7'] },
  { id: 'terminal', dark: true, swatch: ['#0E1413', '#5BC6AE'] },
]

// Validated categorical order (dataviz reference palette); dark steps are re-stepped for dark surfaces.
export const SERIES = {
  light: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300'],
  dark: ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181', '#008300'],
}
