// Each category carries its own comparison matrix. `better` drives the "best" marker: 'higher', 'lower', false-is-better ('false'), or null (neutral).
const m = (key, type, better, en, zh) => ({ key, type, better, label: { en, zh } })

export const CATEGORIES = [
  {
    id: 'leave',
    glyph: '◷',
    name: { en: 'Leave tracking', zh: '假期管理' },
    lens: {
      en: 'Compared on per-seat price, minimum charges, free-plan size, chat integrations, accruals and HR breadth.',
      zh: '按每席位價格、最低收費、免費方案規模、通訊工具整合、假期累計及人事功能廣度比較。',
    },
    margin: 0.85,
    cardMetrics: ['freeTierUserLimit', 'slackTeams', 'accruals'],
    metrics: [
      m('freeTierUserLimit', 'freeLimit', 'higher', 'Free plan user limit', '免費方案用戶上限'),
      m('slackTeams', 'bool', 'true', 'Slack / Teams app', 'Slack / Teams 整合'),
      m('accruals', 'bool', 'true', 'Leave accruals', '假期累計'),
      m('halfDayHourly', 'bool', 'true', 'Half-day / hourly leave', '半日 / 按小時請假'),
      m('mobileApp', 'bool', 'true', 'Native mobile app', '原生手機應用程式'),
      m('calendarSync', 'list', 'higher', 'Calendar sync', '日曆同步'),
      m('approvalWorkflowLevels', 'text', null, 'Approval workflow', '審批流程'),
      m('reportingDepth', 'score', 'higher', 'Reporting depth', '報表深度'),
      m('hrisBreadth', 'score', null, 'HR suite breadth', '人事系統廣度'),
      m('publicHolidayCountries', 'text', null, 'Public holiday coverage', '公眾假期覆蓋'),
    ],
    derived: [
      {
        id: 'lowestMin',
        label: { en: 'Lowest minimum charge', zh: '最低收費門檻最低' },
        better: 'lower',
        type: 'money',
        value: (p, ctx) => ctx.tier(p)?.minMonthly ?? 0,
      },
    ],
  },
  {
    id: 'ai_assistant',
    glyph: '✦',
    name: { en: 'AI tools', zh: 'AI 工具' },
    lens: {
      en: 'Compared on individual and team seat prices, context window, built-in capabilities, API access and data privacy.',
      zh: '按個人及團隊席位價格、上下文長度、內置功能、API 及數據私隱比較。',
    },
    margin: 0.55,
    cardMetrics: ['contextWindowTokens', 'teamSeatPriceUSD', 'agentOrCoding'],
    metrics: [
      m('individualPriceUSD', 'money', 'lower', 'Individual plan', '個人方案'),
      m('teamSeatPriceUSD', 'money', 'lower', 'Team seat (monthly)', '團隊席位（按月）'),
      m('teamMinSeats', 'num', 'lower', 'Team minimum seats', '團隊最少席位'),
      m('topTierPriceUSD', 'money', null, 'Top individual tier', '最高個人方案'),
      m('contextWindowTokens', 'tokens', 'higher', 'Context window', '上下文長度'),
      m('imageGeneration', 'bool', 'true', 'Image generation', '圖像生成'),
      m('webSearch', 'bool', 'true', 'Web search', '網上搜尋'),
      m('fileAnalysis', 'bool', 'true', 'File analysis', '檔案分析'),
      m('voiceMode', 'bool', 'true', 'Voice mode', '語音模式'),
      m('agentOrCoding', 'bool', 'true', 'Agents / coding tools', '代理 / 編程工具'),
      m('apiAvailable', 'bool', 'true', 'Developer API', '開發者 API'),
      m('businessDataNotTrained', 'bool', 'true', 'Business data not used for training', '商業數據不用作訓練'),
      m('usageLimitsNote', 'text', null, 'Usage limits', '用量限制'),
    ],
    derived: [
      {
        id: 'context',
        label: { en: 'Largest context window', zh: '上下文最長' },
        better: 'higher',
        type: 'tokens',
        value: (p) => p.metrics.contextWindowTokens,
      },
      {
        id: 'teamSeat',
        label: { en: 'Cheapest team seat', zh: '團隊席位最便宜' },
        better: 'lower',
        type: 'money',
        value: (p) => p.metrics.teamSeatPriceUSD,
      },
    ],
  },
  {
    id: 'ai_video',
    glyph: '▶',
    name: { en: 'AI video generation', zh: 'AI 影片生成' },
    lens: {
      en: 'Compared on seconds of video per dollar, resolution, clip length, native audio, avatars and commercial rights.',
      zh: '按每美元可生成的影片秒數、解像度、片段長度、原生音訊、虛擬主播及商業使用權比較。',
    },
    margin: 0.45,
    cardMetrics: ['maxResolution', 'maxClipSeconds', 'nativeAudio'],
    metrics: [
      m('videoType', 'text', null, 'Video type', '影片類型'),
      m('cheapestPaidUSD', 'money', 'lower', 'Cheapest paid plan', '最便宜付費方案'),
      m('creditsPerMonthCheapestPaid', 'text', null, 'Credits on cheapest plan', '最便宜方案點數'),
      m('approxVideoSecondsCheapestPaid', 'seconds', 'higher', 'Approx. video per month', '每月約可生成影片'),
      m('maxResolution', 'resolution', 'higher', 'Max resolution', '最高解像度'),
      m('maxClipSeconds', 'seconds', 'higher', 'Max clip length', '單段最長'),
      m('nativeAudio', 'bool', 'true', 'Native audio', '原生音訊'),
      m('avatarsLipSync', 'bool', 'true', 'Avatars / lip-sync', '虛擬主播 / 對嘴'),
      m('textToVideo', 'bool', 'true', 'Text to video', '文字生成影片'),
      m('imageToVideo', 'bool', 'true', 'Image to video', '圖片生成影片'),
      m('watermarkOnFree', 'bool', 'false', 'Watermark on free plan', '免費版有水印'),
      m('commercialUseCheapestPaid', 'bool', 'true', 'Commercial use on cheapest plan', '最便宜方案可商用'),
      m('apiAvailable', 'bool', 'true', 'Developer API', '開發者 API'),
    ],
    derived: [
      {
        id: 'secPerDollar',
        label: { en: 'Most video seconds per dollar', zh: '每美元影片秒數最多' },
        better: 'higher',
        type: 'ratio',
        unit: { en: 's / $', zh: '秒 / 美元' },
        value: (p) =>
          p.metrics.approxVideoSecondsCheapestPaid && p.metrics.cheapestPaidUSD
            ? p.metrics.approxVideoSecondsCheapestPaid / p.metrics.cheapestPaidUSD
            : null,
      },
      {
        id: 'clip',
        label: { en: 'Longest single clip', zh: '單段片長最長' },
        better: 'higher',
        type: 'seconds',
        value: (p) => p.metrics.maxClipSeconds,
      },
    ],
  },
  {
    id: 'music',
    glyph: '♪',
    name: { en: 'Music composing', zh: '音樂創作' },
    lens: {
      en: 'Compared on tracks per month, cost per track, vocals, ownership and licensing, stems and MIDI export.',
      zh: '按每月曲目數量、每首成本、人聲、版權歸屬及授權、分軌及 MIDI 匯出比較。',
    },
    margin: 0.6,
    cardMetrics: ['tracksPerMonthCheapestPaid', 'vocals', 'stemsExport'],
    metrics: [
      m('cheapestPaidUSD', 'money', 'lower', 'Cheapest paid plan', '最便宜付費方案'),
      m('tracksPerMonthCheapestPaid', 'num', 'higher', 'Tracks per month (cheapest plan)', '每月曲目（最便宜方案）'),
      m('vocals', 'bool', 'true', 'Sung vocals', '人聲演唱'),
      m('maxTrackMinutes', 'minutes', 'higher', 'Max track length', '最長曲目'),
      m('stemsExport', 'bool', 'true', 'Stems export', '分軌匯出'),
      m('midiExport', 'bool', 'true', 'MIDI export', 'MIDI 匯出'),
      m('editingTools', 'score', 'higher', 'Editing control', '編輯控制'),
      m('ownershipOfOutput', 'text', null, 'Ownership of output', '作品版權歸屬'),
      m('commercialUseCheapestPaid', 'bool', 'true', 'Commercial use on cheapest plan', '最便宜方案可商用'),
      m('royaltyFreeForCreators', 'bool', 'true', 'Safe to monetise on YouTube / social', '可在 YouTube / 社交平台變現'),
      m('downloadOnFree', 'bool', 'true', 'Download on free plan', '免費版可下載'),
      m('apiAvailable', 'bool', 'true', 'Developer API', '開發者 API'),
    ],
    derived: [
      {
        id: 'perTrack',
        label: { en: 'Lowest cost per track', zh: '每首成本最低' },
        better: 'lower',
        type: 'money',
        value: (p) =>
          p.metrics.tracksPerMonthCheapestPaid && p.metrics.cheapestPaidUSD
            ? p.metrics.cheapestPaidUSD / p.metrics.tracksPerMonthCheapestPaid
            : null,
      },
      {
        id: 'length',
        label: { en: 'Longest track', zh: '曲目最長' },
        better: 'higher',
        type: 'minutes',
        value: (p) => p.metrics.maxTrackMinutes,
      },
    ],
  },
  {
    id: 'image',
    glyph: '◧',
    name: { en: 'Image editing', zh: '圖像編輯' },
    lens: {
      en: 'Compared on price, pro editing depth, generative AI allowance, platforms, templates and learning curve.',
      zh: '按價格、專業編輯深度、生成式 AI 額度、支援平台、範本及學習難度比較。',
    },
    margin: 0.75,
    cardMetrics: ['generativeAI', 'layersProTools', 'platforms'],
    metrics: [
      m('cheapestPaidUSD', 'money', 'lower', 'Cheapest paid plan', '最便宜付費方案'),
      m('platforms', 'list', 'higher', 'Platforms', '支援平台'),
      m('layersProTools', 'score', 'higher', 'Pro editing depth', '專業編輯深度'),
      m('generativeAI', 'bool', 'true', 'Generative AI', '生成式 AI'),
      m('aiCreditsCheapestPaid', 'text', null, 'AI allowance on cheapest plan', '最便宜方案 AI 額度'),
      m('backgroundRemoval', 'bool', 'true', 'Background removal', '一鍵去背'),
      m('templates', 'bool', 'true', 'Design templates', '設計範本'),
      m('batchEditing', 'bool', 'true', 'Batch editing', '批量編輯'),
      m('teamCollaboration', 'bool', 'true', 'Team collaboration', '團隊協作'),
      m('watermarkOnFree', 'bool', 'false', 'Watermark on free plan', '免費版有水印'),
      m('commercialUseCheapestPaid', 'bool', 'true', 'Commercial use on cheapest plan', '最便宜方案可商用'),
      m('learningCurve', 'score', 'lower', 'Learning curve (5 = hardest)', '學習難度（5 = 最難）'),
    ],
    derived: [
      {
        id: 'platforms',
        label: { en: 'Most platforms', zh: '支援平台最多' },
        better: 'higher',
        type: 'num',
        value: (p) => p.metrics.platforms?.length ?? null,
      },
      {
        id: 'depth',
        label: { en: 'Deepest pro editing', zh: '專業編輯最深入' },
        better: 'higher',
        type: 'score',
        value: (p) => p.metrics.layersProTools,
      },
    ],
  },
  {
    id: 'shipping',
    glyph: '▣',
    name: { en: 'Shipping & fulfilment', zh: '物流及訂單履行' },
    lens: {
      en: 'Priced by parcel volume, not seats. Compared on cost per label, UK and US carrier coverage, discounted rates, automation, returns and integrations.',
      zh: '按寄件量而非席位定價。按每張運單成本、英美承運商覆蓋、折扣運費、自動化、退貨及平台整合比較。',
    },
    margin: 0.7,
    // Plans are bought per merchant account, so forecasts count accounts rather than seats.
    billingUnit: 'account',
    cardMetrics: ['regions', 'entryShipments', 'discountedRates'],
    metrics: [
      m('regions', 'list', null, 'Markets', '市場'),
      m('pricingBasis', 'text', null, 'Pricing basis', '定價基礎'),
      m('cheapestPaidUSD', 'money', 'lower', 'Cheapest paid plan', '最便宜付費方案'),
      m('entryShipments', 'num', 'higher', 'Shipments on cheapest paid plan', '最便宜付費方案寄件量'),
      m('usersIncluded', 'num', 'higher', 'Users on cheapest paid plan', '最便宜付費方案用戶數'),
      m('ukCarriers', 'list', 'higher', 'Key UK carriers', '主要英國承運商'),
      m('usCarriers', 'list', 'higher', 'Key US carriers', '主要美國承運商'),
      m('discountedRates', 'bool', 'true', 'Discounted postage rates', '折扣運費'),
      m('ownCarrierAccounts', 'bool', 'true', 'Use your own carrier accounts', '可用自有承運商帳戶'),
      m('automationRules', 'bool', 'true', 'Automation rules', '自動化規則'),
      m('brandedTracking', 'bool', 'true', 'Branded tracking', '品牌化追蹤頁面'),
      m('returnsPortal', 'bool', 'true', 'Returns portal', '退貨入口'),
      m('inventory', 'bool', 'true', 'Inventory management', '庫存管理'),
      m('integrations', 'score', 'higher', 'Store & marketplace integrations', '網店及平台整合'),
      m('apiAvailable', 'bool', 'true', 'Developer API', '開發者 API'),
    ],
    derived: [
      {
        id: 'perLabel',
        label: { en: 'Lowest subscription cost per label', zh: '每張運單訂閱成本最低' },
        better: 'lower',
        type: 'money',
        value: (p) =>
          typeof p.metrics.entryShipments === 'number' && p.metrics.cheapestPaidUSD
            ? p.metrics.cheapestPaidUSD / p.metrics.entryShipments
            : null,
      },
      {
        id: 'carriers',
        label: { en: 'Most UK + US carriers', zh: '英美承運商最多' },
        better: 'higher',
        type: 'num',
        value: (p) => (p.metrics.ukCarriers?.length ?? 0) + (p.metrics.usCarriers?.length ?? 0) || null,
      },
    ],
  },
]

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]))
