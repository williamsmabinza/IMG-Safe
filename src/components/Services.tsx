import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, GraduationCap, Presentation, ShoppingCart, Truck,
  Shield, Cpu, Wrench, Sun, Shirt, Printer, Cog, HardHat,
  Zap, Building2, Gem, Factory, Hammer, Wifi, School, HeartPulse, 
  Hotel, Leaf, Landmark, Home, Globe, Users, CheckCircle, Handshake,
  ChevronRight, ArrowUpRight
} from 'lucide-react';
import { serviceCategories, productCategories, keySectors, clientList } from '../data';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  // Service lines
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Presentation: Presentation,
  ShoppingCart: ShoppingCart,
  Truck: Truck,
  
  // Product categories
  HardHat: HardHat,
  Shield: Shield,
  Cpu: Cpu,
  Wrench: Wrench,
  Sun: Sun,
  Shirt: Shirt,
  Printer: Printer,
  Cog: Cog,

  // Sectors
  Zap: Zap,
  Building2: Building2,
  Gem: Gem,
  Factory: Factory,
  Hammer: Hammer,
  Wifi: Wifi,
  School: School,
  HeartPulse: HeartPulse,
  Hotel: Hotel,
  Leaf: Leaf,
  Landmark: Landmark,
  Home: Home
};

