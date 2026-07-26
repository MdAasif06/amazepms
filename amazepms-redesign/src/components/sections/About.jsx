import { Layers, Zap, Globe } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";

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
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Content */}
          <div>
            <SectionHeading
              align="left"
              title="One Intelligent Business Workspace"
            />

            <div className="mt-8 flex flex-col gap-6 sm:mt-10">
              {highlights.map((h, i) => (
                <Reveal key={h.title} direction="up" delay={i * 0.08}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white/3 text-accent sm:h-11 sm:w-11">
                      <h.icon className="h-5 w-5" />
                    </span>

                    <div>
                      <h3 className="font-display text-base font-semibold sm:text-lg">
                        {h.title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {h.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <Reveal direction="left" className="relative">
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(53,214,200,0.18),transparent_70%)] blur-2xl" />

            <div className="glass-strong rounded-3xl sm:rounded-4xl p-4 sm:p-6 shadow-card">
              <div className="rounded-2xl border border-border bg-background/60 p-4 sm:p-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Today
                  </span>

                  <span className="text-xs sm:text-sm font-medium text-accent text-right">
                    All systems synced
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    {
                      t: "Rent auto-collected across 1,240 units",
                      tag: "Accounting",
                    },
                    {
                      t: "3 lease renewals sent for signature",
                      tag: "Leasing",
                    },
                    {
                      t: "Vendor dispatched to Unit 14C",
                      tag: "Maintenance",
                    },
                    {
                      t: "Resident satisfaction up 6 points",
                      tag: "Experience",
                    },
                  ].map((row) => (
                    <li
                      key={row.t}
                      className="flex flex-col gap-2 rounded-xl border border-border bg-white/2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="flex items-start gap-3 text-sm">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent animate-pulse-dot" />
                        <span>{row.t}</span>
                      </span>

                      <span className="w-fit shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
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
  );
}
