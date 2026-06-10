import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ShieldCheck, Zap, Sprout, ChevronLeft, ChevronRight, Compass, Quote as QuoteIcon, CheckCircle } from "lucide-react";
import Logo from "./Logo";

interface HomeViewProps {
  onSetTab: (tab: string) => void;
}

const TESTIMONIALS = [
  {
    id: "test-1",
    text: "We custom-built our weekend cottage here. Seeing our kids walk barefoot, harvest fresh spinach and organic mangoes from our own backyard is a dream come true. The managed agrarian service makes it worry-free.",
    author: "Rajesh & Anita Kumar",
    role: "Tech Founders, Indiranagar",
    location: "Estate Owner, Plot 12"
  },
  {
    id: "test-2",
    text: "A masterclass in biophilic architectural planning. The 10% construction limits ensure that the sanctuary remains pristine and sustainable. Rammed earth design provides incredible passive cooling naturally.",
    author: "Dr. Sarah Joseph",
    role: "Ecology Consultant & Architect",
    location: "Estate Owner, Plot 08"
  },
  {
    id: "test-3",
    text: "Caaizen made the legal vetting and agricultural registration flawless for us. The high-capacity off-grid solar and water recharge systems work seamlessly with zero pressure on external civic grids.",
    author: "Vikram Malhotra",
    role: "Managing Director, FinTech",
    location: "Estate Owner, Plot 19"
  },
  {
    id: "test-4",
    text: "I wake up to bird calls instead of traffic and polluted air. These curated trails, shared flower orchards, and absolute silence have completely re-vitalized my creative arts practice and peaceful living.",
    author: "Devika Sen",
    role: "Visual Artist & Naturalist",
    location: "Resident, Plot 03"
  }
];

