import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ContactIcons } from '../../components/ui/ContactIcons';
import { ScrollCue } from '../../components/ui/ScrollCue';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center justify-center">
      {/* ✅ Glow de acento superior e inferior (usa el token → cambia si cambias el acento en global.css) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[30rem] bg-f1-red/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] bg-f1-red/5 blur-3xl rounded-full pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 w-full px-5 sm:px-6 pt-24 pb-20">
        <div className="container mx-auto text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-tech text-f1-red text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4"
          >
            Ingeniero Informático
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-tech font-black leading-[1.05] tracking-tight text-balance text-[clamp(2rem,8vw,6rem)]"
          >
            ALBERTO <span className="text-f1-red">GARCÍA</span>
            <br />
            MARTÍN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-silver max-w-2xl mx-auto text-balance"
          >
            Desarrollo de software, sistemas y full stack. Graduado por la{' '}
            <span className="text-white font-semibold">Universidad de Salamanca</span>.
          </motion.p>

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

          <div className="mt-10 sm:mt-14">
            <ScrollCue href="#sobre-mi" label="Perfil personal" />
          </div>
        </div>
      </div>
    </section>
  );
}