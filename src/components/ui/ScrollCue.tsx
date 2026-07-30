import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollCue({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      /* ✅ FIX: pt más pequeño en móvil (pt-8) y normal en desktop (sm:pt-16) */
      className="group flex flex-col items-center gap-2 pt-8 sm:pt-16 text-silver hover:text-f1-red transition-colors"
    >
      <span className="font-tech text-[10px] tracking-[0.4em] uppercase">Siguiente</span>
      <span className="font-tech text-xs tracking-[0.2em] uppercase text-center">{label}</span>

      <span className="relative block h-8 sm:h-10 w-px bg-white/15 overflow-hidden">
        <motion.span
          className="absolute left-0 top-0 h-3 w-px bg-f1-red"
          animate={{ y: ['-100%', '400%'] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>

      <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
        <ChevronDown className="w-5 h-5" />
      </motion.span>
    </a>
  );
}