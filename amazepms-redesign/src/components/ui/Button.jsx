import { useState } from "react"
import { cn } from "../../lib/utils.js"

/**
 * Button with a ripple micro-interaction on click and a lift on hover.
 * Renders as <a> when `href` is provided, otherwise <button>.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}) {
  const [ripples, setRipples] = useState([])

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = Date.now() + Math.random()
    setRipples((prev) => [...prev, { id, x, y, size }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-tight transition-all duration-300 will-change-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  }

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_10px_40px_-12px_rgba(79,124,255,0.8)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(79,124,255,0.9)]",
    secondary:
      "glass-strong text-foreground hover:-translate-y-0.5 hover:border-border-strong hover:bg-white/[0.06]",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
  }

  const Tag = href ? "a" : "button"

  return (
    <Tag
      href={href}
      onClick={addRipple}
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute z-0 animate-[ripple_0.6s_ease-out] rounded-full bg-white/30"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
    </Tag>
  )
}
