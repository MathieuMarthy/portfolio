<script lang="ts" setup>
import { technicalSkills } from "~/composables/data/technicalSkills";
</script>

<template>
    <section id="technical-skills" class="flex flex-col gap-22 w-10/12 md:w-5/12">
        <h2 class="text-text text-5xl text-center">{{ $t("technical-skills.technical-skills") }}</h2>

        <div class="flex flex-col gap-18">
            <molecules-skills-group
                v-for="skill in technicalSkills"
                :key="skill.title"
                :technos="skill.technos"
                :title="skill.title"
            />
        </div>
    </section>
</template>
