import { contactSchema } from "~~/commun/validators/contactFormValidators";
import logger from "../utils/logger";

export default defineEventHandler(async (event) => {
    logger.info("[Contact API] Received new contact request");

    const result = await readValidatedBody(
        event,
        (body) => contactSchema.safeParse(body),
    );

    if (!result.success) {
        logger.warn("[Contact API] Validation failed", { error: result.error });
        return createError({
            statusCode: 400,
            message: "Invalid request body",
        });
    }

    const runtimeConfig = useRuntimeConfig();
    try {
        logger.info(`[Contact API] Sending webhook for: ${result.data.email}`);
        await $fetch(runtimeConfig.webhookUrl, {
            method: "POST",
            body: {
                content:
                    `Name: ${result.data.name}` +
                    `\nEmail: ${result.data.email}` +
                    `\nMessage: ${result.data.message}`,
            },
        });
        logger.info("[Contact API] Webhook sent successfully");
    } catch (error) {
        if (error instanceof Error) {
            logger.error("[Contact API] Failed to send webhook", {
                errorMessage: error.message,
                stack: error.stack,
                ...error,
            });
        } else {
            logger.error("[Contact API] Failed to send webhook", { error });
        }
        setResponseStatus(event, 503, "Failed to send message");
    }
});
