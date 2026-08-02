import { motion, type Variants } from 'framer-motion';
import type { ReactNode, ComponentType } from 'react';
import {
  Download, ArrowRight, Mail, Phone, MapPin, GraduationCap, Fingerprint, Play, Gamepad2, Cpu,
} from 'lucide-react';

/* ===== Iconos de marca (lucide ya no los trae) ===== */
export function GithubIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>);
}
export function LinkedinIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>);
}

/* ============================ UI NEU SERIA ============================ */
export function NeuButton({ children, href, onClick, accent = false, className = '' }:
  { children: ReactNode; href?: string; onClick?: () => void; accent?: boolean; className?: string }) {
  const cls = `${accent ? 'neu-accent' : 'neu-btn'} font-semibold rounded-xl px-5 py-3 text-sm flex items-center justify-center gap-2 ${className}`;
  if (href) return <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

function NeuTag({ children }: { children: ReactNode }) {
  return <span className="neu-raised t-soft font-mono text-[11px] px-2.5 py-1 rounded-md">{children}</span>;
}

/* entrada sobria (sin rebote juguetón) */
const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] } }),
};

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase t-accent">
    <span className="h-px w-6 bg-[var(--accent)]" />{children}
  </span>
);

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
    repo: 'https://github.com/albergm02/Formula1_Fantasy', demoEnVivo: 'https://formula1-fantasy-ba348.web.app/',
    posterSrc: 'f1fantasy.png', videoSrc: 'F1Fantasy.mp4',
  },
  {
    id: 'cat-defense', titulo: 'Cat Defense', subtitulo: 'Videojuego · Tower Defense', anio: '2026',
    descripcion: 'Videojuego de género tower defense desarrollado con Unity y C#, con trabajo de gráficos y shaders en ShaderLab y HLSL.',
    tags: ['Unity', 'C#', 'ShaderLab', 'HLSL', 'GameDev'],
    repo: 'https://github.com/albergm02/cat_defense', 
    posterSrc: 'catdefense.png',videoSrc: 'catdefense.mp4',
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
  return (
    <motion.div variants={rise} initial="hidden" animate="show" className="max-w-3xl">
      <motion.div variants={rise} custom={0}>
        <Eyebrow>Ingeniero Informático</Eyebrow>
      </motion.div>
      <motion.h1 variants={rise} custom={1} className="font-extrabold tracking-tight leading-[1.02] mt-5 t-ink text-[clamp(2.5rem,8vw,5.5rem)]">
        Alberto <span className="t-accent">García</span><br />Martín
      </motion.h1>
      <motion.p variants={rise} custom={2} className="mt-5 t-soft text-base sm:text-lg leading-relaxed max-w-xl">
        Desarrollo web, full-stack, IoT, realidad virtual y videojuegos. Graduado por la Universidad de Salamanca.
      </motion.p>
      <motion.div variants={rise} custom={3} className="mt-7 flex flex-wrap items-center gap-3">
        <span className="neu-inset inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] t-soft">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></span>
          Disponible para trabajar
        </span>
      </motion.div>
      <motion.div variants={rise} custom={4} className="mt-7 flex flex-col sm:flex-row gap-3">
        <NeuButton accent onClick={() => go('proyectos')}>Ver proyectos <ArrowRight className="w-4 h-4" /></NeuButton>
        <NeuButton href="/cv-alberto-garcia.pdf"><Download className="w-4 h-4" /> Descargar CV</NeuButton>
      </motion.div>
    </motion.div>
  );
}

