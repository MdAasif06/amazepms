import { Star, Quote } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Reveal from "../ui/Reveal.jsx"

const testimonials = [
  {
    quote:
      "AmazePMS replaced four separate systems. Our team closes the books in a day instead of a week, and residents finally have a portal they actually enjoy using.",
    name: "Priya Nadar",
    role: "VP Operations, Northwind Living",
    initials: "PN",
  },
  {
    quote:
      "The AI assistant handles the first response on nearly every maintenance ticket. Our response time dropped from hours to seconds — residents notice.",
    name: "Marcus Bell",
    role: "Director of Property Management, Harborline",
    initials: "MB",
  },
  {
    quote:
      "Onboarding 6,000 units sounded terrifying. We were fully live in nine days. The migration team was exceptional and the product just made sense.",
    name: "Elena Costa",
    role: "COO, Cedar & Vale",
    initials: "EC",
  },
  {
    quote:
      "Owners get real-time dashboards and we get our evenings back. NOI is up double digits and we haven't added headcount.",
    name: "David Okafor",
    role: "Managing Partner, Brightstone",
    initials: "DO",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Customers"
          title="Loved by the teams who run on it"
          subtitle="From boutique operators to national portfolios, property teams trust AmazePMS to run their day."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={(i % 2) * 0.1}>
              <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface/60 p-7 transition-colors duration-300 hover:border-border-strong">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-white/[0.04]" />
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-pretty text-base leading-relaxed text-foreground/90">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
