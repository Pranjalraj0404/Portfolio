import React from "react";
import { Sparkles, Download, ExternalLink } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import DatabaseStatus from "../ui/DatabaseStatus";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  DIRECT_RESUME_URL,
  DIRECT_PROFILE_URL,
  DEFAULT_IMAGE_URL,
} from "../../utils/config";

const AboutMeSection = () => (
  <section id="about-me" className="relative z-10 py-32">
    <div className="container mx-auto px-6 max-w-6xl">
      <Reveal>
        <SectionTitle>About Me</SectionTitle>
        <div className="text-center text-gray-400 mb-12 -mt-10 flex justify-center gap-2 items-center">
          <Sparkles size={16} className="text-blue-500" /> Transforming ideas
          into digital experiences{" "}
          <Sparkles size={16} className="text-blue-500" />
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-12 items-center bg-[#11112b]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="md:col-span-2 space-y-6">
          <Reveal delay={150}>
            <h2 className="text-5xl font-bold text-white mb-2">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {PERSONAL_INFO.name}
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              {PERSONAL_INFO.detailedAbout[0]}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-[#1a1a2e] border border-blue-500/30 rounded-xl p-4 text-gray-300 italic text-sm shadow-xl shadow-blue-500/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <span className="text-xl text-blue-400 pr-2">"</span>
              {PERSONAL_INFO.quote}
              <span className="text-xl text-blue-400 pl-2">"</span>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <a
                href={DIRECT_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 shadow-md shadow-blue-500/30"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="#projects"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
              >
                <ExternalLink size={18} /> View Projects
              </a>
              <DatabaseStatus />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-1 flex justify-center md:justify-end cursor-auto order-first md:order-last">
          <Reveal delay={150}>
            <div className="relative w-full max-w-[280px] h-[280px] rounded-full overflow-hidden bg-gradient-to-br from-blue-600/50 to-cyan-500/50 p-2 shadow-2xl shadow-blue-500/20">
              <img
                src={DIRECT_PROFILE_URL}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DEFAULT_IMAGE_URL;
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
