import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, ShieldAlert, Smile, GraduationCap, Users, Leaf,
  ChevronRight, Target, Eye, Settings, HeartPulse, CheckCircle2 
} from 'lucide-react';
import { companyDetails, coreValues } from '../data';

// Map icon name string to Lucide React component
const iconMap: Record<string, React.ComponentType<any>> = {
  Compass: Compass,
  ShieldAlert: ShieldAlert,
  Smile: Smile,
  GraduationCap: GraduationCap,
  Users: Users,
  Leaf: Leaf
};

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'strategy'>('mission');

  return (
    <section id="about" className="relative py-24 bg-[#0b1222] border-t border-slate-900 overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">A WORD FROM OUR TEAM</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Built on Trust, Sourced with Responsibility
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Corporate Message & Interactive Strategy Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Word from Team */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-semibold text-2xl text-white">
              Protecting What Matters Most
            </h3>
            
            <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
              {companyDetails.aboutSummary}
            </p>
            
            <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
              {companyDetails.aboutLong}
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 shadow-md">
                <HeartPulse className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-display font-bold text-white text-sm">HSE Auditing</div>
                  <div className="text-xs text-slate-400">Strict Guidelines</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 shadow-md">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="font-display font-bold text-white text-sm">Expert Advisors</div>
                  <div className="text-xs text-slate-400">Global Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, Strategy Tabs */}
          <div className="lg:col-span-6">
            <div className="bg-[#0e1626]/90 border border-slate-800 shadow-2xl rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              {/* Tabs Switcher */}
              <div className="flex border-b border-slate-800 pb-3 gap-2">
                {(['mission', 'vision', 'strategy'] as const).map((tab) => (
                  <button
                    key={tab}
                    id={`about-tab-${tab}`}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs sm:text-sm font-mono uppercase tracking-wider rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-blue-950/60 text-blue-400 border border-blue-900/40'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    Our {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content Panels */}
              <div className="mt-6 min-h-[220px]">
                {activeTab === 'mission' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-blue-950 text-blue-400 border border-blue-900/30">
                        <Target className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-semibold text-white">Our Mission Statement</h4>
                    </div>
                    <p className="text-sm text-slate-300 font-sans leading-relaxed italic">
                      "{companyDetails.mission}"
                    </p>
                    <ul className="space-y-2.5 pt-2">
                      {companyDetails.missionPoints.map((point, index) => {
                        const colonIndex = point.indexOf(':');
                        const title = colonIndex !== -1 ? point.substring(0, colonIndex) : '';
                        const desc = colonIndex !== -1 ? point.substring(colonIndex + 1) : point;
                        return (
                          <li key={index} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-slate-250 font-semibold">{title}:</strong>{desc}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'vision' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-blue-950 text-blue-400 border border-blue-900/30">
                        <Eye className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-semibold text-white">Our Vision</h4>
                    </div>
                    <p className="text-sm text-slate-300 font-sans leading-relaxed">
                      At IMG Safe, our vision is built on continuous improvement and proactive adaptation. We keep ourselves at the forefront of global development to provide state-of-the-art solutions that answer to client expectations precisely.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                      <p className="text-xs sm:text-sm text-slate-200 font-medium font-mono leading-relaxed text-center italic">
                        "{companyDetails.vision}"
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      Our growth is an direct response to the safety requirements, technologies, and rigorous compliance demanded by international clients.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'strategy' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-900/40">
                        <Settings className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-semibold text-white">Strategic Sourcing & Adaptation</h4>
                    </div>
                    <p className="text-sm text-slate-300 font-sans leading-relaxed">
                      {companyDetails.strategy}
                    </p>
                    <div className="space-y-2 pt-1 text-xs text-slate-400 font-sans">
                      <p>
                        We utilize accumulated expertise, localized knowledge, and a strong network of supply partnerships to deliver:
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-300 font-mono">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span>Flexible Sourcing</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>R&D Insight</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>Local Delivery</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          <span>Skills Transfer</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-display font-bold text-2xl text-white">Our Core Business Values</h3>
            <p className="text-sm text-slate-400 font-sans">
              These fundamental principles guide how we approach incident management, trade sourcing, and client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const IconComponent = iconMap[value.iconName] || Compass;
              return (
                <div
                  key={idx}
                  id={`value-card-${value.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative p-6 rounded-2xl bg-[#0e1626]/80 border border-slate-850 hover:border-blue-500/30 hover:bg-[#111a2d] transition-all duration-300 shadow-xl"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-[0.02] group-hover:opacity-[0.06] text-blue-500 transition-opacity">
                    <IconComponent className="w-24 h-24" />
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-blue-400 w-fit group-hover:text-blue-300 group-hover:border-slate-700 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <h4 className="font-display font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {value.name}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Policies Highlight: Sustainability & Safety */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sustainability Policy */}
          <div className="p-8 rounded-2xl bg-[#0e1626]/80 border border-slate-850 shadow-2xl hover:border-emerald-500/20 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.01] rounded-full blur-xl group-hover:bg-emerald-500/[0.03] transition duration-500" />
            <div className="flex flex-col gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-900/40 w-fit">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white">Sustainability Mandate</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {companyDetails.sustainability}
              </p>
              <div className="text-[11px] font-mono text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Responsible management & operational practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Enduring relationships with global stakeholders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Health & Safety Policy */}
          <div className="p-8 rounded-2xl bg-[#0e1626]/80 border border-slate-850 shadow-2xl hover:border-blue-500/20 relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.01] rounded-full blur-xl group-hover:bg-blue-500/[0.03] transition duration-500" />
            <div className="flex flex-col gap-4">
              <div className="p-2.5 rounded-xl bg-blue-950/60 text-blue-400 border border-blue-900/40 w-fit">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white">Health, Safety & Environment (HSE)</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {companyDetails.healthSafety} We develop, mandate, and verify precise safety programs to keep operations error-free under hazardous conditions.
              </p>
              <div className="text-[11px] font-mono text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Rigorous safety training and team certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Continuous monitoring of HSE metrics in real time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
