<script lang="ts" setup>
import type { Link } from "~/composables/models/project";

defineProps<{
    link: Link
}>();
</script>

<template>
    <a
        :href="link.url"
        class="text-text bg-primary hover:bg-primary-hover px-4 py-2 rounded-2xl transition-colors
            duration-300 font-semibold flex items-center gap-2 justify-center w-fit"
        rel="noopener noreferrer"
        target="_blank"
    >
        <span>{{ $t(`buttons.${link.type}`) }}</span>
        <span
            :style="{
                maskImage: `url('/images/icons/open-link.svg')`,
                WebkitMaskImage: `url('/images/icons/open-link.svg')`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain'
            }"
            class="bg-current w-5 h-5 block"
        />
    </a>
</template>
