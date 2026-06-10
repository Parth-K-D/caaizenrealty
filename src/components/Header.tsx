import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Heart } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Header({
  currentTab,
  setTab,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (tabId: string) => {
    setTab(tabId);
    setMobileOpen(false);
    // Smooth scroll to top when changing page screens
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "The Retreat" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header
        id="luxury-site-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#111310]/95 backdrop-blur-md border-b border-stone-900/50 py-3 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div
            id="brand-logo-trigger"
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => handleNav("home")}
          >
            <div className="flex items-center justify-center group-hover:border-emerald-500/50 transition-colors duration-500">
              {/* <Logo variant="small" className="w-7 h-5" /> */}
              <img src="/logo_nobg.png" alt="Caaizen Realty Logo" className="h-10" />
            </div>
            {/* <div className="flex flex-col">
              <span className="font-sans font-light text-xl tracking-[0.2em] text-[#F3F4F0] uppercase">
                Caaizen
              </span>
              <span className="font-mono text-[8px] tracking-[0.3em] text-emerald-600 uppercase -mt-1 group-hover:text-emerald-400 transition-colors duration-500">
                Realty
              </span>
            </div> */}
          </div>

          {/* Desktop Navigation Linkages */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative py-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  currentTab === item.id
                    ? "text-emerald-400 font-serenity"
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-emerald-500 to-teal-400" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 border border-stone-800 text-stone-300 bg-[#131512] hover:text-stone-100 rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown Overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 z-35 bg-[#121411]/98 flex flex-col justify-center px-10 md:hidden pt-20"
        >
          <div className="flex flex-col gap-6 text-left">
            <span className="font-serenity text-[9px] tracking-[0.4em] text-emerald-500 uppercase mb-2">
              Menu Navigation
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-2xl font-serenity tracking-widest uppercase text-left transition-colors duration-300 ${
                  currentTab === item.id ? "text-emerald-400" : "text-stone-300"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-[1px] bg-stone-900 my-4" />
          </div>

          {/* Bottom mobile credit branding */}
          <div className="absolute bottom-10 left-10 right-10">
            <p className="font-serenity text-[9px] tracking-widest text-[#5e665a] uppercase">
              Caaizen Realty • Curated Eco-Estates
            </p>
          </div>
        </div>
      )}
    </>
  );
}
