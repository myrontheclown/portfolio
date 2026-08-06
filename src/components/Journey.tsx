import React from 'react';
import { Briefcase, Calendar, Terminal, BarChart3, Code2, GraduationCap } from 'lucide-react';
import { JOURNEY } from '../data/portfolioData';
import { Section } from './ui/Section';

const FILE_ICONS = {
  terminal: <Terminal className="w-4 h-4" aria-hidden="true" />,
  analytics: <BarChart3 className="w-4 h-4" aria-hidden="true" />,
  web: <Code2 className="w-4 h-4" aria-hidden="true" />,
  graduation: <GraduationCap className="w-4 h-4" aria-hidden="true" />,
} as const;

export const Journey: React.FC = () => {
  return (
    <Section id="journey" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12 space-y-3">
        <div className="inline-flex items-center gap-3 bg-[#FFDE59] border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0px_#000]">
          <Briefcase className="w-6 h-6 text-black" aria-hidden="true" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
            Journey
          </h2>
        </div>
        <p className="font-body text-base sm:text-lg text-[#4C4735] max-w-2xl">
          My professional journey so far — internships and education that shaped how I build software.
        </p>
      </div>

      {/* Grid of Document Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {JOURNEY.map((item) => (
          <article
            key={item.id}
            className="neo-box bg-white rounded-2xl overflow-hidden group flex flex-col"
            style={{ transitionDuration: '250ms' }}
          >
            {/* File Tab Header */}
            <div className="bg-[#1B1C19] text-[#FFDE59] px-4 py-2.5 border-b-2 border-black flex items-center gap-2">
              {FILE_ICONS[item.icon]}
              <span className="font-display font-semibold text-xs tracking-wide truncate">
                {item.filename}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col grow">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-black group-hover:text-[#705D00] transition-colors">
                {item.role}
              </h3>

              {item.program && (
                <p className="font-display font-semibold text-sm sm:text-base text-[#705D00] mt-0.5">
                  {item.program}
                </p>
              )}

              <p className="font-body text-base text-[#4C4735] mt-1">
                {item.company}
              </p>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="inline-flex items-center gap-1 font-body text-xs font-semibold text-black bg-[#F0EEE9] border border-black rounded-md px-2 py-1">
                  <Calendar className="w-3.5 h-3.5 text-[#705D00]" aria-hidden="true" />
                  {item.duration}
                </span>
                <span className="inline-flex items-center font-body text-xs font-semibold text-[#1B1C19] bg-white border border-black rounded-md px-2 py-1">
                  {item.employmentType}
                </span>
              </div>

              {/* Tech Stack / Footnote */}
              {item.techStack ? (
                <div className="mt-auto pt-5">
                  <p className="font-display font-bold text-xs uppercase tracking-wider text-black mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#1B1C19] text-white border border-black font-display font-semibold text-xs px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : item.footnote ? (
                <div className="mt-auto pt-5">
                  <span className="inline-block bg-[#FFDE59] text-black border-2 border-black font-display font-bold text-xs px-3 py-1.5 rounded-md shadow-[2px_2px_0px_#000]">
                    {item.footnote}
                  </span>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
