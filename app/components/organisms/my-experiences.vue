<script lang="ts" setup>
import { experiences } from "~/composables/data/experiences";

const windowWidth = ref(0);
const isLargeWindow = computed(() => {
    return windowWidth.value > 768; // 768px = tailwind md breakpoint
});

function updateWindowWidth() {
    windowWidth.value =  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

onMounted(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateWindowWidth);
});
</script>

<template>
    <section class="flex flex-col justify-center items-center gap-22 w-full">
        <h2 class="text-text text-5xl text-center">{{ $t("my-experiences.my-experiences") }}</h2>

        <div class="flex flex-col items-center gap-8 w-full px-24">
            <div
                v-for="(experience, index) in experiences"
                :key="experience"
                :class="[
                    'w-full flex',
                    isLargeWindow ?
                        (index % 2 == 1 ? 'justify-start pl-4' : 'justify-end pr-4'):
                        'justify-center',
                ]"
            >
                <molecules-experience-bloc
                    :align-on-right="isLargeWindow && index % 2 == 1"
                    :experience-title="experience"
                />
            </div>
        </div>
    </section>
</template>
