import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Wrench } from 'lucide-react';
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
  'Cloud',
  'Trabajo en equipo',
  'Metodologías ágiles',
];

export default function Experience() {
  return (
    /* ✅ FIX: px-5 y menos padding vertical en móvil */
    <div className="mx-auto max-w-4xl px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <SectionLabel index="05" label="Trayectoria" />

      <div className="relative mt-8 sm:mt-10 pl-8 md:pl-10">
        {/* ✅ FIX: left-[7px] / md:left-[9px] (left-1.75 y left-2.25 NO existen en Tailwind
           → la línea de tiempo no se pintaba o salía descolocada) */}
        <span className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-white/10" />

        {/* ===== NODO 1: VIEWNEXT ===== */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-f1-red ring-4 ring-f1-red/20" />

          <div className="bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
            {/* cabecera: placa sponsor + empresa + rol */}
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
                  <span className="inline-flex items-center gap-1 text-xs font-tech text-f1-red border border-f1-red/40 rounded-full px-2 py-0.5">
                    <CalendarDays className="w-3 h-3" /> 4 MESES
                  </span>
                </div>
                <p className="font-tech text-f1-red text-sm tracking-[0.2em] uppercase mt-1">
                  Becario SAP
                </p>
                <p className="flex items-center gap-1.5 text-xs text-silver mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" /> Aldeatejada, Salamanca, España
                </p>
              </div>
            </div>

            {/* notas */}
            <ul className="space-y-2">
              {NOTES.map((n) => (
                <li key={n} className="flex gap-3 text-silver text-sm leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-f1-red" />
                  {n}
                </li>
              ))}
            </ul>

            {/* skills */}
            <div>
              <p className="flex items-center gap-2 font-tech text-xs tracking-[0.3em] text-silver uppercase mb-2">
                <Wrench className="w-3.5 h-3.5 text-f1-red" /> Skills mejoradas
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

        {/* ===== NODO 2: DISPONIBLE AHORA ===== */}
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-green-500 ring-4 ring-green-500/20">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
          </span>
          <div className="border border-dashed border-white/15 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-tech text-white font-bold tracking-wide">2026 - ACTUALMENTE</p>
              <p className="text-sm text-silver">
                Buscando mi próximo trabajo como desarrollador web o dentro de la ciberseguridad, aunque estoy abierto a todo.
              </p>
            </div>
            <a
              href="#contacto"
              className="font-tech text-f1-red text-sm tracking-widest uppercase hover:underline whitespace-nowrap"
            >
              Contacta conmigo →
            </a>
          </div>
        </motion.div>
      </div>

      {/* ✅ FIX: mt para separar la pista del último nodo (el ScrollCue ya trae su propio pt) */}
      <div className="flex justify-center mt-8">
        <ScrollCue href="#contacto" label="Contacta conmigo" />
      </div>
    </div>
  );
}