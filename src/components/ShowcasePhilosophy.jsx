import { motion } from 'framer-motion';

function SplitPanel({ title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0B0B0C] text-left md:h-80"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 transition-opacity duration-700 group-hover:opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: 'radial-gradient(60% 40% at 50% 50%, rgba(229,228,226,0.35), rgba(229,228,226,0))' }} />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="bg-clip-text text-4xl font-semibold tracking-widest text-transparent md:text-5xl" style={{backgroundImage:'linear-gradient(180deg,#E5E4E2,#AFAFAF,#6F6F73)'}}>
          YTC
        </span>
        <motion.span
          className="mt-2 text-sm uppercase tracking-[0.3em] text-zinc-200"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.span>
        <span className="mt-2 text-xs text-zinc-400">{subtitle}</span>
      </div>
    </button>
  );
}

export default function ShowcasePhilosophy() {
  return (
    <section className="relative w-full bg-white">
      {/* Brand Showcase */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h3 className="font-[EB Garamond] text-3xl text-zinc-900 md:text-4xl">The House Brands</h3>
        <p className="mt-3 max-w-2xl text-zinc-600">Two signatures, one vision — Core essentials and Exclusive statement pieces.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <SplitPanel title="RJVDI Core" subtitle="Everyday refinement" onClick={() => window.open('#', '_self')} />
          <SplitPanel title="RJVDI Exclusive" subtitle="Limited, expressive craft" onClick={() => window.open('#', '_self')} />
        </div>
      </div>

      {/* Philosophy */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <h3 className="font-[EB Garamond] text-3xl text-zinc-900 md:text-4xl">Our Philosophy</h3>
        <p className="mt-3 max-w-2xl text-zinc-600">Crafting Identity, Not Just Attire.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { t: 'Refinement', d: 'Quiet luxury with meticulous finish.' },
            { t: 'Heritage', d: 'Rooted in Indian craftsmanship.' },
            { t: 'Modernity', d: 'Designed for today’s rhythm.' },
          ].map((card, idx) => (
            <motion.div
              key={card.t}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-transform will-change-transform hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.08 * idx, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="font-[EB Garamond] text-2xl text-zinc-900">{card.t}</h4>
              <p className="mt-2 text-zinc-600">{card.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#0B0B0C] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
          <span className="bg-clip-text text-3xl font-semibold tracking-widest text-transparent" style={{backgroundImage:'linear-gradient(180deg,#E5E4E2,#AFAFAF,#6F6F73)'}}>
            YTC
          </span>
          <nav className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-300">
            <a href="#" className="hover:text-white">RJVDI Core</a>
            <a href="#" className="hover:text-white">RJVDI Exclusive</a>
            <a href="#" className="hover:text-white">Press</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
          <div className="mt-8 flex items-center gap-5">
            <div className="h-5 w-5 rounded-full bg-white/80 shadow-[0_0_20px] shadow-white/30 transition hover:bg-white" />
            <div className="h-5 w-5 rounded-full bg-white/80 shadow-[0_0_20px] shadow-white/30 transition hover:bg-white" />
            <div className="h-5 w-5 rounded-full bg-white/80 shadow-[0_0_20px] shadow-white/30 transition hover:bg-white" />
          </div>
        </div>
      </footer>
    </section>
  );
}
