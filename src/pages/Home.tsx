import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { TeamGrid } from "@/components/team-grid";
import homeHero from "@/assets/home-hero.jpg";
import retreatHero from "@/assets/retreat-hero.jpg";
import retreatInterior from "@/assets/retreat-interior.jpg";

export default function Home() {
  useEffect(() => {
    document.title = "Caaizen Realty — Homes designed to inspire";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <motion.img
          src={homeHero}
          alt="A modern Caaizen Realty home set within a forested landscape"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2_0.03_125/0.55)] via-[oklch(0.2_0.03_125/0.25)] to-[oklch(0.2_0.03_125/0.85)]" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 text-cream">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] mt-4 max-w-5xl"
          >
            Land is sacred.<br />
            <span className="italic text-accent/90">Home</span> is a philosophy.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-8 max-w-xl text-xl leading-relaxed font-serif opacity-90"
          >
            We craft environments that are emotionally rich, environmentally conscious, and deeply personal — homes designed not just to impress, but to inspire.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10"
          >
            <Link
              to="/the-retreat"
              className="group inline-flex items-center gap-4 border border-cream/40 px-8 py-4 font-eyebrow text-cream hover:bg-cream hover:text-olive-deep transition-colors duration-500"
            >
              Discover The Retreat
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="surface-olive py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="font-eyebrow text-accent">A Philosophy</p>
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[1] mt-6">
              Caaizen<br />
              Realty
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-12 text-cream/90 text-lg leading-relaxed font-serif">
            <Reveal delay={0.1}>
              <p>
                At Caaizen Realty, we believe that land is sacred. That homes should be designed not just to impress, but to inspire. And that modern living doesn't have to come at the cost of natural living.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Founded with a vision to create more than just real estate, we craft environments — spaces that are emotionally rich, environmentally conscious, and deeply personal. Every project is a reflection of what we believe: that luxury lies in simplicity, in silence, in soil.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="md:col-span-2">
              <p className="italic text-cream text-2xl font-display leading-snug max-w-3xl">
                "With Retreat, we're not offering a product — we're offering a philosophy. One that honors space, celebrates nature, and invites you to experience a life that's abundant in every way."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="py-32 px-6 md:px-10 surface-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="font-eyebrow text-olive">Featured Project</p>
            <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] mt-6 text-olive-deep">
              <img src="/retreat_logo.png" alt="Caaizen Realty QR Code" className="w-full h-full object-cover" />+
            </h2>
            <div className="hairline w-32 mt-8 text-olive" />
            <p className="mt-8 text-lg leading-relaxed text-olive-deep/80 max-w-md">
              Twenty-seven thoughtfully composed plots nestled into the green folds of Bidadi. A development that breathes — wide tree-lined roads, generous setbacks, and a landscape that came first.
            </p>
            <Link
              to="/the-retreat"
              className="mt-10 inline-flex items-center gap-4 border border-olive/40 px-8 py-4 font-eyebrow text-olive hover:bg-olive hover:text-cream transition-colors duration-500"
            >
              Explore The Retreat <span>→</span>
            </Link>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[520px]">
              <img
                src={retreatHero}
                alt="The Retreat veranda"
                className="col-span-3 row-span-3 w-full h-full object-cover"
                loading="lazy"
              />
              <img
                src={retreatInterior}
                alt="The Retreat interior"
                className="col-span-2 row-span-2 col-start-4 row-start-2 w-full h-full object-cover"
                loading="lazy"
              />
              <img
                src={retreatHero}
                alt="Detail"
                className="col-span-2 row-span-2 col-start-1 row-start-4 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="col-span-3 row-span-2 col-start-3 row-start-4 surface-olive flex flex-col justify-center px-6">
                <p className="font-eyebrow text-accent text-[0.65rem]">Location</p>
                <p className="font-display text-3xl mt-2 text-cream">Bidadi,<br />Bengaluru</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDING TEAM */}
      <section id="team" className="surface-cream py-32 px-6 md:px-10 border-t border-olive/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="font-eyebrow text-olive">The Founding Team</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] mt-6 text-olive-deep max-w-3xl">
              Four people, <span className="italic">one</span> conviction.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-olive-deep/75 font-serif">
              Caaizen was founded by builders, designers and strategists who share a single conviction — that the best homes begin by listening to the land.
            </p>
          </Reveal>
          <div className="mt-20">
            <TeamGrid />
          </div>
        </div>
      </section>

      {/* QUIET CTA */}
      <section className="surface-olive-deep py-32 px-6 md:px-10 text-center">
        <Reveal>
          <p className="font-eyebrow text-accent">An invitation</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] mt-6 max-w-3xl mx-auto leading-tight">
            A life that's <span className="italic text-accent">abundant</span> in every way.
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-4 border border-cream/40 px-10 py-4 font-eyebrow text-cream hover:bg-cream hover:text-olive-deep transition-colors duration-500"
          >
            Speak with us <span>→</span>
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
