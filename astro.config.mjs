import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { defaultRouteLocale, supportedRouteLocales, supportedUiLocales } from "./src/data/i18n.config.mjs";
import { siteConfig } from "./src/data/site.config.mjs";

const site = siteConfig.url;
const sitemapLocales = Object.fromEntries(
    supportedUiLocales.map((locale) => [locale.toLowerCase(), locale]),
);

function shouldStripOptimizeDependency(dependency) {
    return dependency.startsWith("astro > ") || dependency.includes("dev-toolbar");
}

// Keep Vite's dev dependency optimizer away from Astro-injected entries that fail pre-bundling on Windows.
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
            ],
        },
    },
});
