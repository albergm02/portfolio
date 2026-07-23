import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';

/* === SEMÁFORO DE SALIDA F1 === */
function StartLights() {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const runSequence = () => {
      let col = 0;
      setLit(0);
      const lightUp = () => {
        col++;
        setLit(col);
        if (col < 5) {
          timeout = setTimeout(lightUp, 800);
        } else {
          timeout = setTimeout(() => {
            setLit(0);
            timeout = setTimeout(runSequence, 2500);
          }, 1200 + Math.random() * 1800);
        }
      };
      timeout = setTimeout(lightUp, 800);
    };
    runSequence();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-1 bg-black/60 px-2 py-1.5 rounded border border-white/10">
      {[1, 2, 3, 4, 5].map((col) => (
        <div key={col} className="flex flex-col gap-0.5">
          {[0, 1].map((row) => (
            <div
              key={row}
              className={`w-2 h-2 rounded-full transition-all duration-150 ${
                lit >= col
                  ? 'bg-f1-red shadow-[0_0_8px_2px_rgba(225,6,0,0.7)]'
                  : 'bg-f1-red/15'
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 transition-colors duration-300 ${
        scrolled
          ? 'bg-carbon/90 backdrop-blur-md border-b border-f1-red/40'
          : 'bg-carbon/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="leading-tight">
          <span className="block font-tech font-bold text-lg tracking-widest">Alberto García Martín</span>
          <span className="block text-[10px] tracking-[0.3em] text-f1-red uppercase">
            Ingeniero informático
          </span>
        </div>
      </div>

      {/* Semáforo + estado + redes (con TUS enlaces reales) */}
      <div className="flex items-center gap-6">
        <StartLights />

        <div className="hidden sm:flex items-center gap-2 text-xs font-tech tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-silver">BUSCANDO PUESTO DE TRABAJO</span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/albergm02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver hover:text-f1-red transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/albertogarciamartin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver hover:text-f1-red transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:alberto.g.m.0214@gmail.com"
            className="text-silver hover:text-f1-red transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Línea de velocidad */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
        <motion.div
          className="h-full w-1/3 bg-linear-to-r from-transparent via-f1-red to-transparent"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </motion.header>
  );
}