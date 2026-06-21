import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import retreatHero from "@/assets/retreat-hero.jpg";
import retreatInterior from "@/assets/retreat-interior.jpg";
import retreatLandscape from "@/assets/retreat-landscape.jpg";
import retreatLogo from "@/assets/retreat-logo.png.asset.json";

export const Route = createFileRoute("/the-retreat")({
  head: () => ({
    meta: [
      { title: "The Retreat — Caaizen Realty | Bidadi, Bengaluru" },
      {
        name: "description",
        content:
          "The Retreat by Caaizen Realty — 27 thoughtfully planned plots in Bidadi, Bengaluru. A philosophy of natural luxury, silence and soil.",
      },
      { property: "og:title", content: "The Retreat — Caaizen Realty" },
      {
        property: "og:description",
        content: "27 plots in Bidadi, Bengaluru. Designed to honor the land.",
      },
      { property: "og:image", content: retreatHero },
      { name: "twitter:image", content: retreatHero },
    ],
  }),
  component: RetreatPage,
});

function RetreatPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO with parallax */}
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <motion.img
          src={retreatHero}
          alt="The Retreat — veranda with potted plants and tropical greenery"
          className="absolute inset-0 h-[120%] w-full object-cover"
          style={{ y }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2_0.03_125/0.45)] via-transparent to-[oklch(0.2_0.03_125/0.7)]" />

        <motion.div
          style={{ y: titleY }}
          className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center items-center text-center text-cream"
        >
          <motion.img
            src="/retreat_logo.png"
            alt="The Retreat — a Caaizen Realty project in Bidadi, Bengaluru"
            width={880}
            height={460}
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(86vw,820px)] h-auto brightness-0 invert drop-shadow-[0_2px_30px_rgba(0,0,0,0.35)]"
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.2 }}
            className="w-24 h-px bg-accent mt-10 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="font-eyebrow mt-8 text-accent"
          >
            Bidadi · Bengaluru
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="surface-olive py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="font-eyebrow text-accent">The Promise</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mt-8">
              A place that <span className="italic">honors</span> space,<br />
              celebrates <span className="italic">nature</span>, and invites<br />
              you to live <span className="italic text-accent">abundantly</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-12 text-xl leading-relaxed text-cream/85 font-serif max-w-2xl mx-auto">
              The Retreat is not a product. It is a quiet conviction — that home, when designed with reverence, becomes the most personal kind of luxury.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO-COLUMN STORY */}
      <section className="surface-cream py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src={retreatInterior}
              alt="Open-plan interior at The Retreat"
              className="w-full h-[560px] object-cover"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-eyebrow text-olive">Designed Around the Land</p>
            <h3 className="font-display text-5xl mt-6 text-olive-deep leading-tight">
              Built for the rhythm<br />of slow, intentional living.
            </h3>
            <p className="mt-8 text-lg leading-relaxed text-olive-deep/80">
              Every plot at The Retreat is composed around existing trees, natural slopes, and wind paths. The architecture answers to the landscape — not the other way around. Wide verandas, breathing courtyards, and materials drawn from the soil ground each home in its place.
            </p>
            <ul className="mt-10 space-y-4 text-olive-deep font-serif text-lg">
              {[
                "27 individually planned plots",
                "40 ft & 60 ft wide tree-lined roads",
                "Designed setbacks for privacy & light",
                "Naturally landscaped community spaces",
              ].map((item) => (
                <li key={item} className="flex items-baseline gap-4">
                  <span className="text-accent">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* LAYOUT */}
      <section className="surface-olive-deep py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <p className="font-eyebrow text-accent">The Plan</p>
            <h2 className="font-display text-6xl mt-6 leading-tight">
              L<span className="italic">ay</span>out
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/80 max-w-md">
              The Retreat is composed of 27 plots, organized along 40 and 60 foot wide roads that wind through preserved tree cover. Every plot opens onto green.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["27", "Plots"],
                ["60ft", "Main Road"],
                ["40ft", "Inner Roads"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl text-accent">{n}</div>
                  <div className="font-eyebrow text-cream/70 mt-2 text-[0.65rem]">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full max-w-xl mx-auto bg-olive p-8 border border-cream/10">
              <img
                src={retreatLandscape}
                alt="Aerial view of The Retreat development"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 font-eyebrow text-[0.6rem] text-cream/80">
                N · S · E · W
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="surface-cream py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="font-eyebrow text-olive">Location</p>
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] mt-6 text-olive-deep leading-[1]">
              Bidadi,<br /><span className="italic">Bengaluru</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid lg:grid-cols-3 gap-10">
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="aspect-[16/10] w-full overflow-hidden border border-olive/20">
                <iframe
                  title="The Retreat location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7781.816780668746!2d77.3269911289281!3d12.784458108518871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae49f7746066e7%3A0x624001dafe75c045!2sCaaizen%20The%20Retreat!5e0!3m2!1sen!2sin!4v1782062490513!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="surface-olive p-10 h-full flex flex-col justify-between">
                <div>
                  <p className="font-eyebrow text-accent">Connectivity</p>
                  <ul className="mt-6 space-y-5 text-cream font-serif text-lg">
                    {[
                      ["60 min", "to Bangalore City Center"],
                      ["5 min", "to Mysore Road"],
                      ["25 min", "to NICE Road"],
                      ["10 min", "to Bidadi Industrial Area"],
                    ].map(([t, l]) => (
                      <li key={l} className="flex justify-between border-b border-cream/15 pb-3">
                        <span>{l}</span>
                        <span className="font-display text-accent">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-10 font-serif italic text-cream/80">
                  Close enough to the city. Far enough to forget it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-olive-deep py-32 px-6 md:px-10 text-center">
        <Reveal>
          <p className="font-eyebrow text-accent">Reserve a plot</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] mt-6 max-w-3xl mx-auto leading-tight">
            Step into a life rooted<br />
            in <span className="italic text-accent">silence & soil.</span>
          </h2>
          <a
            href="/caaizen retreat (A4).pdf"
            className="mt-12 inline-flex items-center gap-4 border border-cream/40 px-10 py-4 font-eyebrow text-cream hover:bg-cream hover:text-olive-deep transition-colors duration-500"
          >
            Download Brochure <span>→</span>
          </a>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
