import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Users,
  Wrench,
} from "lucide-react";
import Button from "../ui/Button.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-2"
        >
          {/* LEFT */}
          <div className="text-center lg:text-left -mt-6.25">
            <motion.h1
              variants={item}
              className=" font-display text-5xl font-bold leading-tight lg:text-7xl"
            >
              The operating system for
              <span className="text-gradient-brand">
                {" "}
                modern property management
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              AmazePMS unifies leasing, accounting, maintenance and resident
              experience into one beautifully fast workspace.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg">
                 Free Trial
              </Button>

              <Button variant="secondary" size="lg">
                 how it works
              </Button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
          >
            <DashboardIllustration />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardIllustration() {
  const bars = [42, 65, 38, 78, 55, 88, 62, 95, 70];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 max-w-5xl"
    >
      {/* Glow behind */}
      <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(79,124,255,0.28),transparent_70%)] blur-2xl" />

      <div className="glass-strong overflow-hidden rounded-4xl p-3 shadow-card">
        <div className="rounded-3xl border border-border bg-surface/80">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground sm:flex">
              app.amazepms.com/portfolio
            </div>
            <div className="h-7 w-7 rounded-full bg-linear-to-br from-primary to-accent" />
          </div>

          {/* Body */}
          <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1.6fr_1fr]">
            {/* Left: revenue chart */}
            <div className="rounded-2xl border border-border bg-background/50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Portfolio revenue
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold">
                    $4.82M
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +18.4%
                </span>
              </div>
              <div className="mt-6 flex h-40 items-end gap-2 sm:gap-3">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.9,
                      delay: 0.9 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex-1 rounded-t-md bg-linear-to-t from-primary/30 to-primary"
                    style={{
                      background:
                        i === bars.length - 2
                          ? "linear-gradient(to top, rgba(53,214,200,0.4), #35d6c8)"
                          : undefined,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right: mini stat cards */}
            <div className="flex flex-col gap-4">
              <MiniStat icon={Users} label="Occupancy" value="96.4%" accent />
              <MiniStat icon={Wallet} label="Collected rent" value="$412K" />
              <MiniStat icon={Wrench} label="Open work orders" value="27" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MiniStat({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-background/50 p-4">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            accent
              ? "bg-accent/15 text-accent"
              : "bg-white/5 text-foreground"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <span className="font-display text-lg font-semibold">{value}</span>
    </div>
  );
}
