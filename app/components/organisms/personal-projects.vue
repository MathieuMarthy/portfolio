<script lang="ts" setup>
import { projects } from "~/composables/data/projects";
</script>

<template>
    <section class="flex flex-col justify-center items-center gap-22">
        <h2 class="text-text text-5xl text-center">{{ $t("my-projects.my-personals-projects") }}</h2>

        <div class="flex justify-center w-full">
            <div class="flex flex-wrap justify-center lg:justify-between gap-24">
                <molecules-project-card
                    v-for="project in projects"
                    :key="project.projectName"
                    :project="project"
                />
            </div>
        </div>
    </section>
</template>
