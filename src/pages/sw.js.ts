import type { APIRoute } from "astro";
import { supportedRouteLocales } from "@data/i18n";
import { siteConfig } from "@data/site-config.mjs";

const precacheUrls = [
    "/",
    ...supportedRouteLocales.map((locale) => `/${locale}/`),
    "/site.webmanifest",
    siteConfig.pwaIcon192Path,
    siteConfig.pwaIcon512Path,
];

export const GET: APIRoute = () => new Response(`const CACHE_NAME = ${JSON.stringify(`${siteConfig.shortName.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "")}-site-v1`)};
const PRECACHE_URLS = ${JSON.stringify(precacheUrls, null, 4)};

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting()),
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName)),
            ))
            .then(() => self.clients.claim()),
    );
});

self.addEventListener("fetch", (event) => {
    const { request } = event;
    const url = new URL(request.url);

    if (request.method !== "GET" || url.origin !== self.location.origin || url.pathname.startsWith("/api/")) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const copy = response.clone();

                    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));

                    return response;
                })
                .catch(() => caches.match(request).then((response) => response || caches.match("/"))),
        );

        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(request).then((response) => {
                if (response.ok) {
                    const copy = response.clone();

                    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                }

                return response;
            });
        }),
    );
});
`, {
    headers: {
        "Content-Type": "text/javascript; charset=utf-8",
    },
});
