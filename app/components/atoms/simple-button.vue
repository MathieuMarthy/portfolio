<script lang="ts" setup>
defineProps({
    text: { type: String, required: true },
    clickHandler: { type: Function, required: false, default: null },
});
</script>

<template>
    <button
        class="bg-primary text-text font-semibold px-4 py-2 rounded-2xl cursor-pointer hover:bg-primary-hover
            transition-colors duration-200 ease-in-out"
        @click="clickHandler()"
    >{{ text }}</button>
</template>
