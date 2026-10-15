export const education = [
  {
    degree: "Grado en Ingeniería Informática",
    institution: "Universidad de Salamanca (USAL)",
    period: "2020 — 2026",
    location: "Salamanca, España",
    credits: "240 ECTS",
    summary:
      "Formación integral en desarrollo de software, sistemas, redes, bases de datos, seguridad y arquitectura de computadores.",
    highlights: [
      { label: "TFG", value: "8.5 — Notable" },
      { label: "Prácticas externas", value: "8.5 — Notable (12 ECTS)" },
      { label: "Nivel de inglés", value: "EFSET C1" },
    ],
  },
] as const;

export type Education = typeof education;