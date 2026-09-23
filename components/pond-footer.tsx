import { Turtle } from "./turtle"

export function PondFooter({ night }: { night: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 overflow-hidden" aria-hidden="true">
      {/* lily pads */}
      <div className="absolute bottom-16 left-[12%] size-8 rounded-full bg-emerald-500/40 [clip-path:polygon(50%_0,100%_35%,100%_100%,0_100%,0_35%)]" />
      <div className="absolute bottom-20 right-[18%] size-6 rounded-full bg-emerald-500/30 [clip-path:polygon(50%_0,100%_35%,100%_100%,0_100%,0_35%)]" />
      <div className="absolute bottom-14 left-[46%] size-7 rounded-full bg-emerald-500/35 [clip-path:polygon(50%_0,100%_35%,100%_100%,0_100%,0_35%)]" />

      <Turtle className="animate-swim absolute bottom-10 left-[30%] w-10 text-emerald-600/40" />

      {/* layered water waves */}
      <svg
        className="animate-pond-wave absolute bottom-0 left-0 h-24 w-[120%]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,90 480,10 720,40 C960,70 1200,10 1440,40 L1440,120 L0,120 Z"
          className={night ? "fill-emerald-800/40" : "fill-emerald-300/50"}
        />
      </svg>
      <svg className="absolute bottom-0 left-0 h-16 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0,30 C360,70 720,0 1080,30 C1260,45 1350,25 1440,30 L1440,80 L0,80 Z"
          className={night ? "fill-emerald-900/60" : "fill-emerald-400/40"}
        />
      </svg>
    </div>
  )
}
