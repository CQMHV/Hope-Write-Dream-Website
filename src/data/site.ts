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
            intro: "这些项目代表当前的协作方向：站点基础设施、内容本地化和社区反馈闭环。",
            items: [
                {
                    name: "Hope Write Dream Website",
                    summary: "团队主页、SEO、PWA manifest 与多语言路由的统一入口。",
                    status: "建设中",
                    detail: "当前版本聚焦单页团队展示和清晰的联系路径。",
                    icon: "travel_explore"
                },
                {
                    name: "Multilingual Content Kit",
                    summary: "为简体中文、繁体中文、日语和英语维护一致的页面语义。",
                    status: "规划中",
                    detail: "减少重复文案和硬编码，让内容扩展保持可维护。",
                    icon: "translate"
                },
                {
                    name: "Community Feedback Loop",
                    summary: "通过公开 Issue 汇总建议、问题与后续迭代线索。",
                    status: "开放中",
                    detail: "把联系渠道和代码仓库连接到同一条反馈路径。",
                    icon: "forum"
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
            intro: "這些專案代表目前的協作方向：站點基礎設施、內容在地化和社群回饋閉環。",
            items: [
                {
                    name: "Hope Write Dream Website",
                    summary: "團隊首頁、SEO、PWA manifest 與多語路由的統一入口。",
                    status: "建設中",
                    detail: "目前版本聚焦單頁團隊展示和清晰的聯絡路徑。",
                    icon: "travel_explore"
                },
                {
                    name: "Multilingual Content Kit",
                    summary: "為簡體中文、繁體中文、日語和英語維護一致的頁面語義。",
                    status: "規劃中",
                    detail: "減少重複文案和硬編碼，讓內容擴展保持可維護。",
                    icon: "translate"
                },
                {
                    name: "Community Feedback Loop",
                    summary: "透過公開 Issue 匯總建議、問題與後續迭代線索。",
                    status: "開放中",
                    detail: "把聯絡渠道和程式碼倉庫連接到同一條回饋路徑。",
                    icon: "forum"
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
            intro: "現在の協働テーマは、サイト基盤、コンテンツのローカライズ、コミュニティフィードバックです。",
            items: [
                {
                    name: "Hope Write Dream Website",
                    summary: "チームページ、SEO、PWA manifest、多言語ルーティングをまとめる入口です。",
                    status: "進行中",
                    detail: "現在の版では、単一ページのチーム紹介と明確な連絡導線に集中しています。",
                    icon: "travel_explore"
                },
                {
                    name: "Multilingual Content Kit",
                    summary: "簡体字中国語、繁体字中国語、日本語、英語で一貫した意味構造を保ちます。",
                    status: "計画中",
                    detail: "重複コピーとハードコードを減らし、拡張しやすいコンテンツにします。",
                    icon: "translate"
                },
                {
                    name: "Community Feedback Loop",
                    summary: "公開 Issue で提案、問題、次の改善を集約します。",
                    status: "公開中",
                    detail: "連絡先とリポジトリを同じフィードバック導線につなぎます。",
                    icon: "forum"
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
            intro: "These projects show the team's current focus: site infrastructure, localized content, and a community feedback loop.",
            items: [
                {
                    name: "Hope Write Dream Website",
                    summary: "A single entry for the team page, SEO, PWA manifest, and multilingual routes.",
                    status: "In progress",
                    detail: "This version focuses on one-page team presentation and clear contact paths.",
                    icon: "travel_explore"
                },
                {
                    name: "Multilingual Content Kit",
                    summary: "A consistent semantic layer for Simplified Chinese, Traditional Chinese, Japanese, and English.",
                    status: "Planned",
                    detail: "It reduces duplicated copy and hardcoded strings as the site grows.",
                    icon: "translate"
                },
                {
                    name: "Community Feedback Loop",
                    summary: "A public Issue flow for suggestions, bugs, and future iteration signals.",
                    status: "Open",
                    detail: "It connects contact channels and the code repository into one feedback path.",
                    icon: "forum"
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
