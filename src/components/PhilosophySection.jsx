import { motion } from 'framer-motion';

const items = [
  { title: 'Refinement', desc: 'An unwavering commitment to detail and proportion.' },
  { title: 'Heritage', desc: 'Honoring craft traditions with contemporary sensibility.' },
  { title: 'Modernity', desc: 'Designs that feel effortless, relevant, and enduring.' },
];

export default function PhilosophySection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-24" aria-label="Our Philosophy">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="text-center text-3xl md:text-4xl font-serif text-zinc-900"
          style={{ fontFamily: 'EB Garamond, serif' }}
        >
          Crafting Identity, Not Just Attire.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/60 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-medium text-zinc-900" style={{ fontFamily: 'EB Garamond, serif' }}>{it.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{it.desc}</p>
              <div className="mt-6 h-1 w-12 origin-left scale-x-0 bg-zinc-900 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
