'use client'

import { useEffect, useRef } from 'react'

export function AnimatedMeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const drawGradient = () => {
      const width = canvas.width
      const height = canvas.height

      // Create multiple animated gradients
      const gradient1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time * 0.001) * 100,
        height * 0.3 + Math.cos(time * 0.0015) * 100,
        0,
        width * 0.3,
        height * 0.3,
        width * 0.6
      )
      gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.3)')
      gradient1.addColorStop(1, 'rgba(99, 102, 241, 0)')

      const gradient2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(time * 0.0012) * 100,
        height * 0.4 + Math.sin(time * 0.001) * 100,
        0,
        width * 0.7,
        height * 0.4,
        width * 0.6
      )
      gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.3)')
      gradient2.addColorStop(1, 'rgba(168, 85, 247, 0)')

      const gradient3 = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.0008) * 150,
        height * 0.7 + Math.cos(time * 0.001) * 150,
        0,
        width * 0.5,
        height * 0.7,
        width * 0.5
      )
      gradient3.addColorStop(0, 'rgba(236, 72, 153, 0.2)')
      gradient3.addColorStop(1, 'rgba(236, 72, 153, 0)')

      // Clear and draw
      ctx.fillStyle = 'rgba(15, 23, 42, 0.02)'
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, width, height)

      time++
      animationFrameId = requestAnimationFrame(drawGradient)
    }

    drawGradient()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-10"
      style={{ zIndex: 0 }}
    />
  )
}
