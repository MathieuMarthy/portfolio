import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["./app/assets/css/main.css"],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    nitro: {
        preset: "bun",
    },
    runtimeConfig: {
        webhookUrl: process.env.WEBHOOK_URL || "",
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
