import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#0B0B0C] py-16 text-zinc-200" aria-label="Footer">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <div
          className="text-3xl font-serif tracking-widest"
          style={{ fontFamily: 'EB Garamond, serif' }}
        >
          YTC
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-300">
          <a className="hover:text-white" href="#">RJVDI Core</a>
          <a className="hover:text-white" href="#">RJVDI Exclusive</a>
          <a className="hover:text-white" href="#">Press</a>
          <a className="hover:text-white" href="#">Contact</a>
        </nav>

        <div className="mt-4 flex items-center gap-4">
          <motion.a whileHover={{ scale: 1.08 }} className="text-zinc-300 hover:text-white" href="#" aria-label="Instagram">
            <Instagram size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.08 }} className="text-zinc-300 hover:text-white" href="#" aria-label="Email">
            <Mail size={20} />
          </motion.a>
        </div>

        <p className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Yogesh Trading Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
