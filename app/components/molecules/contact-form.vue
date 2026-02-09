<script lang="ts" setup>
import { contactSchema } from "~~/commun/validators/contactFormValidators";

const formSentSuccessfully = ref(false);
const formOnError = ref(false);

const formData = reactive({
    name: "",
    email: "",
    message: "",
});
const formErrors = reactive({
    name: "",
    email: "",
    message: "",
});

function validateForm() {
    formErrors.name = "";
    formErrors.email = "";
    formErrors.message = "";
    
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
        result.error.issues.forEach((issue) => {
            const field = issue.path[0] as keyof typeof formErrors;

            if (issue.code === "too_big") {
                formErrors[field] = $t(
                    `errors.${issue.message}`,
                    { max: issue.maximum },
                );
            } else {
                formErrors[field] = $t(`errors.${issue.message}`);
            }
        });
        return false;
    }
    return true;
}

async function onSubmit() {
    if (!validateForm()) {
        return;
    }
    
    try {
        await $fetch("/api/contact", {
            method: "POST",
            body: formData,
        });

        formSentSuccessfully.value = true;
        setTimeout(() => {
            formSentSuccessfully.value = false;
        }, 5_000);

        formData.name = "";
        formData.email = "";
        formData.message = "";
    } catch {
        formOnError.value = true;

        setTimeout(() => {
            formOnError.value = false;
        }, 5_000);
    }
}
</script>

<template>
    <form class="flex flex-col gap-4 w-full" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-8 w-full">
            <atoms-input-with-label
                id="name"
                v-model="formData.name"
                :error-message="formErrors.name"
                :label="$t('contact-me.your-name')"
                :placeholder="$t('contact-me.name-placeholder')"

            />

            <atoms-input-with-label
                id="email"
                v-model="formData.email"
                :error-message="formErrors.email"
                :label="$t('contact-me.your-email')"
                :placeholder="$t('contact-me.email-placeholder')"
                type="email"
            />

            <atoms-input-with-label
                id="message"
                v-model="formData.message"
                :error-message="formErrors.message"
                :label="$t('contact-me.your-message')"
                :placeholder="$t('contact-me.message-placeholder')"
                :textarea="true"
                style-class="h-32"
            />
        </div>

        <atoms-simple-button
            :submit="true"
            :text="$t('contact-me.send-message')"
            style-class="w-fit self-end"
        />

        <p
            v-if="formSentSuccessfully"
            class="text-green-700 dark:text-green-400 self-center pt-4"
            role="alert"
        >{{ $t("contact-me.message-sent") }}</p>

        <p
            v-if="formOnError"
            class="text-red-700 dark:text-red-400 self-center pt-4"
            role="alert"
        >{{ $t("errors.something-went-wrong") }}</p>
    </form>
</template>
