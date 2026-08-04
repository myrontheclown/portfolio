import React from 'react';
import { Award, Calendar, Users, Code } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'award':
        return <Award className="w-5 h-5 text-black" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-black" />;
      case 'users':
        return <Users className="w-5 h-5 text-black" />;
      case 'code':
        return <Code className="w-5 h-5 text-black" />;
      default:
        return <Award className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1B1C19] tracking-tight">
          Achievements & Certifications
        </h2>
      </div>

      {/* Grid of 4 Cards with Pin Motif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.id}
            className="neo-box bg-white p-6 rounded-2xl relative pt-8 flex flex-col justify-between group hover:border-black"
          >
            {/* Top Pin Motif */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FFDE59] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <span className="w-2 h-2 rounded-full bg-black"></span>
            </div>

            <div>
              {/* Header Icon & Title */}
              <div className="flex items-center gap-3 mb-3 border-b border-black/10 pb-3">
                <div className="p-2 bg-[#F5F3EE] border border-black rounded-lg">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-display font-bold text-lg text-black leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm text-[#4C4735] leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
