import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
    if (!site) {
        throw new Error("Astro site must be configured to generate robots.txt.");
    }

    const sitemapUrl = new URL("/sitemap-index.xml", site);

    return new Response(`User-agent: *
Allow: /
Sitemap: ${sitemapUrl.href}
`, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8"
        }
    });
};
