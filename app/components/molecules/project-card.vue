<script lang="ts" setup>
import { getProjectTranslationKey, type Project } from "~/composables/models/project";

defineProps<{
    project: Project
}>();

defineEmits(["showMoreInfos"]);
</script>

<template>
    <article
        class="flex flex-col justify-between gap-8 w-80 md:w-96
            min-h-128 md:min-h-108 p-4 bg-background-alt
            border-gray-700 border-2 rounded-3xl">

        <div class="flex flex-col gap-4">
            <img
                :alt="$t(getProjectTranslationKey(project, 'imageAlt'))"
                :src="`/images/projects/${project.projectName}.webp`"
                class="w-auto h-40 rounded-2xl"
            >

            <div class="flex flex-col gap-2 px-1">
                <h4
                    class="text-text text-xl font-semibold"
                >{{ $t(getProjectTranslationKey(project, 'title')) }}</h4>

                <p
                    class="text-text text-sm"
                >{{ $t(getProjectTranslationKey(project, 'short-description')) }}</p>
            </div>
        </div>

        <div class="flex flex-col justify-between gap-4">
            <div class="flex flex-wrap gap-2">
                <atoms-techno-pill
                    v-for="techno in project.technos"
                    :key="techno"
                    :techno="techno"
                />
            </div>

            <atoms-simple-button
                v-if="project.showMoreInfosButton"
                :click-handler="() => $emit('showMoreInfos', project)"
                style-class="w-full"
                text="more infos"
            />
        </div>
    </article>
</template>
