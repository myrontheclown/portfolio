import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Toolbox } from './components/Toolbox';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ui/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1B1C19] flex flex-col font-body selection:bg-[#FFDE59] selection:text-black">

      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-[#FFDE59] focus:text-black focus:border-2 focus:border-black focus:px-4 focus:py-2 focus:rounded-md focus:font-display focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Toolbox />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
