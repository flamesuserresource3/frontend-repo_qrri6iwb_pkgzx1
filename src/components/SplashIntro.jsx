import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.section
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0C]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            className="relative flex h-40 w-40 items-center justify-center select-none"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Metallic ring glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-900 via-slate-600 to-zinc-200 opacity-30 blur-2xl" />

            {/* YTC Monogram */}
            <motion.div
              className="relative rounded-full bg-gradient-to-b from-[#1b1b1c] to-[#2b2b2e] p-[2px]"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[#0F0F10]">
                <motion.span
                  className="bg-clip-text text-5xl font-semibold tracking-wider text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg, #E5E4E2 0%, #C0C0C0 45%, #8E8E90 100%)',
                  }}
                  initial={{ letterSpacing: '0.7em', opacity: 0 }}
                  animate={{ letterSpacing: '0.15em', opacity: 1 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  YTC
                </motion.span>
              </div>
            </motion.div>

            {/* Soft chime hint: visual pulse (no audio autoplay for UX policies) */}
            <motion.div
              className="absolute h-40 w-40 rounded-full"
              initial={{ boxShadow: '0 0 0 0 rgba(229,228,226,0.0)' }}
              animate={{ boxShadow: ['0 0 0 0 rgba(229,228,226,0.0)', '0 0 0 18px rgba(229,228,226,0.07)', '0 0 0 0 rgba(229,228,226,0.0)'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
