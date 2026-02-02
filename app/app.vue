<script lang="ts" setup>
import { onMounted, ref } from "vue";

const isDark = ref(false);

function toggleTheme() {
    isDark.value = !isDark.value;
    updateTheme();
}

function updateTheme() {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark.value ? "dark": "light");
}

onMounted(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
        isDark.value = stored === "dark";
    }
    else {
        isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    updateTheme();
});
</script>

<template>
    <div class="bg-background h-screen">
        <p class="text-4xl text-">{{ $t("hello") }}</p>

        <button
            class="bg-primary text-background px-4 py-2 rounded cursor-pointer hover:opacity-90"
            @click="toggleTheme"
        >
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>
    </div>
</template>
