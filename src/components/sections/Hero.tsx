import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ContactIcons } from '../../components/ui/ContactIcons';
import { ScrollCue } from '../../components/ui/ScrollCue';

const SPEED_LINES = [
  { top: '18%', w: '40%', dur: 2.2, delay: 0, red: false },
  { top: '32%', w: '25%', dur: 1.6, delay: 0.7, red: true },
  { top: '55%', w: '55%', dur: 2.8, delay: 0.3, red: false },
  { top: '70%', w: '30%', dur: 1.9, delay: 1.1, red: true },
  { top: '84%', w: '45%', dur: 2.4, delay: 0.5, red: false },
];

function F1Car() {
  return (
    <svg
      viewBox="0 0 220 70"
      className="w-40 md:w-56 text-f1-red drop-shadow-[0_0_14px_rgba(225,6,0,0.55)]"
      fill="currentColor"
    >
      <rect x="6" y="20" width="6" height="22" rx="1" />
      <rect x="2" y="18" width="16" height="5" rx="1" />
      <path d="M14 40 L40 40 L52 30 L96 30 L104 22 L132 22 L150 32 L196 36 L210 40 L210 46 L14 46 Z" />
      <path d="M104 22 q10 -9 24 0" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M196 36 L218 40 L218 44 L196 44 Z" />
      <circle cx="44" cy="48" r="14" />
      <circle cx="44" cy="48" r="6" fill="#0A0A0A" />
      <circle cx="176" cy="48" r="14" />
      <circle cx="176" cy="48" r="6" fill="#0A0A0A" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* destellos de velocidad */}
      <div className="absolute inset-0 pointer-events-none">
        {SPEED_LINES.map((l, i) => (
          <div key={i} className="absolute h-px overflow-hidden" style={{ top: l.top, width: l.w, left: '8%' }}>
            <motion.div
              className={`h-full w-full bg-linear-to-r from-transparent to-transparent ${l.red ? 'via-f1-red/40' : 'via-white/25'}`}
              animate={{ x: ['-100%', '250%'] }}
              transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        ))}
      </div>

      {/* pista + coche cruzando */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
        <div className="absolute bottom-10 left-0 right-0 h-px bg-white/10" />
        <motion.div
          className="absolute bottom-6 flex items-center"
          initial={{ x: '-30%' }}
          animate={{ x: '120vw' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 1.8 }}
        >
          <div className="absolute right-full h-0.75 w-40 md:w-72 bg-linear-to-l from-f1-red/60 to-transparent" />
          <F1Car />
        </motion.div>
      </div>

      {/* contenido */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-tech text-f1-red text-sm tracking-[0.4em] uppercase mb-4"
        >
          Ingeniero Informático
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-tech text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight"
        >
          ALBERTO <span className="text-f1-red">GARCÍA</span>
          <br className="hidden sm:block" /> MARTÍN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-silver max-w-2xl mx-auto"
        >
          Desarrollo de software, sistemas y full stack. Graduado por la{' '}
          <span className="text-white font-semibold">Universidad de Salamanca</span>.
        </motion.p>

        {/* 👇 CONTACTO PRIMERO, luego los CTAs grandes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <ContactIcons size="lg" />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#proyectos">Ver mis proyectos</Button>
            <Button variant="outline" size="lg" href="/cv-alberto-garcia.pdf" download="CV-Alberto-Garcia-Martin.pdf">
              <Download className="w-4 h-4 mr-2" /> Descargar CV
            </Button>
          </div>
        </motion.div>
      </div>

      {/* pista visual para bajar (flotando al fondo) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <ScrollCue href="#sobre-mi" label="Perfil personal" />
      </div>
    </section>
  );
}