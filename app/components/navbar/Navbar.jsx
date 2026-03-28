'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Experience', 'Projects', 'Skills', 'Achievements']

const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`px-6 md:px-12 lg:px-16 py-5 flex justify-between items-center sticky top-0 z-50 transition-all duration-500
          backdrop-blur-xl border-b
          ${scrolled
            ? 'bg-black/50 border-white/10 shadow-[0_1px_40px_0_rgba(255,255,255,0.04)]'
            : 'bg-black/20 border-white/5'
          }`}
        style={{
          WebkitBackdropFilter: 'blur(24px)',
          backdropFilter: 'blur(24px)',
          background: scrolled
            ? 'linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.55) 100%)'
            : 'linear-gradient(to bottom, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.20) 100%)',
        }}
      >
        <h1 className="text-sm tracking-[0.3em] font-semibold text-white uppercase">
          Chetan Kamble
        </h1>

        <ul className="hidden md:flex gap-8 text-xs tracking-widest text-gray-500 uppercase">
          {links.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="relative uppercase tracking-widest text-xs transition-colors duration-200 hover:text-white group/link"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] group-hover/link:w-full transition-all duration-300" style={{ background: 'var(--accent)' }} />
              </button>
            </li>
          ))}
        </ul>

        <a
          href="/resume/resume 6.pdf"
          download
          className="hidden md:block px-4 py-2 border border-gray-700 text-xs tracking-widest text-gray-400 transition-all duration-200 uppercase"
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; }}
        >
          Resume
        </a>

        {/* Hamburger */}
        <button className="md:hidden z-50 flex flex-col gap-[5px]" onClick={() => setOpen(true)}>
          <span className="block w-6 h-[1.5px] bg-white" />
          <span className="block w-4 h-[1.5px] bg-gray-500" />
          <span className="block w-6 h-[1.5px] bg-white" />
        </button>
      </nav>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black z-[100] flex flex-col md:hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-900">
              <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: 'var(--accent)', opacity: 0.6 }}>Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex items-center justify-center border border-gray-800 text-gray-400 hover:border-white hover:text-white transition-all duration-200 text-lg"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col px-8 pt-8 flex-1">
              {links.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
                  className="group border-b border-gray-900"
                >
                  <button
                    onClick={() => { scrollTo(item); setOpen(false) }}
                    className="flex items-center justify-between py-5 w-full"
                  >
                    <span className="text-3xl font-black uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                    <span className="transition-all duration-300 text-lg group-hover:translate-x-1" style={{ color: 'var(--accent)', opacity: 0.5 }}>→</span>
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="px-8 py-8 border-t border-gray-900 flex flex-col gap-3"
            >
              <a
                href="/resume/resume 6.pdf"
                download
                className="w-full py-3 bg-white text-black text-xs font-bold tracking-[0.3em] uppercase hover:bg-gray-200 transition-all duration-300 text-center block"
              >
                Download Resume
              </a>
              <p className="text-[10px] tracking-[0.4em] uppercase text-center" style={{ color: 'var(--accent)', opacity: 0.5 }}>
                Available for freelance
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
