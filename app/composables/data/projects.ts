import { Techno } from "~/composables/models/techno";
import type { Project } from "~/composables/models/project";

export const projects: Project[] = [
    {
        projectName: "realprice",
        technos: [Techno.android, Techno.kotlin],
    },
];
