import { defaultRouteLocale, supportedRouteLocales, type RouteLocale } from "@/data/i18n";
import { siteConfig } from "@/data/site.config.mjs";

export const locales = supportedRouteLocales;

export type Locale = RouteLocale;

export const defaultLocale: Locale = defaultRouteLocale;

export const localeMeta = {
    "zh-cn": {
        label: "简体中文",
        shortLabel: "中文",
        lang: "zh-CN",
        ogLocale: "zh_CN"
    },
    "zh-tw": {
        label: "繁體中文",
        shortLabel: "繁體",
        lang: "zh-TW",
        ogLocale: "zh_TW"
    },
    "ja-jp": {
        label: "日本語",
        shortLabel: "日本語",
        lang: "ja-JP",
        ogLocale: "ja_JP"
    },
    "en-us": {
        label: "English",
        shortLabel: "EN",
        lang: "en-US",
        ogLocale: "en_US"
    }
} satisfies Record<Locale, { label: string; shortLabel: string; lang: string; ogLocale: string }>;

export type ProjectItem = {
    name: string;
    summary: string;
    status: string;
    detail: string;
    href: string;
    icon: string;
};

export type MemberItem = {
    name: string;
    role: string;
    focus: string;
    initials: string;
};

export type ContactItem = {
    label: string;
    value: string;
    href: string;
    icon: string;
};

export type SocialItem = {
    label: string;
    href: string;
    icon: string;
};

export type Translation = {
    title: string;
    description: string;
    nav: {
        projects: string;
        members: string;
        contact: string;
        social: string;
    };
    controls: {
        language: string;
        theme: string;
        system: string;
        light: string;
        dark: string;
    };
    hero: {
        heading: string;
        lead: string;
        primaryAction: string;
        secondaryAction: string;
        proof: string[];
    };
    projects: {
        heading: string;
        intro: string;
        items: ProjectItem[];
    };
    members: {
        heading: string;
        intro: string;
        items: MemberItem[];
    };
    contact: {
        heading: string;
        intro: string;
        items: ContactItem[];
    };
    social: {
        heading: string;
        intro: string;
        items: SocialItem[];
    };
    footer: string;
};

const socialItems: SocialItem[] = [
    {
        label: "GitHub",
        href: siteConfig.socialLinks.github,
        icon: "code"
    },
    {
        label: "Website",
        href: siteConfig.socialLinks.website,
        icon: "public"
    },
    {
        label: "Email",
        href: siteConfig.socialLinks.email,
        icon: "alternate_email"
    }
];

