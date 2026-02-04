
export enum Techno {
    android = "Android",
    kotlin = "Kotlin",
    react = "ReactJS",
}

export const TechnoReverseMap = Object.fromEntries(
    Object.entries(Techno).map(([key, value]) => {return [value, key];}),
);
