import { Mail } from "lucide-react"

function Turtle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 44" fill="none" className={className} aria-hidden="true">
      {/* legs */}
      <ellipse cx="18" cy="34" rx="5" ry="6" fill="currentColor" opacity="0.55" />
      <ellipse cx="46" cy="34" rx="5" ry="6" fill="currentColor" opacity="0.55" />
      {/* head */}
      <circle cx="55" cy="20" r="7" fill="currentColor" opacity="0.7" />
      <circle cx="57" cy="18" r="1.2" fill="#fafaf9" />
      {/* tail */}
      <path d="M9 22 L2 20 L9 26 Z" fill="currentColor" opacity="0.55" />
      {/* shell */}
      <path d="M12 24 C12 12 22 6 32 6 C42 6 50 12 50 24 Z" fill="currentColor" opacity="0.85" />
      {/* shell pattern */}
      <path
        d="M31 8 L31 24 M20 20 L44 20 M22 13 L40 13"
        stroke="#fafaf9"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

export function CallingCard() {
  return (
    <main className="relative min-h-svh w-full overflow-hidden bg-stone-100">
      {/* soft blobs for depth */}
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-emerald-100/60 blur-3xl" />

      {/* floating turtles across the whole page */}
      <Turtle className="animate-float-slow pointer-events-none absolute left-[8%] top-[14%] w-16 rotate-12 text-emerald-700/20" />
      <Turtle className="animate-swim pointer-events-none absolute right-[10%] top-[20%] w-20 -rotate-6 text-emerald-700/20" />
      <Turtle className="animate-float-slow pointer-events-none absolute bottom-[16%] left-[14%] w-24 -rotate-12 text-emerald-700/15 [animation-delay:1.5s]" />
      <Turtle className="animate-swim pointer-events-none absolute bottom-[10%] right-[16%] w-14 rotate-6 text-emerald-700/25 [animation-delay:0.8s]" />

      <div className="relative mx-auto flex min-h-svh max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
        {/* badge */}
        <p className="animate-rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 backdrop-blur">
          <Turtle className="animate-wiggle w-6 text-emerald-600" />
          Hi, I&apos;m
        </p>

        {/* name */}
        <h1 className="animate-rise-in font-[family-name:var(--font-fredoka)] text-6xl font-bold tracking-tight text-stone-900 text-balance sm:text-7xl [animation-delay:0.05s]">
          Gouriddhi Pun
        </h1>

        <p className="animate-rise-in mt-4 font-[family-name:var(--font-fredoka)] text-xl font-medium text-emerald-700 [animation-delay:0.1s]">
          Undergraduate CS student at Texas State University
        </p>

        {/* intro cards */}
        <div className="mt-10 grid w-full gap-4 text-left sm:grid-cols-2">
          <div className="animate-rise-in rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur [animation-delay:0.15s]">
            <h2 className="mb-2 font-[family-name:var(--font-fredoka)] text-lg font-semibold text-stone-900">
              A little more
            </h2>
            <p className="leading-relaxed text-stone-600 text-pretty">
              I&apos;m recently obsessed with turtles — hopefully I can adopt one as a pet and be a turtle mom
              someday.
            </p>
          </div>

          <div className="animate-rise-in rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur [animation-delay:0.2s]">
            <h2 className="mb-2 font-[family-name:var(--font-fredoka)] text-lg font-semibold text-stone-900">
              Fair warning
            </h2>
            <p className="leading-relaxed text-stone-600 text-pretty">
              I love yapping, but I take a little while to warm up. You&apos;ll probably catch me in my sourest
              straight face first — but I&apos;ve got a good smile if you make me smile.
            </p>
          </div>
        </div>

        {/* contact */}
        <div className="animate-rise-in mt-10 [animation-delay:0.25s]">
          <a
            href="mailto:gouriddhi13@gmail.com"
            className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-700 px-6 py-3 font-[family-name:var(--font-fredoka)] text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
          >
            <Mail className="size-5 transition-transform group-hover:scale-110" aria-hidden="true" />
            gouriddhi13@gmail.com
          </a>
        </div>
      </div>
    </main>
  )
}
