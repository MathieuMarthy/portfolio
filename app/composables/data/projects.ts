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
        projectName: "amber",
        technos: [Techno.android, Techno.flutter, Techno.dart],
        links: [
            {
                type: "play-store",
                url: "https://play.google.com/store/apps/details?id=com.chocobytes.amber",
            },
            {
                type: "github",
                url: "https://github.com/MathieuMarthy/Amber",
            },
        ],
        screenshots: ["home", "all-subs", "details", "settings"],
    },
    {
        projectName: "bonsize",
        technos: [Techno.tauri, Techno.rust, Techno.vue],
        links: [
            {
                type: "github",
                url: "https://github.com/MathieuMarthy/bonsize",
            },
        ],
        screenshots: ["gui"],
    },
    {
        projectName: "fastype",
        technos: [Techno.typescript, Techno.react, Techno.sqlserver],
        links: [{ type: "site", url: "https://fastype.app" }],
        screenshots: ["game", "leaderboard", "stats"],
    },
    {
        projectName: "sync-files-to-cloud",
        technos: [Techno.python],
        links: [
            {
                type: "github",
                url: "https://github.com/MathieuMarthy/sync-files-to-cloud",
            },
        ],
        screenshots: [],
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
];
