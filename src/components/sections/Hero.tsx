import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Terminal } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ContactIcons } from '../../components/ui/ContactIcons';
import { ScrollCue } from '../../components/ui/ScrollCue';

const ROLES = [
  'Analista SOC',
  'Cybersecurity Analyst',
  'Security Analyst',
  'Junior SOC Analyst',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = ROLES[roleIndex];

  useEffect(() => {
    const timeout = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, currentRole]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center justify-center">
      {/* Cyber grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scan line */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-px z-[9999]"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(6, 182, 212, 0.12), transparent)',
          animation: 'scanline 8s linear infinite',
        }}
      />

      {/* Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[30rem] bg-cyber/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] bg-cyber/5 blur-3xl rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-6 pt-24 pb-20">
        <div className="container mx-auto text-center flex flex-col items-center">
          {/* Terminal header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 font-mono text-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cyber/70">~/portfolio</span>
            <span className="text-cyber">$</span>
            <span className="text-white/40">cat security_profile.md</span>
          </motion.div>

          {/* Tag */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-tech text-cyber text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-2"
          >
            <Shield className="w-3.5 h-3.5" />
            CIBERSEGURIDAD & SOC
          </motion.p>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-sm sm:text-base text-cyber/80 mb-3 h-6"
          >
            <span className="text-white/40">$ ./aspire_to_role.sh → </span>
            {currentRole.substring(0, charIndex)}
            <span className="animate-[blink_1s_step-end_infinite]">▊</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-tech font-black leading-[1.05] tracking-tight text-balance text-[clamp(2.5rem,10vw,7rem)]"
          >
            ALBERTO{' '}
            <span className="relative inline-block text-cyber hover:animate-[glitch_0.3s_ease-in-out]">
              GARCÍA
            </span>
            <br />
            MARTÍN
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-silver max-w-3xl mx-auto text-balance leading-relaxed"
          >
            Recién graduado en{' '}
            <span className="text-white font-semibold">Ingeniería Informática</span> por la{' '}
            <span className="text-white font-semibold">Universidad de Salamanca</span>, con una sólida
            base <span className="text-cyber">teórica en ciberseguridad</span> y proyectos académicos en{' '}
            <span className="text-cyber">criptografía, hardening de sistemas y seguridad de redes</span>.
            Busco mi primera oportunidad como{' '}
            <span className="text-white font-semibold">Analista SOC</span> para convertir mi pasión por
            la seguridad en impacto real.
          </motion.p>

          {/* Security metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            <div className="text-center">
              <div className="font-tech text-2xl sm:text-3xl font-black text-cyber">8+</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-silver font-tech">
                Prácticas Seguridad
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-tech text-2xl sm:text-3xl font-black text-cyber">3</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-silver font-tech">
                Áreas de Conocimiento
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-tech text-2xl sm:text-3xl font-black text-cyber">∞</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-silver font-tech">
                Curiosidad
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 sm:mt-10 flex flex-col items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <ContactIcons size="lg" />
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" href="#proyectos" className="w-full sm:w-auto">
                <Shield className="w-4 h-4 mr-2" /> Ver proyectos de seguridad
              </Button>
              <Button variant="outline" size="lg" href="/cv-alberto-garcia.pdf" download="CV-Alberto-Garcia-Martin.pdf" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" /> Descargar CV
              </Button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <div className="mt-10 sm:mt-14">
            <ScrollCue href="#sobre-mi" label="Perfil profesional" />
          </div>
        </div>
      </div>
    </section>
  );
}
