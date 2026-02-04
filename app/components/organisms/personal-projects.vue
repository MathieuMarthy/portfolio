<script lang="ts" setup>
import Project from "~/composables/models/project";
import { Techno } from "~/composables/models/techno";

const projects = ref([
    new Project(
        "realprice",
        "imageAlt",
        "title",
        "description",
        [Techno.android],
    ),
    new Project(
        "realprice",
        "imageAlt",
        "title",
        "description",
        [Techno.android],
    ),
    new Project(
        "realprice",
        "imageAlt",
        "title",
        "description",
        [Techno.android],
    ),
]);
</script>

<template>
    <section class="flex flex-col justify-center items-center gap-10">
        <h2 class="text-text text-5xl text-center">{{ $t("my-projects.my-personals-projects") }}</h2>

        <div class="flex justify-center w-2/3">
            <div class="flex flex-wrap justify-between gap-16">
                <molecules-project-card
                    v-for="project in projects"
                    :key="project.title"
                    :project="project"
                />
            </div>
        </div>
    </section>
</template>
