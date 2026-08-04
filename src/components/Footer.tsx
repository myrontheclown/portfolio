import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1B1C19] text-white py-8 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Info */}
        <div className="text-center sm:text-left space-y-1">
          <p className="font-display font-bold text-lg text-[#FFDE59]">
            Myron Domnic D'Cruz
          </p>
          <p className="font-body text-xs text-[#E4E2DD]">
            © {new Date().getFullYear()} • Built with React, TypeScript & Tailwind CSS
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="neo-btn bg-[#FFDE59] text-black px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-[#ffe57a]"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
