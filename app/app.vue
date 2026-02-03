<script lang="ts" setup>
</script>
<template>
    <div class="h-1/2 w-full absolute top-0 bg-linear-to-t from-background to-gradient-to -z-10"/>

    <organisms-header-navbar/>

    <main class="flex flex-col items-center pt-80">
        <organisms-about-me/>
    </main>

    <atoms-gradiant-round color-rgba="rgba(5,135,20,0.2)" custom-class="top-[60%] left-0"/>
</template>

<style>
body {
    background-color: var(--color-background);
}
</style>