export function About() {
  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr] items-start max-w-5xl w-full">
      <motion.div variants={rise} custom={0} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="neu-card rounded-2xl p-3 mx-auto lg:mx-0 w-full max-w-[240px]">
        <div className="neu-inset rounded-xl overflow-hidden">
          <img src="/alberto.jpg" alt="Alberto García Martín" width={800} height={896} loading="lazy" className="w-full aspect-[4/5] object-cover object-top" />
        </div>
      </motion.div>
      <motion.div variants={rise} custom={1} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="neu-card rounded-2xl p-6 sm:p-8 space-y-5">
        <div><Eyebrow>Sobre mí</Eyebrow>
          <h2 className="font-extrabold text-2xl sm:text-3xl t-ink mt-3 tracking-tight">Construyo software de punta a punta</h2>
        </div>
        <p className="t-soft leading-relaxed text-sm sm:text-base">
          Recién graduado en Ingeniería Informática con base analítica y pasión por resolver problemas
          construyendo software: desde aplicaciones web full-stack hasta videojuegos y sistemas. Busco mi
          primera oportunidad en un equipo donde aportar proactividad y seguir creciendo.
        </p>
        <div className="space-y-3">
          {STACK.map((g) => (
            <div key={g.cat}>
              <p className="font-mono text-[11px] tracking-wider uppercase t-accent mb-1.5">{g.cat}</p>
              <div className="flex flex-wrap gap-1.5">{g.items.map((it) => <NeuTag key={it}>{it}</NeuTag>)}</div>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 pt-1">{LANGS.map((l) => <NeuTag key={l.name}>{l.name} · <span className="t-accent">{l.level}</span></NeuTag>)}</div>
        </div>
        <div className="grid sm:grid-cols-2 gap-2 pt-3 border-t border-line text-sm">
          {[
            { icon: GraduationCap, v: 'USAL · 2020–2026' }, { icon: MapPin, v: 'Salamanca, ES' },
            { icon: Mail, v: 'alberto.g.m.0214@gmail.com' }, { icon: Phone, v: '+34 656 545 838' },
            { icon: Fingerprint, v: 'ORCID 0009-0008-9008-1030' },
          ].map(({ icon: Icon, v }) => (
            <span key={v} className="flex items-center gap-2 t-soft min-w-0"><Icon className="w-4 h-4 t-accent shrink-0" /><span className="truncate">{v}</span></span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Projects({ onVideo }: { onVideo: (src: string, title: string) => void }) {
  return (
    <div className="w-full max-w-5xl">
      <motion.div variants={rise} custom={0} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <Eyebrow>Proyectos</Eyebrow>
        <h2 className="font-extrabold text-2xl sm:text-3xl t-ink mt-3 tracking-tight">Full-stack, web, videojuegos, VR e IoT</h2>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2 mt-7">
        {PROYECTOS.map((p, i) => (
          <motion.div key={p.id} variants={rise} custom={i + 1} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="neu-card rounded-2xl p-4 flex flex-col">
            <div className="neu-inset rounded-xl h-40 overflow-hidden relative mb-4">
              {p.posterSrc ? <img src={p.posterSrc} alt={p.titulo} loading="lazy" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center t-soft"><Gamepad2 className="w-9 h-9" /></div>}
              {p.videoSrc && (
                <button onClick={() => onVideo(p.videoSrc!, p.titulo)} aria-label="Ver demo" className="absolute inset-0 flex items-center justify-center">
                  <span className="neu-accent w-11 h-11 rounded-full flex items-center justify-center"><Play className="w-4 h-4 ml-0.5" fill="currentColor" /></span>
                </button>
              )}
            </div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-lg t-ink leading-tight">{p.titulo}</h3>
              <span className="neu-raised t-soft font-mono text-[11px] px-2 py-0.5 rounded-md shrink-0">{p.anio}</span>
            </div>
            <p className="font-mono text-[11px] tracking-wider uppercase t-accent mt-0.5">{p.subtitulo}</p>
            <p className="t-soft text-sm leading-relaxed mt-2 flex-1">{p.descripcion}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">{p.tags.slice(0, 4).map((t) => <NeuTag key={t}>{t}</NeuTag>)}{p.tags.length > 4 && <span className="t-accent text-[11px] font-mono self-center">+{p.tags.length - 4}</span>}</div>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.demoEnVivo && <NeuButton accent href={p.demoEnVivo} className="px-4! py-2! text-xs!">Abrir app</NeuButton>}
              {p.videoSrc && <NeuButton onClick={() => onVideo(p.videoSrc!, p.titulo)} className="px-4! py-2! text-xs!"><Play className="w-3.5 h-3.5" /> Demo</NeuButton>}
              {p.repo && <NeuButton href={p.repo} className="px-4! py-2! text-xs!"><GithubIcon className="w-3.5 h-3.5" /> Código</NeuButton>}
            </div>
          </motion.div>
        ))}
        <motion.div variants={rise} custom={PROYECTOS.length + 1} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="neu-inset rounded-2xl p-5 flex flex-col justify-center gap-3 border border-dashed border-line">
          <span className="neu-raised w-11 h-11 rounded-xl flex items-center justify-center t-accent"><Cpu className="w-5 h-5" /></span>
          <h3 className="font-bold text-base t-ink">En el horno</h3>
          <p className="t-soft text-sm">Próximamente proyectos de <span className="t-accent font-semibold">IoT</span> y <span className="t-accent font-semibold">realidad virtual</span>.</p>
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
    <motion.div variants={rise} custom={0} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="neu-card rounded-2xl p-7 sm:p-10 max-w-xl w-full text-center space-y-6">
      <div><Eyebrow>Contacto</Eyebrow><h2 className="font-extrabold text-2xl sm:text-3xl t-ink mt-3 tracking-tight">Hablemos</h2>
        <p className="t-soft mt-2 text-sm sm:text-base">¿Un proyecto web, un juego o algo con sensores? Escríbeme.</p></div>
      <div className="flex justify-center gap-4">
        {links.map(({ icon: Icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="neu-btn w-14 h-14 rounded-xl flex items-center justify-center"><Icon className="w-5 h-5" /></a>
        ))}
      </div>
      <NeuButton accent href="mailto:alberto.g.m.0214@gmail.com" className="mx-auto">alberto.g.m.0214@gmail.com</NeuButton>
    </motion.div>
  );
}