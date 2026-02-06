
export enum Techno {
    android = "Android",
    kotlin = "Kotlin",
    python = "Python",
    typescript = "Typescript",
    react = "ReactJS",
    sqlserver = "SQL Server",
}

export const TechnoReverseMap = Object.fromEntries(
    Object.entries(Techno).map(([key, value]) => {return [value, key];}),
);
