import Reveal from "./Reveal.jsx"
import { cn } from "../../lib/utils.js"

/**
 * Eyebrow + title + subtitle heading used across sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start"

  return (
    <div className={cn("flex max-w-2xl flex-col gap-4", alignment, className)}>
      {eyebrow && (
        <Reveal direction="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2 className="text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.1}>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
