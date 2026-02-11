import { Techno } from "~/composables/models/techno";
import type { Project } from "~/composables/models/project";

export const projects: Project[] = [
    {
        projectName: "realprice",
        technos: [Techno.android, Techno.kotlin],
        links: [
            {
                type: "play-store",
                url: "https://play.google.com/store/apps/details?id=com.app.realprice&hl=fr",
            },
            {
                type: "github",
                url: "https://github.com/MathieuMarthy/RealPrice",
            },
        ],
        screenshots: ["home", "search", "settings", "home-light"],
    },
    {
        projectName: "eula-bot",
        technos: [Techno.python],
        links: [
            {
                type: "github",
                url: "https://github.com/MathieuMarthy/Eula-Bot",
            },
        ],
        screenshots: ["monopoly", "leaderboard-lol"],
    },
    {
        projectName: "fastype",
        technos: [Techno.typescript, Techno.react, Techno.sqlserver],
        links: [{ type: "site", url: "https://fastype.app" }],
        screenshots: ["game", "leaderboard", "stats"],
    },
];
