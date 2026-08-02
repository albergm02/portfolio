import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, X, Mail} from 'lucide-react';
import { Home, About, Projects, Contact, GithubIcon, LinkedinIcon } from './sections';

const NAV = [
  { id: 'inicio', label: 'Inicio' }, { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' }, { id: 'contacto', label: 'Contacto' },
];

/* Switch de tema: lee el estado inicial del <html> (ya fijado por el script anti-flash) */
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.classList.contains('dark')); }, []);
  const toggle = () => {
    const next = !dark; setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
  };
  return (
    <button onClick={toggle} aria-label="Cambiar tema claro/oscuro" title="Cambiar tema"
      className={`${dark ? 'neu-on' : 'neu-btn'} w-10 h-10 rounded-xl flex items-center justify-center t-ink`}>
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [video, setVideo] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* NAVBAR */}
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? 'nav-bg border-b border-line' : 'border-b border-transparent'}`}>
        <div className="mx-auto max-w-6xl px-5 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => go('inicio')} className="text-left leading-tight">
            <span className="block font-bold tracking-tight t-ink text-sm sm:text-base">Alberto García Martín</span>
            <span className="block font-mono text-[10px] tracking-[0.2em] uppercase t-accent">Ingeniero informático</span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="neu-btn px-3.5 py-2 rounded-lg text-xs font-semibold t-ink">{n.label}</button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/albergm02" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="neu-btn w-10 h-10 rounded-xl flex items-center justify-center t-ink"><GithubIcon className="w-4 h-4" /></a>
            <a href="mailto:alberto.g.m.0214@gmail.com" aria-label="Email" className="neu-btn w-10 h-10 rounded-xl hidden sm:flex items-center justify-center t-ink"><Mail className="w-4 h-4" /></a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* SECCIONES (scroll vertical) */}
      <main>
        <section id="inicio" className="min-h-screen flex items-center px-5 sm:px-6 pt-16">
          <div className="mx-auto max-w-6xl w-full"><Home go={go} /></div>
        </section>
        <section id="sobre-mi" className="px-5 sm:px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl w-full flex justify-center"><About /></div>
        </section>
        <section id="proyectos" className="px-5 sm:px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl w-full flex justify-center"><Projects onVideo={(src, title) => setVideo({ src, title })} /></div>
        </section>
        <section id="contacto" className="px-5 sm:px-6 py-20 sm:py-28 flex justify-center">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-line px-5 sm:px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] t-soft">
          <span>2026 Alberto García Martín</span>
          <span>Construido con Astro + React · Qwen 3.8</span>
        </div>
      </footer>

      {/* MODAL DE VÍDEO */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {video && (
            <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideo(null)}>
              <motion.div className="neu-card rounded-2xl p-3 w-full max-w-4xl"
                initial={{ scale: 0.94, y: 18 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 18 }} onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between px-2 pb-2">
                  <span className="font-bold t-ink">{video.title}</span>
                  <button onClick={() => setVideo(null)} aria-label="Cerrar" className="neu-btn w-9 h-9 rounded-lg flex items-center justify-center t-ink"><X className="w-4 h-4" /></button>
                </div>
                <video src={video.src} controls autoPlay loop className="w-full rounded-xl bg-black max-h-[72vh]" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>, document.body)}
    </>
  );
}