import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, Leaf, Shield, Sparkles, Droplet, Map, 
  Compass, Clock, Info, Check, Calendar, Activity, 
  Home, Trees, Users, Heart, Moon, Eye, ZoomIn, 
  Search, Tent, Waves, ChefHat, Bath, BookOpen, 
  Coffee, Dumbbell, Smile, Bike, Car, Wrench, PawPrint,
  ChevronRight, ArrowUpRight, Award, Trophy, ShieldCheck, HelpCircle,
  Gem, Milestone, FlameKindling, Info as InfoIcon, Sprout
} from "lucide-react";

interface ProjectsViewProps {
  onSetTab?: (tab: string) => void;
}

interface PlotDetails {
  id: number;
  sizeGuntas: number;
  sizeSqFt: number;
  facing: string;
  status: "Available" | "Sold";
  feature: string;
  price: string;
  coordinates: string; // for displaying plot positioning in tooltip
}

const PLOTS_DATA: PlotDetails[] = [
  { id: 1, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "East", status: "Sold", feature: "Near Eastern Orchard Pathway", price: "₹1.20 Cr*", coordinates: "East Boundary" },
  { id: 2, sizeGuntas: 11.2, sizeSqFt: 12196, facing: "East", status: "Available", feature: "Excellent Morning Light", price: "₹1.34 Cr*", coordinates: "East Sector" },
  { id: 3, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "East", status: "Sold", feature: "Proximity to the East Gate Entrance", price: "₹1.20 Cr*", coordinates: "East Boundary" },
  { id: 4, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "East", status: "Sold", feature: "Compact Elegant Layout", price: "₹1.20 Cr*", coordinates: "East Boundary" },
  { id: 5, sizeGuntas: 12.5, sizeSqFt: 13612, facing: "East", status: "Available", feature: "Spacious Garden Perimeter", price: "₹1.50 Cr*", coordinates: "East Outer Ring" },
  { id: 6, sizeGuntas: 10.5, sizeSqFt: 11434, facing: "East", status: "Sold", feature: "Buffered by Silver Oak Trees", price: "₹1.26 Cr*", coordinates: "East Sector" },
  { id: 7, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "East", status: "Sold", feature: "Cozy Corner Alignment", price: "₹1.20 Cr*", coordinates: "South-East Corner" },
  { id: 8, sizeGuntas: 15.4, sizeSqFt: 16770, facing: "South", status: "Available", feature: "Premium Large Double-Decker Garden", price: "₹1.85 Cr*", coordinates: "Southern Boundary" },
  { id: 9, sizeGuntas: 13.0, sizeSqFt: 14157, facing: "South", status: "Sold", feature: "Adjacent to Serene Mirror Pond", price: "₹1.56 Cr*", coordinates: "South Center Sector" },
  { id: 10, sizeGuntas: 11.0, sizeSqFt: 11979, facing: "North", status: "Available", feature: "Excellent Vastu Compliance", price: "₹1.32 Cr*", coordinates: "Center Spine Sector" },
  { id: 11, sizeGuntas: 12.0, sizeSqFt: 13068, facing: "North", status: "Available", feature: "Centered Premium Avenue Location", price: "₹1.44 Cr*", coordinates: "Center Spine Sector" },
  { id: 12, sizeGuntas: 14.0, sizeSqFt: 15246, facing: "West", status: "Available", feature: "Lush Sunset Views over reserve forests", price: "₹1.68 Cr*", coordinates: "Center spine adjacent to road" },
  { id: 13, sizeGuntas: 10.8, sizeSqFt: 11761, facing: "West", status: "Sold", feature: "Shaded by Heritage Tamarind Canopies", price: "₹1.29 Cr*", coordinates: "North Spine" },
  { id: 14, sizeGuntas: 11.5, sizeSqFt: 12523, facing: "West", status: "Available", feature: "Direct link to Clubhouse Lane", price: "₹1.38 Cr*", coordinates: "North Spine Avenue" },
  { id: 15, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "West", status: "Sold", feature: "Protected Forest-Facing Backyard", price: "₹1.20 Cr*", coordinates: "West Forest Boundary" },
  { id: 16, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "West", status: "Sold", feature: "Thick Bamboo Hedge Buffer", price: "₹1.20 Cr*", coordinates: "West Forest Boundary" },
  { id: 17, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "West", status: "Sold", feature: "Serene Private Walkway Access", price: "₹1.20 Cr*", coordinates: "West Forest Boundary" },
  { id: 18, sizeGuntas: 11.0, sizeSqFt: 11979, facing: "West", status: "Sold", feature: "Shaded Sunset Deck Pre-planned", price: "₹1.32 Cr*", coordinates: "West Boundary" },
  { id: 19, sizeGuntas: 10.8, sizeSqFt: 11761, facing: "West", status: "Available", feature: "Prime Western Sunset Point", price: "₹1.29 Cr*", coordinates: "West Boundary" },
  { id: 20, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "West", status: "Sold", feature: "Fully Planted Organic Orchard Yard", price: "₹1.20 Cr*", coordinates: "West Boundary" },
  { id: 21, sizeGuntas: 12.0, sizeSqFt: 13068, facing: "West", status: "Available", feature: "Wide Forest-Frontage Plot", price: "₹1.44 Cr*", coordinates: "West Boundary" },
  { id: 22, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "West", status: "Sold", feature: "Calm & High-Privacy Zone", price: "₹1.20 Cr*", coordinates: "South-West Boundary" },
  { id: 23, sizeGuntas: 10.0, sizeSqFt: 10890, facing: "West", status: "Sold", feature: "Quiet South-West forest corner", price: "₹1.20 Cr*", coordinates: "South-West Forest Corner" },
  { id: 24, sizeGuntas: 18.2, sizeSqFt: 19820, facing: "North-East", status: "Available", feature: "Superb Crown Corner Plot with maximum acreage", price: "₹2.18 Cr*", coordinates: "Exclusive Center Corner" },
  { id: 25, sizeGuntas: 15.0, sizeSqFt: 16335, facing: "North-West", status: "Sold", feature: "Panoramic Hillside Forest Vista", price: "₹1.80 Cr*", coordinates: "North-West Wing" },
  { id: 26, sizeGuntas: 12.8, sizeSqFt: 13939, facing: "North", status: "Available", feature: "Lush North-Wind Orchard Plot", price: "₹1.53 Cr*", coordinates: "North Avenue" },
  { id: 27, sizeGuntas: 14.1, sizeSqFt: 15355, facing: "North", status: "Sold", feature: "Direct Proximity to Main Gate Security", price: "₹1.69 Cr*", coordinates: "North Entry Sector" }
];

