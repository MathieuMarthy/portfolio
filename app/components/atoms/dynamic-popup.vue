<script lang="ts" setup>
defineProps({
    modelValue: { type: Boolean, required: true },
});

defineEmits(["update:modelValue"]);
</script>

<template>
    <teleport to="body">
        <div
            v-show="modelValue"
            class="fixed top-0 left-0 w-full h-full
                bg-black/50 flex items-center justify-center z-50"
        >
            <div class="flex flex-col bg-background border border-gray-700 p-4 rounded-2xl w-1/2">
                <atoms-simple-button
                    :click-handler="() => $emit('update:modelValue', false)"
                    :text="$t('buttons.close')"
                    icon="close"
                    style-class="self-end"
                />
                <slot/>
            </div>
        </div>
    </teleport>
</template>
