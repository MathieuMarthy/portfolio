<script lang="ts" setup>
import { experiences } from "~/composables/data/experiences";
</script>

<template>
    <section class="flex flex-col justify-center items-center gap-22 w-full">
        <h2 class="text-text text-5xl text-center">{{ $t("my-experiences.my-experiences") }}</h2>

        <div class="flex flex-col items-center gap-2 w-full px-24">
            <div
                v-for="(experience, index) in experiences"
                :key="experience"
                :class="index % 2 === 1 ? 'md:justify-start md:pl-4.5' : 'md:justify-end md:pr-4.5'"
                class="w-full flex justify-center"
            >
                <molecules-experience-bloc
                    :align-left="index % 2 === 1"
                    :experience-title="experience"
                />
            </div>
        </div>
    </section>
</template>
