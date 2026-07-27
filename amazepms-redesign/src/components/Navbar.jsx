import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Building2 } from "lucide-react";
import Button from "./ui/Button.jsx";
import { cn } from "../lib/utils.js";

const links = [
  { label: "Product", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "How it works", href: "#workflow" },
  { label: "Customers", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50 flex w-full justify-center
        px-4
        pt-3
        sm:px-6
        sm:pt-4
        lg:px-8
      "
    >
      <nav
        className={cn(
          `flex w-full max-w-7xl items-center justify-between rounded-2xl
          px-3
          py-2
          transition-all
          duration-500
          sm:px-5
          sm:py-2.5
          `,
          scrolled
            ? "glass-strong shadow-card"
            : "border border-transparent bg-transparent",
        )}
      >
        {/* LOGO */}
        <a
          href="#top"
          onClick={closeMenu}
          className="flex items-center gap-2.5"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl
            bg-primary
            text-primary-foreground
            shadow-[0_8px_24px_-8px_rgba(79,124,255,0.9)]
            "
          >
            <Building2 className="h-5 w-5" />
          </span>

          <span className="font-display text-lg font-semibold tracking-tight">
            AmazePMS
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();

                const target = document.querySelector(link.href);

                if (target) {
                  target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });

                  window.history.pushState({}, "", link.href);
                }
              }}
              className="rounded-full px-3.5 py-2 text-sm
              text-muted-foreground
              transition-colors
              hover:bg-white/5
              hover:text-foreground
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" href="#contact">
            Sign in
          </Button>

          <Button variant="primary" size="sm" href="#contact">
            Book a demo
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl glass
          lg:hidden
          "
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" absolute
    left-4
    right-4
    top-full
    mt-3
    rounded-2xl
    glass-strong
    p-4
    shadow-card
    z-[999]
    lg:hidden
  "
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm
                  text-muted-foreground
                  transition-colors
                  hover:bg-white/5
                  hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}

              <div
                className="
                mt-3
                flex
                flex-col
                gap-2
                border-t
                border-border
                pt-3
                "
              >
                <Button
                  variant="secondary"
                  size="md"
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full"
                >
                  Sign in
                </Button>

                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full"
                >
                  Book a demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
