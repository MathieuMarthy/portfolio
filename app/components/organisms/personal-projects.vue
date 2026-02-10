<script lang="ts" setup>
import { projects } from "~/composables/data/projects";
import { ButtonTypes } from "~/composables/data/buttonTypes";
import type { Project } from "~/composables/models/project";

const displayAllProjects = ref(false);
const projectsToShow = computed(() => displayAllProjects.value ? projects : projects.slice(0, 3));

const projectInPopup: Ref<Project | null> = ref(null);

function handlePopupClose() {
    projectInPopup.value = null;
}
</script>

<template>
    <section class="flex flex-col justify-center items-center gap-22 w-full">
        <atoms-dynamic-popup
            :model-value="projectInPopup !== null"
            @update:model-value="handlePopupClose"
        >
            <molecules-project-infos v-if="projectInPopup" :project="projectInPopup"/>
        </atoms-dynamic-popup>

        <h2
            class="text-text text-5xl text-center"
        >{{ $t("my-projects.my-personals-projects") }}</h2>

        <div class="flex flex-wrap justify-center gap-12 w-9/12">
            <molecules-project-card
                v-for="project in projectsToShow"
                :key="project.projectName"
                :project="project"
                @show-more-infos="projectInPopup = project"
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
