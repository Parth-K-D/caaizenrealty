import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Compass, Clock, Map, Sparkles, Building2, Smartphone, ArrowUpRight, CheckCircle 
} from "lucide-react";

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
          Connect with <span className="font-serif italic text-emerald-400">Our Advisors</span>
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
                  Connect immediately with our principal client success coordinators of high-density estate projects.
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
                      acquisitions@caaizenrealty.com
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
                      +91 80 4900 2235
                    </a>
                  </div>
                </div>

              </div>

              {/* Invitation Policy Alert */}
              <div className="p-4 bg-[#1b1c19]/80 border border-emerald-950/40 rounded flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-stone-400 text-xs leading-relaxed">
                  <strong className="text-stone-300">Invite-Only Access:</strong> Siting visits are strictly scheduled in advance and limited to verified buyers to maintain serene local density on agricultural plots.
                </p>
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
                    onClick={() => setSelectedLocation("site")}
                    className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase rounded cursor-pointer ${
                      selectedLocation === "site" 
                        ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/35"
                        : "text-stone-500 hover:text-stone-300"
                    }`}
                  >
                    Site
                  </button>
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
              {selectedLocation === "site" ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-emerald-500 font-mono text-[9.5px] tracking-widest uppercase font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> THE RETREAT FARMHOUSE SITE
                    </span>
                    <h4 className="text-xl text-[#F3F4F1] font-sans font-light">Bidadi Lands Location</h4>
                    <p className="text-stone-400 text-sm font-light leading-relaxed">
                      Survey No. 84, Forest Fringe Road, Harohalli Reserve, Bidadi, Bengaluru Rural District, Karnataka — 562112
                    </p>
                  </div>

                  {/* Lat Long block */}
                  <div className="p-4 bg-[#171916] border border-stone-900 rounded font-mono text-xs text-stone-400 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-stone-500 uppercase">Latitude:</span>
                      <span className="text-emerald-400">12.6455° N</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500 uppercase">Longitude:</span>
                      <span className="text-emerald-400">77.4988° E</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-stone-850">
                      <span className="text-stone-500 uppercase">Elevation:</span>
                      <span>900m above sea level</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-emerald-500 font-mono text-[9.5px] tracking-widest uppercase font-medium flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" /> CORPORATE HEADQUARTERS
                    </span>
                    <h4 className="text-xl text-[#F3F4F1] font-sans font-light">Caaizen Holdings Ltd.</h4>
                    <p className="text-stone-400 text-sm font-light leading-relaxed">
                      5th Floor, Earth Tower, Lavelle Road, Bangalore Main Circle, Karnataka — 560001
                    </p>
                  </div>

                  {/* Lat Long block */}
                  <div className="p-4 bg-[#171916] border border-stone-900 rounded font-mono text-xs text-stone-400 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-stone-500 uppercase">Latitude:</span>
                      <span className="text-emerald-400">12.9716° N</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500 uppercase">Longitude:</span>
                      <span className="text-emerald-400">77.5946° E</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-stone-850">
                      <span className="text-stone-500 uppercase">Zoning Code:</span>
                      <span>HQ-Metro-01</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Small imagery preview from site */}
              <div className="border border-stone-850 p-1 bg-[#1b1c19]/30 rounded mt-4">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBULW4X7DFbvlc2ksnieUhdHAFc1eZqQgvsBnodEn2j5oYe8tneL2keHOrw5ElZt4e_I541k0Q6SzLqoemr2P54dk3O51eFWtUyXg6y1AhlQPRdlm4HtYevJ4iQOKoBRzZ4lLOby22yLr95FqhhoVA1DfzbqTu0Uy_Ty9RDcFQRvSlCGRsVdFGeRDZLi4OnY3BjzkWYc4CnaldTbIF8c4WI4dox0shz1xmdGWPwHKvqy57RKI0V66zMx_HRLbYE7u1p-O3i5Vxsvc8"
                  alt="Beautiful natural landscape of Bidadi site surrounding" 
                  className="w-full aspect-[21/9] object-cover rounded filter brightness-90 shrink-0"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>

            {/* Legal regulatory footnote */}
            <div className="pt-6 border-t border-stone-900/60 mt-8">
              <span className="font-mono text-[8px] text-[#5e665a] uppercase block tracking-widest mb-1">REGULATORY DISCLOSURES</span>
              <p className="text-[10px] text-stone-500 font-light leading-relaxed">
                Referral coordination is monitored directly by our compliance advisors. Personal datasets are locked and deleted fully after site-visit coordination sequences as per security laws.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
