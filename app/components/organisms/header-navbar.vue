<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";

const isDark = ref(false);
const activeSection = ref("");
const navRef = ref<HTMLElement | null>(null);
const indicatorStyle = ref({ left: "0px", width: "0px" });

const navItems = [
    { key: "about-me", href: "#about-me" },
    { key: "my-projects", href: "#personal-projects" },
    { key: "my-expericences", href: "#my-experiences" },
    { key: "technical-skills", href: "#technical-skills" },
    { key: "contact-me", href: "#contact-me" },
] as const;

const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
} as const;

let observer: IntersectionObserver | null = null;
let resizeObserver: ResizeObserver | null = null;

function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

function updateIndicatorPosition() {
    if (!navRef.value || !activeSection.value) {
        return;
    }

    const activeLink = navRef.value.querySelector(`a[href="${activeSection.value}"]`) as HTMLElement;
    if (!activeLink) {
        return;
    }

    const navRect = navRef.value.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    indicatorStyle.value = {
        left: `${linkRect.left - navRect.left}px`,
        width: `${linkRect.width}px`,
    };
}

function handleIntersection(entries: IntersectionObserverEntry[]) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            activeSection.value = `#${entry.target.id}`;
            break;
        }
    }
}

function setupScrollObserver() {
    observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            observer.observe(section);
        }
    }
}

function initializeTheme() {
    const stored = localStorage.getItem("theme");
    isDark.value = stored
        ? stored === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.toggle("dark", isDark.value);
}

watch(activeSection, () => {
    nextTick(updateIndicatorPosition);
});

onMounted(() => {
    initializeTheme();

    // Setup scroll observer
    nextTick(() => {
        setupScrollObserver();
        updateIndicatorPosition();
    });

    if (navRef.value) {
        resizeObserver = new ResizeObserver(updateIndicatorPosition);
        resizeObserver.observe(navRef.value);
    }

    window.addEventListener("resize", updateIndicatorPosition);
});

onUnmounted(() => {
    observer?.disconnect();
    resizeObserver?.disconnect();
    window.removeEventListener("resize", updateIndicatorPosition);
});
</script>

<template>
    <div class="flex w-full justify-between p-8 fixed max-md:hidden">
        <button
            class="flex h-fit gap-2 bg-background-alt rounded-2xl text-text p-2 cursor-pointer"
            @click="toggleTheme"
        >
            <!-- eslint-disable @stylistic/max-len -->
            <svg :class="{ 'opacity-50': isDark }" class="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </svg>
            <svg :class="{ 'opacity-50': !isDark }" class="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
            </svg>
            <!-- eslint-enable @stylistic/max-len -->
        </button>

        <nav
            ref="navRef"
            class="flex items-center justify-end gap-8 bg-background-alt rounded-2xl px-5 py-2 relative"
        >
            <a
                v-for="item in navItems"
                :key="item.key"
                :class="[
                    'text-lg text-text hover:text-text-secondary transition-colors duration-200' +
                    ' ease-in-out pb-1 relative z-10',
                    activeSection === item.href ? 'text-text-secondary' : ''
                ]"
                :href="item.href"
            >
                {{ $t(`navbar.${item.key}`) }}
            </a>
            <div
                :style="{ left: indicatorStyle.left, width: indicatorStyle.width }"
                class="absolute bottom-2 h-0.5 bg-text-secondary transition-all duration-300 ease-in-out"
            />
        </nav>
    </div>
</template>
