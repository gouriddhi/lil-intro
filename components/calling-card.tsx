import { Mail } from "lucide-react"

function Turtle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 44"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* legs */}
      <ellipse cx="18" cy="34" rx="5" ry="6" fill="currentColor" opacity="0.55" />
      <ellipse cx="46" cy="34" rx="5" ry="6" fill="currentColor" opacity="0.55" />
      {/* head */}
      <circle cx="55" cy="20" r="7" fill="currentColor" opacity="0.7" />
      <circle cx="57" cy="18" r="1.2" fill="#fafaf9" />
      {/* tail */}
      <path d="M9 22 L2 20 L9 26 Z" fill="currentColor" opacity="0.55" />
      {/* shell */}
      <path
        d="M12 24 C12 12 22 6 32 6 C42 6 50 12 50 24 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* shell pattern */}
      <path d="M31 8 L31 24 M20 20 L44 20 M22 13 L40 13" stroke="#fafaf9" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function CallingCard() {
  return (
    <article className="relative w-full max-w-xl overflow-hidden bg-stone-50 border border-stone-200 rounded-2xl shadow-sm p-8 sm:p-12">
      {/* decorative turtles */}
      <Turtle className="pointer-events-none absolute -top-4 -right-3 w-24 rotate-12 text-emerald-700/15" />
      <Turtle className="pointer-events-none absolute bottom-6 -left-6 w-28 -rotate-12 text-emerald-700/10" />
      <Turtle className="pointer-events-none absolute top-1/2 right-4 w-14 rotate-6 text-emerald-700/10" />

      <div className="relative">
        <header className="mb-8">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">
            <Turtle className="w-6 text-emerald-700/70" />
            Calling Card
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 text-balance">
            Gouriddhi Pun
          </h1>
          <p className="mt-3 text-base text-stone-500">
            Undergraduate CS student at Texas State University
          </p>
        </header>

        <div className="h-px w-full bg-stone-200" aria-hidden="true" />

        <section className="mt-8 space-y-6 text-stone-700 leading-relaxed">
          <div>
            <h2 className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-2">A little more</h2>
            <p className="text-pretty">
              I&apos;m recently obsessed with turtles — hopefully I can adopt one as a pet and be a
              turtle mom someday.
            </p>
          </div>

          <div>
            <p className="text-pretty">
              I love yapping, but I take a little while to warm up. At the beginning you&apos;ll
              probably catch me in my sourest straight face — but I&apos;ve got a good smile if you
              make me smile.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <h2 className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-3">How to reach me</h2>
          <a
            href="mailto:gouriddhi13@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-800 hover:text-stone-50 hover:border-stone-800"
          >
            <Mail className="size-4" aria-hidden="true" />
            gouriddhi13@gmail.com
          </a>
        </div>
      </div>
    </article>
  )
}
