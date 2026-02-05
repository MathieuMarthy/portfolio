
export enum Techno {
    android = "Android",
    kotlin = "Kotlin",
    python = "Python",
    react = "ReactJS",
}

export const TechnoReverseMap = Object.fromEntries(
    Object.entries(Techno).map(([key, value]) => {return [value, key];}),
);
