import { motion } from 'framer-motion';
import { Shield, GraduationCap, Lock } from 'lucide-react';
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

/* ===== Cabecera de categoría (compacta) ===== */
function CategoriaHeader({ icon: Icon, titulo, sub, count }: { icon: typeof Shield; titulo: string; sub: string; count: number }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2.5">
      <div className="flex items-center gap-3 min-w-0">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-f1-red/10 text-f1-red shrink-0">
          <Icon className="w-[18px] h-[18px]" />
        </span>
        <div className="min-w-0">
          <h3 className="font-tech text-lg sm:text-xl font-black text-white leading-tight truncate">{titulo}</h3>
          <p className="text-silver text-[11px] sm:text-xs truncate">{sub}</p>
        </div>
      </div>
      <span className="shrink-0 font-mono text-[10px] tracking-[0.15em] uppercase text-silver border border-white/15 rounded-full px-2.5 py-1">
        {count > 0 ? `${count}` : 'WIP'}
      </span>
    </div>
  );
}

/* ===== Placeholder de seguridad con forma de tarjeta (misma caja que el resto) ===== */
function SeguridadPlaceholder({ wide = false }: { wide?: boolean }) {
  const areas = ['Seguridad ofensiva', 'Criptografía', 'Hardening'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className={`flex flex-col rounded-xl border border-dashed border-white/15 bg-carbon-light/40 p-5 ${wide ? 'sm:col-span-2' : ''}`}
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-f1-red/10 text-f1-red shrink-0"><Lock className="w-[18px] h-[18px]" /></span>
        <h4 className="font-tech text-base sm:text-lg font-black text-white">Arsenal en construcción</h4>
      </div>
      <p className="text-silver text-sm leading-relaxed mt-3 flex-1">
        Formándome activamente en ciberseguridad. Aquí irán mis <span className="text-white">writeups de CTFs</span>,{' '}
        <span className="text-white">herramientas propias</span> y <span className="text-white">criptografía aplicada</span>.
      </p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {areas.map((a) => (<span key={a} className="px-2 py-0.5 text-[10px] font-mono tracking-wide border border-white/10 rounded text-white/75">{a}</span>))}
      </div>
      <p className="font-mono text-[11px] text-f1-red/80 mt-4">
        <span className="text-silver/60">alberto@sec:~$</span> cargando módulos
        <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }} className="ml-0.5">▋</motion.span>
      </p>
    </motion.div>
  );
}

export default function Projects() {
  const seguridad = PROYECTOS.filter((p) => p.categoria === 'seguridad');
  const carrera = PROYECTOS.filter((p) => p.categoria === 'carrera');

  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-14 sm:py-16 md:py-20">
      {/* glow ambiental sutil del acento (cambia solo si cambias el acento en global.css) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)]" />

      <div className="relative z-10">
        <SectionLabel index="04" label="Proyectos" />
        <h2 className="font-tech text-3xl md:text-5xl font-black mt-5 leading-[1.05] tracking-tight text-balance">
          PROYECTOS <span className="text-f1-red">DESTACADOS</span>
        </h2>
        <p className="text-silver mt-3 max-w-2xl text-sm sm:text-base">
          Primero mi trabajo en <span className="text-f1-red">ciberseguridad</span> —mi foco— y después mis{' '}
          <span className="text-f1-red">proyectos de ingeniería</span>, que acreditan una base sólida construyendo software y sistemas.
        </p>

        {/* 🛡️ SEGURIDAD */}
        <section id="proyectos-seguridad" className="mt-10 scroll-mt-24">
          <CategoriaHeader icon={Shield} titulo="Ciberseguridad" sub="Seguridad ofensiva, defensiva y criptografía" count={seguridad.length} />
          <div className="grid gap-4 sm:gap-5 mt-5 sm:grid-cols-2">
            {seguridad.map((p) => (<ProjectCard key={p.id} p={p} />))}
            {seguridad.length === 0 && <SeguridadPlaceholder wide />}
            {seguridad.length === 1 && <SeguridadPlaceholder />}
          </div>
        </section>

        {/* 🎓 CARRERA */}
        <section id="proyectos-carrera" className="mt-12 scroll-mt-24">
          <CategoriaHeader icon={GraduationCap} titulo="Proyectos de la carrera" sub="Ingeniería de software, sistemas y desarrollo" count={carrera.length} />
          <div className="grid gap-4 sm:gap-5 mt-5 sm:grid-cols-2">
            {carrera.map((p) => (<ProjectCard key={p.id} p={p} />))}
          </div>
        </section>

        <div className="flex justify-center mt-10">
          <ScrollCue href="#experiencia" label="Trayectoria" />
        </div>
      </div>
    </div>
  );
}