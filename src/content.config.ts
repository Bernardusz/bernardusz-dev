import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/projects" 
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        stack: z.array(z.string()),
        category: z.enum(["Frontend", "Backend", "Fullstack"]),
        pages: z.array(z.string()),
    }),
});

export const collections = { projects }