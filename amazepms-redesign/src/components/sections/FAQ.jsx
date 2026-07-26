import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import SectionHeading from "../ui/SectionHeading.jsx"
import Reveal from "../ui/Reveal.jsx"

const faqs = [
  {
    q: "How long does it take to get started?",
    a: "Most teams are fully live within 7–14 days. Our guided importer and dedicated migration specialists handle the heavy lifting, validating your properties, leases, and balances with you before go-live.",
  },
  {
    q: "Can AmazePMS handle both residential and commercial properties?",
    a: "Yes. AmazePMS supports residential, commercial, mixed-use, and community association portfolios. Modules and workflows adapt to each property type, and you can manage them all from one account.",
  },
  {
    q: "Does it integrate with the tools we already use?",
    a: "AmazePMS connects with popular accounting, payments, screening, and communication tools out of the box, and offers a full REST API and webhooks for anything custom your team needs.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is per-unit, per-month with no setup fees and no long-term contract required. You only pay for the modules you enable, and volume discounts apply automatically as your portfolio grows.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We are SOC 2 Type II certified and GDPR-ready, with encryption at rest and in transit, granular role-based access, SSO/SAML, audit logs, and a 99.99% uptime SLA.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Every plan includes in-app chat and email support. Growth and Enterprise plans add a dedicated success manager, priority response times, and onboarding workshops for your team.",
  },
]

function Item({ faq, isOpen, onToggle, index }) {
  return (
    <Reveal direction="up" delay={index * 0.05}>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface/50 transition-colors hover:border-border-strong">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-base font-medium sm:text-lg">{faq.q}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 ${
              isOpen ? "rotate-45 bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          // eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you need to know before getting started. Can't find what you're looking for? Reach out to our team."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
