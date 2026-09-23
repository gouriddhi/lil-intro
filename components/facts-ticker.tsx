"use client"

import { useEffect, useState } from "react"
import { Turtle } from "./turtle"

const FACTS = [
  "A turtle's shell is made of about 50 bones, all fused together.",
  "Some sea turtles can hold their breath underwater for hours.",
  "Turtles have been around for over 200 million years.",
  "A group of turtles is called a bale.",
  "Sea turtles often return to the very beach where they hatched.",
  "The leatherback is the largest turtle — it can top 1,500 lbs.",
  "A turtle's shell can feel touch, just like your skin.",
]

export function FactsTicker({ night }: { night: boolean }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const delay = media.matches ? 8000 : 4500
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % FACTS.length)
    }, delay)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div
      className={`flex items-center gap-3 rounded-full border px-5 py-3 backdrop-blur ${
        night ? "border-stone-800 bg-stone-900/70" : "border-stone-200 bg-white/80"
      }`}
    >
      <Turtle className="animate-wiggle w-7 shrink-0 text-emerald-500" />
      <span className={`text-xs font-semibold uppercase tracking-wide ${night ? "text-emerald-400" : "text-emerald-700"}`}>
        Turtle fact
      </span>
      <span
        key={index}
        className={`animate-ticker-in min-w-0 flex-1 text-sm text-pretty ${night ? "text-stone-300" : "text-stone-600"}`}
      >
        {FACTS[index]}
      </span>
    </div>
  )
}
