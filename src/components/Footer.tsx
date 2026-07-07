import React from 'react';
import { Shield, MapPin, Mail, Phone, ArrowUp, ExternalLink, Globe } from 'lucide-react';
import { companyDetails } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="app-footer" className="bg-[#080d1a] border-t border-slate-900 pt-16 pb-8 text-slate-400 relative overflow-hidden">
      {/* Decorative subtle background overlay */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Motto */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 shadow-md">
                <Shield className="w-5 h-5 animate-pulse-subtle" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wide">IMG SAFE</span>
                <span className="block text-[10px] font-mono tracking-wider text-slate-550 uppercase leading-none mt-0.5">
                  Incident Management Global
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              We provide strategic safety counseling, high-end trade sourcing of protective gears, surveillance installation, and heavy transport logistics across local and international sectors.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>HQ Coordinates: Dar Es Salaam, TZ</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 lg:pl-8 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Quick Directory
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {[
                { id: 'hero', label: 'Home Landing' },
                { id: 'about', label: 'Word from Team & Values' },
                { id: 'services', label: 'Services & Products Catalog' },
                { id: 'contact', label: 'Inquiries & Contact Desk' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-dir-btn-${link.id}`}
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) {
                        const offset = 80;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = el.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors font-sans duration-200 block text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Custom HQ Location Wireframe Map Card */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Headquarters Location
            </h4>
            
            {/* Custom SVG/CSS Visual Map representation */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-850 space-y-3 shadow-xl">
              <div className="relative h-28 w-full bg-slate-950 border border-slate-850 rounded-lg overflow-hidden flex items-center justify-center font-mono text-[10px] text-slate-500">
                {/* Simulated Grid Streets */}
                <div className="absolute inset-0 opacity-[0.05] invert" style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />
                
                {/* Kawawa Road */}
                <div className="absolute top-[40%] inset-x-0 h-4 bg-slate-900 border-y border-slate-800 rotate-[-2deg] flex items-center justify-center">
                  <span className="text-[7px] text-slate-400 uppercase tracking-widest">Kawawa Road</span>
                </div>

                {/* Biafra Grounds */}
                <div className="absolute bottom-2 right-4 w-24 h-10 bg-emerald-950/20 border border-emerald-900/30 rounded flex items-center justify-center">
                  <span className="text-[7px] text-emerald-450 uppercase tracking-wider font-semibold">Biafra Grounds</span>
                </div>

                {/* Shishi Food & Biafra Landmark */}
                <div className="absolute top-2 left-6 text-slate-500 text-[6px]">Uporoto St</div>
                <div className="absolute bottom-1 left-4 text-slate-500 text-[6px]">Sapour St</div>

                {/* HQ Pointer */}
                <div className="absolute top-[35%] left-[45%] flex flex-col items-center gap-1 z-10 animate-bounce">
                  <div className="p-1 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                <span className="absolute bottom-1.5 left-1.5 text-[8px] text-slate-500">
                  Kinondoni Biafra Area
                </span>
              </div>

              <div className="text-[11px] leading-relaxed font-sans text-slate-400">
                <strong className="text-white font-semibold">Plot no. 4, Block no. 36, Kinondoni Biafra</strong>
                <br />
                Located on Kawawa road, adjacent to Biafra Grounds, Dar Es Salaam.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} IMG SAFE. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-2 px-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 text-slate-300 hover:text-blue-400 transition flex items-center gap-1.5 shadow-md"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
