import { motion } from 'framer-motion';
import { Play, Globe, FileText } from 'lucide-react';
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
    id: 'cat-defense',
    titulo: 'Cat Defense',
    subtitulo: 'Videojuego · Tower Defense',
    anio: '2026', // leído del commit "added project from 2026"
    descripcion:
      'Videojuego de género tower defense desarrollado con Unity y C#. Incluye trabajo de gráficos y shaders (ShaderLab y HLSL).',
    tags: ['Unity', 'C#', 'ShaderLab', 'HLSL', 'Tower Defense', 'GameDev'],
    repo: 'https://github.com/albergm02/cat_defense',
    videoSrc: 'catdefense.mp4', 
    posterSrc: 'catdefense.png', 
    descarga: '/informe-catdefense.pdf', 
    ancho: true,       
  },
  {
  id: 'security-systems',
  titulo: 'Security Systems',
  subtitulo: 'Proyecto de ciberseguridad',
  anio: '2025', 
  descripcion:
    'Proyecto centrado en la seguridad de sistemas y encriptación de archivos.',
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
    anio: '2024',
    descripcion:
      'Instalación, configuración y administración de un servidor Linux basado en Debian. Implementación de servicios de red, gestión de usuarios y permisos, automatización de tareas mediante scripts Bash y aseguramiento del sistema mediante prácticas de seguridad y monitoreo.',
    tags: ['Linux', 'Debian', 'Bash', 'SSH', 'Servicios de red', 'SysAdmin'],
    pdfSrc: '/areya.pdf',  
    ancho: true,      
  },
];


export default function Projects() {
  // Conteo vivo para el panel de estado (información real, no decoración)
  const total = PROYECTOS.length;
  const conVideo = PROYECTOS.filter((p) => p.videoSrc).length;
  const conApp = PROYECTOS.filter((p) => p.demoEnVivo).length;
  const conDoc = PROYECTOS.filter((p) => p.pdfSrc).length;
  const watermark = String(total).padStart(2, '0');

  const leyenda = [
    { n: conVideo, icon: Play, label: 'con vídeo' },
    { n: conApp, icon: Globe, label: 'app en vivo' },
    { n: conDoc, icon: FileText, label: 'con documento' },
  ].filter((x) => x.n > 0);

  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-14 sm:py-16 md:py-20 overflow-hidden">
      {/* ===== FONDO AMBIENTAL (vivo, sutil, con intención) ===== */}
      {/* grid de líneas tenue, desvanecido hacia los bordes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(85% 60% at 50% 0%, #000 25%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(85% 60% at 50% 0%, #000 25%, transparent 100%)',
        }}
      />
      {/* glow desplazado del acento */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[34rem] h-[24rem] bg-f1-red/10 blur-[100px] rounded-full" />
      {/* línea de escaneo lenta */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-f1-red/30 to-transparent"
        initial={{ top: '0%' }}
        animate={{ top: '100%' }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      />

      <div className="relative z-10">
        <SectionLabel index="04" label="Proyectos" />

        {/* ===== ENCABEZADO con carácter ===== */}
        <div className="relative mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* marca de agua con el total (información real, no adorno) */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -top-10 right-0 md:-right-2 font-tech font-black leading-none text-white/[0.04] text-[7rem] sm:text-[9rem]"
          >
            {watermark}
          </span>

          <div className="relative min-w-0">
            <h2 className="font-tech text-3xl md:text-5xl font-black leading-[1.05] tracking-tight text-balance">
              PROYECTOS <span className="text-f1-red">DESTACADOS</span>
            </h2>
            <p className="text-silver mt-3 max-w-xl text-sm sm:text-base">
              Una selección versátil de lo que construyo: aplicaciones web full-stack, sistemas a bajo
              nivel, desarrollo de videojuegos, administración de servidores y ciberseguridad. Cada uno con
              su demo, su código o su documentación.
            </p>
          </div>

          {/* panel de estado vivo */}
          <div className="relative shrink-0 rounded-xl border border-white/10 bg-carbon-light/50 backdrop-blur-sm px-4 py-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-silver/70">Estado del portfolio</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-tech text-3xl font-black text-white tabular-nums">{watermark}</span>
              <span className="font-mono text-[11px] text-silver">proyectos</span>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
              {leyenda.map(({ n, icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 font-mono text-[11px] text-white/70">
                  <Icon className="w-3 h-3 text-f1-red" />
                  <span className="tabular-nums text-white">{n}</span> {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== UNA SOLA PARRILLA UNIFORME ===== */}
        <div className="grid gap-4 sm:gap-5 mt-10 sm:grid-cols-2">
          {PROYECTOS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <ScrollCue href="#experiencia" label="Trayectoria" />
        </div>
      </div>
    </div>
  );
}