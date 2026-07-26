/**
 * Fixed animated aurora + grid background used behind the whole page.
 * Purely decorative.
 */
export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-lines opacity-60" />

      {/* Aurora blobs */}
      <div className="absolute -top-40 left-1/4 h-[38rem] w-[38rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(79,124,255,0.35),transparent_60%)] blur-3xl" />
      <div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(53,214,200,0.28),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[30rem] w-[30rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(122,162,255,0.22),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-12s" }}
      />

      {/* Top and bottom vignette for depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
