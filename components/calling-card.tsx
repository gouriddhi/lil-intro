import { Mail } from "lucide-react"

export function CallingCard() {
  return (
    <article className="w-full max-w-xl bg-stone-50 border border-stone-200 rounded-2xl shadow-sm p-8 sm:p-12">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">Calling Card</p>
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
    </article>
  )
}
