<script lang="ts" setup>

const formSent = ref(false);

const formData = reactive({
    name: "",
    email: "",
    message: "",
});

async function onSubmit() {
    formSent.value = true;

    setTimeout(() => {
        formSent.value = false;
    }, 5_000);

    await $fetch("/api/contact", {
        method: "POST",
        body: formData,
    });

    // TODO: handle errors, validate inputs and create the api endpoint
}
</script>

<template>
    <form class="flex flex-col gap-4 w-full" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-8 w-full">
            <atoms-input-with-label
                id="name"
                v-model="formData.name"
                :label="$t('contact-me.your-name')"
                :placeholder="$t('contact-me.name-placeholder')"

            />

            <atoms-input-with-label
                id="email"
                v-model="formData.email"
                :label="$t('contact-me.your-email')"
                :placeholder="$t('contact-me.email-placeholder')"
                type="email"
            />

            <atoms-input-with-label
                id="message"
                v-model="formData.message"
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

        <p v-if="formSent" class="text-green-700 dark:text-green-400 text-center pt-4">{{ $t("contact-me.message-sent") }}</p>
    </form>
</template>
