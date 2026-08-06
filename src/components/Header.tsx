import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { RESUME_PDF_URL } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Toolbox', href: '#toolbox' },
  { name: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstDrawerLinkRef = useRef<HTMLAnchorElement>(null);

  const activeSection = useActiveSection(SECTION_IDS, 'home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      firstDrawerLinkRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
    <header className={`sticky top-0 z-40 bg-[#FBF9F4]/95 backdrop-blur-md border-b-2 border-black transition-all ${scrolled ? 'py-3 shadow-sm' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display font-bold text-xl sm:text-2xl tracking-tight text-black flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-black rounded-md p-1"
        >
          <span className="hover:underline underline-offset-4 decoration-2 decoration-[#FFDE59]">
            Myron Domnic D'Cruz
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'true' : undefined}
                className={`font-display font-medium text-base text-black px-3 py-1.5 rounded-md border transition-all focus-visible:ring-2 focus-visible:ring-black ${
                  isActive
                    ? 'bg-[#FFDE59] border-black shadow-[2px_2px_0px_#000]'
                    : 'border-transparent hover:bg-[#FFDE59] hover:border-black hover:shadow-[2px_2px_0px_#000]'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Action Button: Download Resume */}
          <a
            href={RESUME_PDF_URL}
            download
            className="neo-btn bg-[#FFDE59] text-black px-4 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-[#ffe57a]"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn bg-[#FFDE59] text-black px-3 py-1.5 text-xs rounded-md flex items-center gap-1.5"
            aria-label="Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neo-btn bg-white p-2 rounded-md text-black"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="md:hidden bg-[#FBF9F4] border-b-2 border-black px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  ref={idx === 0 ? firstDrawerLinkRef : undefined}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`font-display text-lg font-semibold text-black px-4 py-2.5 rounded-md border-2 border-black shadow-[3px_3px_0px_#000] transition-all focus-visible:ring-2 focus-visible:ring-black ${
                    isActive ? 'bg-[#FFDE59]' : 'bg-white hover:bg-[#FFDE59]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href={RESUME_PDF_URL}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="neo-btn bg-[#FFDE59] text-black px-4 py-3 rounded-md w-full flex items-center justify-center gap-2 text-base mt-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Full Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
