import type { APIRoute } from "astro";
import { siteConfig } from "@data/site-config.mjs";

function escapeXml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;");
}

export const GET: APIRoute = () => {
    const title = escapeXml(siteConfig.name);
    const description = escapeXml(siteConfig.description);
    const colors = siteConfig.ogImage;

    return new Response(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
    <title id="title">${title}</title>
    <desc id="desc">Social preview image for ${title}.</desc>
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${colors.backgroundStart}"/>
            <stop offset="0.52" stop-color="${colors.backgroundMiddle}"/>
            <stop offset="1" stop-color="${colors.backgroundEnd}"/>
        </linearGradient>
        <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${colors.markStart}"/>
            <stop offset="1" stop-color="${colors.markEnd}"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="${colors.shadow}" flood-opacity="0.18"/>
        </filter>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="1010" cy="110" r="180" fill="${colors.markStart}" opacity="0.38"/>
    <circle cx="160" cy="520" r="210" fill="${colors.secondaryContainer}" opacity="0.64"/>
    <path d="M874 392c76-54 180-20 203 67 19 73-42 132-117 116-78-17-145-127-86-183Z" fill="${colors.tertiary}" opacity="0.14"/>
    <g filter="url(#shadow)">
        <rect x="86" y="88" width="1028" height="454" rx="64" fill="${colors.card}" opacity="0.78"/>
    </g>
    <rect x="138" y="144" width="128" height="128" rx="40" fill="url(#mark)"/>
    <path d="M173 174h28v45h48v-45h28v112h-28v-44h-48v44h-28V174Z" fill="${colors.textPrimary}"/>
    <text x="138" y="360" fill="${colors.textPrimary}" font-family="Noto Sans, Arial, sans-serif" font-size="70" font-weight="800" letter-spacing="0">
        ${title}
    </text>
    <text x="142" y="424" fill="${colors.textSecondary}" font-family="Noto Sans, Arial, sans-serif" font-size="32" font-weight="500">
        ${description}
    </text>
    <g font-family="Noto Sans, Arial, sans-serif" font-size="26" font-weight="700">
        <rect x="142" y="468" width="196" height="54" rx="27" fill="${colors.markStart}"/>
        <text x="172" y="503" fill="${colors.shadow}">Multilingual</text>
        <rect x="358" y="468" width="142" height="54" rx="27" fill="${colors.secondaryContainer}"/>
        <text x="388" y="503" fill="${colors.secondaryText}">MD3E</text>
        <rect x="520" y="468" width="162" height="54" rx="27" fill="${colors.tertiaryContainer}"/>
        <text x="550" y="503" fill="${colors.tertiaryText}">Beer CSS</text>
    </g>
</svg>
`, {
        headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
        },
    });
};
