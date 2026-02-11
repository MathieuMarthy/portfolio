<template>
    <section id="about-me" class="flex flex-col justify-center items-center gap-10">
        <img alt="" class="rounded-full h-72 w-72" src="/images/pp.webp">

        <h1 class="text-text text-center text-6xl md:text-7xl font-medium ">{{ $t("about-me.hello") }}</h1>

        <p class="text-text-secondary max-w-2/3 md:max-w-1/2">{{ $t("about-me.description") }}</p>
    </section>
</template>
