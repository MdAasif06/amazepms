import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import TiltCard from "../ui/TiltCard.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function Features() {
  return (
    <section
      id="features"
      className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Everything your team needs, nothing it doesn't"
          subtitle="A focused feature set that covers the full lifecycle of every property — designed to remove busywork and surface what matters."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 lg:mt-14 md:grid-cols-6">
          {/* Large Feature */}
          <Reveal className="md:col-span-4" direction="up">
            <TiltCard className="h-full">
              <div className="flex h-full flex-col justify-between gap-6 sm:gap-8">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary sm:h-11 sm:w-11">
                    <Bot className="h-5 w-5" />
                  </span>

                  <h3 className="mt-4 font-display text-lg font-semibold sm:mt-5 sm:text-xl">
                    AI resident assistant
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    An always-on assistant answers resident questions, triages
                    maintenance requests, and drafts responses for your team —
                    reducing response times by up to 72%.
                  </p>
                </div>

                <ChatPreview />
              </div>
            </TiltCard>
          </Reveal>

          {/* Analytics */}
          <Reveal className="md:col-span-2" direction="up" delay={0.08}>
            <TiltCard className="h-full">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent sm:h-11 sm:w-11">
                <LineChart className="h-5 w-5" />
              </span>

              <h3 className="mt-4 font-display text-lg font-semibold sm:mt-5 sm:text-xl">
                Live analytics
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Occupancy, delinquency, and NOI tracked in real time with
                forecasts you can trust.
              </p>

              <div className="mt-6 flex items-end gap-1.5">
                {[140, 55, 148, 70, 92, 85, 178].map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 6 }}
                    whileInView={{ height: `${h}px` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.05,
                    }}
                    className="w-full rounded-t bg-linear-to-t from-accent/30 to-accent"
                  />
                ))}
              </div>
            </TiltCard>
          </Reveal>

          {/* Three Cards */}
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
            <Reveal
              key={f.title}
              className="md:col-span-2"
              direction="up"
              delay={i * 0.08}
            >
              <TiltCard className="h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-foreground sm:h-11 sm:w-11">
                  <f.icon className="h-5 w-5" />
                </span>

                <h3 className="mt-4 font-display text-base font-semibold sm:mt-5 sm:text-lg">
                  {f.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.body}
                </p>
              </TiltCard>
            </Reveal>
          ))}

          {/* Security */}
          <Reveal className="md:col-span-6" direction="up">
            <TiltCard tilt={false} className="h-full">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent sm:h-11 sm:w-11">
                    <ShieldCheck className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="font-display text-base font-semibold sm:text-lg">
                      Enterprise-grade security & compliance
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      SOC 2 Type II, GDPR-ready, role-based access, audit logs,
                      and encrypted data at rest and in transit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["SOC 2", "GDPR", "SSO / SAML", "99.99% SLA"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-border bg-white/2 px-3 py-1.5 text-[11px] sm:text-xs"
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
  );
}
function ChatPreview() {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-3 sm:p-4">
      <div className="flex flex-col gap-3">
        <div className="max-w-[90%] sm:max-w-[80%] self-start rounded-2xl rounded-tl-sm bg-white/5 px-3 py-2 text-sm sm:px-4 sm:py-2.5">
          Hi, my kitchen sink is leaking — can someone take a look?
        </div>

        <div className="max-w-[90%] sm:max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-primary/90 px-3 py-2 text-sm text-primary-foreground sm:px-4 sm:py-2.5">
          Sorry about that! I&apos;ve created work order #4821 and scheduled a
          plumber for tomorrow 9–11am. You&apos;ll get a text confirmation
          shortly.
        </div>

        <div className="flex items-center gap-2 self-start text-[11px] sm:text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          AmazePMS AI · resolved in 3s
        </div>
      </div>
    </div>
  );
}
