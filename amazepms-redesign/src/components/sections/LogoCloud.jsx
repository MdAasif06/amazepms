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
    <section
      aria-label="Trusted by leading property teams"
      className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
          Trusted by 4,000+ property teams managing 1.2M+ units
        </p>

        <div className="relative mt-6 overflow-hidden mask-fade-x sm:mt-8">
          <div className="flex w-max animate-marquee gap-3 sm:gap-4">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-2xl border border-border bg-white/2 px-4 py-2.5 sm:gap-2.5 sm:px-6 sm:py-3.5"
              >
                <span className="h-2 w-2 rounded-sm bg-linear-to-br from-primary to-accent sm:h-2.5 sm:w-2.5" />

                <span className="whitespace-nowrap font-display text-sm font-semibold text-muted-foreground sm:text-base">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
