'use client'
import { useEffect } from 'react'

export default function CursorTextEffect() {
  useEffect(() => {
    const targets = document.querySelectorAll('h1, h2, h3, p, span, li, button, a')

    const handlers = []

    targets.forEach((el) => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 120

        if (dist < maxDist) {
          const scale = 1 + (1 - dist / maxDist) * 0.12
          el.style.transform = `scale(${scale})`
          el.style.transition = 'transform 0.15s ease'
        } else {
          el.style.transform = 'scale(1)'
          el.style.transition = 'transform 0.4s ease'
        }
      }

      window.addEventListener('mousemove', onMove)
      handlers.push({ el, onMove })
    })

    return () => {
      handlers.forEach(({ el, onMove }) => {
        window.removeEventListener('mousemove', onMove)
        el.style.transform = ''
        el.style.transition = ''
      })
    }
  }, [])

  return null
}
