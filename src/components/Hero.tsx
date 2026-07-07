import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowRight, ShieldCheck, Award, Globe, Sparkles, AlertTriangle, Target, TrendingUp, Shield } from 'lucide-react';
import { companyDetails } from '../data';
import Logo from './Logo';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax offset calculations
  const bgTranslate = scrollY * 0.3;
  const contentOpacity = Math.max(1 - scrollY / 700, 0);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#040814] pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-900"
    >
      {/* 1. BACKGROUND ENGINE: Ambient lights, world grid map, laser lines */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{ transform: `translate3d(0, ${bgTranslate}px, 0)` }}
      >
        {/* Glow Orb Left */}
        <div className="absolute top-[15%] left-[5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        {/* Glow Orb Right */}
        <div className="absolute bottom-[15%] right-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-600/5 blur-[120px]" />
        
        {/* Fine background tech dot mesh */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `radial-gradient(#2563eb 1.5px, transparent 1.5px)`, 
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-12 lg:py-16">
        
        {/* Left Column: Core Brand Identity, Slogans, Legend Indicators */}
        <motion.div
          style={{ 
            opacity: contentOpacity 
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Header Branding Row from image */}
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-blue-950/40 border border-blue-900/30 shadow-md">
              <Logo size={46} />
            </div>
            <div>
              <span className="font-display font-bold text-2xl tracking-wide text-white block leading-none">IMG SAFE</span>
              <span className="block text-[10px] sm:text-[11px] font-mono tracking-widest text-blue-400 uppercase leading-none mt-1.5">
                Incident Management Global
              </span>
            </div>
          </div>

          {/* Large display headline from reference image */}
          <div className="space-y-4">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] uppercase">
              Safer Operations.<br />Stronger Outcomes.
            </h1>
            {/* The horizontal accent rule line beneath the main header */}
            <div className="h-[2px] w-48 bg-gradient-to-r from-blue-600 via-sky-400 to-transparent rounded-full" />
          </div>

          {/* Description slogan in highly visible, clean slate-200 */}
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed">
            Global incident management solutions that protect people, strengthen response, and drive continuous improvement.
          </p>

          {/* 4-Column Attributes Grid with micro-icons and clean labels */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-900">
            {/* 1. Risk Ready */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-900/40 text-blue-400 shrink-0 shadow-sm shadow-blue-950/50">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs leading-snug font-bold uppercase">
                <span className="block text-slate-400 font-normal tracking-wide">Risk</span>
                <span className="text-white block tracking-widest">Risk Ready</span>
              </div>
            </div>

            {/* 2. Rapid Response */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-900/40 text-blue-400 shrink-0 shadow-sm shadow-blue-950/50">
                <Target className="w-5 h-5" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs leading-snug font-bold uppercase">
                <span className="block text-slate-400 font-normal tracking-wide">Rapid</span>
                <span className="text-white block tracking-widest">Response</span>
              </div>
            </div>

            {/* 3. Measurable Impact */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-900/40 text-blue-400 shrink-0 shadow-sm shadow-blue-950/50">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs leading-snug font-bold uppercase">
                <span className="block text-slate-400 font-normal tracking-wide">Measurable</span>
                <span className="text-white block tracking-widest">Impact</span>
              </div>
            </div>

            {/* 4. Global Coverage */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-900/40 text-blue-400 shrink-0 shadow-sm shadow-blue-950/50">
                <Globe className="w-5 h-5" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs leading-snug font-bold uppercase">
                <span className="block text-slate-400 font-normal tracking-wide">Global</span>
                <span className="text-white block tracking-widest">Coverage</span>
              </div>
            </div>
          </div>

          {/* Action trigger buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              id="hero-primary-cta"
              onClick={onExploreClick}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 group shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all duration-300"
            >
              <span>Request A Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              id="hero-secondary-cta"
              onClick={onContactClick}
              className="px-8 py-4 rounded-xl bg-transparent border border-blue-600/80 hover:border-blue-500 text-white hover:bg-blue-950/40 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition duration-300 shadow-md"
            >
              <span>Learn More</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Giant 3D Floating Shield, Cyber Diagonal Slats, World Map Mesh */}
        <div className="lg:col-span-5 relative h-[400px] sm:h-[500px] w-full mt-8 lg:mt-0 flex items-center justify-center">
          
          {/* Cyber Diagonal Slats with Glow & Reflection Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl border border-slate-900/80 bg-slate-950/40 backdrop-blur-sm shadow-2xl">
            {/* Diagonal Slat background */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-slate-950/95 via-slate-900/40 to-slate-950/95 skew-x-[-15deg] border-r border-slate-900/60 shadow-inner z-0" />
            
            {/* Bright Laser Line 1 (Slightly Skewed) */}
            <div className="absolute bottom-[20%] left-[-20%] w-[160%] h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rotate-[-15deg] blur-[1px] shadow-[0_0_15px_#2563eb] opacity-80 z-10" />
            
            {/* Bright Laser Line 2 (Slightly Skewed) */}
            <div className="absolute top-[25%] left-[-20%] w-[160%] h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-[-15deg] blur-[2px] shadow-[0_0_20px_#06b6d4] opacity-70 z-10" />
            
            {/* Soft backdrop lighting aura */}
            <div className="absolute top-[25%] left-[25%] w-[250px] h-[250px] rounded-full bg-blue-600/15 blur-[100px] z-0" />
          </div>

          {/* Beautiful glowing dot mesh world map overlay */}
          <div 
            className="absolute inset-4 opacity-[0.22] pointer-events-none select-none z-0 mix-blend-screen"
            style={{
              backgroundImage: `radial-gradient(#2563eb 1.5px, transparent 1.5px)`,
              backgroundSize: '16px 16px',
            }}
          />

          {/* Interactive Floating 3D Shield (gentle elevation & multi-axis float) */}
          <motion.div
            animate={{ 
              y: [0, -14, 0],
              rotateY: [-3, 3, -3],
              rotateX: [-1.5, 1.5, -1.5],
              scale: [1, 1.015, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10 flex items-center justify-center cursor-pointer group"
            style={{ perspective: 1200 }}
          >
            {/* Glow Behind the shield on hover */}
            <div className="absolute inset-0 bg-blue-500/25 rounded-full blur-[60px] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* High-fidelity custom corporate shield vector scaled up */}
            <Logo size={320} className="filter drop-shadow-[0_30px_70px_rgba(0,0,0,0.9)] group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
          </motion.div>
        </div>
      </div>

      {/* Slogan Bottom Strip from image - absolute positioned to seal the visual theme */}
      <div className="w-full border-t border-slate-900/60 bg-slate-950/60 backdrop-blur-md py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-mono text-slate-400">
          {/* Left policy with cyan highlight */}
          <div className="flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="font-bold text-white tracking-wider">ONE STANDARD. ONE RESPONSE.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-cyan-400 font-bold tracking-widest uppercase shadow-sm">ONE GLOBAL COMMITMENT TO SAFETY.</span>
          </div>
          
          {/* Right Core pillar slogans */}
          <div className="flex items-center gap-2 tracking-widest text-slate-300 font-bold uppercase">
            <span>PREPARE. RESPOND. RECOVER. IMPROVE.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

