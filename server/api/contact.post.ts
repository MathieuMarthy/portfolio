import { contactSchema } from "~~/commun/validators/contactFormValidators";

export default defineEventHandler(async (event) => {
    const result = await readValidatedBody(
        event,
        (body) => contactSchema.safeParse(body),
    );

    if (!result.success) {
        return createError({
            statusCode: 400,
            message: "Invalid request body",
        });
    }

    const runtimeConfig = useRuntimeConfig();
    try {
        await $fetch(runtimeConfig.webhookUrl, {
            method: "POST",
            body: {
                content:
                    `Name: ${result.data.name}` +
                    `\nEmail: ${result.data.email}` +
                    `\nMessage: ${result.data.message}`,
            },
        });
    } catch {
        setResponseStatus(event, 503, "Failed to send message");
    }
});
