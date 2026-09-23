"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type Bubble = { id: number; x: number; y: number; size: number }

export function CursorBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const idRef = useRef(0)
  const lastRef = useRef(0)

  const handleMove = useCallback((e: PointerEvent) => {
    const now = performance.now()
    if (now - lastRef.current < 90) return
    lastRef.current = now

    const id = idRef.current++
    const bubble: Bubble = {
      id,
      x: e.clientX,
      y: e.clientY,
      size: 6 + Math.random() * 10,
    }
    setBubbles((prev) => [...prev.slice(-16), bubble])
    window.setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id))
    }, 1300)
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) return
    // Skip on touch-only devices where there is no meaningful cursor
    if (!window.matchMedia("(pointer: fine)").matches) return

    window.addEventListener("pointermove", handleMove)
    return () => window.removeEventListener("pointermove", handleMove)
  }, [handleMove])

  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="animate-bubble-up absolute rounded-full border border-emerald-300/70 bg-emerald-200/30"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}
