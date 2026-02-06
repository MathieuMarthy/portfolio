<template>
    <section class="flex flex-col justify-center items-center gap-22 w-full">
        <h2 class="text-text text-5xl text-center">{{ $t("my-experiences.my-experiences") }}</h2>

        <div class="flex flex-col items-center">
            <molecules-experience-bloc
                :align-on-right="false"
                experience-title="bpce-3il"
            />
        </div>
    </section>
</template>
