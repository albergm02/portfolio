import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download, ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut, FileWarning,
} from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
/* ✅ FIX 1: ELIMINADOS los imports de CSS que daban "Failed to resolve import".
   Como renderizamos sin capa de texto ni de anotaciones, no hacen falta. */
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { ScrollCue } from '../ui/ScrollCue';

/* ✅ FIX 2: WORKER POR CDN con la versión EXACTA de pdfjs-dist que tienes instalada.
   `pdfjs.version` es la versión en runtime, así que worker y librería SIEMPRE coinciden.
   Esto evita el mismatch de versiones y los imports locales que fallaban.
   (Requiere internet, que en un portfolio online siempre hay.) */
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF_URL = '/cv-alberto-garcia.pdf';

function Spinner({ label = 'Cargando documento…' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-silver">
      <span className="h-8 w-8 rounded-full border-2 border-white/15 border-t-f1-red animate-spin" />
      <span className="font-tech text-xs tracking-[0.3em] uppercase">{label}</span>
    </div>
  );
}

function useElementWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setWidth(Math.floor(entries[0]?.contentRect.width ?? 0));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return { ref, width };
}

function PdfViewer({ scrollClass }: { scrollClass: string }) {
  const { ref, width } = useElementWidth();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  /* ✅ FIX 3: guardamos el ERROR REAL (no solo un booleano) para mostrarlo y diagnosticar */
  const [error, setError] = useState<string | null>(null);

  const go = (delta: number) =>
    setPageNumber((p) => Math.min(Math.max(p + delta, 1), numPages ?? 1));

  const renderWidth = width ? Math.floor(width * zoom) : undefined;

  /* ✅ FIX 3 (cont.): detectamos si es un 404 (PDF no encontrado) para dar un mensaje útil */
  const isMissing = !!error && /404|not found|failed to fetch|no data|invalid/i.test(error);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center px-6">
        <FileWarning className="w-10 h-10 text-f1-red" />
        <p className="text-silver text-sm max-w-md">
          {isMissing
            ? 'No encuentro el archivo del CV. Comprueba que existe public/cv-alberto-garcia.pdf (minúsculas y guiones exactos) y recarga.'
            : 'No se pudo renderizar el visor. Ábrelo directamente o descárgalo.'}
        </p>
        {/* ✅ mostramos el error real en pequeño, para ti (debug). Puedes borrar este <pre> cuando funcione. */}
        <pre className="text-[10px] text-silver/50 max-w-md whitespace-pre-wrap break-words text-left bg-black/30 rounded p-2">
          {error}
        </pre>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={PDF_URL} target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 rounded-lg border border-f1-red text-f1-red hover:bg-f1-red hover:text-white font-tech text-xs tracking-wider transition-colors">
            ABRIR PDF
          </a>
          <a href={PDF_URL} download="CV-Alberto-Garcia-Martin.pdf"
             className="px-4 py-2 rounded-lg bg-f1-red text-white font-tech text-xs tracking-wider hover:bg-f1-red-dark transition-colors">
            DESCARGAR
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-2 px-3 py-2.5 bg-black/40 border-b border-white/10 font-tech text-xs tracking-wider">
        <div className="flex items-center gap-1">
          <button onClick={() => go(-1)} disabled={pageNumber <= 1}
            className="p-1.5 rounded text-silver hover:text-f1-red disabled:opacity-30 disabled:hover:text-silver transition-colors" aria-label="Página anterior">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-white tabular-nums px-1">
            {pageNumber} <span className="text-silver/60">/ {numPages ?? '–'}</span>
          </span>
          <button onClick={() => go(1)} disabled={!numPages || pageNumber >= numPages}
            className="p-1.5 rounded text-silver hover:text-f1-red disabled:opacity-30 disabled:hover:text-silver transition-colors" aria-label="Página siguiente">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button onClick={() => setZoom((z) => Math.max(0.6, +(z - 0.2).toFixed(2)))}
            className="p-1.5 rounded text-silver hover:text-f1-red transition-colors" aria-label="Alejar">
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-silver tabular-nums w-12 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.min(2.4, +(z + 0.2).toFixed(2)))}
            className="p-1.5 rounded text-silver hover:text-f1-red transition-colors" aria-label="Acercar">
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div ref={ref} className={`overflow-auto bg-black/30 ${scrollClass}`}>
        {width > 0 && (
          <Document
            file={PDF_URL}
            onLoadSuccess={({ numPages }) => { setNumPages(numPages); setError(null); }}
            /* ✅ FIX 3 (cont.): capturamos el mensaje real del error y lo logueamos a consola */
            onLoadError={(err) => {
              const msg = err instanceof Error ? err.message : String(err);
              console.error('[CV] Error al cargar el PDF:', msg, err);
              setError(msg);
            }}
            loading={<Spinner />}
            error={<></>}
          >
            <div className="flex justify-center p-3 sm:p-5">
              <Page
                pageNumber={pageNumber}
                width={renderWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={<Spinner label="Renderizando página…" />}
              />
            </div>
          </Document>
        )}
      </div>
    </div>
  );
}

export default function Curriculum() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <SectionLabel index="03" label="Currículum" />

      <motion.p
        className="text-silver mt-4 mb-8 max-w-2xl text-sm sm:text-base"
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        Lee mi currículum aquí mismo, página a página. Ábrelo a pantalla completa para
        leerlo con calma, o descárgalo en PDF para adjuntarlo.
      </motion.p>

      <motion.div
        className="bg-carbon-light border border-white/10 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-1 bg-f1-red" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:p-5 border-b border-white/10">
          <h2 className="font-tech text-xl sm:text-2xl font-black">
            CV · <span className="text-f1-red">ALBERTO GARCÍA MARTÍN</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/15 text-silver hover:text-f1-red hover:border-f1-red font-tech text-xs tracking-wider transition-colors"
            >
              <Maximize2 className="w-4 h-4" /> Pantalla completa
            </button>
            <Button variant="primary" size="sm" href={PDF_URL} download="CV-Alberto-Garcia-Martin.pdf">
              <Download className="w-4 h-4 mr-1" /> Descargar PDF
            </Button>
          </div>
        </div>

        <PdfViewer scrollClass="max-h-[68vh]" />

        <div className="p-4 sm:p-5 border-t border-white/10 flex justify-center">
          <Button variant="outline" size="sm" href={PDF_URL} download="CV-Alberto-Garcia-Martin.pdf">
            <Download className="w-4 h-4 mr-1" /> Descargar CV en PDF
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl bg-carbon-light border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-white/10">
                <span className="font-tech text-sm sm:text-base font-black tracking-wide">
                  CV · <span className="text-f1-red">PANTALLA COMPLETA</span>
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="primary" size="sm" href={PDF_URL} download="CV-Alberto-Garcia-Martin.pdf">
                    <Download className="w-4 h-4 mr-1" /> PDF
                  </Button>
                  <button onClick={() => setOpen(false)} aria-label="Cerrar"
                    className="p-2 rounded-lg border border-white/15 text-silver hover:text-f1-red hover:border-f1-red transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <PdfViewer scrollClass="max-h-[78vh]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-8">
        <ScrollCue href="#proyectos" label="Proyectos" />
      </div>
    </div>
  );
}