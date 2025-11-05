import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

function Modal({ open, onClose, title }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white/95 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-medium text-zinc-800" style={{ fontFamily: 'EB Garamond, serif' }}>{title}</h3>
              <button onClick={onClose} className="rounded-md px-3 py-1 text-sm text-zinc-600 hover:bg-zinc-100">Close</button>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-zinc-100">
              {/* Faux video intro using animated gradient */}
              <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[conic-gradient(from_0deg,rgba(0,0,0,0.06),rgba(0,0,0,0.12),rgba(0,0,0,0.06))]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-zinc-700 shadow">
                  <Play size={18} />
                  <span>Intro Demo</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-600">
              A curated line celebrating precision cuts, premium textiles, and an understated metropolitan polish.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function BrandShowcase() {
  const [open, setOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState('');

  const handleOpen = (title) => {
    setActiveTitle(title);
    setOpen(true);
  };

  const Card = ({ title, monogram, gradient }) => (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => handleOpen(title)}
      className={`group relative h-[360px] w-full overflow-hidden rounded-2xl ${gradient} text-left`}
    >
      <div className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      {/* Monogram to full logo transition */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end p-8 text-white">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            whileHover={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-5xl font-serif"
            style={{ fontFamily: 'EB Garamond, serif' }}
          >
            {monogram}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="-mt-4 text-3xl font-serif"
            style={{ fontFamily: 'EB Garamond, serif' }}
          >
            {title}
          </motion.div>
        </div>
        <p className="mt-4 max-w-sm text-sm text-zinc-200">
          Enter a world of quiet luxury and precision tailoring.
        </p>
      </div>
      {/* soft sheen */}
      <div className="pointer-events-none absolute -inset-10 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.button>
  );

  return (
    <section className="relative w-full bg-[#0B0B0C] py-24" aria-label="Brand Showcase">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <Card
          title="RJVDI Core"
          monogram="RJ"
          gradient="bg-[radial-gradient(120%_80%_at_100%_0%,#111_0%,#1b1b1c_30%,#2a2a2c_60%,#0B0B0C_100%)]"
        />
        <Card
          title="RJVDI Exclusive"
          monogram="RJX"
          gradient="bg-[radial-gradient(120%_80%_at_0%_0%,#111_0%,#1b1b1c_30%,#2a2a2c_60%,#0B0B0C_100%)]"
        />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={activeTitle} />
    </section>
  );
}
