import logger from "../utils/logger";

// log requests in order to monitor traffic and detect potential abuse
export default defineEventHandler((event) => {
    // skip logging in development mode to avoid cluttering logs
    if (process.env.NODE_ENV === "development") {
        return;
    }

    const url = event.node.req.url;

    // only log requests "/" to avoid logging i18n redirects and other static asset requests
    if (url !== "/") {
        return;
    }

    const headers = event.node.req.headers;

    const ip =
        (headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
        (headers["x-real-ip"] as string) ||
        event.node.req.socket.remoteAddress ||
        "unknown";

    const userAgent = headers["user-agent"] || "unknown";
    const method = event.node.req.method;

    const runtimeConfig = useRuntimeConfig();
    $fetch(runtimeConfig.webhookLogUrl, {
        method: "POST",
        body: {
            content:
                `IP: ${ip}\n` +
                `Method: ${method}\n` +
                `URL: ${url}\n` +
                `User-Agent: ${userAgent}\n` +
                `Timestamp: ${new Date().toISOString()}`,
        },
        timeout: 5_000,
    }).catch((error) => {
        logger.error("Failed to send request log:", error);
    });
});
