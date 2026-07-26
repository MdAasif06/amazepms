import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { UserPlus, Settings2, Rocket, Repeat } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Import your portfolio",
    body: "Migrate properties, units, leases, and balances with a guided importer. Our team validates every record with you.",
  },
  {
    icon: Settings2,
    step: "02",
    title: "Configure your workflows",
    body: "Set up payment rules, approval chains, and communication templates that match how your organization actually works.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go live with confidence",
    body: "Invite your team and residents. Automations start running immediately — collections, reminders, and reporting on autopilot.",
  },
  {
    icon: Repeat,
    step: "04",
    title: "Optimize continuously",
    body: "Use live insights and AI recommendations to refine operations and unlock more NOI every quarter.",
  },
]

export default function Workflow() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        },
      )

      gsap.utils.toArray("[data-step]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%" },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="workflow" ref={sectionRef} className="relative px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How it works"
          title="From legacy chaos to calm, in four steps"
          subtitle="A proven onboarding path that gets teams of any size live quickly — with support at every stage."
        />

        <div className="relative mt-16 pl-8 sm:pl-0">
          {/* Center line (desktop) / left line (mobile) */}
          <div className="absolute left-3 top-2 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-to-b from-primary via-accent-2 to-accent"
            />
          </div>

          <div className="flex flex-col gap-10 sm:gap-4">
            {steps.map((s, i) => {
              const left = i % 2 === 0
              return (
                <div
                  key={s.step}
                  data-step
                  className={`relative sm:flex sm:items-center ${
                    left ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  {/* node */}
                  <span className="absolute -left-[1.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border-strong bg-background sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                  </span>

                  <div
                    className={`glass rounded-2xl p-6 sm:w-[calc(50%-2rem)] ${
                      left ? "" : "sm:text-right"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 ${left ? "" : "sm:flex-row-reverse"}`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-sm text-muted-foreground">{s.step}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
