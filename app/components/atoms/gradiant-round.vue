<script lang="ts" setup>
defineProps({
    colorRgba: { type: String, required: true },
    customClass: { type: String, required: true },
});
</script>

<template>
    <div :class="`fixed ${customClass} -translate-x-1/2 w-9/12 h-9/12 bg-[radial-gradient(closest-side,${colorRgba},transparent)] pointer-events-none -z-10`"/>
</template>
