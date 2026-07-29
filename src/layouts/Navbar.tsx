import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 transition-colors duration-300 ${
        scrolled
          ? 'bg-carbon/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="leading-tight">
          <span className="block font-tech font-bold text-base sm:text-lg tracking-wide">Alberto García Martín</span>
          <span className="block text-[10px] tracking-[0.25em] text-f1-red uppercase">Ingeniero informático</span>
        </div>
      </div>

      {/* Redes (ocultas en móvil: ya están en el Hero y en About) */}
      <div className="hidden sm:flex items-center gap-4">
        <a href="https://github.com/albergm02" target="_blank" rel="noopener noreferrer"
           className="text-silver hover:text-f1-red transition-colors" aria-label="GitHub">
          <GithubIcon className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/albertogarciamartin/" target="_blank" rel="noopener noreferrer"
           className="text-silver hover:text-f1-red transition-colors" aria-label="LinkedIn">
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a href="mailto:alberto.g.m.0214@gmail.com"
           className="text-silver hover:text-f1-red transition-colors" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.header>
  );
}