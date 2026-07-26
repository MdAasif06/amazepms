import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-border-strong p-5 sm:p-8 lg:p-14 shadow-card">
            {/* Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_120%_at_50%_0%,rgba(79,124,255,0.28),transparent_65%)]" />
            <div className="absolute inset-0 -z-10 bg-surface/60" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              {/* Left */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/3 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                  Get started
                </span>

                <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-5xl">
                  Ready to run every property from{" "}
                  <span className="text-gradient-brand">one place</span>?
                </h2>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Book a personalized demo and see how AmazePMS can transform
                  your operations. No credit card, no pressure.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Free 14-day trial",
                    "White-glove migration",
                    "Cancel anytime",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Form */}
              <div className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-8 sm:py-10 text-center">
                    <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />

                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      You're all set!
                    </h3>

                    <p className="max-w-xs text-sm text-muted-foreground">
                      Thanks for reaching out. A product specialist will contact
                      you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field
                        label="First name"
                        name="firstName"
                        placeholder="Jordan"
                        required
                      />

                      <Field
                        label="Last name"
                        name="lastName"
                        placeholder="Rivera"
                        required
                      />
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

                    <Button
                      variant="primary"
                      size="lg"
                      className="mt-2 w-full"
                      type="submit"
                    >
                      Book a demo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>

                    <p className="text-center text-xs leading-relaxed text-muted-foreground">
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
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-xs sm:text-sm font-medium text-muted-foreground">
        {label}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          rounded-xl
          border border-border
          bg-background/60
          px-4 py-2.5 sm:py-3
          text-sm
          text-foreground
          placeholder:text-muted/70
          outline-none
          transition-colors
          focus:border-primary/60
          focus:ring-2
          focus:ring-primary/30
        "
      />
    </label>
  );
}
