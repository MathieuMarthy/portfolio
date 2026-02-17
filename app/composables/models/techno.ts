
export enum Techno {
    android = "Android",

    // web
    javascript = "JavaScript",
    typescript = "Typescript",
    react = "ReactJS",
    angular = "Angular",
    nuxt = "Nuxt JS",
    fastapi = "FastAPI",
    adonisjs = "Adonisjs",
    tailwindcss = "Tailwind CSS",
    bun = "Bun",

    // db
    postgresql = "PostgreSQL",
    sqlserver = "SQL Server",
    mongodb = "MongoDB",

    // others languages
    python = "Python",
    kotlin = "Kotlin",
    java = "Java",
    csharp = "C#",

    // tools
    git = "Git",
    docker = "Docker",
    jira = "jira",
    confluence = "Confluence",
    bitbucket = "Bitbucket",
    github = "Github",
    postman = "Postman",
    vscode = "Visual studio code",
    jetbrainsIdes = "JetBrains IDEs",
    figma = "Figma",

    // infrastructure
    vmware = "VMware",
    ansible = "Ansible",
    linux = "Linux",
    dellOME = "Dell OME",
    githubActions = "Github Actions",
}

export const TechnoReverseMap = Object.fromEntries(
    Object.entries(Techno).map(([key, value]) => {return [value, key];}),
);