export default function Services() {
  const [activeView, setActiveView] = useState<'services' | 'products' | 'sectors' | 'clients'>('services');
  const [selectedProductCat, setSelectedProductCat] = useState<string>(productCategories[0].id);

  const viewTabs = [
    { id: 'services' as const, label: 'Core Services', icon: Briefcase },
    { id: 'products' as const, label: 'Products Sourcing', icon: ShoppingCart },
    { id: 'sectors' as const, label: 'Key Sectors', icon: Globe },
    { id: 'clients' as const, label: 'Our Clients', icon: Handshake }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#080d1a] border-t border-slate-900 overflow-hidden">
      {/* Visual glowing layout backdrops */}
      <div className="absolute top-[30%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">EXCELLENCE IN PRACTICE</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Our Services & Products Catalog
          </h2>
          <p className="text-sm text-slate-400 font-sans max-w-xl mx-auto">
            From professional safety advisory to physical sourcing and logistics, explore our complete operational capabilities.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Central Switcher Nav Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800 max-w-2xl mx-auto shadow-inner backdrop-blur-sm">
          {viewTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeView === tab.id;
            return (
              <button
                key={tab.id}
                id={`services-tab-${tab.id}`}
                onClick={() => {
                  setActiveView(tab.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Inner Tab Panels */}
        <div className="min-h-[480px]">
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: CORE SERVICES */}
            {activeView === 'services' && (
              <motion.div
                key="services-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* 5 Core Service Cards Grid */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceCategories.map((service) => {
                    const ServiceIcon = iconMap[service.iconName] || Briefcase;
                    return (
                      <div
                        key={service.id}
                        id={`service-card-${service.id}`}
                        className="p-6 rounded-2xl bg-[#0e1626]/80 border border-slate-850 hover:border-blue-500/30 hover:bg-[#111a2d] transition-all duration-300 shadow-xl flex flex-col justify-between h-full group"
                      >
                        <div className="space-y-4">
                          {/* Colored Icon Header */}
                          <div className={`p-3 rounded-xl border w-fit bg-gradient-to-br ${service.colorClass}`}>
                            <ServiceIcon className="w-5 h-5 text-white" />
                          </div>
                          
                          <h3 className="font-display font-semibold text-xl text-white group-hover:text-blue-400 transition-colors">
                            {service.title}
                          </h3>
                          
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                            {service.description}
                          </p>

                          <div className="h-px bg-slate-850 my-4" />

                          {/* Bullet details */}
                          <ul className="space-y-2">
                            {service.details.map((detail, index) => (
                              <li key={index} className="flex items-start gap-2 text-xs text-slate-400">
                                <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Interactive foot link */}
                        <div className="mt-6 pt-4 border-t border-slate-850 flex items-center justify-between text-xs text-slate-500 group-hover:text-blue-400 transition-colors font-mono">
                          <span>IMG SAFE SYSTEM</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* VIEW 2: PRODUCTS SOURCING */}
            {activeView === 'products' && (
              <motion.div
                key="products-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left Sidebar: Product Categories list */}
                <div className="lg:col-span-4 space-y-2 bg-[#0e1626]/80 p-4 rounded-2xl border border-slate-800 shadow-2xl h-fit">
                  <span className="block px-3 pb-2 font-mono text-[10px] text-slate-500 tracking-wider uppercase border-b border-slate-855 mb-3">
                    Product Sourcing Lines
                  </span>
                  {productCategories.map((cat) => {
                    const CatIcon = iconMap[cat.iconName] || ShoppingCart;
                    const isSelected = selectedProductCat === cat.id;
                    return (
                      <button
                        key={cat.id}
                        id={`product-cat-btn-${cat.id}`}
                        onClick={() => setSelectedProductCat(cat.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-xs sm:text-sm font-medium transition-all duration-300 border ${
                          isSelected
                            ? 'bg-blue-950/60 text-blue-400 border-blue-900/40 font-semibold shadow-sm'
                            : 'text-slate-400 hover:text-white hover:bg-slate-900 border-transparent'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg border ${
                          isSelected ? 'bg-blue-900/50 border-blue-800/40 text-blue-400' : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}>
                          <CatIcon className="w-4 h-4" />
                        </div>
                        <span className="truncate">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Area: Items in Selected Category */}
                <div className="lg:col-span-8">
                  {productCategories.map((cat) => {
                    if (cat.id !== selectedProductCat) return null;
                    const CatIcon = iconMap[cat.iconName] || ShoppingCart;
                    return (
                      <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[#0e1626]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 h-full shadow-2xl backdrop-blur-md"
                      >
                        {/* Detail Header */}
                        <div className="flex items-center gap-4 pb-4 border-b border-slate-850">
                          <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-900/40">
                            <CatIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-display font-semibold text-xl text-white">{cat.name}</h3>
                            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                              AVAILABLE FOR TRADE & LOGISTICAL SUPPLY
                            </span>
                          </div>
                        </div>

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {cat.items.map((item, index) => (
                            <div 
                              key={index}
                              id={`product-item-${cat.id}-${index}`}
                              className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 hover:border-slate-700 hover:bg-slate-900/60 transition-all flex items-start gap-3"
                            >
                              <div className="p-1 rounded-full bg-blue-955 text-blue-400 mt-0.5">
                                <CheckCircle className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Sourcing footer hint */}
                        <div className="p-4 rounded-xl bg-slate-950/40 border border-dashed border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                          <div className="text-slate-400 font-sans">
                            Need specific bulk products or customized sizing for your enterprise team?
                          </div>
                          <button
                            id="products-inquiry-btn"
                            onClick={() => {
                              const contactSection = document.getElementById('contact');
                              if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="text-blue-400 font-mono font-medium hover:text-blue-300 transition flex items-center gap-1.5 shrink-0"
                          >
                            <span>Request Quote</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* VIEW 3: KEY SECTORS */}
            {activeView === 'sectors' && (
              <motion.div
                key="sectors-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-[#0e1626]/80 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 shadow-xl">
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-lg text-white">Serving Global & Local Industries</h3>
                    <p className="text-xs text-slate-400 font-sans">
                      Our operational model focuses on sector compliance, skills transfer, and robust protection systems.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-900/40 text-blue-400 font-mono text-xs uppercase shrink-0">
                    <span>14+ core sectors</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {keySectors.map((sector, index) => {
                    const SectorIcon = iconMap[sector.iconName] || Globe;
                    return (
                      <div
                        key={index}
                        id={`sector-card-${index}`}
                        className="p-5 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-blue-900/60 hover:bg-slate-900/80 transition-all duration-300 flex flex-col gap-3 group shadow-md"
                      >
                        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-blue-400 group-hover:text-blue-300 group-hover:border-slate-700 transition-all">
                          <SectorIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-display font-medium text-sm text-slate-200 group-hover:text-white transition-colors">
                            {sector.name}
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-normal mt-1 font-sans">
                            {sector.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* VIEW 4: PRESTIGIOUS CLIENTS */}
            {activeView === 'clients' && (
              <motion.div
                key="clients-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-[#0e1626]/80 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-lg text-white">Our Established Client Portfolio</h3>
                    <p className="text-xs text-slate-400 font-sans">
                      We have implemented safety compliance measures, delivered high-end consulting, and managed transport logistics for top-tier groups.
                    </p>
                  </div>
                  <div className="font-mono text-xs text-slate-500 uppercase">
                    EAST AFRICA • INTERNATIONAL COMPLIANCE
                  </div>
                </div>

                {/* Clients Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {clientList.map((client, index) => {
                    return (
                      <div
                        key={index}
                        id={`client-badge-${index}`}
                        className={`p-6 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center min-h-[100px] hover:scale-[1.03] shadow-lg ${client.bgColor}`}
                      >
                        <span className="font-display font-bold text-xs tracking-wider block">
                          {client.logoText}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-2 block">
                          {client.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom trust statement */}
                <p className="text-center text-xs text-slate-450 font-sans max-w-xl mx-auto italic">
                  "Sustainable success requires the flexibility to adapt to a changing environment. We work collaboratively with our clients by bringing in the necessary expertise while the client drives the implementation."
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
