<script lang="ts" setup>
import { type Techno, TechnoReverseMap } from "~/composables/models/techno";

defineProps({
    techno: { type: String as PropType<Techno>, required: true },
});
</script>

<template>
    <div class="flex items-center gap-3 px-3 py-2 w-fit rounded-2xl bg-background-alt border-gray-700 border-2">
        <img
            :alt='$t("others.x-logo", { name: techno })'
            :src="`/images/logo/${TechnoReverseMap[techno]}.svg`"
            class="w-4 h-auto"
        >

        <p class="text-text text-sm">{{ techno }}</p>
    </div>
</template>
