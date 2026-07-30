import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollCue({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center gap-2 pt-8 sm:pt-16 text-silver hover:text-cyber transition-colors"
    >
      {/* Radar pulse ring */}
      <span className="relative flex items-center justify-center w-6 h-6 mb-1">
        <span className="absolute inset-0 rounded-full border border-cyber/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute inset-0 rounded-full border border-cyber/40 group-hover:border-cyber transition-colors" />
        <span className="relative w-2 h-2 rounded-full bg-cyber/60 group-hover:bg-cyber transition-colors" />
      </span>

      <span className="font-tech text-[10px] tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500">Siguiente</span>
      <span className="font-tech text-xs tracking-[0.2em] uppercase text-center">{label}</span>

      <span className="relative block h-8 sm:h-10 w-px bg-white/15 overflow-hidden">
        <motion.span
          className="absolute left-0 top-0 h-4 w-px bg-gradient-to-b from-cyber to-transparent"
          animate={{ y: ['-100%', '500%'] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>

      <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
        <ChevronDown className="w-5 h-5" />
      </motion.span>
    </a>
  );
}