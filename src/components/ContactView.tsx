import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Compass, Clock, Map, Sparkles, Building2, Smartphone, ArrowUpRight, CheckCircle 
} from "lucide-react";

declare module "react/jsx-runtime";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function ContactView() {
  // Coordinated selection tab
  const [selectedLocation, setSelectedLocation] = useState<"site" | "hq">("site");

  return (
    <div className="w-full bg-[#111310] text-[#E4E6E1] overflow-hidden">
      
      {/* Centered Heading Intro */}
      <section className="pt-24 md:pt-32 pb-8 max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase block mb-3">
          Siting & Acquisitions Desk
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#F3F4F1] font-sans">
          Connect with <span className="font-serif italic text-emerald-400">us</span>
        </h2>   
        <p className="text-stone-400 text-sm font-light max-w-lg mx-auto mt-4 leading-relaxed">
          Caaizen Realty operates exclusively through coordinated referrals. No complex registration forms are required—simply reach out to us directly below.
        </p>
      </section>

      {/* Main Spacious Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: PRIMARY DIRECT ACTIONS */}
          <div className="lg:col-span-6 bg-[#131512] border border-stone-900 rounded-lg p-6 md:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#5e665a] uppercase block">
                  Direct Acquisition Access
                </span>
                <h3 className="text-2xl font-light text-[#F3F4F1] mt-2 font-sans">
                  Direct Line & Email
                </h3>
                <p className="text-stone-500 text-xs font-light mt-1.5 leading-relaxed">
                  Connect immediately with us.
                </p>
              </div>

              {/* Direct links list */}
              <div className="space-y-6">
                
                {/* Telephone */}
                <div className="flex items-start gap-4 p-4 rounded border border-stone-900/60 bg-[#161815] hover:border-emerald-900/40 transition duration-300">
                  <div className="p-3 bg-[#111310] rounded border border-stone-850 text-emerald-400">
                    <Phone className="w-5 h-5 stroke-[1.25]" />
                  </div>
                  <div>
                    <span className="text-stone-500 font-mono text-[9.5px] uppercase tracking-wider block">Office Call Desk</span>
                    <a href="tel:+919731199655" className="text-stone-200 text-lg font-mono tracking-wide hover:text-emerald-400 transition block mt-0.5">
                      +91 9731199655
                    </a>
                    <span className="text-[10px] text-stone-500 font-sans block mt-1">Available Daily • 10:00 AM to 6:00 PM (IST)</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4 p-4 rounded border border-stone-900/60 bg-[#161815] hover:border-emerald-900/40 transition duration-300">
                  <div className="p-3 bg-[#111310] rounded border border-stone-850 text-emerald-400">
                    <Mail className="w-5 h-5 stroke-[1.25]" />
                  </div>
                  <div>
                    <span className="text-stone-500 font-mono text-[9.5px] uppercase tracking-wider block">Acquisition Queries</span>
                    <a href="mailto:acquisitions@caaizenrealty.com" className="text-stone-200 text-base font-mono hover:text-emerald-400 transition block mt-1">
                      caaizenrealty@gmail.com
                    </a>
                    <span className="text-[10px] text-stone-500 font-sans block mt-1">Written inquiries receive answers in 24 hours</span>
                  </div>
                </div>

                {/* WhatsApp Support */}
                <div className="flex items-start gap-4 p-4 rounded border border-stone-900/60 bg-[#161815] hover:border-emerald-900/40 transition duration-300">
                  <div className="p-3 bg-[#111310] rounded border border-stone-850 text-emerald-400">
                    <Smartphone className="w-5 h-5 stroke-[1.25]" />
                  </div>
                  <div>
                    <span className="text-stone-500 font-mono text-[9.5px] uppercase tracking-wider block">Advisor Mobile Connect</span>
                    <a href="tel:+918049002235" className="text-stone-200 text-base font-mono hover:text-emerald-400 transition block mt-1">
                      +91 9731133655
                    </a>
                  </div>
                </div>

              </div>

            </div>

            <div className="text-stone-600 font-mono text-[9.5px] uppercase tracking-wider pt-6 border-t border-stone-900/60 mt-8">
              Caaizen Realty • Bengaluru Reserve Territory
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE GEO DETAILS */}
          <div className="lg:col-span-6 bg-[#131512] border border-stone-900 rounded-lg p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
            
            {/* Visual ambient lighting decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-emerald-950/15 to-transparent pointer-events-none" />

            <div className="space-y-6">
              
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#5e665a] uppercase">
                  Physical Coordinates
                </span>
                
                {/* Visual coordinate tab toggler */}
                <div className="flex gap-1 p-0.5 bg-[#171916] rounded border border-stone-850">
                  <button 
                    onClick={() => setSelectedLocation("hq")}
                    className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase rounded cursor-pointer ${
                      selectedLocation === "hq" 
                        ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/35"
                        : "text-stone-500 hover:text-stone-300"
                    }`}
                  >
                    Office
                  </button>
                </div>
              </div>

              {/* Dynamic location presentation */}
              {selectedLocation === "office" ? (
                <div className="space-y-4">
                  

                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-emerald-500 font-mono text-[9.5px] tracking-widest uppercase font-medium flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" /> CORPORATE HEADQUARTERS
                    </span>
                    <h4 className="text-xl text-[#F3F4F1] font-sans font-light">Caaizen Realty Ltd.</h4>
                    <p className="text-stone-400 text-sm font-light leading-relaxed">
                      224, 3rd Floor, S.S Complex 14th Cross, Sampige Road, Malleswaram, Bengaluru - 560003, Karnataka, India
                    </p>
                  </div>


                </div>
              )}

              {/* Small imagery preview from site */}
              <div className="border p-1 bg-[#1b1c19]/30 rounded mt-4">
                <img 
                  src="/CaaizenQR.png"
                  alt="QR Code for Caaizen Realty Office Location" 
                  className="w-full object-cover rounded filter brightness-90 shrink-0"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
