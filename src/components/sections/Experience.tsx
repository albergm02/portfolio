import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Wrench, Shield, BookOpen, Target } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { ScrollCue } from '../ui/ScrollCue';

const NOTES = [
  'Gestión y análisis de datos con sistemas empresariales SAP BW4HANA y SAP Analytics Cloud.',
  'Colaboración directa con equipos técnicos para el desarrollo de soluciones analíticas.',
];

const SKILLS = [
  'SAP BW4HANA',
  'SAP Analytics Cloud',
  'Análisis de datos',
  'Trabajo en equipo',
  'Metodologías ágiles',
];

const SECURITY_NOTES = [
  'Criptografía simétrica y asimétrica con OpenSSL y GnuPG (AES, RSA, ElGamal, SHA256).',
  'Configuración de servidores HTTPS con Apache, CA propia y certificados digitales.',
  'Hardening de sistemas Linux: gestión de usuarios, logs, parches e integridad.',
  'Seguridad perimetral con iptables: reglas de cortafuegos y simulación DoS.',
];

export default function Experience() {
  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <SectionLabel index="05" label="Trayectoria" />

      <div className="relative mt-8 sm:mt-10 pl-8 md:pl-10">
        <span className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-white/10" />

        {/* NODO 1: VIEWNEXT */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-cyber ring-4 ring-cyber/20" />

          <div className="bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <div className="shrink-0 bg-white rounded-xl flex items-center justify-center w-28 h-28">
                <img
                  src="/viewnext.png"
                  alt="Logo de Viewnext"
                  className="object-fill"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-tech text-xl sm:text-2xl font-black text-white">VIEWNEXT</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-tech text-cyber border border-cyber/40 rounded-full px-2 py-0.5">
                    <CalendarDays className="w-3 h-3" /> 4 MESES
                  </span>
                </div>
                <p className="font-tech text-cyber text-sm tracking-[0.2em] uppercase mt-1">
                  Becario SAP
                </p>
                <p className="flex items-center gap-1.5 text-xs text-silver mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" /> Aldeatejada, Salamanca, España
                </p>
              </div>
            </div>

            <ul className="space-y-2">
              {NOTES.map((n) => (
                <li key={n} className="flex gap-3 text-silver text-sm leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber" />
                  {n}
                </li>
              ))}
            </ul>

            <div>
              <p className="flex items-center gap-2 font-tech text-xs tracking-[0.3em] text-silver uppercase mb-2">
                <Wrench className="w-3.5 h-3.5 text-cyber" /> Skills mejoradas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SKILLS.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-[11px] font-tech tracking-wide border border-white/10 rounded text-white/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* NODO 2: FORMACIÓN EN CIBERSEGURIDAD */}
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-cyber ring-4 ring-cyber/20" />

          <div className="bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-cyber/10 text-cyber">
                <Shield className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-tech text-xl sm:text-2xl font-black text-white">Security Systems</h3>
                <p className="font-tech text-cyber text-sm tracking-[0.2em] uppercase mt-1">
                  Formación práctica en ciberseguridad
                </p>
                <p className="flex items-center gap-1.5 text-xs text-silver mt-1">
                  <BookOpen className="w-3.5 h-3.5 shrink-0" /> 8 laboratorios hands-on
                </p>
              </div>
            </div>

            <ul className="space-y-2">
              {SECURITY_NOTES.map((n) => (
                <li key={n} className="flex gap-3 text-silver text-sm leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber" />
                  {n}
                </li>
              ))}
            </ul>

            <div>
              <p className="flex items-center gap-2 font-tech text-xs tracking-[0.3em] text-silver uppercase mb-2">
                <Target className="w-3.5 h-3.5 text-cyber" /> Competencias adquiridas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Criptografía', 'TLS/HTTPS', 'Hardening Linux', 'iptables', 'OpenSSL', 'GnuPG', 'Análisis de vulnerabilidades'].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-[11px] font-tech tracking-wide border border-white/10 rounded text-white/90">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* NODO 3: DISPONIBLE AHORA */}
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
          </span>
          <div className="border border-dashed border-white/15 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="font-tech text-white font-bold tracking-wide text-lg">2026 — BUSCANDO OPORTUNIDADES</p>
                <p className="text-sm text-silver mt-1">
                  Mi objetivo es incorporarme como <span className="text-white font-semibold">Analista SOC</span> en un
                  entorno donde pueda aplicar mis conocimientos teóricos, desarrollar habilidades prácticas en
                  monitorización de seguridad y respuesta a incidentes, y crecer profesionalmente en el sector.
                  Abierto también a roles de ciberseguridad en general.
                </p>
              </div>
            </div>
            <a
              href="#contacto"
              className="font-tech text-cyber text-sm tracking-widest uppercase hover:underline whitespace-nowrap shrink-0"
            >
              Contáctame →
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        <ScrollCue href="#contacto" label="Contacta conmigo" />
      </div>
    </div>
  );
}
