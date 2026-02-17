<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";

const isDark = ref(false);
const activeSection = ref("");
const navRef = ref<HTMLElement | null>(null);
const indicatorStyle = ref({ left: "0px", width: "0px" });
const isMobileMenuOpen = ref(false);

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

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
}

function closeMobileMenu() {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = "";
}

watch(activeSection, () => {
    nextTick(updateIndicatorPosition);
});

onMounted(() => {
    isDark.value = document.documentElement.classList.contains("dark");

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
    document.body.style.overflow = "";
});
</script>

<template>
    <!-- Desktop Navbar -->
    <div class="flex w-full justify-between p-8 fixed max-md:hidden">
        <atoms-theme-toggle
            :is-dark="isDark"
            class="rounded-2xl"
            @toggle="toggleTheme"
        />

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

    <!-- Mobile Navbar -->
    <div class="md:hidden fixed top-0 left-0 right-0 z-50">
        <!-- Mobile Header Bar -->
        <div class="flex w-full justify-between items-center p-4 bg-background/80 backdrop-blur-md">
            <atoms-theme-toggle
                :is-dark="isDark"
                class="rounded-xl"
                svg-class="w-5 h-5"
                @toggle="toggleTheme"
            />

            <!-- Hamburger Button -->
            <button
                aria-label="Toggle menu"
                class="flex flex-col justify-center items-center gap-1.5
                    bg-background-alt rounded-xl p-2.5 cursor-pointer"
                @click="toggleMobileMenu"
            >
                <span
                    :class="[
                        'w-5 h-0.5 bg-text transition-all duration-300 ease-in-out',
                        isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    ]"
                />
                <span
                    :class="[
                        'w-5 h-0.5 bg-text transition-all duration-300 ease-in-out',
                        isMobileMenuOpen ? 'opacity-0' : ''
                    ]"
                />
                <span
                    :class="[
                        'w-5 h-0.5 bg-text transition-all duration-300 ease-in-out',
                        isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    ]"
                />
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <Transition
            enter-active-class="transition-opacity duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="isMobileMenuOpen"
                class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                @click="closeMobileMenu"
            />
        </Transition>

        <!-- Mobile Menu Drawer -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="translate-x-full opacity-0"
            enter-to-class="translate-x-0 opacity-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="translate-x-0 opacity-100"
            leave-to-class="translate-x-full opacity-0"
        >
            <nav
                v-if="isMobileMenuOpen"
                class="fixed top-0 right-0 h-full w-72 bg-background-alt z-50 shadow-2xl flex flex-col"
            >
                <!-- Close Button -->
                <div class="flex justify-end p-4">
                    <button
                        aria-label="Close menu"
                        class="p-2 rounded-xl bg-background text-text cursor-pointer"
                        @click="closeMobileMenu"
                    >
                        <!-- eslint-disable @stylistic/max-len -->
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                        <!-- eslint-enable @stylistic/max-len -->
                    </button>
                </div>

                <!-- Nav Links -->
                <div class="flex flex-col gap-2 px-6 py-4">
                    <a
                        v-for="item in navItems"
                        :key="item.key"
                        :class="[
                            'text-lg text-text py-3 px-4 rounded-xl transition-all duration-200 ease-in-out',
                            activeSection === item.href
                                ? 'bg-primary text-white'
                                : 'hover:bg-background'
                        ]"
                        :href="item.href"
                        @click="closeMobileMenu"
                    >
                        {{ $t(`navbar.${item.key}`) }}
                    </a>
                </div>
            </nav>
        </Transition>
    </div>
</template>
