import React from 'react';
import { User, Star, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { HERO_DATA, METRIC_CARDS } from '../data/portfolioData';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'star':
        return <Star className="w-6 h-6 text-[#705D00]" />;
      case 'academic':
        return <GraduationCap className="w-6 h-6 text-[#705D00]" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-[#705D00]" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-[#705D00]" />;
      default:
        return <Star className="w-6 h-6 text-[#705D00]" />;
    }
  };

  return (
    <Section id="about" className="py-16 bg-[#F5F3EE] border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_#FFDE59] mb-10">
          <User className="w-5 h-5 text-[#FFDE59]" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story Bio */}
          <div className="lg:col-span-5 space-y-4 font-body text-base sm:text-lg text-[#1B1C19] leading-relaxed">
            <p className="p-5 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
              {HERO_DATA.aboutExtended}
            </p>
          </div>

          {/* Right Column: 4 Metric Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {METRIC_CARDS.map((card) => (
              <div
                key={card.id}
                className="neo-box p-5 bg-white rounded-xl relative overflow-hidden group hover:bg-[#FDFBF7]"
              >
                {/* Top Bar Indicator */}
                <div className="flex items-center justify-between mb-3 border-b border-black/10 pb-2">
                  <div className="p-2 bg-[#FFDE59] border border-black rounded-lg shadow-[2px_2px_0px_#000]">
                    {getIcon(card.icon)}
                  </div>
                  {card.value && (
                    <span className="font-display font-bold text-xs bg-black text-white px-2.5 py-1 rounded-md">
                      {card.value}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xl text-black mb-1.5">
                  {card.title}
                </h3>
                
                <p className="font-body text-sm text-[#4C4735] leading-snug">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </Section>
  );
};
