import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Caaizen Realty | Visit us in Bengaluru" },
      {
        name: "description",
        content:
          "Speak with the Caaizen Realty team. Email, phone, and office address in Bidadi, Bengaluru.",
      },
      { property: "og:title", content: "Contact Caaizen Realty" },
      {
        property: "og:description",
        content: "Come visit. Stay a while. We'd love to walk the land with you.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Write to us",
    value: "caaizenrealty@gmail.com",
    href: "mailto:caaizenrealty@gmail.com",
    note: "We reply within one working day.",
  },
  {
    label: "Call",
    value: "+91 9731199655",
    href: "tel:+91 9731199655",
    note: "Mon–Sat, 10 am — 7 pm IST.",
  },
  {
    label: "Visit",
    value: "224, 3rd Floor, S.S Complex 14th Cross Sampige Road, Malleshwaram, Bengaluru",
    href: "https://maps.app.goo.gl/2j4DEDc1RoTDQvS49?g_st=awb",
    note: "By appointment — let us walk the land with you.",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="surface-olive-deep pt-40 pb-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-eyebrow text-accent"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] mt-6 text-cream max-w-4xl"
          >
            Come visit.<br />
            <span className="italic text-accent">Stay a while.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="mt-10 max-w-xl text-xl leading-relaxed font-serif text-cream/85"
          >
            We're a small team and we like it that way. Reach out — by email, phone, or in person — and we'll make space for a real conversation about land, home, and the life you're imagining.
          </motion.p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="surface-cream py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 font-bold break-words">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="block group border border-olive/15 p-10 h-full hover:bg-olive hover:text-cream transition-colors duration-500"
              >
                <p className="font-eyebrow text-accent group-hover:text-accent text-[0.65rem]">
                  {c.label}
                </p>
                <p className="font-display text-3xl mt-6 leading-tight">{c.value}</p>
                <p className="mt-6 text-base font-serif opacity-75">{c.note}</p>
                <span className="mt-8 inline-flex items-center gap-3 font-eyebrow text-[0.65rem] opacity-80">
                  Open <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="surface-olive py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          <Reveal>
            <p className="font-eyebrow text-accent">Find us</p>
            <h2 className="font-display text-5xl mt-6 leading-tight">
              The land<br /><span className="italic">speaks first.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/85 font-serif">
              The Retreat site is a short drive from Bidadi town, set against the green folds west of Bengaluru. Pick a morning — we'll meet you there.
            </p>
            <a
              href="mailto:hello@caaizenrealty.in?subject=Site%20visit%20request"
              className="mt-10 inline-flex items-center gap-4 border border-cream/40 px-8 py-4 font-eyebrow text-cream hover:bg-cream hover:text-olive-deep transition-colors duration-500"
            >
              Schedule a visit <span>→</span>
            </a>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="aspect-[5/5] w-100 overflow-hidden border border-cream/10">
              <img 
                src="/CaaizenQR.png"
                alt="Caaizen Realty QR Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
