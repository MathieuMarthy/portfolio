<script lang="ts" setup>
import { marked } from "marked";
import "~/assets/css/github-markdown.css";

const route = useRoute();
const projectId = route.params.id;
 
const url = "https://raw.githubusercontent.com/MathieuMarthy/sync-files-to-cloud/refs/heads/main/README.md";

const { data: readmeHtml, pending, error } = await useAsyncData(
    `readme-${projectId}`,
    async () => {
        const rawMarkdown = await $fetch<string>(url, {
            responseType: "text",
        });
        
        return marked(rawMarkdown);
    },
);
</script>

<template>
    <div class="bg-background">
        <div v-if="pending" class="text-center">
            <p>Chargement du README...</p>
        </div>

        <div v-else-if="error" class="text-red-500">
            <p>Erreur lors du chargement du README : {{ error.message }}</p>
        </div>

        <div
            v-else-if="readmeHtml"
            class="markdown-body max-w-4xl mx-auto"
            v-html="readmeHtml"
        />
    </div>
</template>
