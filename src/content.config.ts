import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    // Datos básicos
    title: z.string(),
    description: z.string(),
    year: z.number(),

    // Clasificación
    category: z.enum(['web', 'desktop', 'systems', 'security', 'game', 'data']),
    status: z.enum(['deployed', 'academic', 'wip']),

    // Stack tecnológico
    stack: z.array(z.string()),

    // Destacado (aparece en Home vs. solo en /proyectos)
    featured: z.boolean().default(false),
    order: z.number().default(99),

    // Enlaces (opcionales)
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),

    // Logros destacados (bullet points)
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };