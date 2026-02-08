import { Techno } from "~/composables/models/techno";

export interface TechnicalSkill {
    title: string;
    technos: Techno[];
}

export const technicalSkills: TechnicalSkill[] = [
    {
        title: "web",
        technos: [
            Techno.javascript, Techno.typescript, Techno.react, Techno.angular, Techno.nuxt, Techno.fastapi,
            Techno.adonisjs, Techno.tailwindcss, Techno.bun,
        ],
    },
    {
        title: "databases",
        technos: [Techno.postgresql, Techno.sqlserver, Techno.mongodb],
    },
    {
        title: "other-languages",
        technos: [Techno.python, Techno.kotlin, Techno.java, Techno.csharp],
    },
    {
        title: "tools",
        technos: [
            Techno.git, Techno.docker, Techno.jira, Techno.confluence, Techno.bitbucket, Techno.github,
            Techno.postman, Techno.vscode, Techno.jetbrainsIdes, Techno.figma,
        ],
    },
    {
        title: "infrastructure",
        technos: [Techno.vmware, Techno.ansible, Techno.linux, Techno.dellOME, Techno.githubActions],
    },
];
