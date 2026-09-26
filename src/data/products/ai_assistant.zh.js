export default {
  "chatgpt": {
    "bestFor": "希望使用一個具備圖像、語音、代理及編程功能的全能助手的個人及團隊。",
    "strategy": "以免費增值引導用戶升級至 $8-$200 的個人訂閱，另設按席位收費的 Business/Enterprise 方案及按用量收費的 API。",
    "strengths": [
      "功能最全面（圖像、語音、代理、Codex）",
      "Go 入門方案只需 $8",
      "Business 席位價格於 2026 年降至 $20-25"
    ],
    "weaknesses": [
      "Trustpilot 評價極差；只有聊天機械人支援",
      "模型/方案經常變動",
      "較低級方案的上下文長度比對手小"
    ],
    "confidence": "中 - 無法存取 openai.com；價格來自多個一致的 2026 年 9 月二手來源。Trustpilot 1.6 分為 chat.openai.com 頁面（評價數目不詳）；未取得 G2/Capterra 資料。",
    "tiers": [
      {
        "quota": "訊息數量有限；instant 模型上下文 27K",
        "highlights": [
          "基本模型存取",
          "有限度圖像生成",
          "網上搜尋及語音"
        ]
      },
      {
        "quota": "上限高於 Free；推理上下文 256K",
        "highlights": [
          "最便宜的 ChatGPT 付費方案",
          "更長的記憶及上下文",
          "語音連視像"
        ]
      },
      {
        "quota": "較高上限；instant 上下文 54K / 推理上下文 256K",
        "highlights": [
          "前沿模型及推理模型",
          "包括 Codex 編程代理",
          "深度研究、代理模式"
        ]
      },
      {
        "quota": "Plus 用量的 5 倍；另有 $200 的 Pro 20 倍方案（2026 年 9 月暫停新用戶登記）",
        "highlights": [
          "Plus 用量的 5 倍（$200 為 20 倍）",
          "推理上下文 400K",
          "Pro 專屬模型"
        ]
      },
      {
        "quota": "標準席位；Premium 席位每月 $125（按年 $100），用量為 5 倍",
        "highlights": [
          "SAML SSO 及管理控制",
          "不以商業數據訓練模型",
          "60+ 個應用程式連接器"
        ]
      }
    ],
    "metrics": {
      "usageLimitsNote": "按方案設訊息上限；Go/Plus/Business 推理上下文 256K，Pro 為 400K（第三方對 OpenAI 方案表的解讀）"
    }
  },
  "claude": {
    "bestFor": "需要長上下文推理及代理式編程的開發人員、寫作人員及知識型工作者。",
    "strategy": "以免費增值引導用戶升級至 $20 的 Pro 及 $100/$200 的 Max 用量方案，另設按席位收費的 Team（標準/高級）方案，以及 Enterprise 席位加 API 費率用量。",
    "strengths": [
      "編程能力強（所有付費方案均包括 Claude Code）",
      "上下文最高達 1M tokens",
      "Team/Enterprise 預設明確不作訓練用途"
    ],
    "weaknesses": [
      "沒有原生圖像生成",
      "每節用量上限令重度用戶不滿",
      "有評價指帳單支援只由機械人處理"
    ],
    "confidence": "價格方面高（已於 2026-09-26 擷取官方網頁）；Max $200 方案來自二手來源；未取得評分資料（搜尋額度已用盡）。",
    "tiers": [
      {
        "quota": "每日用量有限；Sonnet 及 Haiku",
        "highlights": [
          "網上搜尋、程式碼執行",
          "Artifacts 及記憶功能",
          "上下文最高 1M（視乎模型）"
        ]
      },
      {
        "quota": "每 5 小時時段用量最少為 Free 的 5 倍",
        "highlights": [
          "包括 Claude Code",
          "所有模型，包括 Opus",
          "Projects、Chrome、Microsoft 365"
        ]
      },
      {
        "quota": "$100 為 Pro 用量的 5 倍；$200 為 Pro 的 20 倍；只限按月付款",
        "highlights": [
          "Pro 用量的 5 倍或 20 倍",
          "繁忙時段優先使用",
          "搶先使用新功能"
        ]
      },
      {
        "quota": "用量多於 Pro；2-150 個席位",
        "highlights": [
          "SSO 及管理控制",
          "預設不作訓練用途",
          "企業搜尋、連接器"
        ]
      },
      {
        "quota": "標準席位用量的 5 倍",
        "highlights": [
          "Standard 席位用量的 5 倍",
          "團隊版 Claude Code",
          "可與 Standard 席位混合使用"
        ]
      }
    ],
    "metrics": {
      "usageLimitsNote": "按每 5 小時時段計算用量；Max 為 Pro 的 5 倍/20 倍；上下文最高 1M tokens，視乎模型"
    }
  },
  "google_gemini": {
    "bestFor": "希望使用與雲端儲存空間及 Workspace 應用程式捆綁的強大多模態 AI 的 Google 生態系統用戶。",
    "strategy": "為消費者把 Gemini 捆綁在 Google One 儲存方案中，為企業捆綁在 Workspace 席位價格中；API 按用量收費。",
    "strengths": [
      "最便宜的付費入門方案（$4.99），已包括旗艦模型",
      "捆綁儲存空間並與 Google 應用程式整合",
      "各模型均支援 1M tokens 上下文"
    ],
    "weaknesses": [
      "有評價指會出現幻覺及過度拒絕回答",
      "方案組合複雜且經常變動",
      "企業 AI 功能須配合 Workspace 訂閱"
    ],
    "confidence": "中 - 無法存取 Google 網頁；價格來自一致的 2026 年二手來源（I/O 2026 Ultra 拆分、2026 年 6 月 AI Plus 減價）。Trustpilot 評價數目來自搜尋摘要，評分不詳。",
    "tiers": [
      {
        "quota": "基本 Gemini 用量上限",
        "highlights": [
          "Gemini 應用程式及 Live 語音",
          "圖像生成",
          "1M 上下文模型系列"
        ]
      },
      {
        "quota": "Free 上限的 2 倍；400GB 儲存空間",
        "highlights": [
          "可使用 Gemini 3.1 Pro",
          "400GB Google One 儲存空間",
          "影片生成、NotebookLM"
        ]
      },
      {
        "quota": "約為 Free 的 4 倍；Deep Research 每日 20 次；Veo 每日 3 次",
        "highlights": [
          "Gemini 3.1 Pro，1M 上下文",
          "Deep Research 及 Veo",
          "5TB 儲存空間，Gmail 內置 Gemini"
        ]
      },
      {
        "quota": "Pro 上限的 5 倍；20 倍方案 $199.99",
        "highlights": [
          "Pro 用量的 5 倍（$199.99 為 20 倍）",
          "Deep Think、Antigravity 優先使用",
          "20TB 儲存空間、YouTube Premium"
        ]
      },
      {
        "quota": "Flexible 方案價格；Workspace 應用程式內置 Gemini",
        "highlights": [
          "Gmail、Docs、Meet 內置 Gemini",
          "包括完整 Workspace 套件",
          "每位用戶 2TB 共用儲存空間"
        ]
      }
    ],
    "metrics": {
      "usageLimitsNote": "按 Free/Pro 上限的倍數分級；AI Pro 的 Deep Research 每日 20 次、Veo 每日 3 次；1M tokens 上下文"
    }
  },
  "microsoft_copilot": {
    "bestFor": "已使用 Microsoft 365、希望在 Office 應用程式內使用 AI 的機構及家庭。",
    "strategy": "以捆綁 AI 功能推動 Microsoft 365 訂閱升級，並在基本授權之上以按席位收費的附加方案銷售 Copilot。",
    "strengths": [
      "與 Office 應用程式深度整合",
      "消費者方案捆綁完整 Microsoft 365",
      "商業方案設 Enterprise Data Protection"
    ],
    "weaknesses": [
      "商業附加方案須另購基本授權",
      "Copilot Pro 停用後方案組合令人混淆",
      "沒有直接面向消費者的 API"
    ],
    "confidence": "價格方面高（已擷取 Microsoft 官方網頁）；上下文長度不詳；未取得評分資料。",
    "tiers": [
      {
        "quota": "基本 Copilot 聊天",
        "highlights": [
          "免費 Copilot 聊天應用程式",
          "以網上資料為依據的回答",
          "圖像生成"
        ]
      },
      {
        "quota": "用量高於免費版；Office 應用程式 AI 點數",
        "highlights": [
          "Word、Excel、PowerPoint 內置 Copilot",
          "包括 Microsoft 365 應用程式",
          "更高的圖像生成上限"
        ]
      },
      {
        "quota": "用量充裕；代理式 AI 用量有限",
        "highlights": [
          "取代 Copilot Pro",
          "Premium 及 Pro AI 功能",
          "代理式 AI 用量有限"
        ]
      },
      {
        "quota": "最高用量，包括代理式研究",
        "highlights": [
          "最高 Copilot 用量",
          "最高代理式 AI 用量",
          "最高圖像生成上限"
        ]
      },
      {
        "quota": "附加方案；須持有 M365 Business 基本授權；2026 年內按年優惠價 $18",
        "highlights": [
          "Researcher 及 Analyst 代理",
          "以工作數據為依據（Work IQ）",
          "Enterprise Data Protection"
        ]
      }
    ],
    "metrics": {
      "usageLimitsNote": "消費者方案採用 AI 點數/用量級別；商業附加方案須持有 M365 基本授權（企業版 Copilot 按年 $30）"
    }
  },
  "perplexity": {
    "bestFor": "希望透過多個模型、從即時網絡快速取得附引用來源答案的研究人員及團隊。",
    "strategy": "以免費搜尋引導用戶升級至 $20/$200 的個人訂閱、$40/$325 的企業席位，另設按用量收費的 Sonar API。",
    "strengths": [
      "附引用來源的網上答案屬同類最佳",
      "一個訂閱即可選用多個模型",
      "Comet 代理式瀏覽器免費"
    ],
    "weaknesses": [
      "企業席位比對手昂貴",
      "較不適合長篇創作/編程",
      "點數制度增加複雜性"
    ],
    "confidence": "中 - 無法存取 perplexity.ai；價格在 2026 年 9 月各二手來源中一致；企業方案最低席位數目未確認；未取得評分資料。",
    "tiers": [
      {
        "quota": "Pro 搜尋次數有限",
        "highlights": [
          "基本搜尋不限次數",
          "附引用來源的答案",
          "免費 Comet 瀏覽器"
        ]
      },
      {
        "quota": "每日約 300 次 Pro 搜尋；Labs 有限",
        "highlights": [
          "可選用前沿模型",
          "圖像生成、檔案上載",
          "建立檔案及應用程式（Labs）"
        ]
      },
      {
        "quota": "最高個人用量上限",
        "highlights": [
          "最先進的模型",
          "更多 Labs 及 Computer 點數",
          "搶先使用新功能"
        ]
      },
      {
        "quota": "按席位收費；每個席位每年 $400",
        "highlights": [
          "機構管理及 SSO",
          "內部檔案搜尋",
          "數據不會用作訓練"
        ]
      },
      {
        "quota": "按席位收費；每個席位每年 $3,250",
        "highlights": [
          "SCIM、審計紀錄、數據保留",
          "Model Council 多模型",
          "Pro 的 30 倍 Computer 點數"
        ]
      }
    ],
    "metrics": {
      "usageLimitsNote": "Pro 每日約 300 次 Pro 搜尋；Labs 及 Computer 點數按方案遞增；Pro 及 Max 席位可混合使用"
    }
  },
  "mistral_le_chat": {
    "bestFor": "注重成本或以歐盟為主、希望使用價格相宜並具數據主權選項的助手的用戶及團隊。",
    "strategy": "低價免費增值訂閱及按席位收費的 Team 方案，收入來自 API 用量及自訂企業/本地部署合約。",
    "strengths": [
      "完整 Pro 方案價格最低（$14.99）",
      "歐洲供應商，可自行託管",
      "Vibe 品牌重塑後提供代理式 Work/Code 模式"
    ],
    "weaknesses": [
      "部分任務上模型表現落後於前沿領先者",
      "第三方整合較少",
      "品牌重塑（Le Chat 改為 Vibe）或令買家混淆"
    ],
    "confidence": "中 - 無法存取 mistral.ai；價格來自二手來源（據報 2026 年 5 月 Vibe 品牌重塑後未有變動）；Pro 按年價格、上下文長度、語音模式未經核實；未取得評分資料。",
    "tiers": [
      {
        "quota": "據報每日約 25 則訊息",
        "highlights": [
          "Mistral Medium 及 Small",
          "網上搜尋",
          "圖像生成"
        ]
      },
      {
        "quota": "訊息 6 倍、Think 30 倍、圖像 40 倍（相對 Free）",
        "highlights": [
          "Vibe Code 及 Work 模式",
          "深度研究、延伸思考",
          "更高上限"
        ]
      },
      {
        "quota": "每位用戶享 Pro 級上限；每月最低 $50",
        "highlights": [
          "共用工作空間及資料庫",
          "管理控制、集中計費",
          "每位用戶 30GB 儲存空間"
        ]
      },
      {
        "quota": "只提供報價；私有/自行託管部署",
        "highlights": [
          "本地部署或私有雲",
          "自訂模型及連接器"
        ]
      }
    ],
    "metrics": {
      "usageLimitsNote": "Pro/Team：訊息 6 倍、Think 30 倍、圖像 40 倍（相對 Free）；Team 每月最低 $50；學生方案約 $5.99-6.99"
    }
  },
  "notion_ai": {
    "bestFor": "已在 Notion 管理文件及知識庫、希望就這些內容使用 AI 搜尋、寫作及代理功能的團隊。",
    "strategy": "把 AI 捆綁於較高級的 Business 席位方案以推動升級，另就 Custom Agents 按點數計費。",
    "strengths": [
      "AI 可處理你的 Notion 文件及已連接的應用程式",
      "一個工作空間內可用多個前沿模型",
      "日常 AI 功能不按點數計費"
    ],
    "weaknesses": [
      "完整 AI 功能須使用 Business 方案",
      "Custom Agents 會增加用量費用",
      "並非獨立的通用聊天應用程式"
    ],
    "confidence": "中 - 無法存取 notion.com；價格來自引述官方網頁的二手來源（2026 年 8 月）。individualPriceUSD 採用 Business 價格，因 Plus 沒有完整 AI 功能。apiAvailable 為 false 指沒有 AI 模型 API（Notion 工作空間 API 仍然存在）。未取得評分資料。",
    "tiers": [
      {
        "quota": "有限度 AI 試用",
        "highlights": [
          "核心工作空間",
          "有限度 Notion AI 試用"
        ]
      },
      {
        "quota": "只有有限度 AI 試用",
        "highlights": [
          "區塊及上載不限數量",
          "有限度 AI 試用"
        ]
      },
      {
        "quota": "完整 Notion AI；Custom Agents 按每 1,000 點數 $10 計費",
        "highlights": [
          "包括完整 Notion AI",
          "AI 會議紀錄、企業搜尋",
          "可使用 GPT 及 Claude 模型"
        ]
      },
      {
        "quota": "自訂價格",
        "highlights": [
          "進階保安及控制",
          "與 LLM 之間零數據保留"
        ]
      }
    ],
    "metrics": {
      "usageLimitsNote": "完整 AI 只限 Business（按月 $24 / 按年 $20）及 Enterprise；Custom Agents 按每 1,000 工作空間點數 $10 計費"
    }
  }
};
