import { motion } from 'framer-motion';

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-tech text-f1-red text-sm tracking-[0.3em]">{index}</span>
      <span className="h-px w-12 bg-f1-red" />
      <span className="font-tech text-silver text-sm tracking-[0.3em] uppercase">{label}</span>
    </motion.div>
  );
}