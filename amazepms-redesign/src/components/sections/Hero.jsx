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
              className="  font-display text-5xl font-bold leading-tight lg:text-7xl"
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
                How it works
              </Button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
          >
            {/* <DashboardIllustration /> */}
            <motion.img
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
              }}
              src=".././hero3.png"
              className="relative h-96 z-10 w-full rounded-2xl max-w-190"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


function MiniStat({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-background/50 p-4">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            accent ? "bg-accent/15 text-accent" : "bg-white/5 text-foreground"
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
