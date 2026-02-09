<script lang="ts" setup>
defineProps({
    id: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    styleClass: { type: String, default: "" },
    textarea: { type: Boolean, default: false },
    modelValue: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>

<template>
    <div class="flex flex-col gap-2">
        <label :for="id" class="text-text">{{ label }}</label>
        <input
            v-if="!textarea"
            :id="id"
            :class="styleClass"
            :placeholder="placeholder"
            :type="type"
            :value="modelValue"
            class="text-text bg-input-color rounded-2xl h-10 px-3"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        >
        <textarea
            v-else
            :id="id"
            :class="styleClass"
            :placeholder="placeholder"
            :value="modelValue"
            class="text-text bg-input-color rounded-2xl px-3 py-2 resize-none"
            @input="$emit(
                'update:modelValue',
                ($event.target as HTMLTextAreaElement).value)"
        />
        <p
            v-if="errorMessage"
            class="text-red-700 dark:text-red-400"
        >{{ errorMessage }}</p>
    </div>
</template>
