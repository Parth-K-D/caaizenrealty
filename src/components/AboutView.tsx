import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, FileCheck, ShieldAlert, Award, Compass, Zap, ArrowUpRight, HelpCircle, Flame } from "lucide-react";
import { TEAM_MEMBERS_DATA } from "../data";
import { TeamMember } from "../types";

interface AboutViewProps {
  onSetTab?: (tab: string) => void;
}

export default function AboutView({ onSetTab }: AboutViewProps) {
  // Focus state for interactive leadership bios
  const [selectedLeader, setSelectedLeader] = useState<TeamMember | null>(null);

  return (
    <div className="w-full bg-[#111310] text-[#E4E6E1] overflow-hidden">
      
      {/* ================= ABOUT HERO ================= */}
      <section className="relative h-[75vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAi2ffRxQ7XzZYYDjE2o26q0jE25tzum_wOOx8ieFFoTGUwu5Rr6vPqjcOtoWHZTjak7b-QoXrj9Ggsz_RyO_oTlCq7rOWhVpZmF6jpcyHwojmQ4BOZcYtYmV0gUMSbTMjkRK42sYKKRlISYA9J0vYOdDvhKbCYky7SWLn20zCOHE6V9O4QkQGaFgCiTXIVZ3L3YCl4HRcwk9svlkK7kxrmkvWSp94TwobXwJex1D3JwY1baO_f-KZ3aHKxD3h2yeeIl-I-jW0bec')`
            }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-[#111310]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-transparent to-[#111310]/50" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-900/30 rounded-full mb-6 font-mono text-[9px] tracking-[0.25em] text-emerald-400 uppercase select-none"
          >
            <Leaf className="w-3.5 h-3.5" />
            <span>The Caaizen Mandate & Ethics</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] leading-tight max-w-3xl mx-auto">
            Where Real Estate Investment, Nature and Luxury <br />
            Find Their <span className="font-serif italic text-emerald-400">Perfect Equilibrium</span>
          </h2>

          <p className="text-stone-300 text-xs md:text-sm font-light max-w-xl mx-auto mt-6 leading-relaxed">
            Caaizen Realty is a pioneering development group specializing in premium sustainable real estate. We acquire, design, and develop low-density eco-estates that enhance, lifestyle allowing you to stay in pollution free environment, a perfect retreat from the busy & hectic city life. An escape into the nature combined with excellent investment opportunity that will make you proud in the years to come.
          </p>
        </div>
      </section>

      {/* ================= LEADERSHIP SYSTEM (INTERACTIVE TEAM BIOS) ================= */}
      <section className="py-24 md:py-32 bg-[#121411]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 select-none text-center">
          <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block">
            The Visionaries
          </span>
          <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#F3F4F1] mt-2 font-sans">
            Our Team
          </h3>
          <p className="text-stone-500 text-xs mt-3 max-w-lg mx-auto leading-normal">
            Click on any leader profile card below to expand their certified bios, specialize quotes, and to coordinate custom consultancy sessions with them.
          </p>
        </div>

        {/* Leadership grid */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS_DATA.map((member) => (
            <motion.div
              key={member.id}
              onClick={() => setSelectedLeader(member)}
              className="group p-5 bg-[#191b16] border border-stone-850 hover:border-emerald-900/40 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-2xl"
              whileHover={{ y: -6 }}
            >
              {/* Profile Image with organic frame overlay */}
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-2 border-stone-850 group-hover:border-emerald-600/60 transition duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter brightness-[0.88] grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h4 className="font-sans font-medium text-[#F3F4F1] text-base mb-1">
                  {member.name}
                </h4>
                <p className="font-mono text-[10px] tracking-widest text-emerald-500 uppercase mb-3">
                  {member.role}
                </p>
                <span className="font-mono text-[9px] text-stone-600 block uppercase">
                  Specialty: {member.specialty}
                </span>
              </div>

              {/* <div className="mt-5.5 text-emerald-500/80 group-hover:text-emerald-400 font-mono text-[10.5px] uppercase tracking-widest flex items-center gap-1">
                <span>View Bio Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EXPANDED BIOS LIGHTBOX INTERACTIVE ================= */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-[#0c0d0c]/90 backdrop-blur-md"
              onClick={() => setSelectedLeader(null)}
            />

            <motion.div
              className="relative w-full max-w-xl bg-[#141613] border border-stone-800 p-6 md:p-8 rounded-lg shadow-2xl flex flex-col max-h-[90vh] text-[#F3F4F1]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header decoration */}
              <div className="h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 absolute top-0 left-0 right-0" />
              
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-300 transition"
              >
                <XIcon className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center space-y-5 pt-4">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-emerald-900/40"
                  referrerPolicy="no-referrer"
                />
                
                <div>
                  <h4 className="font-sans text-xl font-normal text-stone-100">{selectedLeader.name}</h4>
                  <p className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase mt-0.5">
                    {selectedLeader.role}
                  </p>
                </div>

                <div className="py-4 border-t border-b border-stone-900 w-full space-y-3 text-sm text-stone-400 text-left">
                  <p className="leading-relaxed font-sans">{selectedLeader.bio}</p>
                  
                  <div className="bg-[#191b16] border border-stone-900/40 p-4 rounded text-xs italic text-stone-300 font-serif leading-relaxed relative">
                    <span className="absolute -top-3 left-3 text-3xl font-serif text-emerald-800 select-none">“</span>
                    "{selectedLeader.quote}"
                  </div>
                </div>

                <div className="flex justify-between items-center w-full pt-2">
                  <span className="font-mono text-[9px] tracking-wider text-stone-500 uppercase">
                    Focus: {selectedLeader.specialty}
                  </span>
                  
                  {onSetTab ? (
                    <button
                      onClick={() => {
                        setSelectedLeader(null);
                        onSetTab("contact");
                      }}
                      className="px-4.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-stone-900 font-mono text-[9.5px] font-bold tracking-widest uppercase rounded cursor-pointer transition-colors duration-300"
                    >
                      Contact Team Advisor
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedLeader(null)}
                      className="px-4.5 py-2.5 bg-stone-800 hover:bg-stone-750 text-stone-200 font-mono text-[9.5px] font-bold tracking-widest uppercase rounded cursor-pointer transition-colors duration-300"
                    >
                      Close Bio
                    </button>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Inline SVG Icon
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
