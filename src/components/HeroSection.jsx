import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: relX * 6, y: relY * -6 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0B0B0C] to-[#E5E4E2]"
    >
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle dark gradient at bottom to ensure contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="select-none font-[EB Garamond] text-4xl leading-tight text-white drop-shadow md:text-6xl"
          style={{
            textShadow: '0 2px 24px rgba(0,0,0,0.35)',
          }}
          animate={{ rotateX: tilt.y, rotateY: tilt.x }}
          transition={{ type: 'spring', stiffness: 60, damping: 12 }}
        >
          Yogesh Trading Company
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-sm text-zinc-200 md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Curating timeless Indian excellence with a modern lens.
        </motion.p>

        {/* Metallic sheen hover over the title area */}
        <motion.div
          className="pointer-events-none mt-10 h-24 w-56 rounded-full"
          initial={{ opacity: 0 }}
          whileHover={{}}
          animate={{
            background:
              'radial-gradient(120px 24px at 50% 50%, rgba(229,228,226,0.55), rgba(229,228,226,0.0))',
            opacity: 0.7,
          }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center">
          <div className="h-8 w-px bg-white/30" />
          <motion.span
            className="mt-3 text-xs uppercase tracking-[0.3em] text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            Scroll
          </motion.span>
        </div>
      </div>
    </section>
  );
}
