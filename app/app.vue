<template>
    <div class="relative w-full overflow-x-hidden min-h-screen">
        <div
            class="h-[50svh] w-full absolute top-0 bg-linear-to-t
                from-background to-gradient-to -z-10"/>

        <organisms-header-navbar/>

        <main class="flex flex-col items-center py-40 md:py-64 gap-52">
            <organisms-about-me/>
            <organisms-personal-projects/>
            <organisms-my-experiences/>
            <organisms-technical-skills/>
            <organisms-contact-me/>
        </main>

        <atoms-gradient-round
            color-rgba="rgba(5,135,20,0.2)"
            custom-class="top-[60svh] left-0 -translate-x-1/2"
        />
        <atoms-gradient-round
            color-rgba="rgba(135,5,92,0.3)"
            custom-class="top-[140svh] right-0 translate-x-1/2"
        />
        <atoms-gradient-round
            color-rgba="rgba(17,138,183,0.2)"
            custom-class="top-[230svh] left-0 -translate-x-1/2"
        />
        <atoms-gradient-round
            color-rgba="rgba(183,17,17,0.3)"
            custom-class="top-[380svh] right-0 translate-x-1/2"
        />
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
}
body {
    background-color: var(--color-background);
}
</style>
