import leave from './leave.js'
import leaveZh from './leave.zh.js'
import aiAssistant from './ai_assistant.js'
import aiAssistantZh from './ai_assistant.zh.js'
import aiVideo from './ai_video.js'
import aiVideoZh from './ai_video.zh.js'
import music from './music.js'
import musicZh from './music.zh.js'
import image from './image.js'
import imageZh from './image.zh.js'
import shipping from './shipping.js'
import shippingZh from './shipping.zh.js'

const zh = { ...leaveZh, ...aiAssistantZh, ...aiVideoZh, ...musicZh, ...imageZh, ...shippingZh }

export const PRODUCTS = [...leave, ...aiAssistant, ...aiVideo, ...music, ...image, ...shipping].map((p) => ({ ...p, zh: zh[p.id] }))
export const PRODUCT_BY_ID = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]))
