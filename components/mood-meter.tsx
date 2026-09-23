"use client"

import { useState } from "react"

const MOODS = [
  {
    label: "in my sour era",
    hint: "(this is my resting face, don't take it personally)",
    // downturned mouth
    mouth: "M22 34 Q32 27 42 34",
    brow: true,
  },
  {
    label: "warming up...",
    hint: "(getting comfortable, give me a sec)",
    mouth: "M22 33 H42",
    brow: false,
  },
  {
    label: "okay, you got a smile",
    hint: "(told you I had a good one)",
    mouth: "M22 31 Q32 40 42 31",
    brow: false,
  },
] as const

function Face({ moodIndex, night }: { moodIndex: number; night: boolean }) {
  const mood = MOODS[moodIndex]
  return (
    <svg viewBox="0 0 64 52" className="w-9" aria-hidden="true">
      <circle
        cx="24"
        cy="22"
        r="2.4"
        className={night ? "fill-emerald-300" : "fill-emerald-700"}
      />
      <circle
        cx="40"
        cy="22"
        r="2.4"
        className={night ? "fill-emerald-300" : "fill-emerald-700"}
      />
      {mood.brow && (
        <path
          d="M20 15 L28 17 M44 15 L36 17"
          className={night ? "stroke-emerald-300" : "stroke-emerald-700"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
      <path
        d={mood.mouth}
        className={night ? "stroke-emerald-300" : "stroke-emerald-700"}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function MoodMeter({
  night,
  onCheer,
}: {
  night: boolean
  onCheer: (x: number, y: number) => void
}) {
  const [index, setIndex] = useState(0)
  const mood = MOODS[index]

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = (index + 1) % MOODS.length
    setIndex(next)
    // celebrate when they reach the smile
    if (next === MOODS.length - 1) {
      const rect = e.currentTarget.getBoundingClientRect()
      onCheer(rect.left + rect.width / 2, rect.top + rect.height / 2)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`My current mood: ${mood.label}. Click to change it.`}
      className={`group flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
        night
          ? "border-stone-800 bg-stone-900/70 hover:bg-stone-900"
          : "border-stone-200 bg-white/80 hover:bg-white"
      } backdrop-blur`}
    >
      <span
        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${
          night ? "bg-emerald-950" : "bg-emerald-100"
        }`}
      >
        <Face moodIndex={index} night={night} />
      </span>
      <span className="min-w-0">
        <span
          className={`block font-[family-name:var(--font-fredoka)] text-sm font-semibold uppercase tracking-wide ${
            night ? "text-emerald-400" : "text-emerald-700"
          }`}
        >
          Mood meter
        </span>
        <span
          className={`block font-[family-name:var(--font-fredoka)] text-lg font-medium ${
            night ? "text-stone-100" : "text-stone-900"
          }`}
        >
          {mood.label}
        </span>
        <span className={`block text-xs ${night ? "text-stone-400" : "text-stone-500"}`}>{mood.hint}</span>
      </span>
    </button>
  )
}
