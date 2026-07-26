import { motion } from "framer-motion"
import { Bot, CalendarCheck, CreditCard, MessageSquare, ShieldCheck, LineChart } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import TiltCard from "../ui/TiltCard.jsx"
import Reveal from "../ui/Reveal.jsx"

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          // eyebrow="Core features"
          title="Everything your team needs, nothing it doesn't"
          subtitle="A focused feature set that covers the full lifecycle of every property — designed to remove busywork and surface what matters."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {/* Large feature */}
          <Reveal className="md:col-span-4" direction="up">
            <TiltCard className="h-full">
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Bot className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">AI resident assistant</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    An always-on assistant answers resident questions, triages maintenance
                    requests, and drafts responses for your team — reducing response times by up to
                    72%.
                  </p>
                </div>
                <ChatPreview />
              </div>
            </TiltCard>
          </Reveal>

          {/* Tall feature */}
          <Reveal className="md:col-span-2" direction="up" delay={0.08}>
            <TiltCard className="h-full">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <LineChart className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">Live analytics</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Occupancy, delinquency, and NOI tracked in real time with forecasts you can trust.
              </p>
              <div className="mt-6 flex items-end gap-1.5">
                {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 6 }}
                    whileInView={{ height: `${h}px` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.05 }}
                    className="w-full rounded-t bg-linear-to-t from-accent/30 to-accent"
                  />
                ))}
              </div>
            </TiltCard>
          </Reveal>

          {/* Row of three */}
          {[
            {
              icon: CreditCard,
              title: "Automated payments",
              body: "Collect rent, fees, and deposits with auto-reconciliation and instant payouts.",
            },
            {
              icon: CalendarCheck,
              title: "Smart scheduling",
              body: "Coordinate tours, inspections, and vendor visits without the back-and-forth.",
            },
            {
              icon: MessageSquare,
              title: "Unified inbox",
              body: "Email, SMS, and portal messages in one thread per resident and unit.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} className="md:col-span-2" direction="up" delay={i * 0.08}>
              <TiltCard className="h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </TiltCard>
            </Reveal>
          ))}

          {/* Security wide */}
          <Reveal className="md:col-span-6" direction="up">
            <TiltCard tilt={false} className="h-full">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      Enterprise-grade security & compliance
                    </h3>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      SOC 2 Type II, GDPR-ready, role-based access, audit logs, and encrypted data
                      at rest and in transit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["SOC 2", "GDPR", "SSO / SAML", "99.99% SLA"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-border bg-white/2 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ChatPreview() {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="flex flex-col gap-3">
        <div className="max-w-[80%] self-start rounded-2xl rounded-tl-sm bg-white/5 px-4 py-2.5 text-sm">
          Hi, my kitchen sink is leaking — can someone take a look?
        </div>
        <div className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-primary/90 px-4 py-2.5 text-sm text-primary-foreground">
          Sorry about that! I&apos;ve created work order #4821 and scheduled a plumber for tomorrow
          9–11am. You&apos;ll get a text confirmation shortly.
        </div>
        <div className="flex items-center gap-2 self-start text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          AmazePMS AI · resolved in 3s
        </div>
      </div>
    </div>
  )
}
