import { useCountUp } from "../../hooks/useCountUp.js";
import Reveal from "../ui/Reveal.jsx";

const stats = [
  { end: 1.2, suffix: "M+", decimals: 1, label: "Units managed" },
  { end: 4000, suffix: "+", decimals: 0, label: "Property teams" },
  { end: 99.99, suffix: "%", decimals: 2, label: "Uptime SLA" },
  { end: 18, suffix: "%", decimals: 0, prefix: "+", label: "Average NOI lift" },
];

// function Stat({ end, suffix = "", prefix = "", decimals = 0, label }) {
//   const [ref, value] = useCountUp(end, { decimals })
//   return (
//     <div ref={ref} className="text-center">
//       <div className="font-display text-4xl font-semibold tracking-tight text-gradient-brand sm:text-5xl">
//         {prefix}
//         {value}
//         {suffix}
//       </div>
//       <div className="mt-2 text-sm text-muted-foreground">{label}</div>
//     </div>
//   )
// }
function Stat({ end, suffix = "", prefix = "", decimals = 0, label }) {
  const [ref, value] = useCountUp(end, { decimals });

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl font-semibold tracking-tight text-gradient-brand sm:text-4xl lg:text-5xl">
        {prefix}
        {value}
        {suffix}
      </div>

      <div className="mt-2 text-xs text-muted-foreground sm:text-sm">
        {label}
      </div>
    </div>
  );
}
export default function Stats() {
  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            className="
              glass-strong
              grid
              grid-cols-2
              gap-6
              rounded-3xl
              px-5
              py-8
              shadow-card
              sm:gap-8
              sm:px-8
              sm:py-10
              md:grid-cols-4
              lg:px-10
              lg:py-12
            "
          >
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
