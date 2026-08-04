import React, { useState } from 'react';
import { Folder, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="mb-12 space-y-3">
        <div className="inline-flex items-center gap-3 bg-[#FFDE59] border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0px_#000]">
          <Folder className="w-6 h-6 text-black fill-black/10" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
            Projects Folder
          </h2>
        </div>
        <p className="font-body text-base sm:text-lg text-[#4C4735] max-w-2xl">
          Selected work that highlights my skills in backend, AI, and systems design. Click to explore.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => {
          const isFeatured = project.featured;

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`neo-box bg-white rounded-2xl relative flex flex-col justify-between overflow-hidden group cursor-pointer ${
                isFeatured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Folder Tab Header */}
              <div className="bg-[#1B1C19] text-[#FFDE59] px-4 py-2.5 border-b-2 border-black flex items-center justify-between">
                <span className="font-display font-bold text-xs uppercase tracking-wider">
                  {project.badge}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFDE59]"></span>
              </div>

              {/* Card Body */}
              <div className={`p-6 ${isFeatured ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-center' : 'space-y-5'}`}>
                
                {/* Project Image Preview */}
                <div className={`border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_#000] relative bg-[#F0EEE9] group-hover:shadow-[6px_6px_0px_#000] transition-shadow ${
                  isFeatured ? 'lg:col-span-6 h-64 sm:h-72' : 'h-52'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className={`space-y-4 ${isFeatured ? 'lg:col-span-6' : ''}`}>
                  <h3 className="font-display font-bold text-2xl text-black group-hover:text-[#705D00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-[#4C4735] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#1B1C19] text-white border border-black font-display font-semibold text-xs px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
