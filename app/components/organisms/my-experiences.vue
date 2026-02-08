<script lang="ts" setup>
import { experiences } from "~/composables/data/experiences";

const windowWidth = ref(0);
const isLargeWidth = computed(() => {
    return windowWidth.value > 700;
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

        <div class="flex flex-col items-center">
            <molecules-experience-bloc
                v-for="(experience, index) in experiences"
                :key="experience"
                :align-on-right="isLargeWidth && index % 2 == 1"
                :experience-title="experience"
            />
        </div>
    </section>
</template>
