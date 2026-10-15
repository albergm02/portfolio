// src/data/site.ts

export const site = {
  // Identidad
  name: "Alberto García Martín",
  shortName: "AGM",
  role: "Software Engineer",
  tagline: "Ingeniero Informático especializado en el desarrollo de software.",

  // Ubicación
  location: "Salamanca, España",
  timezone: "Europe/Madrid",

  // Contacto
  email: "alberto.g.m.0214@gmail.com",

  // Redes
  socials: {
    github: "https://github.com/albergm02",
    linkedin: "https://www.linkedin.com/in/albertogarciamartin/",
  },

  // SEO
  seo: {
    title: "Alberto GM — Software Engineer",
    description:
      "Ingeniero Informático especializado en el desarrollo de software. Construyo aplicaciones web rápidas, limpias y con atención al detalle.",
    url: "https://albertogm.dev",
  },

  // Idiomas
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C1 (EFSET)" },
  ],
} as const;

export type Site = typeof site;