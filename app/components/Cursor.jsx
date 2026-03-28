'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [hovered, setHovered] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const posRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)
  const ringRef = useRef({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })

  const blobX = useMotionValue(-100)
  const blobY = useMotionValue(-100)
  const springX = useSpring(blobX, { stiffness: 350, damping: 28, mass: 0.3 })
  const springY = useSpring(blobY, { stiffness: 350, damping: 28, mass: 0.3 })

  useEffect(() => {
    // Only enable on non-touch desktop devices
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isWide = window.innerWidth >= 1024
    if (hasTouch || !isWide) return
    setIsDesktop(true)

    const lerp = (a, b, t) => a + (b - a) * t
    const loop = () => {
      ringRef.current.x = lerp(ringRef.current.x, posRef.current.x, 0.12)
      ringRef.current.y = lerp(ringRef.current.y, posRef.current.y, 0.12)
      setRing({ x: ringRef.current.x, y: ringRef.current.y })
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      blobX.set(e.clientX)
      blobY.set(e.clientY)
    }
    const onEnter = (e) => { if (e.target.closest('a, button, [data-cursor]')) setHovered(true) }
    const onLeave = (e) => { if (e.target.closest('a, button, [data-cursor]')) setHovered(false) }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  if (!isDesktop) return null

  const size = hovered ? 100 : 56
  const ringSize = hovered ? 80 : 50

  return (
    <>
      {/* Inversion blob */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full z-[996]"
        style={{
          translateX: '-50%',
          translateY: '-50%',
          left: springX,
          top: springY,
          width: size,
          height: size,
          background: 'white',
          mixBlendMode: 'difference',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />

      {/* Rotating dashed ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[998]"
        style={{
          width: ringSize,
          height: ringSize,
          transform: `translate(${ring.x - ringSize / 2}px, ${ring.y - ringSize / 2}px)`,
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          style={{ border: '1.5px dashed rgba(255,255,255,0.45)', mixBlendMode: 'difference' }}
        />
      </div>

      {/* Outer soft ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none rounded-full z-[997]"
        style={{
          width: hovered ? 130 : 90,
          height: hovered ? 130 : 90,
          transform: `translate(${ring.x - (hovered ? 65 : 45)}px, ${ring.y - (hovered ? 65 : 45)}px)`,
          border: '1px solid rgba(255,255,255,0.07)',
          transition: 'width 0.4s ease, height 0.4s ease',
          boxShadow: hovered ? '0 0 20px 4px rgba(255,255,255,0.05)' : 'none',
        }}
      />
    </>
  )
}
