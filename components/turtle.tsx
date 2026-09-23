export function Turtle({ className }: { className?: string }) {
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
