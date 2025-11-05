import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => {
      onFinish?.();
    }, 2200);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0C]"
        aria-label="Intro Splash"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Monogram circle backdrop */}
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-700 blur-2xl opacity-40" />

          {/* YTC Monogram */}
          <motion.div
            initial={{ letterSpacing: '-0.2em' }}
            animate={{ letterSpacing: '0.02em' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-6xl md:text-8xl font-serif tracking-widest"
            style={{ fontFamily: 'EB Garamond, serif' }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-200">
              YTC
            </span>
          </motion.div>

          {/* Subtle sheen sweep */}
          <motion.div
            initial={{ x: '-120%' }}
            animate={{ x: '120%' }}
            transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
            className="pointer-events-none absolute -inset-10 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
