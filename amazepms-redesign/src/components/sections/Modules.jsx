import { FileText, Calculator, Wrench, Users, Home, BarChart3, ArrowUpRight } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import TiltCard from "../ui/TiltCard.jsx"
import Reveal from "../ui/Reveal.jsx"

const modules = [
  {
    icon: FileText,
    name: "Leasing",
    body: "Digital applications, screening, e-signatures, and renewals — from listing to move-in.",
    points: ["Online applications", "Tenant screening", "E-sign & renewals"],
  },
  {
    icon: Calculator,
    name: "Accounting",
    body: "Full double-entry ledger, automated rent collection, and one-click owner statements.",
    points: ["GL & AP/AR", "Auto rent collection", "Owner statements"],
  },
  {
    icon: Wrench,
    name: "Maintenance",
    body: "Track work orders end-to-end with vendor dispatch, photos, and cost approvals.",
    points: ["Work orders", "Vendor network", "Cost tracking"],
  },
  {
    icon: Users,
    name: "Resident portal",
    body: "A branded app where residents pay rent, submit requests, and get updates instantly.",
    points: ["Pay rent", "Submit requests", "Announcements"],
  },
  {
    icon: Home,
    name: "Owner portal",
    body: "Give owners transparent, real-time visibility into performance and distributions.",
    points: ["Live dashboards", "Documents", "Distributions"],
  },
  {
    icon: BarChart3,
    name: "Insights",
    body: "Portfolio-wide reporting and forecasting to guide every investment decision.",
    points: ["Custom reports", "Forecasting", "Benchmarks"],
  },
]

export default function Modules() {
  return (
    <section
      id="modules"
      className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Composable modules for every part of the business"
          subtitle="Turn on exactly what you need. Every module works beautifully on its own and even better together."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.name} direction="up" delay={(i % 3) * 0.08}>
              <TiltCard className="h-full">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 text-accent sm:h-12 sm:w-12">
                    <m.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:h-5 sm:w-5" />
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold sm:mt-5 sm:text-xl">
                  {m.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {m.body}
                </p>

                <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
                  {m.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-muted-foreground sm:text-base"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}