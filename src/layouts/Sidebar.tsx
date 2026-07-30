import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Trophy, Gauge, Briefcase, Radio, Menu, X, FileText } from 'lucide-react';

const navItems = [
  { id: 'inicio', label: 'Inicio', sub: 'Portada', icon: Home },
  { id: 'sobre-mi', label: 'Sobre mí', sub: 'Perfil', icon: User },
  { id: 'cv', label: 'Currículum', sub: 'CV completo', icon: FileText },  
  { id: 'proyectos', label: 'Proyectos', sub: 'Portfolio', icon: Trophy },
  { id: 'experiencia', label: 'Experiencia', sub: 'Trayectoria', icon: Briefcase },
  { id: 'contacto', label: 'Contacto', sub: 'Escríbeme', icon: Radio },
];
export default function Sidebar() {
  const [open, setOpen] = useState(false); // drawer en móvil
  const [active, setActive] = useState('inicio');
  
  return (
    <>
      {/* Botón hamburguesa (solo móvil).
      Se OCULTA cuando el menú está abierto (open) para no tapar la barra lateral. */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="menu-toggle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(true)}
            className="md:hidden fixed top-20 left-4 z-50 p-2 bg-cyber rounded text-white shadow-lg active:scale-95 transition-transform"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      {/* Overlay oscuro detrás del drawer en móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* El sidebar: fijo en desktop, drawer en móvil */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-64 bg-carbon-light border-r border-white/5 flex flex-col transition-transform duration-300 md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="md:hidden absolute top-4 right-4 text-silver hover:text-white"
          aria-label="Cerrar menú"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navegación con entrada escalonada */}
        <nav className="flex-1 py-8 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActive(item.id);
                  setOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-cyber/10 text-white'
                    : 'text-silver hover:text-white hover:bg-white/5'
                }`}
              >
                {/* Barra roja que crece al activar/hover */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full bg-cyber transition-all duration-300 ${
                    isActive ? 'h-8' : 'h-0 group-hover:h-6'
                  }`}
                />
                <Icon
                  className={`w-5 h-5 shrink-0 transition-colors ${
                    isActive ? 'text-cyber' : 'text-silver group-hover:text-cyber'
                  }`}
                />
                <div className="leading-tight">
                  <span className="block text-sm font-semibold">{item.label}</span>
                </div>
              </motion.a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}