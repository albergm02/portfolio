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
      /* ✅ FIX: coche más pequeño en móvil (w-32) para que no domine la pantalla */
      className="w-32 sm:w-40 md:w-56 text-f1-red drop-shadow-[0_0_14px_rgba(225,6,0,0.55)]"
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
    /* ✅ FIX: 100svh en vez de min-h-screen (la barra del navegador móvil ya no causa scroll fantasma) */
    <section className="relative min-h-[100svh] overflow-hidden">
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
      {/* ✅ FIX: pista más baja en móvil (h-28) para dejar sitio al contenido */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-40 pointer-events-none">
        <div className="absolute bottom-10 left-0 right-0 h-px bg-white/10" />
        <motion.div
          className="absolute bottom-6 flex items-center"
          initial={{ x: '-30%' }}
          animate={{ x: '120vw' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 1.8 }}
        >
          {/* ✅ FIX: h-[3px] (h-0.75 no existe) y estela más corta en móvil */}
          <div className="absolute right-full h-[3px] w-32 sm:w-40 md:w-72 bg-linear-to-l from-f1-red/60 to-transparent" />
          <F1Car />
        </motion.div>
      </div>

      {/* contenido */}
      {/* ✅ FIX: pt-24 deja aire bajo el navbar; pb-24 deja aire sobre el coche */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-5 sm:px-6 pt-24 pb-20">
        <div className="container mx-auto text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            /* ✅ FIX: texto y tracking más pequeños en móvil para que quepa */
            className="font-tech text-f1-red text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4"
          >
            Ingeniero Informático
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            /* ✅ FIX CLAVE: clamp() escala el título con la pantalla → nunca desborda en móvil.
               text-balance reparte las palabras. leading-[1.05] evita líneas pegadas. */
            className="font-tech font-black leading-[1.05] tracking-tight text-balance text-[clamp(2rem,8vw,6rem)]"
          >
            ALBERTO <span className="text-f1-red">GARCÍA</span>
            <br />
            MARTÍN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            /* ✅ FIX: text-base en móvil (antes text-lg se hacía grande) */
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-silver max-w-2xl mx-auto text-balance"
          >
            Desarrollo de software, sistemas y full stack. Graduado por la{' '}
            <span className="text-white font-semibold">Universidad de Salamanca</span>.
          </motion.p>

          {/* ✅ FIX: w-full en móvil → los botones van a ancho completo (mejor para el pulgar);
             en desktop vuelven a su ancho normal (sm:w-auto) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 sm:mt-10 flex flex-col items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <ContactIcons size="lg" />

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" href="#proyectos" className="w-full sm:w-auto">
                Ver mis proyectos
              </Button>
              <Button variant="outline" size="lg" href="/cv-alberto-garcia.pdf" download="CV-Alberto-Garcia-Martin.pdf" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" /> Descargar CV
              </Button>
            </div>
          </motion.div>

          {/* ✅ FIX: la pista de bajar va EN FLUJO bajo los botones (no absolute) → nunca se solapa
             con el contenido ni con el coche, en ningún tamaño de pantalla */}
          <div className="mt-10 sm:mt-14">
            <ScrollCue href="#sobre-mi" label="Perfil personal" />
          </div>
        </div>
      </div>
    </section>
  );
}