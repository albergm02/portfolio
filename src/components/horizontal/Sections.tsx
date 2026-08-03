import { motion, type Variants } from 'framer-motion';
import type { ReactNode, ComponentType } from 'react';
import {
  Download, ArrowRight, Mail, Phone, MapPin,
  GraduationCap, Fingerprint, Play, Gamepad2, Cpu,
} from 'lucide-react';

/* ===== Iconos de marca (lucide ya no los trae; SVG propios) ===== */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ============================ UI NEUMÓRFICA ============================ */

export function NeuButton({
  children, href, onClick, accent = false, className = '',
}: { children: ReactNode; href?: string; onClick?: () => void; accent?: boolean; className?: string }) {
  const cls = `${accent ? 'neu-accent' : 'neu-btn'} font-display font-bold rounded-2xl px-5 py-3 text-sm sm:text-base flex items-center justify-center gap-2 ${className}`;
  if (href) return <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

export function NeuIconButton({
  icon: Icon, label, onClick, active = false, className = '',
}: { icon: ComponentType<{ className?: string }>; label: string; onClick?: () => void; active?: boolean; className?: string }) {
  return (
    <button onClick={onClick} aria-label={label} title={label}
      className={`${active ? 'neu-dock-active' : 'neu-btn'} w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-ink ${className}`}>
      <Icon className="w-5 h-5" />
    </button>
  );
}

function NeuTag({ children }: { children: ReactNode }) {
  return <span className="neu-pill text-ink-soft text-[11px] font-bold px-3 py-1 rounded-full">{children}</span>;
}

function NeuPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`neu-card rounded-4xl p-6 sm:p-9 ${className}`}>{children}</div>;
}

/* entrada "fichas que caen y se asientan" (físico / skeuo) */
const drop: Variants = {
  hidden: { opacity: 0, y: -24, rotate: -2 },
  show: (i = 0) => ({
    opacity: 1, y: 0, rotate: 0,
    transition: { delay: i * 0.08, type: 'spring' as const, stiffness: 220, damping: 16 },
  }),
};

/* ============================ DATOS REALES ============================ */

export interface Proyecto {
  id: string; titulo: string; subtitulo: string; anio: string; descripcion: string;
  tags: string[]; repo?: string; posterSrc?: string; videoSrc?: string; demoEnVivo?: string;
}

export const PROYECTOS: Proyecto[] = [
  {
    id: 'f1-fantasy', titulo: 'Formula 1 Fantasy', subtitulo: 'Full-Stack · PWA', anio: '2026',
    descripcion: 'Plataforma web interactiva tipo Fantasy de Fórmula 1. Frontend con Vue 3 + Vite (PWA) y backend con Firebase (auth segura y datos en tiempo real) y la API OpenF1 en vivo. Ligas, mercado de fichajes, cláusulas y puntuaciones por jornada.',
    tags: ['Vue 3', 'Firebase', 'OpenF1 API', 'PWA', 'Pinia', 'Tailwind'],
    repo: 'https://github.com/albergm02/Formula1_Fantasy',
    demoEnVivo: 'https://formula1-fantasy-ba348.web.app/',
    posterSrc: 'f1fantasy.png', videoSrc: 'F1Fantasy.mp4',
  },
  {
    id: 'cat-defense', titulo: 'Cat Defense', subtitulo: 'Videojuego · Tower Defense', anio: '2026',
    descripcion: 'Videojuego de género tower defense desarrollado con Unity y C#, con trabajo de gráficos y shaders en ShaderLab y HLSL.',
    tags: ['Unity', 'C#', 'ShaderLab', 'HLSL', 'GameDev'],
    repo: 'https://github.com/albergm02/cat_defense', videoSrc: 'catdefense.mp4',
  },
];

const STACK = [
  { cat: 'Web / Full-Stack', items: ['Vue', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'Vite', 'Pinia', 'Firebase'] },
  { cat: 'Videojuegos / VR', items: ['Unity', 'C#', 'ShaderLab', 'HLSL'] },
  { cat: 'Sistemas / IoT', items: ['C', 'C++', 'Linux', 'Bash', 'Redes'] },
  { cat: 'Datos / Versionado', items: ['SQL', 'MongoDB', 'Git', 'GitHub'] },
];
const LANGS = [{ name: 'Español', level: 'Nativo' }, { name: 'Inglés', level: 'Intermedio' }];

