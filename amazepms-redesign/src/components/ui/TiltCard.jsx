import { useRef } from "react"
import { cn } from "../../lib/utils.js"

/**
 * Card with a subtle pointer-follow spotlight and 3D tilt on hover.
 */
export default function TiltCard({ children, className = "", tilt = true }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty("--mx", `${x}px`)
    el.style.setProperty("--my", `${y}px`)
    if (tilt) {
      const rx = (y / rect.height - 0.5) * -6
      const ry = (x / rect.width - 0.5) * 6
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    }
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = ""
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-border-strong hover:shadow-card",
        className,
      )}
    >
      {/* spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(79,124,255,0.12), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
