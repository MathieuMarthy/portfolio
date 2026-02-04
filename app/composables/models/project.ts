import type { Techno } from "~/composables/models/techno";

export default class Project {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    technos: Techno[];

    constructor(image: string, imageAlt: string, title: string, description: string, technos: Techno[]) {
        this.image = image;
        this.imageAlt = imageAlt;
        this.title = title;
        this.description = description;
        this.technos = technos;
    }
};
