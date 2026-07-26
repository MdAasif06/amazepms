import { Clock, TrendingUp, HeartHandshake, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";

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
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Outcomes your whole organization will feel"
          subtitle="AmazePMS isn't just software — it's a measurable advantage across efficiency, revenue, and experience."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14">
          {benefits.map((b, i) => (
            <Reveal key={b.title} direction="up" delay={(i % 2) * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/60 p-5 transition-colors duration-300 hover:border-border-strong sm:p-6 lg:p-7">
                {/* Glow */}
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:h-32 sm:w-32 sm:translate-x-8 sm:-translate-y-8" />

                <div className="relative flex items-start justify-between gap-4 sm:gap-6">
                  {/* Left */}
                  <div className="flex-1">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-white/3 text-accent sm:h-12 sm:w-12">
                      <b.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>

                    <h3 className="mt-4 font-display text-lg font-semibold sm:mt-5 sm:text-xl">
                      {b.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:max-w-sm sm:text-base">
                      {b.body}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="shrink-0 text-right">
                    <div className="font-display text-2xl font-semibold text-gradient-brand sm:text-3xl">
                      {b.metric}
                    </div>

                    <div className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                      {b.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
