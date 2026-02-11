<script lang="ts" setup>

const contactLinks = [
    {
        url: "mailto:mathieu.marthy@gmail.com",
        icon: "icons/mail", text: "email-me",
    },
    {
        url: "https://github.com/MathieuMarthy",
        icon: "logo/github", text: "check-github",
    },
];
</script>

<template>
    <section id="contact-me" class="flex flex-col items-center gap-28 w-1/3">
        <h2 class="text-text text-5xl text-center">{{ $t("contact-me.contact-me") }}</h2>

        <article class="flex flex-col items-center gap-8 w-full">
            <h3
                class="text-text-secondary text-3xl text-center"
            >{{ $t("contact-me.my-socials") }}</h3>
            <div class="flex flex-wrap justify-center gap-20 w-full">
                <div
                    v-for="contactLink in contactLinks"
                    :key="contactLink.url"
                    class="flex flex-col items-center justify-center gap-6"
                >
                    <img
                        :src="`/images/${contactLink.icon}.svg`"
                        alt="" class="h-18 w-auto"
                    >

                    <a
                        :class="[
                            'text-text bg-primary hover:bg-primary-hover',
                            'px-4 py-2 rounded-2xl transition-colors duration-300'
                        ]"
                        :href="contactLink.url"
                        rel="noopener noreferrer"
                        target="_blank"
                    >{{ $t(`contact-me.${contactLink.text}`) }}</a>
                </div>
            </div>
        </article>

        <article class="flex flex-col items-center gap-8 w-full">
            <h3
                class="text-text-secondary text-3xl text-center"
            >{{ $t("contact-me.send-me-a-message") }}</h3>
            <molecules-contact-form/>
        </article>
        <div/>
    </section>
</template>
