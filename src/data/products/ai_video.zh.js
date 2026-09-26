export default {
  "runway": {
    "bestFor": "適合想要一套完整 AI 影片工具、並使用頂級生成模型的創意專業人士及製作公司。",
    "strategy": "按席位收費的訂閱方案，每月附送點數，按生成秒數扣減；另設加購點數、可結轉點數的 Max 方案、企業合約，以及按用量另行計費的 API。",
    "strengths": [
      "Gen-4.5 模型電影感強",
      "完整創作套件（剪輯、對嘴、音訊工具）",
      "Standard 起可作商業用途，並無水印",
      "提供開發者 API"
    ],
    "weaknesses": [
      "點數消耗快（Standard 約 52 秒 Gen-4.5）",
      "Standard/Pro 點數不可結轉",
      "Trustpilot 評分極差（收費及客服投訴）"
    ],
    "confidence": "中等 - 官方頁面無法存取；價格及點數取自多份 2026 年第三方整理（月費被描述為約數）。52 秒假設 Gen-4.5 每秒 12 點數；較便宜的模型可生成更多。Gen-4.5 原生 720p，4K 需透過放大。各來源對原生音訊的說法不一（null）。G2/Capterra 評分不可見，只有評論數量。Trustpilot 為 runwayml.com 網域。",
    "tiers": [
      {
        "quota": "一次性 125 點數",
        "highlights": [
          "一次性 125 點數",
          "匯出附水印",
          "不可使用 Gen-4.5"
        ]
      },
      {
        "quota": "每月 625 點數（約 52 秒 Gen-4.5）",
        "highlights": [
          "解鎖所有模型",
          "無水印，4K 放大",
          "點數不可結轉"
        ]
      },
      {
        "quota": "每月 2,250 點數",
        "highlights": [
          "每個工作區最多 10 位用戶",
          "點數為 Standard 的 3.6 倍"
        ]
      },
      {
        "quota": "每月 9,500 點數，可結轉 1 個月",
        "highlights": [
          "2026 年取代 Unlimited 方案",
          "點數可結轉一個月",
          "每個工作區最多 10 位用戶"
        ]
      },
      {
        "quota": "自訂點數",
        "highlights": [
          "SSO 及工作區分析",
          "進階安全及合規",
          "優先支援"
        ]
      }
    ],
    "metrics": {
      "creditsPerMonthCheapestPaid": "625 點數",
      "videoType": "生成式"
    }
  },
  "pika": {
    "bestFor": "適合預算有限、製作簡短有趣短片的業餘愛好者及社交媒體創作者。",
    "strategy": "點數套餐訂閱，商業使用權及去除水印僅限 Pro 或以上方案，以推動用戶升級。",
    "strengths": [
      "同類產品中入場價最低",
      "有趣特效及 Pikaformance 對嘴",
      "每條短片的點數成本簡單清晰"
    ],
    "weaknesses": [
      "Pro 以下方案無商業使用權，亦不能去除水印",
      "最高 1080p，短片時長短",
      "客服及收費口碑差（Trustpilot 1.7）"
    ],
    "confidence": "中等 - 官方頁面無法存取；價格取自 2026 年第三方整理（部分互相矛盾）。約 175 秒假設每條 5 秒 720p 短片 20 點數（1080p 10 秒 = 80 點數 -> 約 87 秒）。原生音訊及公開 API 未獲確認（null）。未找到 G2/Capterra 頁面。",
    "tiers": [
      {
        "quota": "每月 150 點數",
        "highlights": [
          "輸出附水印",
          "不可作商業用途",
          "Pikaformance 720p"
        ]
      },
      {
        "quota": "每月 700 點數",
        "highlights": [
          "約 35 條 5 秒 720p 短片",
          "仍無商業使用權",
          "點數不可結轉"
        ]
      },
      {
        "quota": "每月 2,300 點數",
        "highlights": [
          "商業使用權",
          "無水印下載"
        ]
      },
      {
        "quota": "每月 6,000 點數",
        "highlights": [
          "點數額度最高",
          "可作商業用途，無水印"
        ]
      }
    ],
    "metrics": {
      "creditsPerMonthCheapestPaid": "700 點數",
      "videoType": "生成式"
    }
  },
  "luma_dream_machine": {
    "bestFor": "適合追求高畫質、支援 HDR 的生成鏡頭及 Agent 驅動創作流程的設計師及電影製作人。",
    "strategy": "點數訂閱（2026 年 3 月起推出新的 Agents 方案階梯），按解像度、時長及 HDR 計價，另設獨立計費的 API 及企業方案。",
    "strengths": [
      "高質素 Ray3.14 模型，支援 HDR",
      "入門方案已可作商業用途",
      "可透過 API 使用 Ray 模型"
    ],
    "weaknesses": [
      "現行價格頁面沒有免費方案",
      "不支援原生音訊生成",
      "1080p 點數消耗昂貴；Trustpilot 評分差"
    ],
    "confidence": "中等 - 官方頁面無法存取。據報舊版 Dream Machine 方案階梯（Free / Lite $9.99 [年繳 $7.99，3,200 點數，附水印，不可商用] / Plus $29.99 / Unlimited $94.99）仍在 dream-machine.lumalabs.ai 提供；此處採用現行方案階梯。約 500 秒假設 Ray3.14 720p 每秒約 20 點數；1080p SDR（每 5 秒 400 點數）約為 125 秒。4K 為放大輸出。G2 只有 1 則評論。",
    "tiers": [
      {
        "quota": "每月 10,000 點數",
        "highlights": [
          "可作商業用途",
          "Ray3.14 及 Luma Agents",
          "沒有永久免費方案"
        ]
      },
      {
        "quota": "每月 40,000 點數",
        "highlights": [
          "用量為 Plus 的 4 倍",
          "Luma Agents 工作流程"
        ]
      },
      {
        "quota": "每月 150,000 點數",
        "highlights": [
          "用量為 Plus 的 15 倍",
          "適合大量製作使用"
        ]
      },
      {
        "quota": "自訂",
        "highlights": [
          "自訂點數及條款"
        ]
      }
    ],
    "metrics": {
      "creditsPerMonthCheapestPaid": "10,000 點數",
      "videoType": "生成式"
    }
  },
  "kling_ai": {
    "bestFor": "適合重視成本、希望以最低每秒價格獲得出色動態效果及原生音訊的創作者。",
    "strategy": "首月優惠的點數訂閱，續訂時價格較高；點數按解像度、時長及音訊計價，另設獨立 API。",
    "strengths": [
      "每秒成本非常低",
      "Kling 3.0 原生音訊，最高 4K",
      "短片最長約 15 秒，支援多鏡頭"
    ],
    "weaknesses": [
      "Trustpilot 評分同類最差（收費、客服）",
      "優惠價續訂時會加價",
      "Ultra 沒有年繳選項"
    ],
    "confidence": "中等 - 官方頁面無法存取；續訂價格及年費總額（每年 $79.20/$293.04/$728.64，除以 12）取自第三方整理；Ultra 據報為 $160-180。約 110 秒假設 Kling 3.0 720p 無聲影片每秒 6 點數（1080p+音訊每秒 12 點數 -> 約 55 秒）。短片最長 15 秒及 Standard 可作商業用途未在官方頁面獲確認。每日免費點數數量未經核實。",
    "tiers": [
      {
        "quota": "每日免費點數",
        "highlights": [
          "輸出附水印",
          "每日點數有限"
        ]
      },
      {
        "quota": "每月 660 點數",
        "highlights": [
          "首月 $6.99",
          "約 110 秒 720p 無聲影片"
        ]
      },
      {
        "quota": "每月 3,000 點數",
        "highlights": [
          "首月 $25.99",
          "原生音訊生成"
        ]
      },
      {
        "quota": "每月 8,000 點數",
        "highlights": [
          "首月 $64.99",
          "適合經常創作的用戶"
        ]
      },
      {
        "quota": "每月 26,000 點數",
        "highlights": [
          "沒有年繳選項",
          "首月 $127.99"
        ]
      }
    ],
    "metrics": {
      "creditsPerMonthCheapestPaid": "660 點數",
      "videoType": "生成式"
    }
  },
  "synthesia": {
    "bestFor": "適合大規模以 AI 主持人製作培訓、入職及企業講解影片的公司。",
    "strategy": "按編輯者席位收費的訂閱方案，每月設影片分鐘額度；API、協作及合規功能僅限較高級方案及企業合約。",
    "strengths": [
      "企業級虛擬主播影片，適合培訓及發展（L&D）",
      "Express-2 全身表情豐富的虛擬主播",
      "G2/Capterra 評價出色"
    ],
    "weaknesses": [
      "分鐘上限低（Starter 只有 10 分鐘）",
      "按編輯者席位收費",
      "內容限制令部分用戶不滿"
    ],
    "confidence": "中等 - 各來源價格一致；有一個來源指 Starter 為 $22。最高解像度未經核實（假設 1080p；較高級方案可能提供 4K）。每條影片沒有時長上限（每條最長約 4 小時），故 maxClipSeconds 為 null。Trustpilot 評論數在不同時間為 1,762-2,000；G2 亦有來源引述為 4.7 分、2,500+ 則評論。",
    "tiers": [
      {
        "quota": "每月 10 分鐘",
        "highlights": [
          "約 9 個預設虛擬主播",
          "附水印，不可下載 MP4"
        ]
      },
      {
        "quota": "每月 10 分鐘影片",
        "highlights": [
          "125+ 個虛擬主播",
          "3 個個人虛擬主播",
          "去除標誌，可下載"
        ]
      },
      {
        "quota": "每月 30 分鐘影片",
        "highlights": [
          "1 位編輯者 + 5 位訪客",
          "180+ 個虛擬主播，5 個個人虛擬主播",
          "API 存取、互動影片"
        ]
      },
      {
        "quota": "無限分鐘",
        "highlights": [
          "240+ 個虛擬主播",
          "SAML/SSO、SCORM 匯出",
          "無限個人虛擬主播"
        ]
      }
    ],
    "metrics": {
      "creditsPerMonthCheapestPaid": "10 分鐘影片",
      "videoType": "虛擬主播 / 簡報"
    }
  },
  "heygen": {
    "bestFor": "適合製作多語言虛擬主播、UGC 風格及翻譯真人講話影片的市場推廣人員及創作者。",
    "strategy": "以點數為基礎的訂閱方案（按虛擬主播模型計算每生成一分鐘所需點數），Business 方案可按席位加購，另設獨立 API 及企業定價。",
    "strengths": [
      "對嘴及聲音複製效果出色",
      "支援 175+ 種語言翻譯",
      "G2 評分非常高"
    ],
    "weaknesses": [
      "點數制度令人混淆（Avatar IV 每分鐘 20 點數）",
      "Trustpilot 上有客服及收費投訴",
      "Pro/Business 定價不透明"
    ],
    "confidence": "中等偏低 - Pro 價格說法不一（多數來源為每月 $49；有一個來源指月繳 $99 / 年繳 $79）；Pro 年繳價格不明。約 1800 秒假設 Avatar IV/V 每分鐘 20 點數（Avatar III 每分鐘 3 點數，可生成遠多於此）。Trustpilot 說法不一：美國頁面約 4.0（3,324-4,000+ 則評論），但有一個來源引述為 2.3；此處記錄 4.0。G2 評論數為賣家層面數字。",
    "tiers": [
      {
        "quota": "每月 3 條影片，最長 1 分鐘",
        "highlights": [
          "720p，附水印",
          "500+ 個預設虛擬主播"
        ]
      },
      {
        "quota": "每月 600 點數（約 30 分鐘 Avatar IV）",
        "highlights": [
          "1080p 匯出，無水印",
          "175+ 種語言",
          "每條影片最長 30 分鐘"
        ]
      },
      {
        "quota": "每月 1,000 點數",
        "highlights": [
          "4K 匯出",
          "點數比 Creator 多"
        ]
      },
      {
        "quota": "每月 1,500 點數",
        "highlights": [
          "每個額外席位 $20",
          "團隊協作"
        ]
      },
      {
        "quota": "自訂",
        "highlights": [
          "無時長限制",
          "多工作區管理"
        ]
      }
    ],
    "metrics": {
      "creditsPerMonthCheapestPaid": "600 點數",
      "videoType": "虛擬主播 / 簡報"
    }
  },
  "google_flow_veo": {
    "bestFor": "適合已使用 Google 生態系統、希望以低入場成本製作附原生聲音的高質素短片的創作者。",
    "strategy": "將 Flow 影片點數綑綁於 Google AI 消費者訂閱（儲存空間 + Gemini），開發者則透過 Gemini API/Vertex AI 按秒計費使用 Veo API。",
    "strengths": [
      "原生同步音訊及對白",
      "每日免費點數慷慨",
      "與 Gemini/儲存空間訂閱綑綁"
    ],
    "weaknesses": [
      "短片只有 8 秒",
      "Ultra 以下方案有可見水印",
      "影片功能屬更廣泛的 AI 套餐一部分，並非獨立產品"
    ],
    "confidence": "中等 - 選用此產品代替已停止服務的 OpenAI Sora（應用程式於 2026 年 4 月 26 日關閉，API 於 2026 年 9 月 24 日停用）。方案價格取自有關 I/O 2026 變動的第三方整理；未找到年繳價格。約 80 秒 = 200 點數 / 每條 8 秒 Veo 3.1 Fast 短片 20 點數，不包括每日免費點數。商業用途條款未經核實。Flow 本身沒有 Trustpilot/G2/Capterra 頁面。",
    "tiers": [
      {
        "quota": "每日 50 Flow 點數",
        "highlights": [
          "可使用 Veo 3.1 Lite/Fast",
          "附可見 Veo 水印"
        ]
      },
      {
        "quota": "每月 200 Flow 點數 + 每日 50",
        "highlights": [
          "2026 年 6 月由 $7.99 減價",
          "Veo 3.1 Fast",
          "400 GB 儲存空間"
        ]
      },
      {
        "quota": "每月 1,000 Flow 點數 + 每日 50",
        "highlights": [
          "約 50 條 Veo 3.1 Fast 影片",
          "Gemini 3.1 Pro",
          "仍附水印"
        ]
      },
      {
        "quota": "每月 10,000 Flow 點數",
        "highlights": [
          "I/O 2026 推出的新方案",
          "用量上限為 Pro 的 5 倍"
        ]
      },
      {
        "quota": "每月 25,000 Flow 點數",
        "highlights": [
          "由 $249.99 下調",
          "上限為 Pro 的 20 倍",
          "去除水印（Ultra）"
        ]
      }
    ],
    "metrics": {
      "creditsPerMonthCheapestPaid": "200 點數（另加每日 50 免費點數）",
      "videoType": "生成式"
    }
  }
};
