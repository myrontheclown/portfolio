import React from 'react';
import { Wrench } from 'lucide-react';

interface ToolItem {
  name: string;
  colorBg: string;
  rotationClass: string;
  pinColor?: string;
}

const TOOLS: ToolItem[] = [
  { name: 'React', colorBg: 'bg-[#FFDE59]', rotationClass: '-rotate-1', pinColor: 'bg-red-500' },
  { name: 'Next.js', colorBg: 'bg-[#BAE6FD]', rotationClass: 'rotate-2', pinColor: 'bg-blue-500' },
  { name: 'TypeScript', colorBg: 'bg-[#A7F3D0]', rotationClass: '-rotate-2', pinColor: 'bg-amber-500' },
  { name: 'JavaScript', colorBg: 'bg-[#FBCFE8]', rotationClass: 'rotate-1', pinColor: 'bg-purple-500' },
  { name: 'Node.js', colorBg: 'bg-[#FED7AA]', rotationClass: '-rotate-1', pinColor: 'bg-emerald-500' },
  { name: 'Express.js', colorBg: 'bg-[#BAE6FD]', rotationClass: 'rotate-2', pinColor: 'bg-red-500' },
  { name: 'MongoDB', colorBg: 'bg-[#A7F3D0]', rotationClass: '-rotate-2', pinColor: 'bg-yellow-500' },
  { name: 'Supabase', colorBg: 'bg-[#FFDE59]', rotationClass: 'rotate-1', pinColor: 'bg-emerald-500' },
  { name: 'Firebase', colorBg: 'bg-[#FED7AA]', rotationClass: '-rotate-2', pinColor: 'bg-blue-500' },
  { name: 'Python', colorBg: 'bg-[#FBCFE8]', rotationClass: 'rotate-1', pinColor: 'bg-red-500' },
  { name: 'Google Gemini API', colorBg: 'bg-[#FFDE59]', rotationClass: '-rotate-2', pinColor: 'bg-purple-500' },
  { name: 'TensorFlow.js', colorBg: 'bg-[#BAE6FD]', rotationClass: 'rotate-2', pinColor: 'bg-amber-500' },
  { name: 'OpenCV', colorBg: 'bg-[#A7F3D0]', rotationClass: '-rotate-1', pinColor: 'bg-red-500' },
  { name: 'Git', colorBg: 'bg-[#FED7AA]', rotationClass: 'rotate-2', pinColor: 'bg-emerald-500' },
  { name: 'Postman', colorBg: 'bg-[#FBCFE8]', rotationClass: '-rotate-2', pinColor: 'bg-blue-500' },
  { name: 'Figma', colorBg: 'bg-[#BAE6FD]', rotationClass: 'rotate-1', pinColor: 'bg-yellow-500' },
];

export const Toolbox: React.FC = () => {
  return (
    <section id="toolbox" className="py-16 md:py-24 bg-[#1B1C19] text-white border-y-2 border-black relative overflow-hidden">
      {/* Background Corkboard Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-3 bg-[#FFDE59] text-black px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_#FFFFFF]">
            <Wrench className="w-5 h-5 text-black" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
              Workspace Essentials
            </h2>
          </div>
          <p className="font-body text-base sm:text-lg text-[#E4E2DD] max-w-2xl">
            The tools I reach for when building modern web applications, AI-powered solutions, and backend systems.
          </p>
        </div>

        {/* Sticky Notes Corkboard Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {TOOLS.map((tool, idx) => (
            <div
              key={idx}
              className={`relative group border-2 border-black rounded-xl p-4 sm:p-5 ${tool.colorBg} text-black font-display font-bold text-base sm:text-lg shadow-[5px_5px_0px_#000] flex items-center justify-center text-center select-none cursor-pointer transition-all duration-200 ${tool.rotationClass} hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#000] hover:z-20`}
            >
              {/* Pushpin motif */}
              <div 
                className={`absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full ${tool.pinColor || 'bg-red-500'} border border-black shadow-[1px_1px_0px_#000] group-hover:scale-110 transition-transform`} 
                aria-hidden="true"
              />

              <span className="tracking-tight leading-tight pt-1">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

