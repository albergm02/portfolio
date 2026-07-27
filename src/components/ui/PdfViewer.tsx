import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, FileWarning,
} from 'lucide-react';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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

/**
 * Visor de PDF reutilizable: pinta UNA página con paginación y zoom, responsive.
 * @param pdfUrl  Ruta del PDF en /public (ej. '/docs/areya.pdf').
 * @param scrollClass  Clases de altura/scroll del área del documento (lo decide el padre).
 */
export function PdfViewer({ pdfUrl, scrollClass }: { pdfUrl: string; scrollClass: string }) {
  const { ref, width } = useElementWidth();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const go = (delta: number) =>
    setPageNumber((p) => Math.min(Math.max(p + delta, 1), numPages ?? 1));

  const renderWidth = width ? Math.floor(width * zoom) : undefined;
  const isMissing = !!error && /404|not found|failed to fetch|no data|invalid/i.test(error);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center px-6">
        <FileWarning className="w-10 h-10 text-f1-red" />
        <p className="text-silver text-sm max-w-md">
          {isMissing
            ? 'No encuentro el PDF. Revisa la ruta en public/ y recarga.'
            : 'No se pudo renderizar el visor. Ábrelo directamente.'}
        </p>
        <pre className="text-[10px] text-silver/50 max-w-md whitespace-pre-wrap break-words text-left bg-black/30 rounded p-2">
          {error}
        </pre>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
           className="px-4 py-2 rounded-lg border border-f1-red text-f1-red hover:bg-f1-red hover:text-white font-tech text-xs tracking-wider transition-colors">
          ABRIR PDF
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* barra de controles */}
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

      {/* área del documento */}
      <div ref={ref} className={`overflow-auto bg-black/30 ${scrollClass}`}>
        {width > 0 && (
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => { setNumPages(numPages); setError(null); }}
            onLoadError={(err) => {
              const msg = err instanceof Error ? err.message : String(err);
              console.error('[PDF] Error al cargar:', msg, err);
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