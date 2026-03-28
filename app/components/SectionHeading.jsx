'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function SectionHeading({ label, title }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // font size: big → normal
  const fontSize = useTransform(scrollYProgress, [0, 0.25, 0.5], ['12vw', '12vw', '4vw'])
  const opacity  = useTransform(scrollYProgress, [0.05, 0.15], [0, 1])
  const y        = useTransform(scrollYProgress, [0.05, 0.25], [60, 0])

  return (
    <div ref={ref} className="relative w-full overflow-hidden mb-16">
      {/* Big fullscreen heading */}
      <motion.div
        style={{ opacity, y }}
        className="w-full"
      >
        <motion.p
          style={{ opacity, color: 'var(--accent)' }}
          className="text-[10px] tracking-[0.5em] uppercase mb-4"
        >
          {label}
        </motion.p>
        <motion.h2
          style={{ fontSize }}
          className="font-black uppercase text-white leading-none whitespace-nowrap overflow-hidden"
        >
          {title}
        </motion.h2>
      </motion.div>
    </div>
  )
}
