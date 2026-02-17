import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    app: {
        head: {
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            ],
            title: "Mathieu Marthy - Portfolio",
            script: [
                {
                    innerHTML: `(function() {
                        try {
                            const stored = localStorage.getItem("theme");
                            const isDark = stored
                                ? stored === "dark"
                                : window.matchMedia("(prefers-color-scheme: dark)").matches;
                            if (isDark) {
                                document.documentElement.classList.add("dark");
                            }
                        } catch (e) {}
                    })()`,
                    type: "text/javascript",
                },
            ],
        },
    },
    css: ["./app/assets/css/main.css"],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    nitro: {
        preset: "bun",
        compressPublicAssets: true,
        routeRules: {
            "/images/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
            "/favicon.ico": { headers: { "cache-control": "public, max-age=86400, immutable" } },
            "/robots.txt": { headers: { "cache-control": "public, max-age=86400, immutable" } },
        },
    },
    runtimeConfig: {
        webhookUrl: process.env.NUXT_WEBHOOK_URL || "",
    },
    modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@nuxt/fonts"],
    i18n: {
        defaultLocale: "en",
        locales: [
            { code: "en", name: "English", file: "en.json" },
            { code: "fr", name: "Français", file: "fr.json" },
        ],
    },
    fonts: {
        defaults: {
            weights: [300, 400, 500],
            styles: ["normal"],
        },
    },
});
