<script lang="ts" setup>

defineProps({
    experienceTitle: { type: String, required: true },
    alignOnRight: { type: Boolean, required: true },
});
</script>

<template>
    <article class="flex flex-col gap-2 w-full md:w-1/2">
        <div :class="alignOnRight ? 'pr-7': 'pl-7'">
            <p class="text-text-secondary text-sm">{{ $t(`my-experiences.${experienceTitle}-dates`) }}</p>
            <p class="text-text font-semibold">{{ $t(`my-experiences.${experienceTitle}-title`) }}</p>
        </div>

        <div :class="'flex items-center gap-2 ' + (alignOnRight ? 'flex-row-reverse pr-0.5': 'pl-0.5')">
            <div class="size-4 bg-primary rounded-full"/>
            <div class="bg-gray-500 w-full h-0.5"/>
        </div>

        <div :class="alignOnRight ? 'pr-2': 'pl-2'">
            <p
                :class="'text-text ' +
                    (alignOnRight ?
                        'border-r border-r-gray-500 pr-4':
                        'border-l border-l-gray-500 pl-4')"
            >{{ $t(`my-experiences.${experienceTitle}-description`) }}</p>
        </div>
    </article>
</template>
