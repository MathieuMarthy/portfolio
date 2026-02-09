import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .nonempty("empty")
        .trim()
        .max(100, "too-long"),
    email: z
        .email("invalid-email")
        .trim(),
    message: z
        .string()
        .nonempty("empty")
        .trim()
        .max(1_000, "too-long"),
});
