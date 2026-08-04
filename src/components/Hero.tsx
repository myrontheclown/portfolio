import React from 'react';
import { ArrowRight, Mail, MapPin, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Intro & Call to Action */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1B1C19] text-white px-3.5 py-1.5 rounded-full border-2 border-black text-xs sm:text-sm font-semibold tracking-wide shadow-[3px_3px_0px_#FFDE59]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFDE59] animate-pulse"></span>
            <span>Welcome to My Workspace</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1B1C19] leading-[1.1] tracking-tight">
            Hi, I’m{' '}
            <span className="bg-[#FFDE59] border-2 border-black px-2 py-0.5 inline-block shadow-[4px_4px_0px_#000] my-1">
              {HERO_DATA.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-display font-semibold text-lg sm:text-xl text-[#705D00] tracking-wide">
            {HERO_DATA.title}
          </p>

          {/* Bio Description */}
          <p className="font-body text-base sm:text-lg text-[#4C4735] max-w-2xl leading-relaxed">
            {HERO_DATA.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="neo-btn bg-[#1B1C19] text-white px-6 py-3.5 rounded-lg text-base hover:bg-black group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="neo-btn bg-white text-black px-6 py-3.5 rounded-lg text-base hover:bg-[#F0EEE9]"
            >
              <span>Let's Talk</span>
              <Mail className="w-5 h-5 ml-2" />
            </a>
          </div>

        </div>

        {/* Right Column: Profile Frame & Workspace Badges */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          
          {/* Floating Sticky Note: "Currently Building" */}
          <div className="absolute -top-6 -right-2 sm:right-2 z-20 bg-[#FFDE59] border-2 border-black p-3.5 rounded-lg shadow-[5px_5px_0px_#000] rotate-2 max-w-[210px] sm:max-w-[240px]">
            <div className="flex items-center gap-1.5 font-display font-bold text-xs text-black border-b border-black/30 pb-1.5 mb-2">
              <span className="text-sm">📌</span>
              <span>Currently Building</span>
            </div>
            <ul className="space-y-1.5 text-xs font-semibold text-black">
              {HERO_DATA.buildingList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Photo Card Container */}
          <div className="w-full max-w-md bg-white border-3 border-black p-4 sm:p-5 rounded-2xl shadow-[8px_8px_0px_#000] relative">
            
            {/* Image Box */}
            <div className="w-full aspect-[4/3] bg-[#EAE8E3] border-2 border-black rounded-xl overflow-hidden relative group">
              <img
                src="https://i.ibb.co/b5dQ8SF1/profile.jpg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('profile.jpg')) {
                    target.src = "https://i.ibb.co/b5dQ8SF1";
                  } else if (target.src.includes('i.ibb.co')) {
                    target.src = "https://ibb.co/b5dQ8SF1";
                  }
                }}
                alt="Myron Domnic D'Cruz - Backend Developer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Information Pills */}
            <div className="mt-4 space-y-2.5 font-body text-sm text-[#1B1C19]">
              
              <div className="flex items-center gap-2.5 p-2 bg-[#FBF9F4] border border-black/20 rounded-md">
                <MapPin className="w-4 h-4 text-[#705D00] shrink-0" />
                <span className="font-medium">{HERO_DATA.location}</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 bg-[#FBF9F4] border border-black/20 rounded-md">
                <Briefcase className="w-4 h-4 text-[#705D00] shrink-0" />
                <span className="font-medium">{HERO_DATA.role}</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 bg-[#FBF9F4] border border-black/20 rounded-md">
                <GraduationCap className="w-4 h-4 text-[#705D00] shrink-0" />
                <span className="font-medium">{HERO_DATA.education}</span>
              </div>

              {/* Status Badge */}
              <div className="mt-3 p-2.5 bg-[#E8F5E9] border-2 border-black rounded-lg flex items-center gap-2 shadow-[2px_2px_0px_#000]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
                <span className="font-display font-semibold text-xs text-green-900 tracking-wide uppercase">
                  {HERO_DATA.status}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
