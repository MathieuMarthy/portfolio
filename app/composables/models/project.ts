import type { Techno } from "~/composables/models/techno";

export interface Project {
    projectName: string;
    technos: Techno[];
}

const baseTranslationKey = "my-projects.projects-infos";

export type ProjectField = "imageAlt" | "title" | "description";

export const getProjectTranslationKey = (project: Project, field: ProjectField) => {
    return `${baseTranslationKey}.${project.projectName}-${field}`;
};
