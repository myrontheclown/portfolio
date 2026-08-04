import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Toolbox', href: '#toolbox' },
    { name: 'Contact', href: '#contact' },
  ];

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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display font-medium text-base text-black hover:bg-[#FFDE59] px-3 py-1.5 rounded-md border border-transparent hover:border-black hover:shadow-[2px_2px_0px_#000] transition-all focus-visible:ring-2 focus-visible:ring-black"
            >
              {link.name}
            </a>
          ))}

          {/* Action Button: Download Resume */}
          <button
            onClick={onOpenResume}
            className="neo-btn bg-[#FFDE59] text-black px-4 py-2 text-sm rounded-md flex items-center gap-2 hover:bg-[#ffe57a]"
            aria-label="View or Download Resume"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="neo-btn bg-[#FFDE59] text-black px-3 py-1.5 text-xs rounded-md flex items-center gap-1.5"
            aria-label="Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neo-btn bg-white p-2 rounded-md text-black"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F4] border-b-2 border-black px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-lg font-semibold text-black px-4 py-2.5 rounded-md border-2 border-black bg-white shadow-[3px_3px_0px_#000] hover:bg-[#FFDE59] transition-all"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="neo-btn bg-[#FFDE59] text-black px-4 py-3 rounded-md w-full flex items-center justify-center gap-2 text-base mt-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Full Resume</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
