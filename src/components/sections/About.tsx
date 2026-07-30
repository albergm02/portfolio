import { motion } from 'framer-motion';
import {
  MapPin, GraduationCap, Fingerprint, Mail, Phone, CheckCircle2, ArrowRight, Download, Shield,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { ContactIcons } from '../ui/ContactIcons';
import { ScrollCue } from '../ui/ScrollCue';

const STACK = [
  { cat: 'Ciberseguridad', items: ['OpenSSL', 'GnuPG', 'iptables', 'TLS/HTTPS', 'Criptografía', 'Hardening'] },
  { cat: 'Desarrollo', items: ['Vue 3', 'React', 'JavaScript', 'TypeScript', 'TailwindCSS', 'C', 'C++', 'C#'] },
  { cat: 'SAP / Datos', items: ['SAP', 'SAP Analytics Cloud', 'SAP BW4HANA', 'SQL', 'MongoDB'] },
  { cat: 'Sistemas', items: ['Linux (Debian)', 'Bash', 'SSH', 'Git', 'Firebase'] },
];

const AREAS_SEGURIDAD = [
  { area: 'Criptografía', items: 'DES, AES, RSA, ElGamal, firmas digitales, SHA256' },
  { area: 'Protocolos Seguros', items: 'TLS, HTTPS, ECC, PKI, certificados digitales' },
  { area: 'Seguridad en Redes', items: 'iptables, cortafuegos, análisis de servicios, simulación DoS' },
  { area: 'Hardening OS', items: 'gestión usuarios, logs, parches, integridad archivos' },
];

const LANGUAGES = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio (lectura técnica)' },
];

const COCKPIT = [
  { icon: GraduationCap, label: 'Estudios', value: 'USAL · 2020–2026' },
  { icon: MapPin, label: 'Ciudad', value: 'Salamanca, ES' },
  { icon: CheckCircle2, label: 'Estado', value: 'Buscando trabajo SOC' },
  { icon: Phone, label: 'Teléfono', value: '+34 656 545 838' },
  { icon: Mail, label: 'Email', value: 'alberto.g.m.0214@gmail.com' },
  { icon: Fingerprint, label: 'ORCID', value: '0009-0008-9008-1030' },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 md:py-28 space-y-8 sm:space-y-10">
      <SectionLabel index="02" label="Sobre mí" />

      {/* PHOTO + IDENTITY */}
      <motion.div
        className="grid gap-8 md:grid-cols-[260px_1fr] items-start bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative mx-auto md:mx-0 w-full max-w-[260px]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-cyber/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src="/alberto.jpg"
              alt="Retrato profesional de Alberto García Martín"
              width={800} height={896} loading="lazy" decoding="async"
              className="w-full aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <h2 className="font-tech text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-balance">
            ALBERTO <span className="text-cyber">GARCÍA</span> MARTÍN
          </h2>
          <p className="font-tech text-cyber text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase flex items-center gap-2">
            <Shield className="w-4 h-4" /> Aspirante a Analista SOC
          </p>

          <p className="text-silver leading-relaxed max-w-2xl text-sm sm:text-base">
            Recién graduado en Ingeniería Informática con una sólida base teórica en{' '}
            <span className="text-white font-semibold">ciberseguridad</span>. Durante la carrera he
                    trabajado con criptografía simétrica y asimétrica (AES, RSA, ElGamal), configuración de
                    servicios seguros (TLS/HTTPS con Apache), hardening de sistemas Linux y reglas de cortafuegos
                    con iptables. Mi formación me ha dotado de un pensamiento analítico y una gran atención al
                    detalle, cualidades esenciales para un puesto de{' '}
            <span className="text-white font-semibold">Analista SOC</span>.
          </p>

          <div className="flex flex-col items-stretch sm:items-start gap-4 pt-1">
            <ContactIcons size="md" />
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button variant="primary" size="md" href="#proyectos" className="w-full sm:w-auto">
                Ver proyectos de seguridad <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="outline" size="md" href="/cv-alberto-garcia.pdf" download="CV-Alberto-Garcia-Martin.pdf" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-1" /> Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* COMPETENCIAS TÉCNICAS */}
        <motion.div
          className="bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4"
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="block font-tech text-xs tracking-[0.3em] text-silver border-b border-white/10 pb-2">
            COMPETENCIAS TÉCNICAS
          </span>
          {STACK.map((g) => (
            <div key={g.cat}>
              <p className="font-tech text-cyber text-xs tracking-wider uppercase mb-1.5">{g.cat}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span key={it} className="px-2.5 py-1 text-[11px] font-tech tracking-wide border border-white/10 rounded text-white/90">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-2 border-t border-white/10">
            <p className="font-tech text-silver text-xs tracking-[0.3em] uppercase mb-1.5">Idiomas</p>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <span key={l.name} className="px-2.5 py-1 text-[11px] font-tech border border-white/10 rounded text-white/90">
                  {l.name} · <span className="text-cyber">{l.level}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SOBRE MÍ + COMPETENCIAS SEGURIDAD */}
        <motion.div
          className="bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4"
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <span className="font-tech text-xs tracking-[0.3em] text-silver">SOBRE MÍ</span>
            <span className="flex items-center gap-1.5 text-xs font-tech text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              BUSCANDO TRABAJO SOC
            </span>
          </div>

          {COCKPIT.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 text-sm">
              <span className="flex items-center gap-2 text-silver">
                <Icon className="w-4 h-4 text-cyber shrink-0" />
                <span className="font-tech text-[11px] tracking-wider uppercase sm:w-20 sm:shrink-0">{label}</span>
              </span>
              <span className="text-white font-semibold break-words min-w-0 pl-6 sm:pl-0 sm:truncate">{value}</span>
            </div>
          ))}

          <div className="pt-3 border-t border-white/10">
            <p className="font-tech text-cyber text-xs tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" /> Áreas de Seguridad Trabajadas
            </p>
            <div className="space-y-2">
              {AREAS_SEGURIDAD.map((a) => (
                <div key={a.area} className="flex flex-col sm:flex-row sm:items-center gap-1 text-sm">
                  <span className="font-tech text-[11px] tracking-wider text-cyber uppercase sm:w-36 shrink-0">
                    {a.area}
                  </span>
                  <span className="text-white/80 text-xs pl-4 sm:pl-0">{a.items}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <ScrollCue href="#cv" label="Currículum" />
      </div>
    </div>
  );
}
