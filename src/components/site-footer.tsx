import { Link } from "react-router-dom";
import caaizenLogo from "@/assets/caaizen-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer id="contact" className="surface-olive-deep">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img
            src="/logo_nobg.png"
            alt="Caaizen Realty"
            className="h-12 w-auto brightness-0 invert"
            width={180}
            height={72}
          />
          <p className="mt-6 text-lg leading-relaxed opacity-80 max-w-sm font-serif">
            Land is sacred. We craft homes that honor space, celebrate nature, and invite a richer way of living.
          </p>
        </div>
        <div>
          <p className="font-eyebrow text-accent">Explore</p>
          <ul className="mt-4 space-y-2 text-lg font-serif opacity-90">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/the-retreat" className="hover:text-accent">The Retreat</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-eyebrow text-accent">Connect</p>
          <p className="mt-4 text-lg leading-relaxed opacity-90 font-serif">
            caaizenrealty@gmail.com<br />
            +91 9731199655<br />
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 font-eyebrow text-[0.65rem] opacity-60">
          <span>© {new Date().getFullYear()} Caaizen Realty. All rights reserved.</span>
          <span>Designed with reverence for the land.</span>
        </div>
      </div>
    </footer>
  );
}
