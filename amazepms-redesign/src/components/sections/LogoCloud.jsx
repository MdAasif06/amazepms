const logos = [
  "Northwind Living",
  "Harborline",
  "Cedar & Vale",
  "Metrop",
  "Brightstone",
  "Urbanest",
  "Keystone REIT",
  "Lumen Estates",
]

export default function LogoCloud() {
  return (
    <section aria-label="Trusted by leading property teams" className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by 4,000+ property teams managing 1.2M+ units
        </p>

        <div className="relative mt-8 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-4">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-2xl border border-border bg-white/[0.02] px-6 py-3.5"
              >
                <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-primary to-accent" />
                <span className="whitespace-nowrap font-display text-base font-semibold text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
