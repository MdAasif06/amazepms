import { Layers, Zap, Globe } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Reveal from "../ui/Reveal.jsx"

const highlights = [
  {
    icon: Layers,
    title: "One connected platform",
    body: "Leasing, accounting, maintenance, and communications share a single database — no exports, no reconciliation, no silos.",
  },
  {
    icon: Zap,
    title: "Fast by design",
    body: "Sub-second search across your entire portfolio. Every screen is engineered to feel instant, even at millions of units.",
  },
  {
    icon: Globe,
    title: "Built for scale",
    body: "From a single building to a national portfolio, AmazePMS adapts to your structure with granular roles and permissions.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why AmazePMS"
              title="Replace a dozen disconnected tools with one intelligent workspace"
              subtitle="Property teams lose hours every week stitching together spreadsheets, portals, and legacy software. AmazePMS brings every workflow into one place — thoughtfully designed, deeply integrated, and genuinely enjoyable to use."
            />

            <div className="mt-10 flex flex-col gap-6">
              {highlights.map((h, i) => (
                <Reveal key={h.title} direction="up" delay={i * 0.08}>
                  <div className="flex gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-accent">
                      <h.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left" className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(53,214,200,0.18),transparent_70%)] blur-2xl" />
            <div className="glass-strong rounded-[2rem] p-6 shadow-card">
              <div className="rounded-2xl border border-border bg-background/60 p-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">Today</span>
                  <span className="text-sm font-medium text-accent">All systems synced</span>
                </div>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    { t: "Rent auto-collected across 1,240 units", tag: "Accounting" },
                    { t: "3 lease renewals sent for signature", tag: "Leasing" },
                    { t: "Vendor dispatched to Unit 14C", tag: "Maintenance" },
                    { t: "Resident satisfaction up 6 points", tag: "Experience" },
                  ].map((row) => (
                    <li
                      key={row.t}
                      className="flex items-center justify-between gap-4 rounded-xl border border-border bg-white/[0.02] px-4 py-3"
                    >
                      <span className="flex items-center gap-3 text-sm">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-accent animate-pulse-dot" />
                        {row.t}
                      </span>
                      <span className="hidden shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground sm:inline">
                        {row.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
