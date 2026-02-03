<script lang="ts" setup>
import { onMounted, ref } from "vue";

const isDark = ref(false);

const navItems = [
    { key: "about-me", href: "#" },
    { key: "my-projects", href: "#" },
    { key: "my-expericences", href: "#" },
    { key: "contact-me", href: "#" },
];

function toggleTheme() {
    isDark.value = !isDark.value;
    updateTheme();
}

function updateTheme() {
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark": "light");
}

onMounted(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
        isDark.value = stored === "dark";
    } else {
        isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    updateTheme();
});
</script>

<template>
    <div class="flex w-full justify-between p-8 fixed max-md:hidden">
        <button class="flex gap-2 bg-background-alt rounded-2xl text-text p-2 cursor-pointer" @click="toggleTheme">
            <svg :class="{ 'opacity-50': isDark }" class="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </svg>
            <svg :class="{ 'opacity-50': !isDark }" class="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
            </svg>
        </button>

        <nav class="flex items-center justify-end gap-8">
            <a
                v-for="item in navItems"
                :key="item.key"
                class="text-xl text-text hover:opacity-60"
                :href="item.href"
            >
                {{ $t(`navbar.${item.key}`) }}
            </a>
        </nav>
    </div>
</template>
