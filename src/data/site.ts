export const locales = ["zh-cn", "en-us", "ja-jp", "zh-tw"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-cn";

export const localeMeta: Record<Locale, { label: string; shortLabel: string; lang: string; ogLocale: string }> = {
    "zh-cn": {
        label: "简体中文",
        shortLabel: "中文",
        lang: "zh-CN",
        ogLocale: "zh_CN"
    },
    "en-us": {
        label: "English",
        shortLabel: "EN",
        lang: "en-US",
        ogLocale: "en_US"
    },
    "ja-jp": {
        label: "日本語",
        shortLabel: "日本語",
        lang: "ja-JP",
        ogLocale: "ja_JP"
    },
    "zh-tw": {
        label: "繁體中文",
        shortLabel: "繁體",
        lang: "zh-TW",
        ogLocale: "zh_TW"
    }
};

type Translation = {
    title: string;
    description: string;
    brand: string;
    nav: {
        projects: string;
        members: string;
        contact: string;
        social: string;
    };
    theme: {
        label: string;
        auto: string;
        light: string;
        dark: string;
    };
    hero: {
        headline: string;
        body: string;
        primaryCta: string;
        secondaryCta: string;
        proofItems: string[];
    };
    projects: {
        heading: string;
        body: string;
        action: string;
        items: Array<{
            name: string;
            status: string;
            description: string;
            meta: string;
            href: string;
        }>;
    };
    members: {
        heading: string;
        body: string;
        items: Array<{
            name: string;
            role: string;
            description: string;
            skills: string[];
        }>;
    };
    contact: {
        heading: string;
        body: string;
        action: string;
        channels: Array<{
            label: string;
            value: string;
            href: string;
            icon: string;
        }>;
    };
    social: {
        heading: string;
        body: string;
    };
    footer: {
        copyright: string;
        builtWith: string;
    };
};

export const translations: Record<Locale, Translation> = {
    "zh-cn": {
        title: "Hope Write Dream Team | 团队主页",
        description: "Hope Write Dream Team 的单页团队主页，展示当前项目、团队成员、联系渠道与社交链接。",
        brand: "Hope Write Dream Team",
        nav: {
            projects: "项目",
            members: "成员",
            contact: "联系",
            social: "社交"
        },
        theme: {
            label: "主题模式",
            auto: "自动",
            light: "白",
            dark: "黑"
        },
        hero: {
            headline: "Build useful tools, stories, and shared digital experiences.",
            body: "我们用小而清晰的产品节奏，把工具、内容与社区体验打磨成可靠的数字作品。",
            primaryCta: "查看项目",
            secondaryCta: "联系团队",
            proofItems: ["开源协作", "多语言体验", "持续迭代"]
        },
        projects: {
            heading: "当前团队项目",
            body: "示例项目集中维护在数据文件中，正式上线前可替换为真实名称、状态与链接。",
            action: "打开项目",
            items: [
                {
                    name: "Dream Tools",
                    status: "设计中",
                    description: "面向创作者的轻量工具集合，聚焦写作、整理和发布前检查。",
                    meta: "Productivity",
                    href: "https://example.com"
                },
                {
                    name: "Story Lab",
                    status: "开发中",
                    description: "用于沉淀世界观、角色设定与协作笔记的团队内容工作台。",
                    meta: "Content",
                    href: "https://example.com"
                },
                {
                    name: "Community Hub",
                    status: "维护中",
                    description: "整合公告、社交渠道和反馈入口，让成员与用户更容易找到彼此。",
                    meta: "Community",
                    href: "https://example.com"
                }
            ]
        },
        members: {
            heading: "团队成员",
            body: "成员卡片使用示例资料，职责和技能标签可直接替换。",
            items: [
                {
                    name: "Mira Chen",
                    role: "产品与内容",
                    description: "负责项目方向、信息架构和内容质量。",
                    skills: ["Roadmap", "Writing", "Research"]
                },
                {
                    name: "Kai Lin",
                    role: "前端工程",
                    description: "负责 Astro 页面、交互体验和性能优化。",
                    skills: ["Astro", "UI", "A11y"]
                },
                {
                    name: "Aoi Tanaka",
                    role: "视觉设计",
                    description: "负责界面系统、品牌资产和多语言视觉一致性。",
                    skills: ["MD3", "Brand", "Motion"]
                },
                {
                    name: "Noah Wu",
                    role: "社区运营",
                    description: "负责反馈收集、发布节奏和社交渠道维护。",
                    skills: ["Community", "Support", "Docs"]
                }
            ]
        },
        contact: {
            heading: "联系渠道",
            body: "合作、反馈或加入团队，可以从下面任一渠道开始。",
            action: "发送邮件",
            channels: [
                {
                    label: "邮箱",
                    value: "hello@example.com",
                    href: "mailto:hello@example.com",
                    icon: "mail"
                },
                {
                    label: "社区",
                    value: "Discord",
                    href: "https://example.com",
                    icon: "forum"
                },
                {
                    label: "合作",
                    value: "Partnership form",
                    href: "https://example.com",
                    icon: "handshake"
                }
            ]
        },
        social: {
            heading: "团队社交链接",
            body: "关注团队动态、版本更新和公开协作。"
        },
        footer: {
            copyright: "© 2026 Hope Write Dream Team. 保留所有权利。",
            builtWith: "使用 Astro 与 Beer CSS 构建。"
        }
    },
    "en-us": {
        title: "Hope Write Dream Team | Team Home",
        description: "A one-page team home for Hope Write Dream Team with projects, members, contact channels, and social links.",
        brand: "Hope Write Dream Team",
        nav: {
            projects: "Projects",
            members: "Members",
            contact: "Contact",
            social: "Social"
        },
        theme: {
            label: "Theme mode",
            auto: "Auto",
            light: "Light",
            dark: "Dark"
        },
        hero: {
            headline: "Build useful tools, stories, and shared digital experiences.",
            body: "We shape tools, content, and community touchpoints into reliable digital work through a clear product rhythm.",
            primaryCta: "View projects",
            secondaryCta: "Contact team",
            proofItems: ["Open collaboration", "Multilingual UX", "Steady iteration"]
        },
        projects: {
            heading: "Current Team Projects",
            body: "Sample projects live in one data file, so real names, status, and links can be replaced before launch.",
            action: "Open project",
            items: [
                {
                    name: "Dream Tools",
                    status: "Design",
                    description: "A lightweight toolkit for creators, focused on writing, organizing, and pre-publish checks.",
                    meta: "Productivity",
                    href: "https://example.com"
                },
                {
                    name: "Story Lab",
                    status: "Building",
                    description: "A shared workspace for worldbuilding, character notes, and collaborative content planning.",
                    meta: "Content",
                    href: "https://example.com"
                },
                {
                    name: "Community Hub",
                    status: "Maintained",
                    description: "A home for updates, social channels, and feedback routes that help people find the team.",
                    meta: "Community",
                    href: "https://example.com"
                }
            ]
        },
        members: {
            heading: "Members",
            body: "Member cards use sample content and can be replaced with real roles and skill tags.",
            items: [
                {
                    name: "Mira Chen",
                    role: "Product & Content",
                    description: "Owns product direction, information architecture, and content quality.",
                    skills: ["Roadmap", "Writing", "Research"]
                },
                {
                    name: "Kai Lin",
                    role: "Frontend Engineering",
                    description: "Builds Astro pages, interaction quality, and performance improvements.",
                    skills: ["Astro", "UI", "A11y"]
                },
                {
                    name: "Aoi Tanaka",
                    role: "Visual Design",
                    description: "Shapes the interface system, brand assets, and multilingual visual consistency.",
                    skills: ["MD3", "Brand", "Motion"]
                },
                {
                    name: "Noah Wu",
                    role: "Community Ops",
                    description: "Handles feedback, release rhythm, and social channel maintenance.",
                    skills: ["Community", "Support", "Docs"]
                }
            ]
        },
        contact: {
            heading: "Contact Channels",
            body: "For collaboration, feedback, or joining the team, start with any channel below.",
            action: "Send email",
            channels: [
                {
                    label: "Email",
                    value: "hello@example.com",
                    href: "mailto:hello@example.com",
                    icon: "mail"
                },
                {
                    label: "Community",
                    value: "Discord",
                    href: "https://example.com",
                    icon: "forum"
                },
                {
                    label: "Partnership",
                    value: "Partnership form",
                    href: "https://example.com",
                    icon: "handshake"
                }
            ]
        },
        social: {
            heading: "Team Social Links",
            body: "Follow team news, release notes, and public collaboration."
        },
        footer: {
            copyright: "© 2026 Hope Write Dream Team. All rights reserved.",
            builtWith: "Built with Astro and Beer CSS."
        }
    },
    "ja-jp": {
        title: "Hope Write Dream Team | チームページ",
        description: "Hope Write Dream Team のプロジェクト、メンバー、連絡先、ソーシャルリンクをまとめた1ページサイトです。",
        brand: "Hope Write Dream Team",
        nav: {
            projects: "プロジェクト",
            members: "メンバー",
            contact: "連絡先",
            social: "ソーシャル"
        },
        theme: {
            label: "テーマ",
            auto: "自動",
            light: "ライト",
            dark: "ダーク"
        },
        hero: {
            headline: "Build useful tools, stories, and shared digital experiences.",
            body: "ツール、コンテンツ、コミュニティ体験を、明確なプロダクトリズムで信頼できる作品に育てます。",
            primaryCta: "プロジェクトを見る",
            secondaryCta: "連絡する",
            proofItems: ["オープンな協作", "多言語体験", "継続的な改善"]
        },
        projects: {
            heading: "現在のチームプロジェクト",
            body: "サンプルデータは一つのデータファイルに集約しているため、公開前に簡単に差し替えられます。",
            action: "開く",
            items: [
                {
                    name: "Dream Tools",
                    status: "設計中",
                    description: "創作者向けの軽量ツール群。執筆、整理、公開前チェックに焦点を当てます。",
                    meta: "Productivity",
                    href: "https://example.com"
                },
                {
                    name: "Story Lab",
                    status: "開発中",
                    description: "世界観、キャラクター設定、共同メモを蓄積するコンテンツ作業台です。",
                    meta: "Content",
                    href: "https://example.com"
                },
                {
                    name: "Community Hub",
                    status: "運用中",
                    description: "告知、ソーシャル、フィードバック導線をまとめるコミュニティ拠点です。",
                    meta: "Community",
                    href: "https://example.com"
                }
            ]
        },
        members: {
            heading: "メンバー",
            body: "メンバーカードはサンプル情報で、役割やスキルタグを差し替えられます。",
            items: [
                {
                    name: "Mira Chen",
                    role: "プロダクト・コンテンツ",
                    description: "プロジェクト方針、情報設計、コンテンツ品質を担当します。",
                    skills: ["Roadmap", "Writing", "Research"]
                },
                {
                    name: "Kai Lin",
                    role: "フロントエンド",
                    description: "Astro ページ、インタラクション、パフォーマンス改善を担当します。",
                    skills: ["Astro", "UI", "A11y"]
                },
                {
                    name: "Aoi Tanaka",
                    role: "ビジュアルデザイン",
                    description: "UI システム、ブランド素材、多言語での一貫性を整えます。",
                    skills: ["MD3", "Brand", "Motion"]
                },
                {
                    name: "Noah Wu",
                    role: "コミュニティ運営",
                    description: "フィードバック、リリース運用、ソーシャル管理を担当します。",
                    skills: ["Community", "Support", "Docs"]
                }
            ]
        },
        contact: {
            heading: "連絡先",
            body: "協業、フィードバック、参加希望は、以下の窓口から始められます。",
            action: "メールする",
            channels: [
                {
                    label: "メール",
                    value: "hello@example.com",
                    href: "mailto:hello@example.com",
                    icon: "mail"
                },
                {
                    label: "コミュニティ",
                    value: "Discord",
                    href: "https://example.com",
                    icon: "forum"
                },
                {
                    label: "協業",
                    value: "Partnership form",
                    href: "https://example.com",
                    icon: "handshake"
                }
            ]
        },
        social: {
            heading: "チームのソーシャルリンク",
            body: "チームのニュース、更新情報、公開コラボレーションをフォローできます。"
        },
        footer: {
            copyright: "© 2026 Hope Write Dream Team. All rights reserved.",
            builtWith: "Astro と Beer CSS で構築。"
        }
    },
    "zh-tw": {
        title: "Hope Write Dream Team | 團隊首頁",
        description: "Hope Write Dream Team 的單頁團隊首頁，展示目前專案、團隊成員、聯絡管道與社群連結。",
        brand: "Hope Write Dream Team",
        nav: {
            projects: "專案",
            members: "成員",
            contact: "聯絡",
            social: "社群"
        },
        theme: {
            label: "主題模式",
            auto: "自動",
            light: "白",
            dark: "黑"
        },
        hero: {
            headline: "Build useful tools, stories, and shared digital experiences.",
            body: "我們用清晰的產品節奏，把工具、內容與社群體驗打磨成可靠的數位作品。",
            primaryCta: "查看專案",
            secondaryCta: "聯絡團隊",
            proofItems: ["開源協作", "多語體驗", "持續迭代"]
        },
        projects: {
            heading: "目前團隊專案",
            body: "示例專案集中維護在資料檔中，正式上線前可替換為真實名稱、狀態與連結。",
            action: "開啟專案",
            items: [
                {
                    name: "Dream Tools",
                    status: "設計中",
                    description: "面向創作者的輕量工具集合，聚焦寫作、整理與發布前檢查。",
                    meta: "Productivity",
                    href: "https://example.com"
                },
                {
                    name: "Story Lab",
                    status: "開發中",
                    description: "用於沉澱世界觀、角色設定與協作筆記的團隊內容工作台。",
                    meta: "Content",
                    href: "https://example.com"
                },
                {
                    name: "Community Hub",
                    status: "維護中",
                    description: "整合公告、社群管道與回饋入口，讓成員與使用者更容易找到彼此。",
                    meta: "Community",
                    href: "https://example.com"
                }
            ]
        },
        members: {
            heading: "團隊成員",
            body: "成員卡片使用示例資料，職責與技能標籤可直接替換。",
            items: [
                {
                    name: "Mira Chen",
                    role: "產品與內容",
                    description: "負責專案方向、資訊架構與內容品質。",
                    skills: ["Roadmap", "Writing", "Research"]
                },
                {
                    name: "Kai Lin",
                    role: "前端工程",
                    description: "負責 Astro 頁面、互動體驗與效能優化。",
                    skills: ["Astro", "UI", "A11y"]
                },
                {
                    name: "Aoi Tanaka",
                    role: "視覺設計",
                    description: "負責介面系統、品牌資產與多語視覺一致性。",
                    skills: ["MD3", "Brand", "Motion"]
                },
                {
                    name: "Noah Wu",
                    role: "社群營運",
                    description: "負責回饋收集、發布節奏與社群管道維護。",
                    skills: ["Community", "Support", "Docs"]
                }
            ]
        },
        contact: {
            heading: "聯絡管道",
            body: "合作、回饋或加入團隊，可以從以下任一管道開始。",
            action: "寄送郵件",
            channels: [
                {
                    label: "信箱",
                    value: "hello@example.com",
                    href: "mailto:hello@example.com",
                    icon: "mail"
                },
                {
                    label: "社群",
                    value: "Discord",
                    href: "https://example.com",
                    icon: "forum"
                },
                {
                    label: "合作",
                    value: "Partnership form",
                    href: "https://example.com",
                    icon: "handshake"
                }
            ]
        },
        social: {
            heading: "團隊社群連結",
            body: "追蹤團隊動態、版本更新與公開協作。"
        },
        footer: {
            copyright: "© 2026 Hope Write Dream Team. 保留所有權利。",
            builtWith: "使用 Astro 與 Beer CSS 建構。"
        }
    }
};

export const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/example",
        icon: "code"
    },
    {
        label: "YouTube",
        href: "https://example.com",
        icon: "smart_display"
    },
    {
        label: "X",
        href: "https://example.com",
        icon: "alternate_email"
    },
    {
        label: "Blog",
        href: "https://example.com",
        icon: "article"
    }
];

export function getLocaleFromPath(pathname: string): Locale {
    const segment = pathname.split("/").filter(Boolean)[0];
    return locales.includes(segment as Locale) ? (segment as Locale) : defaultLocale;
}

export function getLocaleUrl(locale: Locale): string {
    return `/${locale}/`;
}
