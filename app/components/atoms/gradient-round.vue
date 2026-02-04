<script lang="ts" setup>
defineProps({
    colorRgba: { type: String, required: true },
    customClass: { type: String, required: true },
});
</script>

<template>
    <div
        :class="`absolute ${customClass} w-250 h-250 pointer-events-none -z-10`"
        :style="{ background: `radial-gradient(closest-side, ${colorRgba}, transparent)` }"
    />
</template>
