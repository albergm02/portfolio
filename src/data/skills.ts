export const skills = [
  {
    category: "Lenguajes",
    icon: "code",
    items: ["JavaScript", "TypeScript", "C#", "C++", "Java", "Python", "SQL", "ABAP", "Bash", "Perl"],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["Vue 3", "Pinia", "Vite", "Tailwind CSS", "PrimeVue", "Astro", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Cloud",
    icon: "server",
    items: ["Node.js", "Firebase", "Cloud Functions", "Firestore", "Google Cloud Scheduler", "REST APIs"],
  },
  {
    category: "Bases de datos",
    icon: "database",
    items: ["MySQL", "MariaDB", "MongoDB", "Oracle (SQL*Plus)", "Firestore"],
  },
  {
    category: "Sistemas & DevOps",
    icon: "terminal",
    items: ["Debian 12", "Apache2", "Postfix", "Dovecot", "SSH", "Git", "GitHub Actions", "VirtualBox"],
  },
  {
    category: "Testing & Calidad",
    icon: "check",
    items: ["Vitest", "JsDoc", "UML", "Visual Paradigm", "Zod"],
  },
] as const;

export const certifications = [
  { name: "EFSET C1", issuer: "EF Standard English Test", year: 2026 },
  { name: "SAP Analytics Cloud", issuer: "SAP", year: 2026 },
  { name: "SAP BW4HANA", issuer: "SAP", year: 2026 },
  { name: "Viewnext Hackathon con Jira", issuer: "Hackathon Scrum + IA", year: 2026 },
] as const;

export type Skills = typeof skills;