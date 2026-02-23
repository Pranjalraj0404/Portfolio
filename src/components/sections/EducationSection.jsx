import React from "react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import TiltCard from "../ui/TiltCard";
import GlassCard from "../ui/GlassCard";
import { EDUCATION } from "../../data/portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="relative z-10 py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionTitle subtitle>My Journey</SectionTitle>
        </Reveal>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 opacity-35"></div>

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <Reveal key={edu.id} delay={index * 200}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#03030c] border-2 border-blue-500 rounded-full z-10 mt-6 shadow-[0_0_12px_rgba(59,130,246,0.55)]"></div>

                  <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                    <TiltCard>
                      <GlassCard className="hover:-translate-y-2">
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                          {edu.duration}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          {edu.degree}
                        </p>
                        <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono">
                          {edu.grade}
                        </div>
                        {edu.desc && (
                          <p className="text-gray-400 text-sm mt-3 leading-relaxed border-t border-white/5 pt-3">
                            {edu.desc}
                          </p>
                        )}
                      </GlassCard>
                    </TiltCard>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
