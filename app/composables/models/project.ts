import type { Techno } from "~/composables/models/techno";

export interface Link {
    type: string;
    url: string;
}

export interface Project {
    projectName: string;
    technos: Techno[];
    links: Link[];
    showMoreInfosButton: boolean;
    screenshots: string[];
}

const baseTranslationKey = "my-projects.projects-infos";

export type ProjectField =
    `${string}-imageAlt` | "imageAlt" | "title" | "short-description" | "long-description";

export const getProjectTranslationKey =
    (project: Project, field: ProjectField) => `${baseTranslationKey}.${project.projectName}-${field}`;
