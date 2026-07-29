import { SectionLabel } from '../ui/SectionLabel';
import { ScrollCue } from '../ui/ScrollCue';
import { ProjectCard, type Proyecto } from '../ui/ProjectCard';

/* 🛠️ Añade aquí tus proyectos poco a poco.
   - videoSrc: cuando grabes el clip, pon '/videos/perch-route.mp4' (y guárdalo en public/videos/).
     Mientras esté vacío, la tarjeta muestra un placeholder elegante.
   - posterSrc (opcional): una captura de la consola para el fallback / mientras carga el vídeo.
*/
const PROYECTOS: Proyecto[] = [
  {
    id: 'f1-fantasy',
    titulo: 'Formula 1 Fantasy',
    subtitulo: 'Trabajo de Fin de Grado - Desarrollo de una PWA',
    anio: '2026',
    descripcion:
      'Desarrollo integral (Full-Stack) de una plataforma web interactiva tipo "Fantasy" basada en el campeonato de Fórmula 1. Frontend ágil con Vue 3 y Vite (PWA); backend y datos con Firebase (autenticación segura y base de datos en tiempo real) y la API OpenF1 como fuente de datos en vivo. Incluye ligas, mercado de fichajes, cláusulas y cálculo de puntuaciones por jornada.',
    tags: ['Vue 3', 'Firebase', 'OpenF1 API', 'PWA', 'Vite', 'Pinia', 'Tailwind CSS', 'Zod', 'Cloud Functions'],
    repo: 'https://github.com/albergm02/Formula1_Fantasy',
    demoEnVivo: 'https://formula1-fantasy-ba348.web.app/',
    videoSrc: '/F1Fantasy.mp4',   
    posterSrc: '/f1fantasy.png',  
    destacado: true,      
  },
  {
  id: 'security-systems',
  titulo: 'Security Systems',
  subtitulo: 'Proyecto de ciberseguridad',
  anio: '2025', 
  descripcion:
    'Proyecto centrado en la seguridad de sistemas y redes.',
  tags: ['Ciberseguridad'],
  repo: 'https://github.com/albergm02/Security-Systems',
  posterSrc: 'sec.png',   
  destacado: true, 
  },
  {
    id: 'perch-route',
    titulo: 'La Ruta de la Pesca',
    subtitulo: 'Sincronización de procesos',
    anio: '2024',
    descripcion:
      'Programación a bajo nivel y gestión de la concurrencia del sistema mediante la sincronización de procesos en una aplicación de consola en C++, además de la creación, compilación y consumo de librerías de enlace dinámico (DLL).',
    tags: ['C++', 'std::thread', 'std::mutex', 'Semáforos', 'CreateEvent', 'DLLs', 'Win32'],
    repo: 'https://github.com/albergm02/ThePerchRoute',
    videoSrc: '/thePerchRoute.mp4',
    posterSrc: '/filosofos.png',
  },
  {
    id: 'el-pactometro',
    titulo: 'El Pactómetro',
    subtitulo: 'Interfaces gráficas',
    anio: '2023',
    descripcion:
      'Aplicación de escritorio WPF diseñada para la visualización y el análisis de procesos electorales en España. Integra herramientas gráficas para la gestión de datos, la comparación de resultados históricos y la simulación de escenarios de coalición.',
    tags: ['C#', 'WPF', '.NET', 'XAML', 'Visualización de datos'],
    repo: 'https://github.com/albergm02/ElPactometro',
    videoSrc: '/pactometro.mp4',
    posterSrc: '/pactometro.png',
  },
  {
    id: 'areya',
    titulo: 'Areya',
    subtitulo: 'Servidor Linux Debian',
    anio: '2023',
    descripcion:
      'Instalación, configuración y administración de un servidor Linux basado en Debian. Implementación de servicios de red, gestión de usuarios y permisos, automatización de tareas mediante scripts Bash y aseguramiento del sistema mediante prácticas de seguridad y monitoreo.',
    tags: ['Linux', 'Debian', 'Bash', 'SSH', 'Servicios de red', 'SysAdmin'],
    pdfSrc: '/areya.pdf',  
    ancho: true,      
  },
  // 👇 Próximo turno: TFG con destacado: true + demoEnVivo.
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <SectionLabel index="04" label="Proyectos" />

      <h2 className="font-tech text-3xl md:text-5xl font-black mt-6 leading-tight text-balance">
        PROYECTOS <span className="text-f1-red">DESTACADOS</span>
      </h2>
      <p className="text-silver mt-3 max-w-2xl text-sm sm:text-base">
        Una selección de lo que he construido: desde concurrencia y sistemas a bajo nivel hasta
        aplicaciones web full-stack. Pulsa <span className="text-f1-red">Ver demo</span> para
        verlo en acción o <span className="text-f1-red">Ver código</span> para entrar al repositorio.
      </p>

      <div className="grid gap-6 mt-10 md:grid-cols-2">
        {PROYECTOS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <ScrollCue href="#experiencia" label="Trayectoria" />
      </div>
    </div>
  );
}