import { motion } from 'framer-motion';

export default function HeritageSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-28 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
        >
          <div>
            <h2 className="font-[EB Garamond] text-3xl text-zinc-900 md:text-4xl">
              The Heritage
            </h2>
            <p className="mt-6 max-w-md text-zinc-700">
              Founded with a vision of refinement, YTC curates timeless Indian excellence.
            </p>
          </div>
        </motion.div>

        {/* Metallic fabric inspired loop using animated gradients */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="relative aspect-video overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-zinc-100 to-neutral-300" />
          <div className="absolute inset-0 animate-[sheen_6s_linear_infinite] bg-[radial-gradient(1200px_200px_at_-200px_-200px,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)] opacity-60" />
          <div className="absolute inset-0 animate-[flow_10s_ease-in-out_infinite] bg-[conic-gradient(from_90deg,rgba(0,0,0,0.08),rgba(255,255,255,0)_30%,rgba(0,0,0,0.06)_60%,rgba(255,255,255,0)_100%)]" />
          <style>{`
            @keyframes sheen { 0%{transform:translateX(-20%)} 50%{transform:translateX(120%)} 100%{transform:translateX(120%)} }
            @keyframes flow { 0%{transform:rotate(0deg)} 50%{transform:rotate(180deg)} 100%{transform:rotate(360deg)} }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
