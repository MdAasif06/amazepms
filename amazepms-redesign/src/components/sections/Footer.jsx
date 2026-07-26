import {
  Building2,
  Globe,
  Mail,
  Phone,
  ArrowUpRight
} from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Modules", "Integrations", "Security", "Pricing", "Changelog"],
  },
  {
    title: "Solutions",
    links: ["Residential", "Commercial", "Mixed-use", "HOA / Associations", "Enterprise"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Blog", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help center", "API docs", "Community", "Status", "Webinars"],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-4 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">AmazePMS</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The operating system for modern property management. Run leasing, accounting,
              maintenance, and resident experience from one intelligent platform.
            </p>
            <div className="mt-6 flex gap-2">
              {[Globe, Mail, Phone].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/02 text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AmazePMS, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#top" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
