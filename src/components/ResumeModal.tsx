import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, MapPin, Globe, Github, Linkedin } from 'lucide-react';
import { HERO_DATA, SKILL_CATEGORIES, ACHIEVEMENTS, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white border-3 border-black rounded-2xl shadow-[12px_12px_0px_#000] overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Window Header */}
        <div className="bg-[#1B1C19] text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-black shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black inline-block"></span>
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FFDE59] ml-2">
              Myron_Dcruz_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-md text-white hover:bg-[#FFDE59] hover:text-black transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-white hover:bg-[#FFDE59] hover:text-black transition-colors"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 bg-[#FBF9F4]">
          
          {/* Header Section */}
          <div className="border-b-2 border-black pb-6 space-y-3">
            <h1 id="resume-title" className="font-display font-bold text-3xl sm:text-4xl text-black">
              {HERO_DATA.fullName}
            </h1>
            <p className="font-display font-semibold text-base text-[#705D00]">
              {HERO_DATA.title}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-body text-[#4C4735]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-black" />
                {HERO_DATA.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-black" />
                myrondcrz15@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-black" />
                github.com/myrondcruz
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-black" />
                linkedin.com/in/myrondcruz
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-display font-bold text-lg text-black uppercase tracking-wider mb-2 border-b-2 border-black pb-1">
              Professional Summary
            </h2>
            <p className="font-body text-sm text-[#1B1C19] leading-relaxed">
              {HERO_DATA.aboutExtended}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display font-bold text-lg text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">
              Education
            </h2>
            <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[2px_2px_0px_#000] flex justify-between items-start">
              <div>
                <h3 className="font-display font-bold text-base text-black">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="font-body text-sm text-[#4C4735]">
                  Agnel Institute of Technology and Design
                </p>
              </div>
              <div className="text-right">
                <span className="font-display font-bold text-sm bg-[#FFDE59] border border-black px-2.5 py-0.5 rounded">
                  9.35 CGPA
                </span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-display font-bold text-lg text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="bg-white border border-black p-3 rounded-lg">
                  <span className="font-display font-bold text-xs uppercase text-[#705D00]">
                    {cat.title}:
                  </span>
                  <p className="font-body text-xs text-black mt-1 font-semibold">
                    {cat.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Summary */}
          <div>
            <h2 className="font-display font-bold text-lg text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">
              Key Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="bg-white border-2 border-black p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display font-bold text-base text-black">
                      {proj.title}
                    </h3>
                    <span className="font-display font-semibold text-[10px] bg-[#1B1C19] text-[#FFDE59] px-2 py-0.5 rounded">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#4C4735] mb-2">
                    {proj.description}
                  </p>
                  <p className="font-body text-[11px] text-black font-semibold">
                    <span className="text-[#705D00]">Stack: </span>
                    {proj.tags.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="font-display font-bold text-lg text-black uppercase tracking-wider mb-3 border-b-2 border-black pb-1">
              Honors & Certifications
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.id} className="bg-white border border-black p-3 rounded-lg text-xs font-body font-medium">
                  <strong className="font-display block text-black text-sm">{ach.title}</strong>
                  <span className="text-[#4C4735]">{ach.description}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F0EEE9] border-t-2 border-black p-4 flex items-center justify-between shrink-0">
          <button
            onClick={handlePrint}
            className="neo-btn bg-[#FFDE59] text-black px-4 py-2 text-sm rounded-lg hover:bg-[#ffe57a]"
          >
            <Download className="w-4 h-4 mr-2" />
            <span>Download PDF / Print</span>
          </button>

          <button
            onClick={onClose}
            className="neo-btn bg-[#1B1C19] text-white px-4 py-2 text-sm rounded-lg hover:bg-black"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
