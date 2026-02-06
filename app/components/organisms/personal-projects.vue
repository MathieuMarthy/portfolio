<script lang="ts" setup>
import { projects } from "~/composables/data/projects";
import { ButtonTypes } from "~/composables/data/buttonTypes";

const displayAllProjects = ref(false);

const projectsToShow = computed(() => {
    return displayAllProjects.value ? projects : projects.slice(0, 3);
});

</script>

<template>
    <section class="flex flex-col justify-center items-center gap-22 w-full">
        <h2 class="text-text text-5xl text-center">{{ $t("my-projects.my-personals-projects") }}</h2>

        <div class="flex flex-wrap justify-center gap-12 w-9/12">
            <molecules-project-card
                v-for="project in projectsToShow"
                :key="project.projectName"
                :project="project"
            />
        </div>

        <atoms-simple-button
            v-if="!displayAllProjects"
            :button-type="ButtonTypes.SECONDARY"
            :click-handler="() => displayAllProjects = true"
            text="view more"
        />
    </section>
</template>
