import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Button from "../ui/Button.jsx"
import Reveal from "../ui/Reveal.jsx"

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border-strong p-8 shadow-card sm:p-14">
            {/* gradient backdrop */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_120%_at_50%_0%,rgba(79,124,255,0.28),transparent_65%)]" />
            <div className="absolute inset-0 -z-10 bg-surface/60" />

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                  Get started
                </span>
                <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                  Ready to run every property from <span className="text-gradient-brand">one place</span>?
                </h2>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Book a personalized demo and see how AmazePMS can transform your operations. No
                  credit card, no pressure.
                </p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {[
                    "Free 14-day trial",
                    "White-glove migration",
                    "Cancel anytime",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-strong rounded-3xl p-6 sm:p-7">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                    <CheckCircle2 className="h-12 w-12 text-accent" />
                    <h3 className="font-display text-xl font-semibold">You&apos;re all set!</h3>
                    <p className="max-w-xs text-sm text-muted-foreground">
                      Thanks for reaching out. A product specialist will contact you within one
                      business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="First name" name="firstName" placeholder="Jordan" required />
                      <Field label="Last name" name="lastName" placeholder="Rivera" required />
                    </div>
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                    <Field
                      label="Units under management"
                      name="units"
                      type="number"
                      placeholder="500"
                    />
                    <Button variant="primary" size="lg" className="mt-1 w-full" type="submit">
                      Book a demo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      By submitting you agree to our Terms and Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
      />
    </label>
  )
}
