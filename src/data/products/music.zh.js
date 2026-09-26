// Traditional Chinese (Hong Kong) translations for music.js, keyed by product id.
export default {
  "suno": {
    "bestFor": "適合想以極低成本製作任何曲風完整人聲歌曲的創作者和愛好者。",
    "strategy": "免費增值點數訂閱，現時以每月下載上限、付費額外下載及 Premier 專屬 Studio 功能來區分價值。",
    "strengths": [
      "同類最佳的完整人聲歌曲",
      "v6 授權模型（WMG、BMG、Believe）",
      "Premier 提供 Studio 編輯器，支援分軌/MIDI",
      "每美元可得大量點數"
    ],
    "weaknesses": [
      "自 2026 年 9 月 3 日起設下載上限（每月 20/60 次）",
      "擁有權條款降級為授權",
      "免費方案歌曲永遠不可作商業用途",
      "Trustpilot 上客戶支援/收費評價差"
    ],
    "confidence": "高 - 價格/上限經多個 2026 年 9 月來源確認；每月歌曲數為點數估算（每次生成 2 首歌曲耗 10 點數），但 Pro 只可下載 20 首；downloadOnFree = 終身 7 次；MIDI 僅限 Premier；maxTrackMinutes 為約數；Trustpilot 數據來自 suno.com 頁面（另一個 suno.ai 頁面約有 820 則評價，未取得評分）；suno.com 封鎖直接抓取。",
    "tiers": [
      {
        "quota": "每日 50 點數（約 10 首歌曲）；終身 7 次下載",
        "highlights": [
          "僅限非商業用途",
          "終身 7 次下載",
          "每日重置點數"
        ]
      },
      {
        "quota": "每月 2,500 點數（約 500 首歌曲）；每月 20 次下載",
        "highlights": [
          "商業使用權",
          "每月 20 次下載",
          "最新模型，包括 v6",
          "可額外購買下載次數"
        ]
      },
      {
        "quota": "每月 10,000 點數（約 2,000 首歌曲）；每月 60 次下載",
        "highlights": [
          "Suno Studio DAW 編輯器",
          "MIDI 匯出及分軌",
          "60 次下載（Studio 無限）",
          "商業使用權"
        ]
      }
    ],
    "metrics": {
      "ownershipOfOutput": "授權（永久商業授權；自與 WMG 達成協議後，Suno 保留作者身份）"
    }
  },
  "udio": {
    "bestFor": "適合想在唱片公司授權平台內創作及分享 AI 歌曲、而非匯出歌曲的樂迷。",
    "strategy": "按點數計費的訂閱，正轉型為唱片公司授權、串流模式的封閉平台，並設藝人自願參與的收益分成。",
    "strengths": [
      "高保真人聲生成",
      "局部重繪及延伸編輯",
      "未來為唱片公司授權（UMG、WMG）平台"
    ],
    "weaknesses": [
      "自 2025 年 10 月/11 月起停用下載",
      "作品不可發佈到 Spotify/YouTube",
      "授權版重新推出至 2026 年仍未落實",
      "Trustpilot 評分極差"
    ],
    "confidence": "中 - 各來源價格一致，但平台正處於轉型期；每月曲目數（約 700 首）按免費方案比例粗略估算（10 點數約 3 首歌曲）；分軌可在應用程式內使用但不能匯出；G2 頁面有 0 則評價。",
    "tiers": [
      {
        "quota": "每日 10 點數，每月上限 100（每日約 3 首完整歌曲）",
        "highlights": [
          "不可下載（封閉平台）",
          "每日重置點數"
        ]
      },
      {
        "quota": "每月 2,400 點數",
        "highlights": [
          "應用程式內創作及串流",
          "延伸及局部重繪編輯",
          "不可下載音訊/分軌"
        ]
      },
      {
        "quota": "每月 6,000 點數",
        "highlights": [
          "Standard 的 2.5 倍點數",
          "優先生成",
          "不可下載音訊/分軌"
        ]
      }
    ],
    "metrics": {
      "ownershipOfOutput": "授權，僅限平台內使用（自與 UMG 達成協議後不可匯出）"
    }
  },
  "aiva": {
    "bestFor": "適合想要可編輯器樂配樂及 MIDI 的作曲人及遊戲/電影創作者。",
    "strategy": "按授權階梯定價的訂閱，較高方案可購得版權擁有權及更多下載次數。",
    "strengths": [
      "MIDI 匯出，配合 DAW 工作流程",
      "Pro 享完整版權擁有權",
      "擅長管弦樂/電影風格作曲",
      "鋼琴卷軸式編輯"
    ],
    "weaknesses": [
      "只有器樂，沒有人聲",
      "Standard 須註明 AIVA",
      "價格以歐元定價，另加增值稅",
      "據評價介面過時、不直觀"
    ],
    "confidence": "中 - 標價為歐元（15/11、49/33），此處按面值以美元顯示；Standard 只允許社交平台變現（因此 commercialUse 為 false、royaltyFree 為 true）；分軌及 API 未經核實；G2 評價太少，無法評分。",
    "tiers": [
      {
        "quota": "每月 3 次下載，曲目最長 3 分鐘",
        "highlights": [
          "MP3 及 MIDI 下載",
          "版權歸 AIVA 所有",
          "須註明出處，不可變現"
        ]
      },
      {
        "quota": "每月 15 次下載，最長 5 分鐘",
        "highlights": [
          "可在 YouTube/Twitch/TikTok/Instagram 變現",
          "AIVA 保留版權，須註明出處",
          "MIDI 匯出"
        ]
      },
      {
        "quota": "每月 300 次下載，最長 5.5 分鐘",
        "highlights": [
          "你擁有完整版權",
          "不受限制的商業用途",
          "WAV 及高品質格式"
        ]
      }
    ],
    "metrics": {
      "ownershipOfOutput": "平台擁有（Free/Standard）；Pro 由用戶擁有"
    }
  },
  "soundraw": {
    "bestFor": "適合需要無限免版稅背景音樂的 YouTuber 及市場推廣人員。",
    "strategy": "分級訂閱，年繳折扣大（約 35%），將創作者同步授權與藝人發行權分開，另設 B2B API。",
    "strengths": [
      "Creator 可無限下載",
      "以自家音樂訓練，授權清晰",
      "可按段落/能量編輯曲目",
      "官方音樂 API"
    ],
    "weaknesses": [
      "只有器樂",
      "Artist 方案設下載上限",
      "有試用轉年費收費的投訴",
      "聽起來可能重複"
    ],
    "confidence": "中 - Creator 月費/年費已確認；Artist 方案只找到按年計的每月價格（月費可能約 $29.99/$35.99/$49.99，但未經核實，留空）；因無限所以每月曲目數留空；Trustpilot 評價數只知「30+」；沒有 G2 評價。",
    "tiers": [
      {
        "quota": "無限 MP3 下載",
        "highlights": [
          "影片、Podcast、廣告免版稅",
          "可用於客戶項目",
          "取消後授權仍永久有效"
        ]
      },
      {
        "quota": "每月 10 次下載",
        "highlights": [
          "可發行至 Spotify/DSP",
          "沒有分軌",
          "只有 MP3"
        ]
      },
      {
        "quota": "每月 20 次下載",
        "highlights": [
          "WAV 及分軌",
          "DSP 發行權"
        ]
      },
      {
        "quota": "無限下載",
        "highlights": [
          "MP3、WAV 及分軌",
          "沒有下載限制",
          "DSP 發行權"
        ]
      },
      {
        "quota": "自訂",
        "highlights": [
          "供應用程式/遊戲使用的音樂 API"
        ]
      }
    ],
    "metrics": {
      "ownershipOfOutput": "授權（永久免版稅授權）"
    }
  },
  "boomy": {
    "bestFor": "適合想生成簡單曲目並快速發行到串流平台的初學者。",
    "strategy": "低價訂閱，另從已發行作品的串流版稅中抽成。",
    "strengths": [
      "內置串流發行",
      "入門方案非常便宜",
      "一鍵快速生成"
    ],
    "weaknesses": [
      "作品比 Suno/Udio 簡單",
      "有版稅發放投訴",
      "編輯控制選項少",
      "2025-2026 年產品消息很少"
    ],
    "confidence": "低 - 價格來自 2026 年第三方評測（未找到年費價格；$119.88/年 = 沒有折扣）；人聲、MIDI、API、免費下載未經核實；未取得 Trustpilot 評分（27 則評價，多為版稅發放投訴）；據狀態頁面服務正常運作。",
    "tiers": [
      {
        "quota": "有限的儲存及發行次數",
        "highlights": [
          "即時生成歌曲",
          "發行至串流平台"
        ]
      },
      {
        "quota": "500 次儲存、每月 10 次 MP3 下載、每月 3 次發行",
        "highlights": [
          "下載後享完整商業權利",
          "更快的發行審核",
          "串流收益分成"
        ]
      },
      {
        "quota": "無限儲存",
        "highlights": [
          "100% 收益分成（扣除費用後）",
          "部分曲目提供分軌",
          "優先支援"
        ]
      }
    ],
    "metrics": {
      "ownershipOfOutput": "授權（付費下載享完整商業權利）"
    }
  },
  "mubert": {
    "bestFor": "適合需要大量長背景曲目的直播主、應用程式開發者及創作者。",
    "strategy": "按授權級別訂閱（使用權決定價格），另設 B2B API 授權。",
    "strengths": [
      "曲目非常長（最長 25 分鐘）",
      "每月曲目量大",
      "供應用程式/串流使用的開發者 API",
      "在社交平台不會觸發 DMCA"
    ],
    "weaknesses": [
      "只有器樂",
      "商業權利須 Pro",
      "授權混亂及退款投訴",
      "循環樂段可能重複"
    ],
    "confidence": "中 - 價格一致；各來源對 Creator 額度（25 首對 500 首）及 Creator 是否允許社交平台變現說法不一；未找到 G2 3.7 分的評價數；Capterra 有 0 則評價。",
    "tiers": [
      {
        "quota": "每月最多約 25-50 首曲目，MP3",
        "highlights": [
          "非商業用途，須註明出處",
          "只有 MP3"
        ]
      },
      {
        "quota": "供社交/個人用途的曲目",
        "highlights": [
          "社交媒體內容",
          "不可變現/作商業用途（2026 年條款）"
        ]
      },
      {
        "quota": "每月 500 首曲目",
        "highlights": [
          "商業用途及變現",
          "完整 Track Editor，附分軌",
          "曲目最長 25 分鐘"
        ]
      },
      {
        "quota": "廣泛商業授權",
        "highlights": [
          "客戶項目、應用程式、遊戲",
          "代理商使用"
        ]
      }
    ],
    "metrics": {
      "ownershipOfOutput": "授權（Mubert 保留版權）"
    }
  },
  "beatoven_ai": {
    "bestFor": "適合想要合乎道德授權、按情緒選配背景音樂的影片創作者及 Podcaster。",
    "strategy": "按下載分鐘數計量的訂閱，生成次數無限，另設按分鐘增值及 API。",
    "strengths": [
      "完全授權的 Maestro 模型，向藝人付費",
      "生成後可編輯情緒/樂器",
      "分軌（低音、和弦、旋律、敲擊樂）",
      "公開 API 及音效生成"
    ],
    "weaknesses": [
      "只有器樂，人聲「即將推出」",
      "下載分鐘數上限",
      "生成速度慢",
      "不可免費下載"
    ],
    "confidence": "中 - Creator/Visionary $10/$20（年費 $100/$200）已確認；部分來源亦提及 $3 的「Creator Lite」方案（未經核實，已略去）；每月曲目數假設每首約 3 分鐘；未找到 Trustpilot 頁面。",
    "tiers": [
      {
        "quota": "只可生成/試聽；不可下載",
        "highlights": [
          "試用 Maestro 音樂及音效",
          "不可下載"
        ]
      },
      {
        "quota": "每月 30 下載分鐘（約 10 首曲目）",
        "highlights": [
          "無限生成",
          "每次下載享獨家授權",
          "進階曲目編輯"
        ]
      },
      {
        "quota": "每月 60 下載分鐘（約 20 首曲目）",
        "highlights": [
          "無限生成",
          "分軌下載",
          "獨家授權"
        ]
      },
      {
        "quota": "每下載分鐘 $3",
        "highlights": [
          "毋須訂閱"
        ]
      }
    ],
    "metrics": {
      "ownershipOfOutput": "授權（每次下載享獨家授權）"
    }
  }
}
