import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { ContactIcons } from '../ui/ContactIcons';

const EMAIL = 'alberto.g.m.0214@gmail.com';
const PHONE = '+34 656 545 838';

function SendingBars() {
  return (
    <span className="flex items-end gap-0.5 h-4">
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="w-0.5 bg-cyber rounded-full"
          animate={{ height: ['20%', '100%', '20%'] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
        />
      ))}
    </span>
  );
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || sending) return;

    setSending(true);
    setSent(false);

    const subject = encodeURIComponent(`Contacto desde el portfolio · ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setSending(false);
      setSent(true);
    }, 900);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* si el navegador no lo permite, no rompemos nada */
    }
  };

  const inputCls =
    'w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-silver/50 font-tech tracking-wide focus:outline-none focus:border-cyber focus:ring-1 focus:ring-cyber transition-colors';

  return (
    /* ✅ FIX: px-5 y menos padding vertical en móvil */
    <div className="mx-auto max-w-5xl px-5 sm:px-6 py-16 sm:py-20 md:py-28">
      <SectionLabel index="06" label="Contacto" />

      <motion.h2
        /* ✅ FIX: text-balance + tamaño responsivo para que el título no desborde */
        className="font-tech text-3xl sm:text-4xl md:text-5xl font-black mt-6 leading-tight text-balance"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        HABLEMOS
      </motion.h2>
      <p className="text-silver mt-3 max-w-xl text-sm sm:text-base">
          Si buscas un analista SOC con base técnica, curiosidad insaciable y ganas de
          aprender, hablemos. Te respondo lo antes posible.
      </p>

      <div className="grid gap-6 mt-8 sm:mt-10 md:grid-cols-2">
        {/* ===== FORMULARIO ===== */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 overflow-hidden"
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          {/* ✅ FIX: flex-wrap + gap para que "FORMULARIO DE CONTACTO" y el estado
             bajen a dos líneas en móvil en vez de chocar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <span className="flex items-center gap-2 font-tech text-xs tracking-[0.2em] sm:tracking-[0.3em] text-silver">
              <MessageSquare className="w-4 h-4 text-cyber" /> FORMULARIO DE CONTACTO
            </span>
            {sending ? (
              <span className="flex items-center gap-2 font-tech text-xs text-cyber">
                <SendingBars /> ENVIANDO…
              </span>
            ) : sent ? (
              <span className="flex items-center gap-1.5 font-tech text-xs text-green-400">
                <Check className="w-3.5 h-3.5" /> LISTO
              </span>
            ) : (
              <span className="font-tech text-[11px] text-silver/60 tracking-wider">RESPONDO EN &lt; 24H</span>
            )}
          </div>

          <div>
            <label htmlFor="c-name" className="block font-tech text-[11px] tracking-wider text-silver uppercase mb-1.5">
              Nombre
            </label>
            <input
              id="c-name"
              className={inputCls}
              placeholder="Tu nombre o empresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="c-email" className="block font-tech text-[11px] tracking-wider text-silver uppercase mb-1.5">
              Email
            </label>
            <input
              id="c-email"
              type="email"
              className={inputCls}
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="c-msg" className="block font-tech text-[11px] tracking-wider text-silver uppercase mb-1.5">
              Mensaje
            </label>
            <textarea
              id="c-msg"
              rows={4}
              className={`${inputCls} resize-none`}
              placeholder="Cuéntame la posición, el proyecto o lo que necesites…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <Button variant="primary" size="md" type="submit" className="w-full">
            {sending ? 'Enviando…' : (<><Send className="w-4 h-4 mr-2" /> Enviar mensaje</>)}
          </Button>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="text-xs text-green-400 font-tech tracking-wide"
                aria-live="polite"
              >
                ✓ Se abrirá tu gestor de correo con el mensaje preparado. Si no se abre, usa «Copiar email» →
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* ===== DATOS DE CONTACTO DIRECTO ===== */}
        <motion.div
          className="bg-carbon-light border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 space-y-5"
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="block font-tech text-xs tracking-[0.3em] text-silver border-b border-white/10 pb-3">
            CONTACTO DIRECTO
          </span>

          <a href={`mailto:${EMAIL}`} className="group flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-cyber/10 text-cyber group-hover:bg-cyber group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-tech text-[11px] tracking-wider text-silver uppercase">Email</span>
              {/* ✅ FIX: break-all en vez de truncate → el email largo se ve entero en móvil */}
              <span className="block text-white font-semibold break-all group-hover:text-cyber transition-colors">{EMAIL}</span>
            </span>
          </a>

          <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="group flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-cyber/10 text-cyber group-hover:bg-cyber group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-tech text-[11px] tracking-wider text-silver uppercase">Teléfono</span>
              <span className="block text-white font-semibold group-hover:text-cyber transition-colors">{PHONE}</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-white/5 text-silver">
              <MapPin className="w-5 h-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-tech text-[11px] tracking-wider text-silver uppercase">Ubicación</span>
              <span className="block text-white font-semibold">Salamanca, España</span>
            </span>
          </div>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 w-full justify-center px-4 py-3 rounded-lg border border-white/15 text-silver hover:text-cyber hover:border-cyber font-tech text-xs tracking-wider uppercase transition-colors"
          >
            {copied ? (<><Check className="w-4 h-4" /> Email copiado</>) : (<><Copy className="w-4 h-4" /> Copiar email</>)}
          </button>

          <div className="pt-2 border-t border-white/10">
            <span className="block font-tech text-[11px] tracking-wider text-silver uppercase mb-3">Redes sociales</span>
            <ContactIcons size="md" />
          </div>
        </motion.div>
      </div>

      {/* pie de página */}
      <footer className="mt-16 sm:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-silver/60 font-tech tracking-wider text-center sm:text-left">
        <span>2026 ALBERTO GARCÍA MARTÍN</span>
        <span>DESARROLLADO CON ASTRO - REACT - TAILWIND</span>
      </footer>
    </div>
  );
}