/* ============================ PANELES ============================ */

export function Home({ go }: { go: (id: string) => void }) {
  const words = ['ALBERTO', 'GARCÍA', 'MARTÍN'];
  return (
    <motion.div variants={drop} initial="hidden" animate="show" className="text-center max-w-3xl">
      <motion.p variants={drop} custom={0} className="neu-pill inline-block text-coral font-display font-bold text-xs sm:text-sm tracking-[0.3em] uppercase px-4 py-1.5 rounded-full">
        Ingeniero Informático
      </motion.p>
      <h1 className="font-display font-extrabold leading-[0.95] mt-6 text-[clamp(2.6rem,11vw,7rem)] text-ink">
        {words.map((w, i) => (
          <motion.span key={w} variants={drop} custom={i + 1} className={`inline-block mr-3 ${i === 1 ? 'shimmer' : ''}`}>{w}</motion.span>
        ))}
      </h1>
      <motion.p variants={drop} custom={4} className="mt-5 text-ink-soft text-base sm:text-xl font-semibold max-w-2xl mx-auto">
        Desarrollo web, full-stack, IoT, realidad virtual y videojuegos. Graduado por la Universidad de Salamanca.
      </motion.p>
      <motion.div variants={drop} custom={5} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <NeuButton accent onClick={() => go('proyectos')}>Ver proyectos <ArrowRight className="w-4 h-4" /></NeuButton>
        <NeuButton href="/cv-alberto-garcia.pdf"><Download className="w-4 h-4" /> Descargar CV</NeuButton>
      </motion.div>
    </motion.div>
  );
}

