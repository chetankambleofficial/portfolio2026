'use client'
import { motion, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '500', '700', '900'] })

export default function Landing() {
  const [scope, animate] = useAnimate()
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const w = window.innerWidth
    setIsMobile(w < 640)
    setIsTablet(w >= 640 && w < 1024)
  }, [])

  useEffect(() => {
    const w = window.innerWidth
    const mobile = w < 640
    const tablet = w >= 640 && w < 1024

    // final font size and position based on breakpoint
    const finalFontSize = mobile ? '8vw' : tablet ? '5vw' : '5.5vw'
    const finalLeft = mobile ? '50%' : tablet ? '50%' : '16.66%'
    const finalTop = mobile ? '18%' : tablet ? '15%' : '50%'
    const finalX = mobile ? '-50%' : tablet ? '-50%' : '-50%'
    const finalY = mobile ? '0%' : tablet ? '0%' : '-50%'

    const sequence = async () => {
      await animate('#name-block', { opacity: 1 }, { duration: 0.01 })
      await animate('#bg-image', { opacity: 1, scale: 1 }, { duration: 1.0, ease: 'easeOut', delay: 0.4 })
      await Promise.all([
        animate('#name-block', {
          top: finalTop,
          left: finalLeft,
          x: finalX,
          y: finalY,
          fontSize: finalFontSize,
        }, { duration: 1.0, ease: [0.76, 0, 0.24, 1] }),
        animate('#bg-image', { opacity: 0 }, { duration: 0.6, ease: 'easeIn' }),
      ])
      await animate('#final-layout', { opacity: 1, scale: 1 }, { duration: 0.7, ease: 'easeOut' })
      await animate('#name-block', { opacity: 0 }, { duration: 0.01 })
    }

    sequence()
  }, [])

  return (
    <div ref={scope} className={`relative w-full h-[80vh] bg-black overflow-hidden ${inter.className}`}>

      {/* BG Image */}
      <motion.div
        id="bg-image"
        className="absolute inset-0 z-10"
        style={{ opacity: 0, scale: 1.12 }}
      >
        <img
          src="/images/image.png"
          alt="Chetan Kamble"
          className="w-full h-full object-cover grayscale contrast-110 brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      </motion.div>

      {/* Animated Name */}
      <motion.div
        id="name-block"
        className="absolute z-30 flex flex-col items-start leading-none font-black uppercase"
        style={{ opacity: 0, top: '50%', left: '50%', x: '-50%', y: '-50%', fontSize: '14vw' }}
      >
        <span className="text-white" style={{ fontSize: '1em' }}>Chetan</span>
        <span className="text-gray-500" style={{ fontSize: '1em' }}>Prakash</span>
        <span className="text-gray-700" style={{ fontSize: '1em' }}>Kamble</span>
      </motion.div>

      {/* Final Layout */}
      <motion.div
        id="final-layout"
        className="absolute inset-0 z-40 bg-black flex items-center justify-center px-4 md:px-8 lg:px-12"
        style={{ opacity: 0, scale: 1.06 }}
      >
        {/* Mobile layout */}
        <div className="flex flex-col w-full h-full sm:hidden py-8 gap-6 overflow-y-auto">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase mb-3" style={{ color: 'var(--accent)', opacity: 0.7 }}>Portfolio — 2025</p>
            <h1 className="text-5xl font-black uppercase text-white leading-none">Chetan</h1>
            <h1 className="text-5xl font-black uppercase text-gray-500 leading-none">Prakash</h1>
            <h1 className="text-5xl font-black uppercase text-gray-700 leading-none">Kamble</h1>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-[1px]" style={{ background: 'var(--accent)', opacity: 0.5 }} />
              <span className="text-[9px] tracking-[0.4em] uppercase font-semibold" style={{ color: 'var(--accent)', opacity: 0.8 }}>Full Stack Dev</span>
            </div>
          </div>
          <div className="w-full h-[35vh] overflow-hidden">
            <img src="/images/image.png" alt="Chetan Kamble" className="w-full h-full object-cover object-top grayscale contrast-110" />
          </div>
          <div className="flex flex-col gap-4 border-t border-gray-800 pt-4">
            <p className="text-sm text-white uppercase tracking-wider leading-snug">
              Crafting digital experiences that are bold, clean & scalable.
            </p>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)', opacity: 0.6 }}>
              React · Next.js · Node.js · REST APIs · UI/UX
            </p>
            <div className="flex gap-3">
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 py-2.5 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase">View Work</button>
              <a href="/resume/resume 6.pdf" download className="flex-1 py-2.5 border border-gray-700 text-[10px] tracking-[0.3em] text-gray-400 uppercase text-center">Resume</a>
            </div>
          </div>
        </div>

        {/* Tablet layout */}
        <div className="hidden sm:flex lg:hidden flex-col w-full h-full py-10 gap-0">
          <div className="flex items-end justify-between border-b border-gray-800 pb-6">
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase mb-3" style={{ color: 'var(--accent)', opacity: 0.7 }}>Portfolio — 2025</p>
              <h1 className="text-[clamp(3rem,7vw,5rem)] font-black uppercase text-white leading-none">Chetan</h1>
              <h1 className="text-[clamp(3rem,7vw,5rem)] font-black uppercase text-gray-500 leading-none">Prakash</h1>
              <h1 className="text-[clamp(3rem,7vw,5rem)] font-black uppercase text-gray-700 leading-none">Kamble</h1>
            </div>
            <div className="w-[40%] h-[40vh] overflow-hidden">
              <img src="/images/image.png" alt="Chetan Kamble" className="w-full h-full object-cover object-top grayscale contrast-110" />
            </div>
          </div>
          <div className="flex gap-6 pt-6">
            <div className="flex-1 border-r border-gray-800 pr-6">
              <p className="text-[9px] tracking-[0.5em] text-gray-600 uppercase mb-2">About</p>
              <p className="text-base text-white uppercase tracking-wider leading-snug">
                Crafting digital experiences that are bold, clean & scalable.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)', opacity: 0.6 }}>React · Next.js · Node.js · REST APIs · UI/UX</p>
              <div className="flex gap-3 mt-auto">
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 py-2.5 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase">View Work</button>
                <a href="/resume/resume 6.pdf" download className="flex-1 py-2.5 border border-gray-700 text-[10px] tracking-[0.3em] text-gray-400 uppercase text-center">Resume</a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-3 w-full max-w-[1400px] h-[85vh]">
          <div className="flex flex-col justify-center pr-10 border-r border-gray-800">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: 'var(--accent)', opacity: 0.7 }}>Portfolio — 2025</p>
            <div className="leading-[0.95]">
              <h1 className="text-[clamp(2.5rem,5.5vw,6rem)] font-black uppercase text-white">Chetan</h1>
              <h1 className="text-[clamp(2.5rem,5.5vw,6rem)] font-black uppercase text-gray-500">Prakash</h1>
              <h1 className="text-[clamp(2.5rem,5.5vw,6rem)] font-black uppercase text-gray-700">Kamble</h1>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-[1px]" style={{ background: 'var(--accent)', opacity: 0.5 }} />
              <span className="text-[10px] tracking-[0.4em] uppercase font-semibold" style={{ color: 'var(--accent)', opacity: 0.8 }}>Full Stack Dev</span>
            </div>
          </div>
          <div className="flex items-end justify-center px-4 overflow-hidden">
            <img src="/images/image.png" alt="Chetan Kamble" className="w-full h-full object-cover object-top grayscale contrast-110 brightness-90" />
          </div>
          <div className="flex flex-col justify-center pl-10 border-l border-gray-800 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.5em] text-gray-600 uppercase mb-2">About</p>
              <p className="text-xl md:text-2xl text-white leading-snug uppercase tracking-wider">
                Crafting digital experiences that are bold, clean & scalable.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase mb-2" style={{ color: 'var(--accent)', opacity: 0.6 }}>Expertise</p>
              <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
                React · Next.js · Node.js · Databases · REST APIs · UI/UX
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-800" />
            <div className="flex flex-col gap-3">
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3 bg-white text-black text-xs font-bold tracking-[0.3em] uppercase hover:bg-gray-100 transition-all duration-300">View Work</button>
              <a href="/resume/resume 6.pdf" download className="w-full py-3 border border-gray-700 text-xs tracking-[0.3em] text-gray-400 uppercase hover:border-white hover:text-white transition-all duration-300 text-center block">Download Resume</a>
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)', opacity: 0.45 }}>Available for freelance work</p>
          </div>
        </div>

      </motion.div>
    </div>
  )
}
