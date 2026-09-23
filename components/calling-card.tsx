"use client"

import type React from "react"

import { useCallback, useRef, useState } from "react"
import { Mail, Check, Sun, Moon, Copy } from "lucide-react"
import { Turtle } from "./turtle"
import { CursorBubbles } from "./cursor-bubbles"
import { PondFooter } from "./pond-footer"
import { MoodMeter } from "./mood-meter"
import { FactsTicker } from "./facts-ticker"

const EMAIL = "gouriddhi13@gmail.com"

type Particle = { id: number; x: number; y: number; tx: number; ty: number; tr: number }

export function CallingCard() {
  const [night, setNight] = useState(false)
  const [copied, setCopied] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [patCount, setPatCount] = useState(0)
  const [patKey, setPatKey] = useState(0)
  const idRef = useRef(0)

  const burst = useCallback((x: number, y: number) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const next: Particle[] = Array.from({ length: 12 }, () => {
      const angle = Math.random() * Math.PI * 2
      const dist = 40 + Math.random() * 60
      return {
        id: idRef.current++,
        x,
        y,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist,
        tr: (Math.random() - 0.5) * 360,
      }
    })
    setParticles((prev) => [...prev, ...next])
    const ids = new Set(next.map((p) => p.id))
    window.setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !ids.has(p.id)))
    }, 750)
  }, [])

  const handleCopy = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      try {
        await navigator.clipboard.writeText(EMAIL)
        setCopied(true)
        burst(rect.left + rect.width / 2, rect.top + rect.height / 2)
        window.setTimeout(() => setCopied(false), 2000)
      } catch {
        setCopied(false)
      }
    },
    [burst],
  )

  const handlePet = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setPatCount((c) => c + 1)
      setPatKey((k) => k + 1)
      burst(rect.left + rect.width / 2, rect.top + rect.height / 2)
    },
    [burst],
  )

  const cardBase = night
    ? "border-stone-800 bg-stone-900/70 text-stone-100"
    : "border-stone-200 bg-white/80 text-stone-900"
  const headingColor = night ? "text-stone-100" : "text-stone-900"
  const bodyColor = night ? "text-stone-300" : "text-stone-600"
  const accent = night ? "text-emerald-400" : "text-emerald-700"

  return (
    <main
      className={`relative min-h-svh w-full overflow-hidden transition-colors duration-500 ${
        night ? "bg-stone-950" : "bg-stone-100"
      }`}
    >
      <CursorBubbles />

      {/* shell burst layer */}
      <div className="pointer-events-none fixed inset-0 z-50" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="animate-shell-burst absolute size-2.5 rounded-[40%] bg-emerald-500"
            style={
              {
                left: p.x,
                top: p.y,
                "--tx": `${p.tx}px`,
                "--ty": `${p.ty}px`,
                "--tr": `${p.tr}deg`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* soft blobs for depth */}
      <div
        className={`pointer-events-none absolute -left-24 top-10 size-72 rounded-full blur-3xl ${
          night ? "bg-emerald-500/15" : "bg-emerald-200/40"
        }`}
      />
      <div
        className={`pointer-events-none absolute -right-20 top-1/3 size-80 rounded-full blur-3xl ${
          night ? "bg-emerald-400/10" : "bg-emerald-100/60"
        }`}
      />

      {/* floating turtles across the whole page */}
      <Turtle className="animate-float-slow pointer-events-none absolute left-[8%] top-[14%] w-16 rotate-12 text-emerald-700/20" />
      <Turtle className="animate-swim pointer-events-none absolute right-[10%] top-[18%] w-20 -rotate-6 text-emerald-700/20" />
      <Turtle className="animate-float-slow pointer-events-none absolute bottom-[26%] left-[12%] w-24 -rotate-12 text-emerald-700/15 [animation-delay:1.5s]" />

      {/* day / night toggle */}
      <button
        type="button"
        onClick={() => setNight((n) => !n)}
        aria-label={night ? "Switch to day mode" : "Switch to night mode"}
        aria-pressed={night}
        className={`fixed right-5 top-5 z-40 flex size-11 items-center justify-center rounded-full border backdrop-blur transition-all hover:-translate-y-0.5 ${
          night
            ? "border-stone-700 bg-stone-900/80 text-emerald-300 hover:bg-stone-900"
            : "border-stone-200 bg-white/80 text-emerald-700 hover:bg-white"
        }`}
      >
        {night ? <Sun className="size-5" /> : <Moon className="size-5" />}
      </button>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* badge */}
        <p
          className={`animate-rise-in mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur ${
            night ? "border-stone-700 bg-stone-900/70 text-emerald-300" : "border-emerald-200 bg-white/70 text-emerald-800"
          }`}
        >
          <Turtle className="animate-wiggle w-6 text-emerald-600" />
          Hi, I&apos;m
        </p>

        {/* name */}
        <h1
          className={`animate-rise-in font-[family-name:var(--font-fredoka)] text-6xl font-bold tracking-tight text-balance sm:text-7xl [animation-delay:0.05s] ${headingColor}`}
        >
          Gouriddhi Pun
        </h1>

        <p className={`animate-rise-in mt-4 font-[family-name:var(--font-fredoka)] text-xl font-medium [animation-delay:0.1s] ${accent}`}>
          Undergraduate CS student at Texas State University
        </p>

        {/* pet the turtle */}
        <div className="animate-rise-in mt-8 flex flex-col items-center [animation-delay:0.12s]">
          <button
            type="button"
            onClick={handlePet}
            aria-label="Pet the turtle"
            className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span key={patKey} className="animate-scoot block">
              <Turtle className="w-20 text-emerald-600 transition-transform hover:scale-105" />
            </span>
          </button>
          <span className={`mt-2 text-xs ${bodyColor}`}>
            {patCount === 0 ? "psst — pet the turtle" : `you pet me ${patCount} ${patCount === 1 ? "time" : "times"}`}
          </span>
        </div>

        {/* turtle facts ticker */}
        <div className="animate-rise-in mt-8 w-full [animation-delay:0.15s]">
          <FactsTicker night={night} />
        </div>

        {/* mood meter */}
        <div className="animate-rise-in mt-4 w-full [animation-delay:0.18s]">
          <MoodMeter night={night} onCheer={burst} />
        </div>

        {/* intro cards */}
        <div className="mt-4 grid w-full gap-4 text-left sm:grid-cols-2">
          <div className={`animate-rise-in rounded-3xl border p-6 shadow-sm backdrop-blur [animation-delay:0.2s] ${cardBase}`}>
            <h2 className={`mb-2 font-[family-name:var(--font-fredoka)] text-lg font-semibold ${headingColor}`}>
              A little more
            </h2>
            <p className={`leading-relaxed text-pretty ${bodyColor}`}>
              I&apos;m recently obsessed with turtles — hopefully I can adopt one as a pet and be a turtle mom
              someday.
            </p>
          </div>

          <div className={`animate-rise-in rounded-3xl border p-6 shadow-sm backdrop-blur [animation-delay:0.24s] ${cardBase}`}>
            <h2 className={`mb-2 font-[family-name:var(--font-fredoka)] text-lg font-semibold ${headingColor}`}>
              Fair warning
            </h2>
            <p className={`leading-relaxed text-pretty ${bodyColor}`}>
              I love yapping, but I take a little while to warm up. You&apos;ll probably catch me in my sourest
              straight face first — but I&apos;ve got a good smile if you make me smile.
            </p>
          </div>
        </div>

        {/* contact */}
        <div className="animate-rise-in mt-10 flex flex-wrap items-center justify-center gap-3 [animation-delay:0.28s]">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-700 px-6 py-3 font-[family-name:var(--font-fredoka)] text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
          >
            <Mail className="size-5 transition-transform group-hover:scale-110" aria-hidden="true" />
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Email copied" : "Copy email address"}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 font-[family-name:var(--font-fredoka)] text-sm font-semibold transition-all hover:-translate-y-0.5 ${
              night
                ? "border-stone-700 bg-stone-900/70 text-emerald-300 hover:bg-stone-900"
                : "border-emerald-200 bg-white/80 text-emerald-800 hover:bg-white"
            }`}
          >
            {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <PondFooter night={night} />
    </main>
  )
}
