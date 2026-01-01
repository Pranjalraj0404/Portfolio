import React from "react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import TiltCard from "../ui/TiltCard";
import { SKILL_CATEGORIES } from "../../data/portfolioData";

const SkillsSection = () => {
  return (
    <section id="skills" className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionTitle subtitle>Tech Stack</SectionTitle>
        </Reveal>

        <div className="max-w-6xl mx-auto space-y-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6 px-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 cursor-auto">
                  {category.skills.map((skill, sIdx) => (
                    <TiltCard key={sIdx}>
                      <div className="group bg-[#11112b]/40 border border-white/5 hover:border-purple-500/40 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-white/5">
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                          alt={skill.name}
                          className={`w-12 h-12 transition-transform group-hover:scale-110 ${
                            skill.invert ? "invert" : ""
                          }`}
                        />
                        <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
