import React from "react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import TiltCard from "../ui/TiltCard";
import { PROJECTS } from "../../data/portfolioData";

const ProjectsSection = ({ setSelectedProject }) => {
  return (
    <section id="projects" className="relative z-10 py-20 bg-[#050511]">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionTitle subtitle>Featured Projects</SectionTitle>
        </Reveal>

        <div className="grid gap-8 max-w-6xl mx-auto cursor-auto grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <Reveal key={idx} delay={idx * 200}>
              <TiltCard
                className="h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-[#0e0e1f] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group h-full flex flex-col shadow-2xl relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
                    <span className="text-white font-bold px-4 py-2 border border-purple-500 rounded-lg bg-black/50 backdrop-blur-sm">
                      View Details
                    </span>
                  </div>

                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e1f] to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex-grow flex flex-col relative z-20">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6 flex-grow text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium bg-[#1a1a2e] text-purple-300 rounded-full border border-purple-500/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
