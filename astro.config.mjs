import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { defaultRouteLocale, supportedRouteLocales, supportedUiLocales } from "./src/data/i18n.config.mjs";
import { siteConfig } from "./src/data/site.config.mjs";

const site = siteConfig.url;
const sitemapLocales = Object.fromEntries(
    supportedUiLocales.map((locale) => [locale.toLowerCase(), locale]),
);
const sitemapDefaultLocaleUrl = new URL(`${defaultRouteLocale}/`, `${site}/`).href;

function shouldStripOptimizeDependency(dependency) {
    return dependency.startsWith("astro > ") || dependency.includes("dev-toolbar");
}

function serializeSitemapItem(item) {
    const links = item.links ?? [];

    if (links.some((link) => link.lang === "x-default")) {
        return item;
    }

    return {
        ...item,
        links: [
            ...links,
            {
                lang: "x-default",
                url: sitemapDefaultLocaleUrl,
            },
        ],
    };
}

// Keep Vite's dev dependency optimizer away from Astro-injected entries that fail pre-bundling on Windows.
// Verified with Astro 6.4.6 / Vite 7.3.0 even when Astro dev toolbar is disabled.
const stripAstroToolbarOptimizeDeps = {
    name: "strip-astro-toolbar-optimize-deps",
    configEnvironment(environmentName, options) {
        if (environmentName !== "client") {
            return;
        }

        options.optimizeDeps ??= {};
        options.optimizeDeps.include = options.optimizeDeps.include?.filter(
            (dependency) => !shouldStripOptimizeDependency(dependency),
        );
    },
    configResolved(config) {
        config.optimizeDeps.include = config.optimizeDeps.include?.filter(
            (dependency) => !shouldStripOptimizeDependency(dependency),
        );
        config.environments.client.optimizeDeps.include = config.environments.client.optimizeDeps.include?.filter(
            (dependency) => !shouldStripOptimizeDependency(dependency),
        );
    },
};

export default defineConfig({
    site,
    output: "static",
    devToolbar: {
        enabled: false,
    },
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: defaultRouteLocale,
                locales: sitemapLocales,
            },
            filter: (page) => page !== `${site}/`,
            serialize: serializeSitemapItem,
            namespaces: {
                news: false,
                image: false,
                video: false,
            },
        }),
    ],
    i18n: {
        locales: supportedRouteLocales,
        defaultLocale: defaultRouteLocale,
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
        },
    },
    vite: {
        plugins: [stripAstroToolbarOptimizeDeps],
        optimizeDeps: {
            exclude: [
                "aria-query",
                "axobject-query",
                "@material/material-color-utilities",
                "material-dynamic-colors",
            ],
        },
    },
});
