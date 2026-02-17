<script lang="ts" setup>

defineProps({
    experienceTitle: { type: String, required: true },
    alignLeft: { type: Boolean, default: false },
});
</script>

<template>
    <article class="flex flex-col gap-2 w-full md:w-1/2">
        <div :class="{ 'md:pl-0 md:pr-7': alignLeft }" class="pl-7">
            <p class="text-text-secondary text-sm">{{ $t(`my-experiences.${experienceTitle}-dates`) }}</p>
            <p class="text-text font-semibold">{{ $t(`my-experiences.${experienceTitle}-title`) }}</p>
        </div>

        <div :class="{ 'md:flex-row-reverse md:pl-0 md:pr-0.5': alignLeft }" class="flex items-center gap-2 pl-0.5">
            <div class="size-4 bg-primary rounded-full"/>
            <div class="bg-gray-500 w-full h-0.5"/>
        </div>

        <div :class="{ 'md:pl-0 md:pr-2 md:flex-row-reverse': alignLeft }" class="flex gap-5 pl-2">
            <div class="bg-gray-500 w-0.5 h-full scale-y-120 origin-top"/>
            <p class="text-text w-full">{{ $t(`my-experiences.${experienceTitle}-description`) }}</p>
        </div>
    </article>
</template>
