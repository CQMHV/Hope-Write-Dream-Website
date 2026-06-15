import type { APIRoute } from "astro";
import { siteConfig } from "@/data/site.config.mjs";

export const GET: APIRoute = () => {
    const manifest = {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        description: siteConfig.description,
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: siteConfig.themeColorLight,
        theme_color: siteConfig.themeColorLight,
        icons: [
            {
                src: siteConfig.pwaIcon192Path,
                sizes: "192x192",
                type: "image/png",
                purpose: "any maskable",
            },
            {
                src: siteConfig.pwaIcon512Path,
                sizes: "512x512",
                type: "image/png",
                purpose: "any maskable",
            },
        ],
    };

    return new Response(JSON.stringify(manifest, null, 4), {
        headers: {
            "Content-Type": "application/manifest+json; charset=utf-8",
        },
    });
};
