<template>
    <div class="h-1/2 w-full absolute top-0 bg-linear-to-t from-background to-gradient-to -z-10"/>

    <organisms-header-navbar/>

    <main class="flex flex-col items-center py-64 gap-64">
        <organisms-about-me/>
        <organisms-personal-projects/>
    </main>

    <atoms-gradient-round color-rgba="rgba(5,135,20,0.2)" custom-class="top-[60%] left-0 -translate-x-1/2"/>
    <atoms-gradient-round color-rgba="rgba(135,5,92,0.2)" custom-class="top-[140%] right-0 translate-x-1/2"/>
</template>

<style>
body {
    background-color: var(--color-background);
    overflow-x: hidden;
}
</style>
