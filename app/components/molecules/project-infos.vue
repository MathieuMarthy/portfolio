<script lang="ts" setup>
import { getProjectTranslationKey, type Project } from "~/composables/models/project";

defineProps<{
    project: Project
}>();
</script>

<template>
    <article class="flex flex-col items-center w-full gap-18">
        <div class="flex flex-col items-center gap-8 w-full">
            <img
                :alt="$t(getProjectTranslationKey(project, 'imageAlt'))"
                :src="`/images/projects/${project.projectName}.webp`"
                class="w-auto h-60 rounded-2xl"
            >

            <h2 class="text-text text-5xl font-semibold text-center">
                {{ $t(getProjectTranslationKey(project, 'title')) }}
            </h2>

            <p class="text-text w-2/3">{{ $t(getProjectTranslationKey(project, 'long-description')) }}</p>

            <div class="flex flex-wrap justify-center gap-6">
                <atoms-project-link
                    v-for="link in project.links"
                    :key="link.url"
                    :link="link"
                />
            </div>
        </div>

        <div class="flex flex-col items-center gap-4">
            <h3 class="text-text text-4xl text-center font-semibold">
                {{ $t("my-projects.technologies-used") }}
            </h3>

            <div class="flex flex-wrap gap-2">
                <atoms-techno-pill
                    v-for="techno in project.technos"
                    :key="techno"
                    :techno="techno"
                />
            </div>
        </div>

        <div class="flex flex-col items-center gap-4">
            <h3 class="text-text text-4xl text-center font-semibold">{{ $t("my-projects.screenshots") }}</h3>

            <div class="flex flex-wrap justify-center">
                <img
                    v-for="screenshot in project.screenshots"
                    :key="screenshot"
                    :alt="$t(getProjectTranslationKey(project, `${screenshot}-imageAlt`))"
                    :src="`/images/projects/${project.projectName}-${screenshot}.webp`"
                    class="w-auto h-96 rounded-2xl m-4"
                >
            </div>
        </div>
    </article>
</template>
