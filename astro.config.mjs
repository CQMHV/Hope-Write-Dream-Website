import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://hopewritedream.com",
    devToolbar: {
        enabled: false
    },
    i18n: {
        locales: ["zh-cn", "en-us", "ja-jp", "zh-tw"],
        defaultLocale: "zh-cn",
        routing: {
            prefixDefaultLocale: true
        }
    }
});
