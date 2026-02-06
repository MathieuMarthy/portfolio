import { Techno } from "~/composables/models/techno";
import type { Project } from "~/composables/models/project";

export const projects: Project[] = [
    {
        projectName: "realprice",
        technos: [Techno.android, Techno.kotlin],
        links: [{ type: "play-store", url: "https://play.google.com/store/apps/details?id=com.app.realprice&hl=fr" }],
        showMoreInfosButton: true,
    },
    {
        projectName: "eula-bot",
        technos: [Techno.python],
        links: [],
        showMoreInfosButton: true,
    },
    {
        projectName: "fastype",
        technos: [Techno.typescript, Techno.react, Techno.sqlserver],
        links: [{ type: "site", url: "https://fastype.app" }],
        showMoreInfosButton: true,
    },
];
