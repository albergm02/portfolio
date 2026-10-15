export const experience = [
  {
    role: "Prácticas en Consultoría SAP",
    company: "Viewnext",
    department: "SAP (Systems, Applications & Products)",
    location: "Salamanca, España",
    period: "Febrero 2026 — Mayo 2026",
    type: "Prácticas curriculares",
    summary: "Resolución de incidencias y desarrollo de soluciones sobre el ecosistema SAP para clientes reales, dentro de un equipo Agile con metodología Scrum.",
    highlights: [
      "Resolución de tickets y filtros a color en SAP Analytics Cloud (SAC).",
      "Modificación de fórmulas en transformaciones ADSO y transporte entre entornos.",
      "Actualización de roles y perfiles según peticiones del cliente.",
      "Participación diaria en Dailys y reuniones de equipo.",
    ],
    stack: ["SAP", "SAP Analytics Cloud", "BW4HANA", "ABAP", "SAP GUI", "Excel"],
    grade: "8.5 — Notable",
  },
] as const;

export type Experience = typeof experience;