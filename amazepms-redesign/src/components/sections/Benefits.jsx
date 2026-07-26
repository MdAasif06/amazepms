import { Clock, TrendingUp, HeartHandshake, Sparkles } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Reveal from "../ui/Reveal.jsx"

const benefits = [
  {
    icon: Clock,
    title: "Save 15+ hours a week",
    body: "Automation handles the repetitive work — collections, reminders, and reconciliation — so your team focuses on residents.",
    metric: "15h",
    metricLabel: "saved / week",
  },
  {
    icon: TrendingUp,
    title: "Grow NOI, not headcount",
    body: "Manage more units per employee with workflows that scale, keeping operating costs flat as your portfolio grows.",
    metric: "+18%",
    metricLabel: "avg. NOI lift",
  },
  {
    icon: HeartHandshake,
    title: "Happier residents & owners",
    body: "Fast responses and a polished portal experience drive higher satisfaction, renewals, and owner retention.",
    metric: "4.9/5",
    metricLabel: "satisfaction",
  },
  {
    icon: Sparkles,
    title: "Onboard in days, not months",
    body: "Guided migration and a genuinely intuitive interface mean your team is productive from day one.",
    metric: "7 days",
    metricLabel: "to go live",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          // eyebrow="Why choose us"
          title="Outcomes your whole organization will feel"
          subtitle="AmazePMS isn't just software — it's a measurable advantage across efficiency, revenue, and experience."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} direction="up" delay={(i % 2) * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-border-strong">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white/3 text-accent">
                      <b.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold">{b.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {b.body}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="font-display text-3xl font-semibold text-gradient-brand">
                      {b.metric}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{b.metricLabel}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
