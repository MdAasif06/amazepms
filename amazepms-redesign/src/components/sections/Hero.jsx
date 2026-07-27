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
      className="relative overflow-hidden px-4 pt-24 pb-14 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-14"
        >
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <motion.h1
              variants={item}
              className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-7xl"
            >
              The operating system for
              <span className="text-gradient-brand">
                {" "}
                modern property management
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:mx-0"
            >
              AmazePMS unifies leasing, accounting, maintenance and resident
              experience into one beautifully fast workspace.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start"
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Free Trial
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                How it works
              </Button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src=".././hero3.png"
              alt="AmazePMS Dashboard"
              className="
                relative
                z-10
                w-full
                max-w-xs
                sm:max-w-md
                md:max-w-lg
                lg:max-w-2xl
                h-auto
                rounded-2xl
                object-contain
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniStat({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/50 p-3 sm:p-4">
      <div className="flex min-w-0 items-center gap-3">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${
            accent ? "bg-accent/15 text-accent" : "bg-white/5 text-foreground"
          }`}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>

        <span className="truncate text-xs text-muted-foreground sm:text-sm">
          {label}
        </span>
      </div>

      <span className="shrink-0 font-display text-base font-semibold sm:text-lg">
        {value}
      </span>
    </div>
  );
}
