import { defaultRouteLocale, supportedRouteLocales, type RouteLocale } from "@data/i18n";
import { siteConfig } from "@data/site-config.mjs";

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

type Translation = {
    title: string;
    description: string;
};

export const translations: Record<Locale, Translation> = {
    "zh-cn": {
        title: `${siteConfig.name} | 站点基础页`,
        description: siteConfig.description
    },
    "zh-tw": {
        title: `${siteConfig.name} | 站點基礎頁`,
        description: siteConfig.description
    },
    "ja-jp": {
        title: `${siteConfig.name} | ベースページ`,
        description: siteConfig.description
    },
    "en-us": {
        title: `${siteConfig.name} | Base Page`,
        description: siteConfig.description
    }
};

export function getLocaleFromPath(pathname: string): Locale {
    const segment = pathname.split("/").filter(Boolean)[0];
    return locales.includes(segment as Locale) ? (segment as Locale) : defaultLocale;
}

export function getLocaleUrl(locale: Locale): string {
    return `/${locale}/`;
}
