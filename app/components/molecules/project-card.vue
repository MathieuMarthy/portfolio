<script lang="ts" setup>
import Project from "~/composables/models/project";

defineProps({
    project: { type: Project, required: true },
});
</script>

<template>
    <article class="flex flex-col p-4 gap-6 bg-background-alt border-gray-700 border-2 rounded-3xl">
        <img :alt="project.imageAlt" :src="`/images/projects/${project.image}.webp`" class="h-52 rounded-2xl" >

        <div class="flex flex-col gap-2 px-1">
            <h4 class="text-text text-xl font-semibold">{{ project.title }}</h4>

            <p class="text-text">{{ project.description }}</p>
        </div>

        <div class="flex justify-between">
            <div class="flex gap-2">
                <atoms-techno-pill v-for="techno in project.technos" :key="techno" :techno="techno" />
            </div>

            <button>more infos</button>
        </div>
    </article>
</template>
