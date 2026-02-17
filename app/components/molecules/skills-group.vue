<script lang="ts" setup>
import type { PropType } from "vue";
import type { Techno } from "~/composables/models/techno";

defineProps({
    title: { type: String, required: true },
    technos: { type: Array as PropType<Techno[]>, required: true },
});
</script>

<template>
    <article class="flex flex-col gap-12">
        <h3 class="text-text-secondary text-4xl text-center">{{ $t(`technical-skills.${title}`) }}</h3>

        <div class="flex flex-wrap justify-center gap-3">
            <atoms-techno-pill
                v-for="techno in technos"
                :key="techno"
                :techno="techno"
            />
        </div>
    </article>
</template>