export default function ProjectsView({ onSetTab }: ProjectsViewProps) {
  // Countdown timer matching exact screenshot requirements
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 4,
    minutes: 32,
    seconds: 27
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#111310] text-[#E4E6E1] overflow-hidden">
      
      {/* ================= HERO SPECIFICATION ================= */}
      <section className="relative h-[65vh] min-h-[460px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtgqTiZHWfu0LNe9-aM3rIgDaANR_axeW0qkp4vgjl7DineLSTUlo3pOTprNYEP99qp-943sBlNyX3t5mpyNZhPAvBenYPhJm-PhugE5DUwnhuHk88-fZUYEzt30AcQwUtZY1tJLv5QaydiSJel-abyt7cwskRNg7cWZQEDH6cDn0qTtVjxCFqpjpQB1anUAyokOqkIEIVQ_ZmyBAjGD3QCKzzvNJ9fCbkQmrtVExNB0OtE09jw1QdYn3sz_xgBnzJxoR2zIZYIp0')`
            }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-[#111310]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-transparent to-[#111310]/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-900/30 rounded-full mb-4 font-mono text-[9px] tracking-[0.25em] text-emerald-400 uppercase select-none"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-500" />
            <span>Project details & Brochure specifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-[#F3F4F1] leading-tight max-w-3xl"
          >
            The Retreat:<br />
            <span className="font-serif italic font-normal text-emerald-400">Masterplan, Amenities & Investment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-stone-300 text-sm md:text-base font-light max-w-2xl mt-4 leading-relaxed"
          >
            Positioned at 900+ meters above sea level in Bidadi, near protected reserve forests. An exclusive master-planned gated sanctuary of 27 premium farmland plots meticulously designed for multi-generational security, natural wellness, and organic lifestyle harmony.
          </motion.p>
        </div>
      </section>

      {/* ================= PRINCIPAL HIGHLIGHTS METRICS ================= */}
      <section className="py-12 bg-[#141613]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#1a1c18] border border-stone-900 rounded-lg shadow-sm">
              <span className="text-stone-500 font-mono text-[9px] uppercase tracking-wider block">Plot Sizes Range</span>
              <span className="text-xl font-light text-[#F3F4F1] mt-2 block font-serif italic text-emerald-400">10 Guntas & Above</span>
              <p className="text-stone-400 text-xs mt-2 font-mono">Approximately 10,890 sq.ft. to 19,820 sq.ft.</p>
            </div>

            <div className="p-6 bg-[#1a1c18] border border-stone-900 rounded-lg shadow-sm">
              <span className="text-stone-500 font-mono text-[9px] uppercase tracking-wider block">Construction Permitted</span>
              <span className="text-xl font-light text-[#F3F4F1] mt-2 block font-serif italic text-emerald-400">10% of Family Plot</span>
              <p className="text-stone-400 text-xs mt-2 font-mono">Governed strictly under local eco-density rules</p>
            </div>

            <div className="p-6 bg-[#1a1c18] border border-stone-900 rounded-lg shadow-sm">
              <span className="text-stone-500 font-mono text-[9px] uppercase tracking-wider block">Built-Up Area Permitted</span>
              <span className="text-xl font-light text-[#F3F4F1] mt-2 block font-serif italic text-emerald-400">1,000 - 1,300 sq.ft.</span>
              <p className="text-stone-400 text-xs mt-2 font-mono">Compact wood-cottage floors allowed</p>
            </div>

            <div className="p-6 bg-[#1a1c18] border border-stone-900 rounded-lg shadow-sm">
              <span className="text-stone-500 font-mono text-[9px] uppercase tracking-wider block">Resort Rental Program</span>
              <span className="text-xl font-light text-[#F3F4F1] mt-2 block font-serif italic text-emerald-400">Optional Enrollment</span>
              <p className="text-stone-400 text-xs mt-2 font-mono">Professional hospitality tie-up for active yields</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MASTER PLAN (ORIGINAL BLUEPRINT LAYOUT MAP) ================= */}
      <section className="py-24 bg-[#111310] border-b border-stone-900/60 relative">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">Architectural Development Plan</span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] mt-2 font-sans">
              The Retreat <span className="font-serif italic font-normal text-emerald-400">Plot Layout</span>
            </h3>
            <p className="text-stone-400 text-sm mt-4 font-light leading-relaxed">
              Certified high-resolution territorial survey layout map of The Retreat. Each parcel is officially demarcated, pre-plowed with rich organic soil, and pre-aligned for biophilic wood cottage construction.
            </p>
          </div>

          {/* Original Static Blueprint Layout Card */}
          <div className="bg-[#141613] border border-stone-900 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-4 left-4 z-10 font-mono text-[9px] tracking-widest text-[#5e665a] uppercase flex items-center gap-2 select-none">
              Masterplan Layout • Certified Survey Sketch
            </div>

            {/* Layout Map Image Container */}
            <div className="w-full flex items-center justify-center p-2 bg-[#111310]/55 border border-stone-900/50 rounded-lg">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtgqTiZHWfu0LNe9-aM3rIgDaANR_axeW0qkp4vgjl7DineLSTUlo3pOTprNYEP99qp-943sBlNyX3t5mpyNZhPAvBenYPhJm-PhugE5DUwnhuHk88-fZUYEzt30AcQwUtZY1tJLv5QaydiSJel-abyt7cwskRNg7cWZQEDH6cDn0qTtVjxCFqpjpQB1anUAyokOqkIEIVQ_ZmyBAjGD3QCKzzvNJ9fCbkQmrtVExNB0OtE09jw1QdYn3sz_xgBnzJxoR2zIZYIp0"
                alt="Certified land master plan sketch"
                className="w-full h-auto rounded shadow-lg object-contain brightness-95"
                style={{ maxHeight: "750px" }}
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-stone-900 text-left">
              <div className="flex gap-4 font-mono text-[9px] uppercase tracking-wider text-stone-400 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-emerald-950 border border-emerald-500 rounded-sm inline-block" />
                  <span>Available Farmland</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-stone-900 border border-stone-700/60 rounded-sm inline-block" />
                  <span>Registered / Booked</span>
                </div>
              </div>

              <div className="font-mono text-[8.5px] uppercase tracking-widest text-[#5e665a] flex items-center gap-1">
                <InfoIcon className="w-3 h-3" /> Exact legal shape mapped from certified survey sketch
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 1. LOCATION & CONNECTIVITY ================= */}
      <section className="py-24 border-b border-stone-900/60 bg-[#131512]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-12 mb-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">Territorial Map Access</span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] font-sans mt-1">
              Sanctuary Off <span className="font-serif italic text-emerald-400">Mysore Road</span>
            </h3>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Nestled off the tollway corridor in a pristine natural sanctuary of Bidadi, yet strategically positioned to tap into Bengaluru Rural's exploding investment potential.
            </p>

            {/* Strategic development points */}
            <div className="space-y-4 pt-3">
              <div className="flex items-start gap-4">
                <div className="p-1 rounded bg-emerald-950/40 border border-emerald-900/30 text-emerald-400 mt-1">
                  <Milestone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Government Bidadi Smart City</h5>
                  <p className="text-stone-400 text-xs mt-1 font-light leading-relaxed">
                    Under direct high-tech zoning plans of HUD & Karnataka development boards, multiplying property valuation potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-1 rounded bg-emerald-950/40 border border-emerald-900/30 text-emerald-400 mt-1">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-stone-200 text-xs font-mono uppercase tracking-wider">The STRR & Peripheral Ring Roads</h5>
                  <p className="text-stone-400 text-xs mt-1 font-light leading-relaxed">
                    Provides direct 120km-expressway flows to Kempegowda Intl Airport, saving hours in urban transit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-1 rounded bg-emerald-950/40 border border-emerald-900/30 text-emerald-400 mt-1">
                  <Waves className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Proposed Bidadi Airport Buffer</h5>
                  <p className="text-stone-400 text-xs mt-1 font-light leading-relaxed">
                    Government plans for Bangalore's proposed second international airport cluster boost the territory's long-term exit demand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right travel metrics board */}
          <div className="lg:col-span-7 bg-[#111310]/85 border border-stone-900 rounded-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase">TRANSIT ADVANTAGES</span>
              <span className="font-mono text-[9px] text-[#5e665a] uppercase">Times by car</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-stone-900/60 rounded bg-[#161815]">
                <span className="text-stone-500 font-mono text-[9.5px] uppercase block">Bangalore City Center</span>
                <span className="text-lg text-stone-200 mt-1 block">60 mins</span>
              </div>
              <div className="p-4 border border-stone-900/60 rounded bg-[#161815]">
                <span className="text-stone-500 font-mono text-[9.5px] uppercase block">Mysore Expressway Access</span>
                <span className="text-lg text-stone-200 mt-1 block">5 mins</span>
              </div>
              <div className="p-4 border border-stone-900/60 rounded bg-[#161815]">
                <span className="text-stone-500 font-mono text-[9.5px] uppercase block">NICE Road Access</span>
                <span className="text-lg text-stone-200 mt-1 block">25 mins</span>
              </div>
              <div className="p-4 border border-stone-900/60 rounded bg-[#161815]">
                <span className="text-stone-500 font-mono text-[9.5px] uppercase block">Art of Living Int'l Center</span>
                <span className="text-lg text-stone-200 mt-1 block">40 mins</span>
              </div>
              <div className="p-4 border border-stone-900/60 rounded bg-[#161815]">
                <span className="text-stone-500 font-mono text-[9.5px] uppercase block">Bidadi Industrial Area</span>
                <span className="text-lg text-stone-200 mt-1 block">Within 10 mins</span>
              </div>
              <div className="p-4 border border-stone-900/60 rounded bg-[#161815]">
                <span className="text-stone-500 font-mono text-[9.5px] uppercase block">Savandurga Nature Trek</span>
                <span className="text-lg text-stone-200 mt-1 block">20 - 30 mins</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-950 flex items-center gap-3">
              <Map className="w-5 h-5 text-[#5e665a]" />
              <p className="text-stone-500 text-xs font-light">
                Close enough to access metropolitan infrastructure. Isolated enough to truly disconnect.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. THE EDIBLE GARDEN PHILOSOPHY ================= */}
      <section className="py-24 border-b border-stone-900/60 bg-[#111310]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Left Frame */}
          <div className="lg:col-span-6 relative order-last lg:order-first">
            <div className="border border-stone-800 p-2 bg-[#1b1c19]/50 rounded-lg">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Ofzx9VxfKxu_pe7pL41OHHFlpMrYrrnxTsexvlroWaylACCem-xTZLiMlt6Z5blgm3v8zw0kpDmFdWJfE1tRqEGZeuHh2mkXFaBi1H6xaG153YXfa-xOQdn79ffBhULAVyEfd90rlKk3XkBdmWQikDkN5hmSPbn4JHGEgqmagc0UTc0lbo9k6gp02q1zlFt_l4JgekQVAy0YuuOvRZAxB5_xwEl4lHYdLv8Ye9Mzwi9y574t_ncoorGgDpsvgro3EUGWsS9sA1g"
                alt="Edible garden setup at Caaizen Retreat Map" 
                className="w-full aspect-[4/3] object-cover rounded shadow-2xl brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-4 right-4 bg-emerald-950/90 border border-emerald-900 px-4 py-2 text-emerald-400 font-mono text-[9px] tracking-widest uppercase rounded">
              PERMACULTURE AGRI SERVICE
            </div>
          </div>

          {/* Text Right Frame */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">
              Sovereign Garden Philosophy
            </span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] font-sans leading-tight">
              Live With The Land, <br />
              <span className="font-serif italic text-emerald-400">Not Just On It.</span>
            </h3>

            <p className="text-stone-400 text-sm font-light leading-relaxed">
              At The Retreat, land ownership isn't just title boundaries. You exercise complete, direct control over what grows on your plot and how those agrarian assets are deployed.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <span className="text-[#F3F4F1] font-sans font-medium text-xs uppercase tracking-wider block">Fresh Kitchen Harvests</span>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Lush tomatoes, organic gourds, wild spinach, and native beans grown right beside your wood-furnished cottage verandas.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[#F3F4F1] font-sans font-medium text-xs uppercase tracking-wider block">Native Fruits & Orchards</span>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Avocados, guavas, sweet paper limes, papayas, and custom herbal beds like Lemongrass, Aloe, and Tulsi.
                </p>
              </div>
            </div>

            {/* Seamless growing features */}
            <div className="pt-4 border-t border-stone-850 space-y-3 font-mono text-[11px] text-stone-300">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span>Professionally prepared, nutrient-rich soil beds</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span>Integrated drip-irrigation for continuous low-maintenance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span>Dedicated agronomist guides & detailed calendar kits</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. LIFESTYLE AMENITIES & CLUBHOUSE CATALOG (DIRECT FROM SCREENSHOT) ================= */}
      <section className="py-24 border-b border-stone-900/60 bg-[#141613]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">Complete Catalog Specs</span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] mt-2 font-sans">
              Comprehensive <span className="font-serif italic font-normal text-emerald-400">Amenities</span>
            </h3>
            <p className="text-stone-400 text-sm font-light mt-4">
              Explore the exhaustive list of premium clubhouse facilities, off-grid infrastructure, and agricultural highlights planned for residents at The Retreat.
            </p>
          </div>

          {/* Sub-section 3A: Agricultural Highlights Panel (11 Highlihgts in Screenshot) */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/30 border border-emerald-900/30 rounded mb-8 font-mono text-[9px] tracking-widest text-emerald-400 uppercase">
              <Sprout className="w-4 h-4 text-emerald-400 animate-pulse" /> Core Agrarian Highlights
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-5 bg-[#111310] border border-stone-900 rounded shadow-sm hover:border-emerald-950/40 transition">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Premium Gated Living</h4>
                <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">
                  A completely secure gated community of luxury eco-conscious cottages with robust physical patrols.
                </p>
              </div>

              <div className="p-5 bg-[#111310] border border-stone-900 rounded shadow-sm hover:border-emerald-950/40 transition">
                <Milestone className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Spacious Roads Network</h4>
                <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">
                  Engineered 60-feet and 40-feet wide asphalted internal avenue corridors for absolute luxury.
                </p>
              </div>

              <div className="p-5 bg-[#111310] border border-stone-900 rounded shadow-sm hover:border-emerald-950/40 transition">
                <Eye className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-stone-200 text-xs font-mono uppercase tracking-wider">24/7 CCTV Setup</h4>
                <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">
                  Fully operational round-the-clock CCTV surveillance systems monitoring estate boundaries.
                </p>
              </div>

              <div className="p-5 bg-[#111310] border border-stone-900 rounded shadow-sm hover:border-emerald-950/40 transition">
                <Award className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Resort Rental Program</h4>
                <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">
                  Active option to enroll your cottage property in a managed resort ecosystem for passive rental yield.
                </p>
              </div>

              <div className="p-5 bg-[#111310] border border-stone-900 rounded shadow-sm hover:border-emerald-950/40 transition">
                <Check className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Absolute Living Autonomy</h4>
                <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">
                  You have full personal sovereign control over exactly what grows on your plot and how it's utilized.
                </p>
              </div>

              <div className="p-5 bg-[#111310] border border-stone-900 rounded shadow-sm hover:border-emerald-950/40 transition">
                <Droplet className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Drip Irrigation Lines</h4>
                <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">
                  Fully integrated drip-irrigation networks facilitating hassle-free, low-maintenance plot watering.
                </p>
              </div>

              <div className="p-5 bg-[#111310] border border-stone-900 rounded shadow-sm hover:border-emerald-950/40 transition">
                <BookOpen className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Guides & Expert Advice</h4>
                <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">
                  Curated seasonal planting calendars, horticulture manuals, and direct on-site agronomy experts support.
                </p>
              </div>

              <div className="p-5 bg-[#111310] border border-stone-900 rounded shadow-sm hover:border-emerald-950/40 transition">
                <Trees className="w-5 h-5 text-emerald-400 mb-3" />
                <h4 className="text-stone-200 text-xs font-mono uppercase tracking-wider">Soil Prep & Extras</h4>
                <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">
                  Nutrient-dense primed soil, custom garden starter kits, organic compost grids, and green nurseries.
                </p>
              </div>

            </div>
          </div>

          {/* Sub-section 3B: Premium Clubhouse & Recreational Grid (Drawn Directly from Screenshot Paragraph) */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/30 border border-emerald-900/30 rounded mb-8 font-mono text-[9px] tracking-widest text-emerald-400 uppercase">
              <Trophy className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> Clubhouse & Recreational Amenities Catalog
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              
              {/* Amenity: Gamping Tent */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Tent className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Gamping Tent</span>
              </div>

              {/* Amenity: Swimming Pool */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Waves className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Swimming Pool</span>
              </div>

              {/* Amenity: Water Body */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Droplet className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Water Body</span>
              </div>

              {/* Amenity: Outdoor Kitchen */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <ChefHat className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Outdoor Kitchen</span>
              </div>

              {/* Amenity: Outdoor Jacuzzi */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Bath className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Outdoor Jacuzzi</span>
              </div>

              {/* Amenity: Sauna */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Sparkles className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Sauna Cabin</span>
              </div>

              {/* Amenity: Kids Play Area */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Smile className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Free-Play Fields</span>
              </div>

              {/* Amenity: Supermarket */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Car className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Estate Supermarket</span>
              </div>

              {/* Amenity: Cafe & Library */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Coffee className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Orchard Cafe & Library</span>
              </div>

              {/* Amenity: Fitness Center */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Dumbbell className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Wellness Fitness</span>
              </div>

              {/* Amenity: Bike Rental */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Bike className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Bicycle Rental</span>
              </div>

              {/* Amenity: Repair services */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Wrench className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Active Site Repair</span>
              </div>

              {/* Amenity: Adventure Sports */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <Trophy className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Adventure Sports</span>
              </div>

              {/* Amenity: Pet Friendly */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300">
                <PawPrint className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Dog Activity Playgrounds</span>
              </div>

              {/* Amenity: Decks & Yoga Lawns */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300 col-span-2 md:col-span-1 lg:col-span-2">
                <Heart className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Meditation Decks & Yoga Lawns</span>
              </div>

              {/* Amenity: Community Herb & Flower Garden */}
              <div className="p-4 bg-[#111310] border border-stone-900/80 rounded flex flex-col justify-between hover:border-emerald-950 transition duration-300 col-span-2 md:col-span-1 lg:col-span-2">
                <Leaf className="w-5 h-5 text-emerald-500 stroke-[1.25]" />
                <span className="text-stone-200 text-xs font-sans font-medium mt-3 block">Shared Herb & Flower Garden</span>
              </div>

            </div>

            <div className="mt-8 text-center">
              <span className="font-mono text-[9px] text-[#5e665a] uppercase block tracking-wider">
                & MANY OTHER COMPREHENSIVE SERVICES • LAUNDRY SERVICES • MEDICAL SERVICES • REPAIR DESK • GUEST PARKINGS • TRAVEL DESK
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. WELLNESS-FIRST ARCHITECTURE ================= */}
      <section className="py-24 border-b border-stone-900/60 bg-[#111310]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 border border-stone-800 p-2 bg-[#1b1c19]/50 rounded-lg">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbD_OJ0VC69-OyTOLMbfkz-dqF07akLQ2E11zM_QEN7XgvC_TcFBhJbhs9nGy_2GaHI7eHPp0DucjsWQW_7YheAGGrh2Z9_2_6m_XsQqp799OiYoIoNDYs3kiCdwzuIi-CQtYnZ9BgKdaf3-d931ESmyTGlmz_scxPOpbRbkewUxdbBkdJUvc9E5-biI-wIwn-erGD9QGPGqWjtJ1-8xTjH805GdfY94rRBeYrmGYVZAwQkVc3bYYi2DifHbMXhatj1WY4D3cCrtM" 
              alt="Deep meditation and forest view wellness at Bangalore" 
              className="w-full aspect-[4/3] object-cover rounded shadow-2xl filter brightness-90 contrast-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">
              Bioclimatic Thermal Design
            </span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] font-sans leading-tight">
              Wellness Woven <br />
              <span className="font-serif italic text-emerald-400">Into The Architecture.</span>
            </h3>

            <p className="text-stone-400 text-sm font-light leading-relaxed">
              We guide developers to construct cottages using natural high-mass materials that align cleanly with local wind vectors, preserving tranquility.
            </p>

            <div className="space-y-4 pt-3">
              <div className="flex items-start gap-3">
                <Moon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F3F4F1] font-sans font-medium text-xs">Low-Light Pollution Design</span>
                  <p className="text-stone-500 text-xs font-light mt-0.5">Optimized outer lighting layouts protecting forest darkness, promoting deeper circadian cycles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F3F4F1] font-sans font-medium text-xs">Acoustics Vegetation Borders</span>
                  <p className="text-stone-500 text-xs font-light mt-0.5">Densely planted peripheral bamboo screens completely blocking external road frequencies.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F3F4F1] font-sans font-medium text-xs">Walking-First Layouts</span>
                  <p className="text-stone-500 text-xs font-light mt-0.5">Estate parking restricted to community perimeters to eliminate noise, keeping internal lanes vehicle-free.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 6. COTTAGE & GAZEBO DESIGNS ================= */}
      <section className="py-24 bg-[#141613] border-b border-stone-900/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">
              Architectural Blueprints
            </span>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] mt-2 font-sans leading-tight">
              Cottage & Pergola <br />
              <span className="font-serif italic text-emerald-400">Elegance Blueprint.</span>
            </h3>
            <p className="text-stone-400 text-sm font-light mt-4">
              Our recommended construction models emphasize compact spatial architecture, zero-plastic building materials, and physical balance with the agricultural plots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 md:p-8 bg-[#181b17] border border-stone-900 rounded-lg">
              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-1">BIOCLIMATIC BLUEPRINTS</span>
              <h4 className="text-xl text-stone-200 font-sans font-normal mb-3">Eco Cottage Models</h4>
              <p className="text-stone-400 text-xs font-light leading-relaxed mb-4">
                Structured with deep timber porches, high ceilings, and floor-to-ceiling panoramic slide doors. Floor space is strictly optimized from 1,000 sq.ft to 1,300 sq.ft.
              </p>
              <ul className="space-y-2 text-xs text-stone-500 font-mono">
                <li>✓ Passive thermal control dynamics</li>
                <li>✓ Local raw granite structural piers</li>
                <li>✓ Integrated rain water filter drains on deck edges</li>
               </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#181b17] border border-stone-900 rounded-lg">
              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-1">OUTDOOR HARMONY</span>
              <h4 className="text-xl text-stone-200 font-sans font-normal mb-3">Timber Gazebos & Pavilions</h4>
              <p className="text-stone-400 text-xs font-light leading-relaxed mb-4">
                Perfect custom hosting areas. Features timber slats calibrated precisely to block sharp overhead midday rays while allowing comfortable warm sunset air flows.
              </p>
              <ul className="space-y-2 text-xs text-stone-500 font-mono">
                <li>✓ Termite-proof oiled teak logs</li>
                <li>✓ Integrated clay barbecue hosting tables</li>
                <li>✓ Low-illumination soft amber lighting accents</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. MEMORABLE PLOT PRICING & TICKING COUNTDOWN (DIRECT FROM SCREENSHOT) ================= */}
      <section className="py-24 bg-[#111310]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block mb-3">Guaranteed Investment Opportunity</span>
          <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] font-sans">
            The Retreat <span className="font-serif italic font-normal text-emerald-400">Farmland Pricing</span>
          </h3>
          <p className="text-stone-400 text-sm font-light mt-4 max-w-lg mx-auto">
            Acquire a premium agricultural farm plot inside Bangalore's most secured eco-preserve. Highly limited inventory remaining at initial launch rates.
          </p>

          {/* Pricing Card Match Exact Layout From Screenshot */}
          <div className="mt-12 bg-stone-900/60 border border-emerald-900/20 rounded-xl p-8 md:p-12 max-w-2xl mx-auto relative overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700" />
            
            <div className="space-y-6">
              <span className="font-mono text-[11px] tracking-[0.25em] text-emerald-400 uppercase block">Farmland Option</span>
              
              <div className="space-y-1">
                <h4 className="text-2xl md:text-3xl font-light font-serif tracking-tight text-stone-300">Caaizen The Retreat</h4>
                <p className="text-stone-500 font-mono text-[10px] tracking-widest uppercase">Premium Agri Plot Price</p>
              </div>

              {/* Huge Price Marker match image */}
              <div className="py-6 border-y border-stone-800/40 my-6">
                <span className="text-4xl md:text-6xl font-serif text-emerald-400 font-light block tracking-tight">
                  ₹1.2Cr<span className="text-xl md:text-2xl text-stone-400 font-mono align-super hover:scale-105 inline-block ml-0.5">*</span>
                </span>
                <span className="text-xs text-stone-500 font-mono tracking-widest uppercase mt-4 block">
                  📂 Starting from 10,000 Sq.Ft. Area (approx 10 Guntas)
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <span className="text-stone-400 text-[13px] md:text-[15px] font-sans block mb-5 leading-relaxed">
                Schedule Your Exclusive Site-Visit to Caaizen The Retreat Bidadi
              </span>

              {/* Call-to-action match red bold underlined link in Screenshot */}
              <button
                onClick={() => onSetTab?.("contact")}
                className="text-red-500 hover:text-red-400 font-sans text-xl md:text-2xl font-bold underline decoration-2 underline-offset-8 uppercase tracking-wide cursor-pointer transition p-2 hover:scale-102"
              >
                Hurry Up! Enquire Now
              </button>

              <span className="text-xs text-stone-500 font-mono mt-6 uppercase tracking-wider block">
                Pre-Launch Prices Applicable On 1st Few Units Only.
              </span>
            </div>

            {/* Live Countdown Timer block */}
            <div className="mt-12 pt-8 border-t border-stone-850/50">
              <span className="text-[10px] font-mono tracking-widest text-[#5e665a] uppercase block mb-4">
                Launch Offer Closes In
              </span>

              <div className="flex justify-center items-center gap-4 select-none">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#171916] border border-stone-800 rounded flex items-center justify-center font-mono text-xl md:text-2xl text-stone-200">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-stone-500 uppercase mt-2">Days</span>
                </div>

                <span className="text-stone-600 font-mono text-xl">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#171916] border border-stone-800 rounded flex items-center justify-center font-mono text-xl md:text-2xl text-stone-200">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-stone-500 uppercase mt-2">Hours</span>
                </div>

                <span className="text-stone-600 font-mono text-xl">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#171916] border border-stone-800 rounded flex items-center justify-center font-mono text-xl md:text-2xl text-stone-200">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-stone-500 uppercase mt-2">Minutes</span>
                </div>

                <span className="text-stone-600 font-mono text-xl">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#171916] border border-stone-800 rounded flex items-center justify-center font-mono text-xl md:text-2xl text-emerald-400">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-stone-500 uppercase mt-2">Seconds</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= REGULATORY FOOTNOTE ================= */}
      <section className="py-12 bg-[#111310] border-t border-stone-900/60 text-[#5e665a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-xs leading-relaxed font-light space-y-4">
          <p>
            <strong className="text-stone-400">Important Information Notice:</strong> All maps, layout coordinate plots, and sketches shown are mock visual approximations based on pre-launch proposals. Exact on-site dimensions, specific perimeter trees, boundaries, built-up areas, architectural porches and finishes may vary seamlessly at developers' discretion.
          </p>
          <p>
            All land parcels sold are designated legal private agricultural/farmland assets. As per Karnataka land revenue regulations, registration of farm plots is completed strictly after government 11E survey sketch issuance, fully supported and executed by the developer. These land plans are exempt from metropolitan urban housing rules and do not fall under the purview of RERA.
          </p>
        </div>
      </section>

    </div>
  );
}
