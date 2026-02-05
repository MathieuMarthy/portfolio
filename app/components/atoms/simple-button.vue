<script lang="ts" setup>
defineProps({
    text: { type: String, required: true },
    clickHandler: { type: Function, required: false, default: null },
    styleClass: { type: String, required: false, default: "" },
    icon: { type: String, required: false, default: "" },
});
</script>

<template>
    <button
        :class="`${styleClass} bg-primary text-text font-semibold px-4 py-2 rounded-2xl cursor-pointer hover:bg-primary-hover
            transition-colors duration-200 ease-in-out flex items-center justify-center gap-2`"
        @click="clickHandler && clickHandler()"
    >
        <span>{{ text }}</span>
        <span
            v-if="icon"
            :style="{
                maskImage: `url('/images/icons/${icon}.svg')`,
                WebkitMaskImage: `url('/images/icons/${icon}.svg')`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain'
            }"
            class="bg-current w-5 h-5 block"
        />
    </button>
</template>
