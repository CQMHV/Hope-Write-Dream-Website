import { getAbsoluteLocaleUrl } from "astro:i18n";
import {
    defaultRouteLocale,
    routeLocaleToUiLocale,
    supportedRouteLocales,
    type RouteLocale,
    type UiLocale,
} from "@data/i18n";

export type AlternateLocaleLink = {
    hreflang: UiLocale | "x-default";
    href: string;
    routeLocale?: RouteLocale;
};

export function getCanonicalUrl(locale: RouteLocale): string {
    return getAbsoluteLocaleUrl(locale, "");
}

export function getAlternateLocaleLinks(): AlternateLocaleLink[] {
    return [
        ...supportedRouteLocales.map((locale) => ({
            hreflang: routeLocaleToUiLocale(locale),
            href: getCanonicalUrl(locale),
            routeLocale: locale,
        })),
        {
            hreflang: "x-default",
            href: getCanonicalUrl(defaultRouteLocale),
        },
    ];
}