export function About() {
  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr] items-start max-w-5xl w-full">
      <motion.div variants={drop} custom={0} className="neu-card rounded-4xl p-3 mx-auto lg:mx-0 w-full max-w-60">
        <div className="neu-inset rounded-3xl overflow-hidden">
          <img src="/alberto.jpg" alt="Alberto García Martín" width={800} height={896} loading="lazy" className="w-full aspect-4/5 object-cover object-top" />
        </div>
      </motion.div>

      <NeuPanel className="space-y-4">
        <motion.h2 variants={drop} custom={1} className="font-display font-extrabold text-3xl sm:text-4xl text-ink leading-tight">Sobre mí</motion.h2>
        <motion.p variants={drop} custom={2} className="text-ink-soft leading-relaxed text-sm sm:text-base">
          Recién graduado en Ingeniería Informática con base analítica y pasión por resolver problemas
          construyendo software: desde aplicaciones web full-stack hasta videojuegos y sistemas. Busco mi
          primera oportunidad en un equipo donde aportar proactividad y seguir creciendo.
        </motion.p>
        <motion.div variants={drop} custom={3} className="space-y-3">
          {STACK.map((g) => (
            <div key={g.cat}>
              <p className="font-display font-bold text-coral text-xs tracking-wider uppercase mb-1.5">{g.cat}</p>
              <div className="flex flex-wrap gap-1.5">{g.items.map((it) => <NeuTag key={it}>{it}</NeuTag>)}</div>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 pt-1">
            {LANGS.map((l) => <NeuTag key={l.name}>{l.name} · <span className="text-coral">{l.level}</span></NeuTag>)}
          </div>
        </motion.div>
        <motion.div variants={drop} custom={4} className="grid sm:grid-cols-2 gap-2 pt-2 text-sm">
          {[
            { icon: GraduationCap, v: 'USAL · 2020–2026' }, { icon: MapPin, v: 'Salamanca, ES' },
            { icon: Mail, v: 'alberto.g.m.0214@gmail.com' }, { icon: Phone, v: '+34 656 545 838' },
            { icon: Fingerprint, v: 'ORCID 0009-0008-9008-1030' },
          ].map(({ icon: Icon, v }) => (
            <span key={v} className="flex items-center gap-2 text-ink-soft min-w-0">
              <Icon className="w-4 h-4 text-coral shrink-0" /><span className="truncate">{v}</span>
            </span>
          ))}
        </motion.div>
      </NeuPanel>
    </div>
  );
}

export function Projects({ onVideo }: { onVideo: (src: string, title: string) => void }) {
  return (
    <div className="w-full max-w-5xl">
      <motion.h2 variants={drop} custom={0} className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-1">Proyectos</motion.h2>
      <motion.p variants={drop} custom={1} className="text-ink-soft mb-6 text-sm sm:text-base">Full-stack, web, videojuegos, VR e IoT.</motion.p>
      <div className="grid gap-5 sm:grid-cols-2">
        {PROYECTOS.map((p, i) => (
          <motion.div key={p.id} variants={drop} custom={i + 2} className="neu-card rounded-[1.75rem] p-4 flex flex-col">
            <div className="neu-inset rounded-2xl h-36 overflow-hidden relative mb-4">
              {p.posterSrc
                ? <img src={p.posterSrc} alt={p.titulo} loading="lazy" className="w-full h-full object-cover" />
                : <div className="w-full h-full flex items-center justify-center text-sand-dark"><Gamepad2 className="w-10 h-10" /></div>}
              {p.videoSrc && (
                <button onClick={() => onVideo(p.videoSrc!, p.titulo)} aria-label="Ver demo"
                  className="absolute inset-0 flex items-center justify-center">
                  <span className="neu-accent w-12 h-12 rounded-full flex items-center justify-center"><Play className="w-5 h-5 ml-0.5" fill="currentColor" /></span>
                </button>
              )}
            </div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-extrabold text-xl text-ink leading-tight">{p.titulo}</h3>
              <span className="neu-pill text-ink-soft text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0">{p.anio}</span>
            </div>
            <p className="font-display font-bold text-coral text-[11px] tracking-wider uppercase mt-0.5">{p.subtitulo}</p>
            <p className="text-ink-soft text-sm leading-relaxed mt-2 flex-1">{p.descripcion}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">{p.tags.slice(0, 4).map((t) => <NeuTag key={t}>{t}</NeuTag>)}{p.tags.length > 4 && <span className="text-coral text-[11px] font-bold self-center">+{p.tags.length - 4}</span>}</div>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.demoEnVivo && <NeuButton accent href={p.demoEnVivo} className="px-4! py-2! text-xs!">Abrir app</NeuButton>}
              {p.videoSrc && <NeuButton onClick={() => onVideo(p.videoSrc!, p.titulo)} className="px-4! py-2! text-xs!"><Play className="w-3.5 h-3.5" /> Demo</NeuButton>}
              {p.repo && <NeuButton href={p.repo} className="px-4! py-2! text-xs!"><GithubIcon className="w-3.5 h-3.5" /> Código</NeuButton>}
            </div>
          </motion.div>
        ))}

        {/* Losa honesta para lo que viene (IoT / VR) — sin inventar proyectos */}
        <motion.div variants={drop} custom={PROYECTOS.length + 2} className="neu-inset rounded-[1.75rem] p-5 flex flex-col justify-center gap-3 border-2 border-dashed border-sand-dark/50">
          <span className="neu-raised w-12 h-12 rounded-2xl flex items-center justify-center text-coral"><Cpu className="w-6 h-6" /></span>
          <h3 className="font-display font-extrabold text-lg text-ink">En el horno</h3>
          <p className="text-ink-soft text-sm">Próximamente proyectos de <span className="text-coral font-bold">Desarrollo Web</span>: cubik-arena </p>
        </motion.div>
      </div>
    </div>
  );
}

export function Contact() {
  const links = [
    { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/albergm02' },
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/albertogarciamartin/' },
    { icon: Mail, label: 'Email', href: 'mailto:alberto.g.m.0214@gmail.com' },
  ];
  return (
    <motion.div variants={drop} initial="hidden" animate="show" className="text-center max-w-xl w-full">
      <NeuPanel className="space-y-6">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">Hablemos</h2>
          <p className="text-ink-soft mt-2 text-sm sm:text-base">¿Un proyecto web, un juego o algo con sensores? Escríbeme.</p>
        </div>
        <div className="flex justify-center gap-4">
          {links.map(({ icon: Icon, label, href }, i) => (
            <motion.a key={label} variants={drop} custom={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="neu-btn w-16 h-16 rounded-3xl flex items-center justify-center text-ink hover:text-coral">
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
        <NeuButton accent href="mailto:alberto.g.m.0214@gmail.com" className="mx-auto">alberto.g.m.0214@gmail.com</NeuButton>
      </NeuPanel>
    </motion.div>
  );
}