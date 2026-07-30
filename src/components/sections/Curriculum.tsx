import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Maximize2, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { ScrollCue } from '../ui/ScrollCue';
import { PdfViewer } from '../ui/PdfViewer';

const PDF_URL = 'cv-alberto-garcia.pdf';

export default function Curriculum() {
  const [open, setOpen] = useState(false);

  // ESC cierra el modal y bloquea el scroll de fondo
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

      {/* ===== EL DOCUMENTO ===== */}
      <motion.div
        className="bg-carbon-light border border-white/10 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-1 bg-cyber" />

        {/* cabecera con acciones */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:p-5 border-b border-white/10">
          <h2 className="font-tech text-xl sm:text-2xl font-black">
            CV · <span className="text-cyber">ALBERTO GARCÍA MARTÍN</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/15 text-silver hover:text-cyber hover:border-cyber font-tech text-xs tracking-wider transition-colors"
            >
              <Maximize2 className="w-4 h-4" /> Pantalla completa
            </button>
            <Button variant="primary" size="sm" href={PDF_URL} download="CV-Alberto-Garcia-Martin.pdf">
              <Download className="w-4 h-4 mr-1" /> Descargar PDF
            </Button>
          </div>
        </div>

        {/* visor embebido (reutilizado desde ui/PdfViewer) */}
        <PdfViewer pdfUrl={PDF_URL} scrollClass="max-h-[68vh]" />

        {/* pie con descarga */}
        <div className="p-4 sm:p-5 border-t border-white/10 flex justify-center">
          <Button variant="outline" size="sm" href={PDF_URL} download="CV-Alberto-Garcia-Martin.pdf">
            <Download className="w-4 h-4 mr-1" /> Descargar CV en PDF
          </Button>
        </div>
      </motion.div>

      {/* ===== MODAL A PANTALLA COMPLETA ===== */}
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
                  CV · <span className="text-cyber">PANTALLA COMPLETA</span>
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="primary" size="sm" href={PDF_URL} download="CV-Alberto-Garcia-Martin.pdf">
                    <Download className="w-4 h-4 mr-1" /> PDF
                  </Button>
                  <button onClick={() => setOpen(false)} aria-label="Cerrar"
                    className="p-2 rounded-lg border border-white/15 text-silver hover:text-cyber hover:border-cyber transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* mismo visor reutilizado, más alto */}
              <PdfViewer pdfUrl={PDF_URL} scrollClass="max-h-[78vh]" />
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