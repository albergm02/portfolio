import { motion } from 'framer-motion';
import {
  MapPin, GraduationCap, Fingerprint, Mail, Phone, CheckCircle2, ArrowRight, Download,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { ContactIcons } from '../ui/ContactIcons';
import { ScrollCue } from '../ui/ScrollCue';

const STACK = [
  { cat: 'Vue 3 / Firebase', items: ['Vue', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'Vite', 'Vitest', 'Zod', 'Pinia'] },
  { cat: 'C / C++', items: ['C', 'C++', 'Sincronización', 'Unity', 'Consola', 'Compilación y enlazado'] },
  { cat: 'SAP / Datos', items: ['SAP', 'SAP Analytics Cloud', 'SAP BW4HANA', 'Análisis de datos'] },
  { cat: 'Bases de datos', items: ['SQL', 'PL/SQL', 'MongoDB', 'SQLPlus', 'Diseño de BBDD'] },
  { cat: 'Versionado', items: ['Git', 'GitHub'] },
];

const LANGS = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
];

const COCKPIT = [
  { icon: GraduationCap, label: 'Estudios', value: 'USAL · 2020–2026' },
  { icon: MapPin, label: 'Ciudad', value: 'Salamanca, ES' },
  { icon: CheckCircle2, label: 'Estado', value: 'Buscando trabajo' },
  { icon: Phone, label: 'Teléfono', value: '+34 656 545 838' },
  { icon: Mail, label: 'Email', value: 'alberto.g.m.0214@gmail.com' },
  { icon: Fingerprint, label: 'ORCID', value: '0009-0008-9008-1030' },
];

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const map = {
    tl: 'top-0 left-0 border-t-2 border-l-2',
    tr: 'top-0 right-0 border-t-2 border-r-2',
    bl: 'bottom-0 left-0 border-b-2 border-l-2',
    br: 'bottom-0 right-0 border-b-2 border-r-2',
  } as const;
  return <span className={`absolute w-5 h-5 border-f1-red ${map[pos]}`} />;
}

export default function About() {
  return (
    /* ✅ FIX: px-5 en móvil (un pelín menos de padding para aprovechar el ancho) */
    <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-20 md:py-28 space-y-8 sm:space-y-10">
      <SectionLabel index="02" label="Perfil personal" />

      {/* TARJETA SUPERIOR: FOTO + IDENTIDAD */}
      <motion.div
        className="grid gap-8 md:grid-cols-[260px_1fr] items-start bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ✅ FIX: max-w-[260px] y aspect-[4/5] (las clases max-w-65 / aspect-4/5 no son fiables) */}
        <div className="relative mx-auto md:mx-0 w-full max-w-[260px]">
          <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />
          <div
            className="relative overflow-hidden border border-white/10 group"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)' }}
          >
            <img
              src="/alberto.jpg"
              alt="Retrato profesional de Alberto García Martín"
              width={800} height={896} loading="lazy" decoding="async"
              className="w-full aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-carbon to-transparent" />
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {/* ✅ FIX: tamaño responsivo con saltos + text-balance para que no desborde en móvil */}
          <h2 className="font-tech text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-balance">
            ALBERTO <span className="text-f1-red">GARCÍA</span> MARTÍN
          </h2>
          <p className="font-tech text-f1-red text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase">
            Ingeniero Informático
          </p>

          <p className="text-silver leading-relaxed max-w-2xl text-sm sm:text-base">
            Recién graduado en Ingeniería Informática con una sólida base analítica y pasión por la
            resolución de problemas tecnológicos. Durante mi formación he desarrollado una gran
            capacidad de adaptación y trabajo en equipo mediante metodologías ágiles. Busco mi primera
            oportunidad profesional en un entorno dinámico donde pueda aportar mi proactividad, seguir
            creciendo técnicamente y contribuir al éxito de proyectos innovadores.
          </p>

          {/* ✅ FIX: botones a ancho completo en móvil, en fila en desktop */}
          <div className="flex flex-col items-stretch sm:items-start gap-4 pt-1">
            <ContactIcons size="md" />
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button variant="primary" size="md" href="#proyectos" className="w-full sm:w-auto">
                Ver mis proyectos <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="outline" size="md" href="/cv-alberto-garcia.pdf" download="CV-Alberto-Garcia-Martin.pdf" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-1" /> Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          className="bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4"
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="block font-tech text-xs tracking-[0.3em] text-silver border-b border-white/10 pb-2">
            STACK TÉCNICO
          </span>
          {STACK.map((g) => (
            <div key={g.cat}>
              <p className="font-tech text-f1-red text-xs tracking-wider uppercase mb-1.5">{g.cat}</p>
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
              {LANGS.map((l) => (
                <span key={l.name} className="px-2.5 py-1 text-[11px] font-tech border border-white/10 rounded text-white/90">
                  {l.name} · <span className="text-f1-red">{l.level}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 space-y-3"
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* ✅ FIX: flex-wrap + gap para que el badge no choque con el título en móvil */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <span className="font-tech text-xs tracking-[0.3em] text-silver">SOBRE MÍ</span>
            <span className="flex items-center gap-1.5 text-xs font-tech text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              BUSCANDO TRABAJO
            </span>
          </div>

          {/* ✅ FIX CLAVE: en móvil cada dato se APILA (etiqueta arriba, valor debajo) y el email
             se ve COMPLETO (break-words). En desktop vuelve a la fila con truncate. */}
          {COCKPIT.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 text-sm">
              <span className="flex items-center gap-2 text-silver">
                <Icon className="w-4 h-4 text-f1-red shrink-0" />
                <span className="font-tech text-[11px] tracking-wider uppercase sm:w-20 sm:shrink-0">{label}</span>
              </span>
              <span className="text-white font-semibold break-words min-w-0 pl-6 sm:pl-0 sm:truncate">{value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center">
        <ScrollCue href="#cv" label="Currículum" />
      </div>
    </div>
  );
}