import React from 'react';
import { AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Layers, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ModalShell } from './ui/ModalShell';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <ProjectModalContent key={project.id} project={project} onClose={onClose} />
      )}
    </AnimatePresence>
  );
};

const ProjectModalContent: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <ModalShell onClose={onClose} labelledBy="modal-title">
      <div className="w-full max-w-3xl bg-[#FBF9F4] border-3 border-black rounded-2xl shadow-[10px_10px_0px_#000] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Window Header */}
        <div className="bg-[#1B1C19] text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-black shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black inline-block"></span>
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FFDE59] ml-2">
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-white hover:bg-[#FFDE59] hover:text-black transition-colors border border-transparent hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFDE59] focus-visible:outline-offset-2"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">

          {/* Title & Badge */}
          <div>
            <span className="bg-[#FFDE59] border border-black text-black px-3 py-1 rounded-md text-xs font-display font-bold uppercase tracking-wider inline-block mb-2 shadow-[2px_2px_0px_#000]">
              {project.badge}
            </span>
            <h2 id="modal-title" className="font-display font-bold text-3xl sm:text-4xl text-black">
              {project.title}
            </h2>
          </div>

          {/* Banner Image */}
          <div className="w-full h-56 sm:h-72 border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_#000] relative bg-[#F0EEE9]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display font-bold text-lg text-black mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#705D00]" />
              <span>Project Overview</span>
            </h3>
            <p className="font-body text-base text-[#4C4735] leading-relaxed p-4 bg-white border-2 border-black rounded-xl">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Technical Highlights */}
          {project.technicalHighlights && project.technicalHighlights.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#705D00]" />
                <span>Technical Highlights</span>
              </h3>
              <ul className="space-y-2.5 bg-white border-2 border-black p-4 sm:p-5 rounded-xl">
                {project.technicalHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-body text-sm text-[#1B1C19]">
                    <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-1.5"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-lg text-black mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#705D00]" />
                <span>Technical Architecture</span>
              </h3>
              <ul className="space-y-2 bg-white border-2 border-black p-4 rounded-xl">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-body text-sm text-[#1B1C19]">
                    <CheckCircle className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h3 className="font-display font-bold text-base text-black mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#1B1C19] text-[#FFDE59] border border-black font-display font-semibold text-xs px-3 py-1.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-[#F0EEE9] border-t-2 border-black p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[#FFDE59] text-black px-4 py-2 text-sm rounded-lg hover:bg-[#ffe57a]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-white text-black px-4 py-2 text-sm rounded-lg hover:bg-[#F9F7F2]"
              >
                <Github className="w-4 h-4 mr-1.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="neo-btn bg-[#1B1C19] text-white px-4 py-2 text-sm rounded-lg hover:bg-black"
          >
            Close
          </button>
        </div>
      </div>
    </ModalShell>
  );
};
