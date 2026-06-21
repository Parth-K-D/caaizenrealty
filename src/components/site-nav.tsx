import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import caaizenLogo from "@/assets/caaizen-logo.png.asset.json";

const links: { to: "/" | "/the-retreat" | "/contact"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/the-retreat", label: "The Retreat" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md text-olive-deep font-bold"
            : "bg-transparent text-cream font-bold"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Caaizen Realty — home">
            <img
              src="/logo_nobg.png"
              alt="Caaizen Realty"
              width={140}
              height={56}
              className={`h-9 md:h-10 w-auto transition-all duration-500 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10 font-eyebrow text-[0.7rem]">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={l.exact ? { exact: true } : undefined}
                activeProps={{ className: "text-accent" }}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden font-eyebrow text-[0.9rem] tracking-[0.35em] bold-text"
          >
            Menu
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] surface-olive-deep flex flex-col bold-text"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <img
                src={caaizenLogo.url}
                alt="Caaizen Realty"
                className="h-10 w-auto brightness-0 invert"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="font-eyebrow text-[0.7rem] text-cream"
              >
                Close
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-10 text-cream bold-text text-[clamp(2rem,8vw,4rem)]">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.36 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={l.exact ? { exact: true } : undefined}
                    activeProps={{ className: "text-accent" }}
                    className="font-display text-5xl italic"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
