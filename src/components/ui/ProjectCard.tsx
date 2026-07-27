import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Terminal, Maximize2, ExternalLink, Download } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { PdfViewer } from './PdfViewer';

export interface Proyecto {
  id: string;
  titulo: string;
  subtitulo?: string;
  anio?: string;
  descripcion: string;
  tags: string[];
  repo?: string;
  posterSrc?: string;
  videoSrc?: string;
  pdfSrc?: string;
  demoEnVivo?: string;
  descarga?: string;
  ancho?: boolean;     // ocupa 2 columnas (sin anillo)
  destacado?: boolean; // ocupa 2 columnas + anillo rojo (pole position)
}

export function ProjectCard({ p }: { p: Proyecto }) {
  const [demoOpen, setDemoOpen] = useState(false); // modal vídeo
  const [pdfOpen, setPdfOpen] = useState(false);   // modal PDF

  const tieneVideo = !!p.videoSrc;
  const tieneApp = !!p.demoEnVivo;
  const tienePdf = !!p.pdfSrc;

  // El Play del thumbnail: reproduce el vídeo si lo hay; si no, abre la app en vivo.
  const muestraPlay = tieneVideo || tieneApp;
  const onPlay = () => {
    if (tieneVideo) setDemoOpen(true);
    else if (tieneApp) window.open(p.demoEnVivo!, '_blank', 'noopener,noreferrer');
  };

  // ESC cierra cualquier modal y bloquea el scroll de fondo
  useEffect(() => {
    if (!demoOpen && !pdfOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setDemoOpen(false); setPdfOpen(false); }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [demoOpen, pdfOpen]);

  const tagsVisibles = p.tags.slice(0, 4);
  const tagsSobrantes = p.tags.length - tagsVisibles.length;
  const cardSpan = (p.ancho || p.destacado) ? 'md:col-span-2' : '';
  const cardRing = p.destacado ? 'ring-1 ring-f1-red/40' : '';

  /* ===== MEDIA (thumbnail con poster/placeholder + Play) ===== */
  const Media = (extra = '') => (
    <div className={`relative overflow-hidden bg-black ${extra}`}>
      {p.posterSrc ? (
        <img src={p.posterSrc} alt={`Captura de ${p.titulo}`} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-carbon-lighter via-carbon to-black flex items-center justify-center">
          <Terminal className="w-16 h-16 text-white/10" />
        </div>
      )}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {muestraPlay ? (
        <button onClick={onPlay} aria-label={tieneVideo ? 'Ver demo' : 'Abrir aplicación'}
          className="absolute inset-0 z-10 flex items-center justify-center">
          <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/50 transition-all duration-300 group-hover:bg-f1-red group-hover:border-f1-red group-hover:scale-110">
            <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
          </span>
        </button>
      ) : (
        <span className="absolute top-3 left-3 z-20 font-tech text-[10px] tracking-[0.2em] text-silver bg-black/50 backdrop-blur-sm border border-white/15 rounded-full px-2.5 py-0.5">
          DEMO PRONTO
        </span>
      )}
    </div>
  );

  /* ===== CONTENIDO (título + año + desc + tags + CTAs) ===== */
  const Contenido = (extra = '') => (
    <div className={`flex flex-col flex-1 p-5 sm:p-6 ${extra}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-tech text-xl sm:text-2xl font-black text-white leading-tight">{p.titulo}</h3>
          {p.subtitulo && <p className="font-tech text-f1-red text-xs tracking-[0.2em] uppercase mt-1">{p.subtitulo}</p>}
        </div>
        {p.anio && (
          <span className="shrink-0 font-tech text-xs text-silver border border-white/15 rounded-full px-2.5 py-0.5">{p.anio}</span>
        )}
      </div>

      <p className="text-silver text-sm leading-relaxed mt-3 flex-1">{p.descripcion}</p>

      {/* tags */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {tagsVisibles.map((t) => (
          <span key={t} className="px-2.5 py-1 text-[11px] font-tech tracking-wide border border-white/10 rounded text-white/80">{t}</span>
        ))}
        {tagsSobrantes > 0 && <span className="px-2.5 py-1 text-[11px] font-tech text-f1-red">+{tagsSobrantes}</span>}
      </div>

      {/* CTAs: cada acción disponible por separado */}
      <div className="flex flex-wrap gap-2 mt-5">
        {tieneApp && (
          <a href={p.demoEnVivo} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-f1-red text-white font-tech text-xs tracking-wider hover:bg-f1-red-dark transition-colors">
            <Play className="w-3.5 h-3.5" /> Abrir app
          </a>
        )}
        {tieneVideo && (
          <button onClick={() => setDemoOpen(true)}
             className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-f1-red/60 text-f1-red hover:bg-f1-red hover:text-white font-tech text-xs tracking-wider transition-colors">
            <Play className="w-3.5 h-3.5" /> Ver demo
          </button>
        )}
        {tienePdf && (
          <button onClick={() => setPdfOpen(true)}
             className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-f1-red text-white font-tech text-xs tracking-wider hover:bg-f1-red-dark transition-colors">
            <Maximize2 className="w-3.5 h-3.5" /> Ver documento
          </button>
        )}
        {!tieneApp && !tieneVideo && !tienePdf && (
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 text-silver/50 font-tech text-xs tracking-wider cursor-not-allowed">
            <Play className="w-3.5 h-3.5" /> Demo pronto
          </span>
        )}
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/15 text-silver hover:text-f1-red hover:border-f1-red font-tech text-xs tracking-wider transition-colors">
            <GithubIcon className="w-3.5 h-3.5" /> Ver código
          </a>
        )}
        {p.pdfSrc && (
          <a href={p.pdfSrc} download
             className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/15 text-silver hover:text-f1-red hover:border-f1-red font-tech text-xs tracking-wider transition-colors">
            <Download className="w-3.5 h-3.5" /> Descargar PDF
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-carbon-light ${cardSpan} ${cardRing} ${
          tienePdf ? 'flex flex-col' : p.destacado ? 'flex flex-col lg:flex-row min-h-[340px]' : 'flex flex-col'
        }`}
      >
        {tienePdf ? (
          /* LAYOUT DOCUMENTO (Areya): contenido + visor */
          <div className="grid lg:grid-cols-2 flex-1">
            {Contenido()}
            <div className="flex flex-col border-t lg:border-t-0 lg:border-l border-white/10 min-h-[420px]">
              <div className="flex items-center justify-between gap-2 px-3 py-2 bg-black/50 border-b border-white/10">
                <span className="font-tech text-[11px] tracking-[0.3em] text-silver">DOCUMENTACIÓN</span>
                <div className="flex items-center gap-1">
                  <a href={p.pdfSrc} target="_blank" rel="noopener noreferrer" aria-label="Abrir en pestaña nueva"
                     className="p-1.5 rounded text-silver hover:text-f1-red transition-colors"><ExternalLink className="w-4 h-4" /></a>
                  <button onClick={() => setPdfOpen(true)} aria-label="Pantalla completa"
                     className="p-1.5 rounded text-silver hover:text-f1-red transition-colors"><Maximize2 className="w-4 h-4" /></button>
                </div>
              </div>
              <PdfViewer pdfUrl={p.pdfSrc!} scrollClass="h-[380px] lg:h-[460px]" />
            </div>
          </div>
        ) : p.destacado ? (
          /* LAYOUT HERO (TFG): media grande + contenido, en horizontal en desktop */
          <>
            {Media('w-full lg:w-1/2 shrink-0 h-56 sm:h-72 lg:h-auto')}
            {Contenido('lg:w-1/2')}
          </>
        ) : (
          /* LAYOUT NORMAL (pesca, pactómetro): media arriba + contenido abajo */
          <>
            {Media('w-full h-44 sm:h-52')}
            {Contenido()}
          </>
        )}
      </motion.div>

      {/* MODAL VÍDEO */}
      <AnimatePresence>
        {demoOpen && p.videoSrc && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDemoOpen(false)}>
            <motion.div className="relative w-full max-w-4xl bg-carbon-light border border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="font-tech text-sm font-black tracking-wide">{p.titulo} · <span className="text-f1-red">DEMO</span></span>
                <button onClick={() => setDemoOpen(false)} aria-label="Cerrar" className="p-2 rounded-lg border border-white/15 text-silver hover:text-f1-red hover:border-f1-red transition-colors"><X className="w-5 h-5" /></button>
              </div>
              <video src={p.videoSrc!} controls autoPlay loop className="w-full bg-black max-h-[75vh]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL PDF */}
      <AnimatePresence>
        {pdfOpen && p.pdfSrc && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPdfOpen(false)}>
            <motion.div className="relative w-full max-w-5xl bg-carbon-light border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="font-tech text-sm font-black tracking-wide">{p.titulo} · <span className="text-f1-red">DOCUMENTACIÓN</span></span>
                <div className="flex items-center gap-2">
                  <a href={p.pdfSrc} download className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-f1-red text-white font-tech text-xs tracking-wider hover:bg-f1-red-dark transition-colors"><Download className="w-4 h-4" /> PDF</a>
                  <button onClick={() => setPdfOpen(false)} aria-label="Cerrar" className="p-2 rounded-lg border border-white/15 text-silver hover:text-f1-red hover:border-f1-red transition-colors"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <PdfViewer pdfUrl={p.pdfSrc!} scrollClass="max-h-[78vh]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}