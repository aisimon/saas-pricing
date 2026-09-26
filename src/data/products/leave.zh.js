export default {
  "vacation_tracker": {
    "bestFor": "日常在 Slack 或 Microsoft Teams 上工作、希望在聊天中處理請假申請的遙距團隊。",
    "strategy": "免費增值、先入後擴：永久免費方案只限一種假期類型，其後按活躍用戶收費，設每月最低收費，按年付款約有 10% 折扣。",
    "strengths": [
      "直接在 Slack/Teams/Google Workspace 內使用",
      "免費方案不限用戶數目",
      "每位用戶收費低廉"
    ],
    "weaknesses": [
      "設每月最低收費（$50/$100）",
      "累積假期、按小時請假及多層審批只限 Complete 方案",
      "沒有專屬原生手機應用程式（使用 Slack/Teams 應用程式）；未經核實"
    ],
    "confidence": "中 - 各搜尋摘要的價格一致（官方網頁無法擷取）；按年付款的每月價格約 10% 折扣屬估算（按年價格按用戶人數區間定價）；Trustpilot 只有 2 則評價；手機應用程式一項未能確定",
    "tiers": [
      {
        "quota": "用戶數目不限；1 種假期類型、1 名審批人",
        "highlights": [
          "Slack、Teams、Google Workspace 聊天機械人",
          "只有一種假期類型",
          "單一審批人"
        ]
      },
      {
        "quota": "按活躍用戶收費；每月最低 $50；3 個地點、10 個部門",
        "highlights": [
          "假期政策不限數目",
          "報表及 API 存取",
          "最多 3 個地點"
        ]
      },
      {
        "quota": "按活躍用戶收費；每月最低 $100；地點/部門不限數目",
        "highlights": [
          "累積假期及按小時請假",
          "多層審批",
          "定時報表"
        ]
      }
    ],
    "metrics": {
      "approvalWorkflowLevels": "單一審批人（Free/Core）；Complete 方案支援多層審批",
      "publicHolidayCountries": "多個國家（自動匯入）；確實數目未經核實"
    }
  },
  "timetastic": {
    "bestFor": "希望使用極簡假期一覽表、無最低消費的中小型團隊（尤其英國）。",
    "strategy": "簡單的兩級按用戶按月訂閱，提供 30 日試用，無最低收費，亦無需按年綁約。",
    "strengths": [
      "介面非常簡單，深受用戶喜愛",
      "無最低收費，每位用戶價格低",
      "評價極佳，設有 iOS/Android 應用程式"
    ],
    "weaknesses": [
      "沒有免費方案",
      "累積假期/整合功能大多只限 Pro 方案",
      "只設按月收費，沒有按年折扣"
    ],
    "confidence": "中 - USD $1.50/$2.50 來自第三方摘要（官方網頁以當地貨幣定價，GBP 1.20/2.00）；Trustpilot 評價數目為約數（約 90 則）；按小時請假未完全確認",
    "tiers": [
      {
        "quota": "按用戶按月收費；無最低收費；30 日試用（GBP 1.20）",
        "highlights": [
          "團隊人數不設下限",
          "假期一覽表及請假申請",
          "包括手機應用程式"
        ]
      },
      {
        "quota": "按用戶按月收費；無最低收費（GBP 2.00）",
        "highlights": [
          "累積假期及設上限的假期類型",
          "Slack/Teams 及日曆同步",
          "SSO 及缺勤趨勢報表",
          "過勞風險提示"
        ]
      }
    ],
    "metrics": {
      "approvalWorkflowLevels": "每個部門一名審批人（可設後備審批人）；不支援多階段審批鏈",
      "publicHolidayCountries": "3,000+ 個地區（據供應商資料）"
    }
  },
  "day_off": {
    "bestFor": "希望使用免費、以手機為主的 PTO（有薪假期）追蹤工具的微型及小型企業。",
    "strategy": "免費增值：10 名員工以內免費，其後 Pro 方案劃一每位用戶每月 $2，最低收費 $20。",
    "strengths": [
      "≤10 名用戶的免費方案相當慷慨",
      "原生 iOS/Android 應用程式",
      "低價方案亦支援累積假期及按小時請假"
    ],
    "weaknesses": [
      "Pro 方案每月最低收費 $20",
      "Capterra 以外的評價數量少",
      "Trustpilot 評分只屬一般"
    ],
    "confidence": "中 - 注意產品網域為 day-off.app（未見 dayoffapp.com）；價格來自搜尋摘要；未找到按年價格；Trustpilot 評價數目及 G2 評分不詳",
    "tiers": [
      {
        "quota": "最多 10 名員工",
        "highlights": [
          "假期類型及累積假期",
          "共用團隊日曆",
          "單層審批"
        ]
      },
      {
        "quota": "按用戶收費；每月最低 $20；14 日試用",
        "highlights": [
          "整合功能及 API",
          "自訂假期類型",
          "詳細報表"
        ]
      }
    ],
    "metrics": {
      "approvalWorkflowLevels": "Free 方案為單層審批；Pro 方案支援多層審批鏈（最多 2 名審批人）",
      "publicHolidayCountries": "多個國家（按國家匯入）；確實數目未經核實"
    }
  },
  "bamboohr": {
    "bestFor": "需要完整 HRIS（人力資源資訊系統）、而假期管理只是其中一個模組的中小企（25-500 名員工）。",
    "strategy": "以報價為準、按每名員工每月收費的分級方案，小型公司設劃一最低收費，並追加銷售薪酬、福利及績效管理附加功能。",
    "strengths": [
      "完整 HRIS，可加購薪酬/福利功能",
      "成熟的報表及工作流程",
      "G2/Capterra 評價數量龐大"
    ],
    "weaknesses": [
      "以報價定價，最低約每月 $250",
      "如只需假期追蹤則功能過多",
      "Trustpilot 評分差（支援服務、加價）"
    ],
    "confidence": "中低 - BambooHR 不公開價格；Core/Pro/Elite 的 $10/$17/$25 及 $250 最低收費為第三方估算；舊有 Essentials/Advantage 名稱已被取代；Trustpilot 評分在不同頁面介乎 2.6-3.4",
    "tiers": [
      {
        "quota": "員工多於 25 人按每名員工收費；≤25 人劃一約每月 $250",
        "highlights": [
          "人事紀錄及假期管理",
          "入職流程及報表",
          "手機應用程式"
        ]
      },
      {
        "quota": "按每名員工收費（估算）",
        "highlights": [
          "新增績效管理",
          "員工投入度調查",
          "進階人力資源工作流程"
        ]
      },
      {
        "quota": "按每名員工收費（估算）",
        "highlights": [
          "新增薪酬管理工具",
          "尊尚支援及保安"
        ]
      }
    ],
    "metrics": {
      "approvalWorkflowLevels": "可設定多步驟審批流程",
      "publicHolidayCountries": "假期日曆由各公司手動設定；未核實有按國家自動匯入功能"
    }
  },
  "deel": {
    "bestFor": "已使用或正考慮使用 Deel 處理薪酬、EOR（名義僱主）或合約人員的分散式/跨國公司。",
    "strategy": "以免費 HRIS/假期管理作為引流產品，交叉銷售高利潤、按每名員工收費的全球薪酬（$29）、合約人員（$49）及 EOR（$599）服務。",
    "strengths": [
      "HRIS（包括 PTO）200 名員工以內免費",
      "全球合規及假期日曆",
      "可配合薪酬/EOR/合約人員服務"
    ],
    "weaknesses": [
      "PTO 模組不及專門工具深入",
      "主要收入來自昂貴的薪酬/EOR 服務",
      "產品範圍複雜"
    ],
    "confidence": "中 - HR 方案 ≤200 人免費及超出部分 $5 來自多份第三方 2026 年指南；薪酬/EOR 牌價廣泛報道；G2/Capterra 數目為約數（單一二手來源）；Trustpilot 數目來自搜尋摘要",
    "tiers": [
      {
        "quota": "200 名員工以內免費",
        "highlights": [
          "HRIS、組織架構圖、PTO 追蹤",
          "基本績效管理",
          "200 人以內免費"
        ]
      },
      {
        "quota": "超出 200 人的部分按每名員工收費",
        "highlights": [
          "進階工作流程",
          "審計紀錄及自訂角色"
        ]
      },
      {
        "quota": "按每名員工收費；須設有當地實體",
        "highlights": [
          "多國薪酬處理",
          "或需繳付開設費用"
        ]
      },
      {
        "quota": "按每名員工收費；量大有折扣",
        "highlights": [
          "無需當地實體即可聘請員工",
          "代為處理合規及福利事宜"
        ]
      }
    ],
    "metrics": {
      "approvalWorkflowLevels": "可設定審批政策（經理/多步驟）；詳情未經核實",
      "publicHolidayCountries": "100+ 個國家，設有本地化假期日曆"
    }
  }
};