export default function HomeView({ onSetTab }: HomeViewProps) {
  // Testimonial index for carousel
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Auto-scroll logic for Testimonial Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="w-full bg-[#111310] overflow-hidden text-[#E4E6E1]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with elegant slow scale */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbD_OJ0VC69-OyTOLMbfkz-dqF07akLQ2E11zM_QEN7XgvC_TcFBhJbhs9nGy_2GaHI7eHPp0DucjsWQW_7YheAGGrh2Z9_2_6m_XsQqp799OiYoIoNDYs3kiCdwzuIi-CQtYnZ9BgKdaf3-d931ESmyTGlmz_scxPOpbRbkewUxdbBkdJUvc9E5-biI-wIwn-erGD9QGPGqWjtJ1-8xTjH805GdfY94rRBeYrmGYVZAwQkVc3bYYi2DifHbMXhatj1WY4D3cCrtM')`
            }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 7, ease: "easeOut" }}
          />
          {/* Dark high-end vignette overlay splits */}
          <div className="absolute inset-0 bg-[#111310]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-transparent to-[#111310]/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-900/30 rounded-full mb-6 font-mono text-[9px] tracking-[0.25em] text-emerald-400 uppercase select-none shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-500" />
            <span>Bangalore Reserve Territory • low-density</span>
          </motion.div>

          <motion.h2
            id="hero-main-title"
            className="text-4xl md:text-7xl font-light tracking-tight text-[#F3F4F1] leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Architecture Rooted <br />
            <span className="font-serenity italic font-normal text-emerald-400">in Nature.</span>
          </motion.h2>

          <motion.p
            id="hero-sub-p"
            className="text-stone-300 text-sm md:text-base font-light tracking-wide max-w-xl mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            Exclusive eco-luxury farm plots near Bangalore designed for perfect equilibrium between structural comfort, sustainable investment, and ecological restoration.
          </motion.p>

          <motion.div
            id="hero-buttons"
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button
              onClick={() => onSetTab("projects")}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-[#121411] font-mono text-xs tracking-[0.15em] font-medium uppercase rounded shadow-[0_4px_20px_rgba(16,185,129,0.15)] transition duration-300 cursor-pointer"
            >
              Explore The Retreat
            </button>
            <button
              onClick={() => onSetTab("contact")}
              className="px-8 py-4 bg-stone-900/40 border border-stone-800 hover:border-emerald-950 hover:bg-emerald-950/20 text-[#E4E6E1] hover:text-emerald-400 font-mono text-xs tracking-[0.15em] uppercase rounded transition duration-300 cursor-pointer"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>

      </section>

      {/* ================= TESTIMONIALS SECTION (AUTO SCROLLS LIKE CAROUSEL) ================= */}
      <section id="testimonials-anchor" className="py-24 md:py-32 bg-[#141613] border-b border-stone-900 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block mb-2">
              Resident Testimonials
            </span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1]">
              Hear From <span className="font-serif italic font-normal text-emerald-400">Our Community.</span>
            </h3>
            <p className="text-stone-400 font-light text-sm max-w-md mx-auto mt-4">
              Real stories of transitioning to mindful, sustainable, and serene off-grid farm living.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-4 md:px-10">
            {/* Elegant double-quote background indicator */}
            <div className="absolute -top-10 -left-6 md:-left-12 opacity-[0.03] text-emerald-400 select-none">
              <QuoteIcon className="w-40 h-40" />
            </div>

            <div className="relative min-h-[250px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIdx}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full flex flex-col items-center text-center space-y-6"
                >
                  <p className="text-lg md:text-2xl font-light text-stone-200 tracking-wide font-sans leading-relaxed">
                    "{TESTIMONIALS[testimonialIdx].text}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase font-medium flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> {TESTIMONIALS[testimonialIdx].location}
                    </span>
                    <h5 className="font-sans font-medium text-stone-100 text-base mt-2">
                      {TESTIMONIALS[testimonialIdx].author}
                    </h5>
                    <span className="text-stone-400 text-xs font-light mt-0.5">
                      {TESTIMONIALS[testimonialIdx].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="p-2.5 border border-stone-800 text-stone-400 hover:text-[#E4E6E1] hover:border-emerald-950 bg-[#171916]/50 rounded transition duration-300 cursor-pointer"
                title="Previous Testimonial"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === testimonialIdx ? "w-8 bg-emerald-500" : "bg-stone-800 hover:bg-stone-700"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2.5 border border-stone-800 text-stone-400 hover:text-[#E4E6E1] hover:border-emerald-950 bg-[#171916]/50 rounded transition duration-300 cursor-pointer"
                title="Next Testimonial"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 2: SPACE THAT BREATHES ================= */}
      <section
        id="space-breathes-anchor"
        className="py-24 md:py-32 border-b border-stone-900 bg-[#131512]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left panel text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-6"
          >
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase">
              Physical Philosophy
            </span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] leading-tight">
              Space that <span className="font-serif italic text-emerald-400">Breathes.</span>
            </h3>
            <p className="text-stone-400 font-light leading-relaxed text-sm md:text-base">
              A private organic sanctuary where modern architectural sophistication merges seamlessly into wild, unspoiled settings. Our residential units are developed purely using high-mass bioclimatic construction materials, continuous active solar grids, and smart rain harvesting systems.
            </p>
            
            <div className="grid grid-cols-2 gap-4.5 pt-4">
              <div className="p-4 bg-[#1a1c18] border border-stone-900 rounded">
                <LeafHeading icon={<Sprout className="w-5 h-5 text-emerald-400" />} title="92% Restored" />
                <p className="text-stone-500 text-xs mt-1.5 font-light leading-normal">
                  Our replanting layouts foster birdlife and preserve vital regional micro-biodiversities.
                </p>
              </div>
              <div className="p-4 bg-[#1a1c18] border border-stone-900 rounded">
                <LeafHeading icon={<Zap className="w-5 h-5 text-emerald-400" />} title="100% Carbon Offset" />
                <p className="text-stone-500 text-xs mt-1.5 font-light leading-normal">
                  Rammed earth walls provide passive seasonal insulation with zero ambient cooling cost.
                </p>
              </div>
            </div>

            <button
              onClick={() => onSetTab("about")}
              className="inline-flex items-center gap-2 pr-4 py-2 font-mono text-[11px] tracking-widest uppercase text-emerald-400 hover:text-emerald-300 hover:gap-3 transition-all duration-300 pt-3 cursor-pointer"
            >
              Read About our Soil Mission
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right image framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            {/* Visual background shadows */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-900/10 to-transparent blur-xl pointer-events-none" />
            <div className="border border-stone-800 p-2 bg-[#1b1c19]/50 rounded-lg">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqqCxV8u-4AhzVf7xQi2i5wEagvPyObe4uei5H9H9IbhQ960Zq1syCYrIdZr-cCXcNyjVtmShs5JiVijpzcg56SO0VG3rHY4s9qarEuLQSzy8-GHSm0SSJJB94LAA2eRibVjyVPpXx5Aho_BcWoAyc8XUQuOkhGUQFYprhr9pk5NgjmQACHhvnb7amg4XNKB1xDkAzIlGlbHqVM4R7GQkWElolEyhIaHvM9A73PoWoPhceCDLzJIo17Kn9C-4MBiVXMTuCBwuhXq8"
                alt="Architecture integrated seamlessly with nature"
                className="w-full aspect-[4/3] object-cover rounded shadow-2xl filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3: FEATURED PROJECT PREVIEW ================= */}
      <section className="py-24 md:py-32 border-b border-stone-900 bg-gradient-to-b from-[#131512] to-[#111310]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-baseline justify-between mb-12 select-none">
          <div>
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">
              Flagship Release
            </span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] mt-2">
              Signature Estate: <span className="font-serif italic font-normal text-emerald-400">The Retreat</span>
            </h3>
          </div>
          <button
            onClick={() => onSetTab("projects")}
            className="font-mono text-xs tracking-widest text-[#ccd5c8] underline underline-offset-4 hover:text-emerald-400 pt-4 md:pt-0 cursor-pointer"
          >
            Go to Spec Highlights
          </button>
        </div>

        {/* Large Curated Project card */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group relative h-[450px] md:h-[550px] bg-cover bg-center rounded-lg overflow-hidden border border-stone-800 shadow-2xl flex items-end p-6 md:p-12 cursor-pointer"
            onClick={() => onSetTab("projects")}
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUh6zQg6ZVQTy53QDJKyxLcNe3p9teThmUXnq6Xz8DntrixPbbQXxlb_QnCzVwhyx6r70nh7xqbNHxg1vexK5d4ksTJMTyxUVmEbqFiJin4enb7DmynVdxJ6WMCLEIWguNXZV_lA1R_UtydRMV8l-2TjNZBppcAfFXxnvFAP-vMtiq8bFTSGgV8vuo-0Vr81KSxXXohQzZtQQpBnHKodHQiR5NNxC5G065ERqn3F7EN42xR_QJD9DWpQFpiaYdoCAvSJR9YQDn7Dw')`
            }}
          >
            {/* Dark wash overlay gets lighter on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10120f]/95 via-[#10120f]/40 to-[#10120f]/20 transition-all duration-700 group-hover:from-[#10120f]/90" />
            
            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-[9px] tracking-widest uppercase">
                  <span>Bidadi, Bengaluru Rural</span>
                  <span>•</span>
                  <span>10 Guntas & Above Plots</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-light text-stone-100 group-hover:text-emerald-300 transition-colors duration-500 font-sans">
                  The Retreat Farmhouses
                </h4>
                <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed max-w-xl">
                  A high-end development of handcrafted forest estates in Bidadi designed for personal food cultivation, off-grid security, and peaceful living. Pre-planned professionally prepared edible gardens steps from your kitchen.
                </p>
              </div>

              {/* Specs boxes */}
              <div className="md:col-span-4 flex flex-col gap-3.5 border-t md:border-t-0 md:border-l border-stone-800 pt-4 md:pt-0 md:pl-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-500 font-mono text-[9px] uppercase tracking-wider">Plot Sizes</span>
                  <span className="text-stone-300 font-mono text-xs">10 Guntas+ (10,890 sqft)</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-500 font-mono text-[9px] uppercase tracking-wider">Footprint</span>
                  <span className="text-stone-300 font-mono text-xs">10% Permitted Builtup</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-500 font-mono text-[9px] uppercase tracking-wider">Amenities</span>
                  <span className="text-stone-300 font-serif italic text-xs">Clubhouse & Managed Resort Link</span>
                </div>

                <div className="pt-2">
                  <div className="w-full text-center py-2.5 bg-emerald-600/90 hover:bg-emerald-500 text-[#121411] font-mono text-[10px] tracking-widest font-semibold uppercase rounded transition leading-relaxed">
                    View Project Details
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 4: BENTO GRID SERVICES ================= */}
      <section className="py-24 md:py-32 border-b border-stone-900 bg-[#121411]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 select-none">
          <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">
            Integrated Services
          </span>
          <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] mt-2">
            The Pillars of <span className="font-serif italic font-normal text-emerald-400">Caaizen.</span>
          </h3>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Sustainable Agroforestry (Large bg image layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 h-[380px] rounded-lg overflow-hidden border border-stone-800 bg-cover bg-center flex items-end p-6 md:p-8 relative group"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5Ofzx9VxfKxu_pe7pL41OHHFlpMrYrrnxTsexvlroWaylACCem-xTZLiMlt6Z5blgm3v8zw0kpDmFdWJfE1tRqEGZeuHh2mkXFaBi1H6xaG153YXfa-xOQdn79ffBhULAVyEfd90rlKk3XkBdmWQikDkN5hmSPbn4JHGEgqmagc0UTc0lbo9k6gp02q1zlFt_l4JgekQVAy0YuuOvRZAxB5_xwEl4lHYdLv8Ye9Mzwi9y574t_ncoorGgDpsvgro3EUGWsS9sA1g')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#10120f]/95 via-[#10120f]/60 to-transparent transition-opacity group-hover:opacity-90" />
            <div className="relative z-10 space-y-2">
              <span className="font-mono text-[8.5px] tracking-[0.35em] text-emerald-400 uppercase">
                Zero Stress Farming
              </span>
              <h4 className="font-sans text-xl text-stone-100 font-normal">
                Sustainable Agroforestry Setup
              </h4>
              <p className="text-stone-300 text-xs font-light max-w-md leading-relaxed">
                We design and pre-install a bio-diverse food canopy including native species of mangoes, avocados, figs, and lemon. These orchards are managed in perpetuity by our dedicated agronomy team.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Strategic Land Sourcing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 h-[380px] rounded-lg overflow-hidden border border-stone-800 bg-[#191b16] flex flex-col justify-between p-6 md:p-8 relative group hover:border-[#274026]/40 transition-colors duration-500"
          >
            {/* Circle light shape */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-radial from-emerald-900/10 to-transparent pointer-events-none" />
            
            <div className="text-emerald-500/80">
              <Sprout className="w-8 h-8 stroke-[1.25]" />
            </div>

            <div className="space-y-2.5 pt-6">
              <span className="font-mono text-[8.5px] tracking-[0.3em] text-emerald-400 uppercase">
                Legal Autonomy
              </span>
              <h4 className="font-sans text-xl text-stone-200 font-normal">
                Bespoke Sourcing & Legal Clearances
              </h4>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                Navigating complex agricultural laws is our primary focus. We provide secure legal transfers, title safety checks, and absolute ownership transfers for all domestic and NRI acquisitions.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Eco Consulting (Managed layout with bg image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 h-[380px] rounded-lg overflow-hidden border border-stone-800 bg-cover bg-center flex items-end p-6 md:p-8 relative group"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaro0DgVRZxlLuDPt8nFRw8UUgKsn8LGPV1tYDZ5C0vbeJe8hxVyRLAoKvEiJAVjr0jybNXtjrXSObbWWZPAk8ALB6isZ7u_FEuw42X0cbHAyrkd_N0wdxU4vnK0lFNzoaUO_qxAkFGDrWuO6MFxOAc5C_Zru13Dhstw-E0lRAHxmwN12f0Gl9KD5c_ZmnLSUh2PTHUbrvPyUUR6CGyJ4JTdvs_FIQWCmCxATkr7d3IOvymFYra3qWQoDMjb1JiMtF-_GGAy-Ohig')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#10120f]/95 via-[#10120f]/60 to-transparent transition-opacity" />
            <div className="relative z-10 space-y-2">
              <span className="font-mono text-[8.5px] tracking-[0.35em] text-emerald-400 uppercase">
                Biophilic Blueprinting
              </span>
              <h4 className="font-sans text-xl text-stone-100 font-normal">
                Eco-Luxury Construction Consulting
              </h4>
              <p className="text-stone-300 text-xs font-light leading-relaxed">
                Connect directly with award-winning biophilic architects to plan low-carbon structural timber frameworks, rammed earth walls, or open-canopy forest cottages.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Off-Grid Utilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-7 h-[380px] rounded-lg overflow-hidden border border-stone-800 bg-[#191b16] flex flex-col justify-between p-6 md:p-8 relative hover:border-[#274026]/40 transition-colors duration-500 group"
          >
            <div className="flex items-center justify-between">
              <ShieldCheck className="w-8 h-8 text-emerald-500/80 stroke-[1.25]" />
              <div className="px-3 py-1 bg-[#151713] rounded-sm text-stone-500 font-mono text-[8.5px] tracking-widest uppercase border border-stone-900 select-none">
                Active Infrastructure
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="font-mono text-[8.5px] tracking-[0.3em] text-emerald-400 uppercase">
                Grid Autonomy
              </span>
              <h4 className="font-sans text-xl text-stone-200 font-normal">
                Off-Grid Utilities & Shared Security
              </h4>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                Every plot features high-capacity solar setups, reliable water supply networks sourced from natural recharge zones, active bio-sewage systems, and round-the-clock physical patrol protection.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-[10px] font-mono tracking-widest bg-stone-900 border border-stone-800 px-2.5 py-1 text-stone-400 uppercase">
                  ✓ Micro Hydric Grid
                </span>
                <span className="text-[10px] font-mono tracking-widest bg-stone-900 border border-stone-800 px-2.5 py-1 text-stone-400 uppercase">
                  ✓ Compound Wall
                </span>
                <span className="text-[10px] font-mono tracking-widest bg-stone-900 border border-stone-800 px-2.5 py-1 text-stone-400 uppercase">
                  ✓ 24/7 CCTV & Patrol
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ================= EXTRA TRUST CREDITS FOOTER PANEL ================= */}
      <footer className="py-16 bg-[#111310] text-[#717a6c]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-stone-900/40 pt-12">
          <div className="flex flex-col items-start gap-2">
            <span className="font-serenity text-[9px] tracking-[0.3em] uppercase block text-stone-600">Developed in Trust by</span>
            <img src="/logo_nobg.png" alt="Caaizen Realty Logo" className="h-20" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs leading-relaxed max-w-xs md:mx-0">
              Caaizen Realty ensures absolute zoning approvals and clean ownership records. We partner exclusively with certified organic agrarians.
            </p>
          </div>
          <div className="flex justify-end gap-3.5">
            <button
              onClick={() => onSetTab("contact")}
              className="px-4 py-2 bg-[#171916] border border-stone-800 hover:border-emerald-900 text-stone-300 font-mono text-[9px] tracking-widest uppercase rounded cursor-pointer transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Minimal helpers
function LeafHeading({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2.5 text-stone-300">
      {icon}
      <h5 className="font-sans font-medium text-sm text-[#F3F4F1] uppercase tracking-wide">
        {title}
      </h5>
    </div>
  );
}
