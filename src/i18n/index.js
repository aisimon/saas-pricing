import { Converter } from 'opencc-js/t2cn'
import { state } from '../store.js'
import { UI } from './ui.js'

const hkToCn = Converter({ from: 'hk', to: 'cn' })

// OpenCC converts characters and common words; these are HK→Mainland vocabulary swaps it leaves alone.
const PHRASES = [
  ['影片', '視頻'],
  ['視像', '視頻'],
  ['支援', '支持'],
  ['應用程式', '應用'],
  ['程式', '程序'],
  ['資訊', '信息'],
  ['訊息', '消息'],
  ['質素', '質量'],
  ['網上', '在線'],
  ['搜尋', '搜索'],
  ['解像度', '分辨率'],
  ['點數', '積分'],
  ['檔案', '文件'],
  ['範本', '模板'],
  ['去背', '摳圖'],
  ['匯出', '導出'],
  ['上載', '上傳'],
  ['私隱', '隱私'],
  ['伺服器', '服務器'],
  ['用家', '用戶'],
]

const memo = new Map()
export function toSimplified(s) {
  if (!memo.has(s)) memo.set(s, hkToCn(PHRASES.reduce((acc, [from, to]) => acc.replaceAll(from, to), s)))
  return memo.get(s)
}

function fill(str, params) {
  return params ? str.replace(/\{(\w+)\}/g, (_, k) => (params[k] ?? `{${k}}`)) : str
}

export function t(key, params) {
  return fill(UI[state.locale][key] ?? UI.en[key] ?? key, params)
}

function zhValue(v) {
  if (v == null) return v
  if (state.locale !== 'zhHans') return v
  return Array.isArray(v) ? v.map(toSimplified) : toSimplified(v)
}

// Picks the localized side of a { en, zh } pair.
export function tx(pair) {
  if (!pair) return ''
  return state.locale === 'en' ? pair.en : zhValue(pair.zh ?? pair.en)
}

export function pText(p, field) {
  if (state.locale === 'en' || p.zh?.[field] == null) return p[field]
  return zhValue(p.zh[field])
}

export function tierText(p, i, field) {
  const zh = p.zh?.tiers?.[i]?.[field]
  if (state.locale === 'en' || zh == null) return p.tiers[i][field]
  return zhValue(zh)
}

export function metricText(p, key) {
  const zh = p.zh?.metrics?.[key]
  if (state.locale === 'en' || zh == null) return p.metrics[key]
  return zhValue(zh)
}
