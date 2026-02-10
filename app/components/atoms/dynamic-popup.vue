<script lang="ts" setup>
const props = defineProps({
    modelValue: { type: Boolean, required: true },
});

const emit = defineEmits(["update:modelValue"]);

function closePopup() {
    emit("update:modelValue", false);
}

function updateBodyOverflow(hidden: boolean) {
    document.body.style.overflow = hidden ? "hidden": "";
}

watch(() => props.modelValue, () => {
    if (props.modelValue) {
        updateBodyOverflow(true);
    } else {
        updateBodyOverflow(false);
    }
});

onMounted(() => {
    if (props.modelValue) {
        updateBodyOverflow(true);
    }
});

onUnmounted(() => {
    document.body.style.overflow = "";
});
</script>

<template>
    <teleport to="body">
        <div
            v-if="props.modelValue"
            class="fixed top-0 left-0 w-full h-full overflow-y-auto
                bg-black/50 flex justify-center z-50 py-8"
            @click="closePopup"
        >
            <div
                class="flex flex-col gap-4 bg-background border border-gray-700 p-4 rounded-2xl w-1/2 h-fit"
                @click.stop
            >
                <atoms-simple-button
                    :click-handler="closePopup"
                    :text="$t('buttons.close')"
                    icon="close"
                    style-class="self-end"
                />
                <slot/>
            </div>
        </div>
    </teleport>
</template>