export const translations: Record<Locale, Translation> = {
    "zh-cn": {
        title: `${siteConfig.name} | 团队主页`,
        description: siteConfig.description,
        nav: {
            projects: "项目",
            members: "成员",
            contact: "联系",
            social: "社交"
        },
        controls: {
            language: "语言",
            theme: "主题",
            system: "自动",
            light: "白",
            dark: "黑"
        },
        hero: {
            heading: "为多语言社区构建有温度的 Web 体验。",
            lead: "把清晰内容、稳定前端工程和可访问界面连接起来，让团队项目更容易被发现、理解和参与。",
            primaryAction: "联系团队",
            secondaryAction: "查看项目",
            proof: ["Astro 静态交付", "Beer CSS + MD3E", "四语言 i18n"]
        },
        projects: {
            heading: "团队项目",
            intro: "这里展示了团队迄今为止的所有项目的入口。",
            items: [
                {
                    name: "Hope Write Dream Website",
                    summary: "Hope Write Dream Team 的主页入口，集中展示团队项目、成员与联系渠道。",
                    status: "开放中",
                    detail: "作为团队对外说明和项目导航的统一首页。",
                    href: siteConfig.projectLinks.website,
                    icon: "public"
                },
                {
                    name: "VRChatAvatarLearn - VRCAL",
                    summary: "面向 VRChat 改模学习的教程与资料入口。",
                    status: "更新中",
                    detail: "帮助用户按步骤理解常见改模工具、流程和问题，并为 AI 提供可靠的 VRChat 改模知识库。",
                    href: siteConfig.projectLinks.vrchatAvatarLearn,
                    icon: "school"
                },
                {
                    name: "VRChat Data Hub",
                    summary: "汇总 VRChat 相关数据、索引与查询入口。",
                    status: "开发中",
                    detail: "为 VRChat 玩家在游戏中的日常文件托管需求提供更方便的实现方案。",
                    href: siteConfig.projectLinks.vrchatDataHub,
                    icon: "dataset"
                },
                {
                    name: "ALCOMD3 VRChat 工程文件管理器",
                    summary: "用于管理 VRChat 工程文件的工具项目。",
                    status: "开放中",
                    detail: "围绕工程文件整理、打开和管理流程提升效率，提供更为方便且赏心悦目的工程管理工具。",
                    href: siteConfig.projectLinks.alcomd3,
                    icon: "folder_open"
                },
                {
                    name: "Toolbox | 实用工具集合",
                    summary: "收纳日常使用的小工具和轻量功能入口，或许，还含有一些有趣的东西。",
                    status: "开发中",
                    detail: "将常用的辅助功能实现出来，并把分散的功能集中到一个更容易访问的位置。",
                    href: siteConfig.projectLinks.tools,
                    icon: "construction"
                }
            ]
        },
        members: {
            heading: "团队成员",
            intro: "小型团队用清晰分工协作，覆盖产品、内容、设计和工程。",
            items: [
                {
                    name: "Hope",
                    role: "产品与方向",
                    focus: "定义项目目标、优先级和社区协作节奏。",
                    initials: "H"
                },
                {
                    name: "Write",
                    role: "内容与本地化",
                    focus: "维护多语言文案、SEO 语义和信息架构。",
                    initials: "W"
                },
                {
                    name: "Dream",
                    role: "设计与前端",
                    focus: "把 MD3E 设计系统落地为可访问的 Astro 页面。",
                    initials: "D"
                }
            ]
        },
        contact: {
            heading: "联系渠道",
            intro: "欢迎通过邮件或公开 Issue 沟通合作、反馈与项目建议。",
            items: [
                {
                    label: "团队邮箱",
                    value: siteConfig.contactEmail,
                    href: `mailto:${siteConfig.contactEmail}`,
                    icon: "mail"
                },
                {
                    label: "项目仓库",
                    value: "GitHub Repository",
                    href: siteConfig.repositoryUrl,
                    icon: "terminal"
                },
                {
                    label: "反馈入口",
                    value: "GitHub Issues",
                    href: siteConfig.issuesUrl,
                    icon: "bug_report"
                }
            ]
        },
        social: {
            heading: "社交链接",
            intro: "从这些入口关注项目进展或发起对话。",
            items: socialItems
        },
        footer: "以开放、清晰和可维护的方式持续建设。"
    },
    "zh-tw": {
        title: `${siteConfig.name} | 團隊首頁`,
        description: siteConfig.description,
        nav: {
            projects: "專案",
            members: "成員",
            contact: "聯絡",
            social: "社群"
        },
        controls: {
            language: "語言",
            theme: "主題",
            system: "自動",
            light: "白",
            dark: "黑"
        },
        hero: {
            heading: "為多語社群構建有溫度的 Web 體驗。",
            lead: "把清晰內容、穩定前端工程與可存取的介面設計連接起來，讓團隊專案更容易被發現、理解和參與。",
            primaryAction: "聯絡團隊",
            secondaryAction: "查看專案",
            proof: ["Astro 靜態交付", "Beer CSS + MD3E", "四語言 i18n"]
        },
        projects: {
            heading: "目前團隊專案",
            intro: "這些專案涵蓋團隊首頁、VRChat 學習資料、資料索引、工程檔案管理和常用工具。",
            items: [
                {
                    name: "本站",
                    summary: "Hope Write Dream Team 的首頁入口，集中展示團隊專案、成員與聯絡渠道。",
                    status: "維護中",
                    detail: "作為團隊對外說明和專案導覽的統一首頁。",
                    href: siteConfig.projectLinks.website,
                    icon: "public"
                },
                {
                    name: "VRChat Avatar Learn 改模教程",
                    summary: "面向 VRChat 頭像改模學習的教程與資料入口。",
                    status: "更新中",
                    detail: "協助使用者按步驟理解工具、流程和常見改模問題。",
                    href: siteConfig.projectLinks.vrchatAvatarLearn,
                    icon: "school"
                },
                {
                    name: "VRChat 資料中心",
                    summary: "彙整 VRChat 相關資料、索引與查詢入口。",
                    status: "開放中",
                    detail: "為內容整理、檢索和後續資料分析提供基礎。",
                    href: siteConfig.projectLinks.vrchatDataHub,
                    icon: "dataset"
                },
                {
                    name: "ALCOMD3 VRChat 工程檔案管理器",
                    summary: "用於管理 VRChat 工程檔案的工具專案。",
                    status: "維護中",
                    detail: "圍繞工程檔案整理、開啟和管理流程提升效率。",
                    href: siteConfig.projectLinks.alcomd3,
                    icon: "folder_open"
                },
                {
                    name: "實用工具",
                    summary: "收納團隊日常使用的小工具和輕量功能入口。",
                    status: "開放中",
                    detail: "把分散的輔助功能集中到一個更容易存取的位置。",
                    href: siteConfig.projectLinks.tools,
                    icon: "construction"
                }
            ]
        },
        members: {
            heading: "團隊成員",
            intro: "小型團隊以清晰分工協作，覆蓋產品、內容、設計和工程。",
            items: [
                {
                    name: "Hope",
                    role: "產品與方向",
                    focus: "定義專案目標、優先級和社群協作節奏。",
                    initials: "H"
                },
                {
                    name: "Write",
                    role: "內容與在地化",
                    focus: "維護多語文案、SEO 語義和資訊架構。",
                    initials: "W"
                },
                {
                    name: "Dream",
                    role: "設計與前端",
                    focus: "把 MD3E 設計系統落地為可存取的 Astro 頁面。",
                    initials: "D"
                }
            ]
        },
        contact: {
            heading: "聯絡渠道",
            intro: "歡迎透過郵件或公開 Issue 溝通合作、回饋與專案建議。",
            items: [
                {
                    label: "團隊信箱",
                    value: siteConfig.contactEmail,
                    href: `mailto:${siteConfig.contactEmail}`,
                    icon: "mail"
                },
                {
                    label: "專案倉庫",
                    value: "GitHub Repository",
                    href: siteConfig.repositoryUrl,
                    icon: "terminal"
                },
                {
                    label: "回饋入口",
                    value: "GitHub Issues",
                    href: siteConfig.issuesUrl,
                    icon: "bug_report"
                }
            ]
        },
        social: {
            heading: "社群連結",
            intro: "從這些入口關注專案進展或發起對話。",
            items: socialItems
        },
        footer: "以開放、清晰和可維護的方式持續建設。"
    },
    "ja-jp": {
        title: `${siteConfig.name} | チームページ`,
        description: siteConfig.description,
        nav: {
            projects: "プロジェクト",
            members: "メンバー",
            contact: "連絡先",
            social: "ソーシャル"
        },
        controls: {
            language: "言語",
            theme: "テーマ",
            system: "自動",
            light: "ライト",
            dark: "ダーク"
        },
        hero: {
            heading: "多言語コミュニティのために、思いやりのある Web 体験をつくります。",
            lead: "明確なコンテンツ、安定したフロントエンド、アクセシブルな UI をつなぎ、チームの取り組みを見つけやすく、理解しやすく、参加しやすくします。",
            primaryAction: "チームに連絡",
            secondaryAction: "プロジェクトを見る",
            proof: ["Astro static delivery", "Beer CSS + MD3E", "4-language i18n"]
        },
        projects: {
            heading: "現在のチームプロジェクト",
            intro: "チームページ、VRChat 学習資料、データ索引、プロジェクトファイル管理、便利ツールを扱っています。",
            items: [
                {
                    name: "本站",
                    summary: "Hope Write Dream Team のプロジェクト、メンバー、連絡先をまとめる入口です。",
                    status: "保守中",
                    detail: "チーム紹介とプロジェクト案内を一か所にまとめます。",
                    href: siteConfig.projectLinks.website,
                    icon: "public"
                },
                {
                    name: "VRChat Avatar Learn 改模教程",
                    summary: "VRChat アバター改変を学ぶためのチュートリアルと資料です。",
                    status: "更新中",
                    detail: "ツール、流れ、よくある問題を段階的に理解できるようにします。",
                    href: siteConfig.projectLinks.vrchatAvatarLearn,
                    icon: "school"
                },
                {
                    name: "VRChat データセンター",
                    summary: "VRChat 関連データ、索引、検索入口をまとめます。",
                    status: "公開中",
                    detail: "コンテンツ整理、検索、今後のデータ分析の土台になります。",
                    href: siteConfig.projectLinks.vrchatDataHub,
                    icon: "dataset"
                },
                {
                    name: "ALCOMD3 VRChat 工程文件管理器",
                    summary: "VRChat プロジェクトファイルを管理するためのツールです。",
                    status: "保守中",
                    detail: "ファイル整理、起動、管理の流れを扱いやすくします。",
                    href: siteConfig.projectLinks.alcomd3,
                    icon: "folder_open"
                },
                {
                    name: "実用ツール",
                    summary: "日常的に使う小さなツールと軽量機能をまとめた入口です。",
                    status: "公開中",
                    detail: "分散した補助機能を見つけやすい場所に集約します。",
                    href: siteConfig.projectLinks.tools,
                    icon: "construction"
                }
            ]
        },
        members: {
            heading: "チームメンバー",
            intro: "小さなチームが、プロダクト、コンテンツ、デザイン、エンジニアリングを分担します。",
            items: [
                {
                    name: "Hope",
                    role: "プロダクトと方向性",
                    focus: "目標、優先順位、コミュニティ協働のリズムを定義します。",
                    initials: "H"
                },
                {
                    name: "Write",
                    role: "コンテンツとローカライズ",
                    focus: "多言語コピー、SEO セマンティクス、情報設計を管理します。",
                    initials: "W"
                },
                {
                    name: "Dream",
                    role: "デザインとフロントエンド",
                    focus: "MD3E の設計をアクセシブルな Astro ページとして実装します。",
                    initials: "D"
                }
            ]
        },
        contact: {
            heading: "連絡先",
            intro: "協力、フィードバック、提案はメールまたは公開 Issue からお送りください。",
            items: [
                {
                    label: "チームメール",
                    value: siteConfig.contactEmail,
                    href: `mailto:${siteConfig.contactEmail}`,
                    icon: "mail"
                },
                {
                    label: "リポジトリ",
                    value: "GitHub Repository",
                    href: siteConfig.repositoryUrl,
                    icon: "terminal"
                },
                {
                    label: "フィードバック",
                    value: "GitHub Issues",
                    href: siteConfig.issuesUrl,
                    icon: "bug_report"
                }
            ]
        },
        social: {
            heading: "ソーシャルリンク",
            intro: "進捗を追ったり、会話を始めたりできます。",
            items: socialItems
        },
        footer: "オープンで明確、保守しやすい形で育てていきます。"
    },
    "en-us": {
        title: `${siteConfig.name} | Team Page`,
        description: siteConfig.description,
        nav: {
            projects: "Projects",
            members: "Members",
            contact: "Contact",
            social: "Social"
        },
        controls: {
            language: "Language",
            theme: "Theme",
            system: "System",
            light: "Light",
            dark: "Dark"
        },
        hero: {
            heading: "Build thoughtful web experiences for multilingual communities.",
            lead: "Connect clear content, stable frontend engineering, and accessible interface design so team projects are easier to discover, understand, and join.",
            primaryAction: "Contact the team",
            secondaryAction: "View projects",
            proof: ["Astro static delivery", "Beer CSS + MD3E", "4-language i18n"]
        },
        projects: {
            heading: "Current Projects",
            intro: "These projects cover the team homepage, VRChat learning resources, data indexes, project file management, and utility tools.",
            items: [
                {
                    name: "Website",
                    summary: "The Hope Write Dream Team homepage for projects, members, and contact channels.",
                    status: "Maintained",
                    detail: "A single public entry for team information and project navigation.",
                    href: siteConfig.projectLinks.website,
                    icon: "public"
                },
                {
                    name: "VRChat Avatar Learn",
                    summary: "Tutorials and resources for learning VRChat avatar modification.",
                    status: "Updating",
                    detail: "Step-by-step guidance for tools, workflows, and common avatar editing issues.",
                    href: siteConfig.projectLinks.vrchatAvatarLearn,
                    icon: "school"
                },
                {
                    name: "VRChat Data Hub",
                    summary: "A collected entry for VRChat-related data, indexes, and lookup surfaces.",
                    status: "Open",
                    detail: "It supports content organization, discovery, and future data analysis.",
                    href: siteConfig.projectLinks.vrchatDataHub,
                    icon: "dataset"
                },
                {
                    name: "ALCOMD3 VRChat Project Manager",
                    summary: "A tool project for managing VRChat project files.",
                    status: "Maintained",
                    detail: "It improves workflows around organizing, opening, and managing project files.",
                    href: siteConfig.projectLinks.alcomd3,
                    icon: "folder_open"
                },
                {
                    name: "Utility Tools",
                    summary: "A compact entry for daily utilities and lightweight helper features.",
                    status: "Open",
                    detail: "It collects scattered helper functions in one easier-to-reach place.",
                    href: siteConfig.projectLinks.tools,
                    icon: "construction"
                }
            ]
        },
        members: {
            heading: "Team Members",
            intro: "A small team with clear ownership across product, content, design, and engineering.",
            items: [
                {
                    name: "Hope",
                    role: "Product Direction",
                    focus: "Defines goals, priorities, and the rhythm for community collaboration.",
                    initials: "H"
                },
                {
                    name: "Write",
                    role: "Content & Localization",
                    focus: "Maintains multilingual copy, SEO semantics, and information architecture.",
                    initials: "W"
                },
                {
                    name: "Dream",
                    role: "Design & Frontend",
                    focus: "Turns the MD3E design system into an accessible Astro experience.",
                    initials: "D"
                }
            ]
        },
        contact: {
            heading: "Contact Channels",
            intro: "Reach out through email or public Issues for collaboration, feedback, and project suggestions.",
            items: [
                {
                    label: "Team email",
                    value: siteConfig.contactEmail,
                    href: `mailto:${siteConfig.contactEmail}`,
                    icon: "mail"
                },
                {
                    label: "Repository",
                    value: "GitHub Repository",
                    href: siteConfig.repositoryUrl,
                    icon: "terminal"
                },
                {
                    label: "Feedback",
                    value: "GitHub Issues",
                    href: siteConfig.issuesUrl,
                    icon: "bug_report"
                }
            ]
        },
        social: {
            heading: "Social Links",
            intro: "Follow the project or start a conversation from these channels.",
            items: socialItems
        },
        footer: "Built in the open with clarity and maintainability in mind."
    }
};

export function getLocaleFromPath(pathname: string): Locale {
    const segment = pathname.split("/").filter(Boolean)[0];
    return locales.includes(segment as Locale) ? (segment as Locale) : defaultLocale;
}

export function getLocaleUrl(locale: Locale): string {
    return `/${locale}/`;
}
