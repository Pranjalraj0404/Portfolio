import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Reveal from "../ui/Reveal";
import GlitchText from "../ui/GlitchText";
import { useTypewriter } from "../../hooks/useTypewriter";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  DIRECT_PROFILE_URL,
  DIRECT_RESUME_URL,
  DEFAULT_IMAGE_URL,
} from "../../utils/config";

const HeroSection = ({ setIsContactOpen }) => {
  const typedText = useTypewriter([
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Problem Solver",
  ]);

  const heroSocials = [
    {
      icon: <Github size={24} />,
      href: PERSONAL_INFO.socials.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      href: PERSONAL_INFO.socials.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Mail size={24} />,
      href: `mailto:${PERSONAL_INFO.email}`,
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative z-10 pt-32 pb-20 container mx-auto px-6 min-h-screen flex flex-col justify-center items-center text-center"
    >
      <Reveal>
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium tracking-wide backdrop-blur-sm">
          ✨ Open to Work
        </div>
      </Reveal>

      <Reveal delay={200}>
        <img
          src={DIRECT_PROFILE_URL}
          alt={PERSONAL_INFO.name}
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500/50 shadow-lg shadow-purple-500/30 transition-transform hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = DEFAULT_IMAGE_URL;
          }}
        />

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Transforming Ideas into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
            <GlitchText text="Digital Reality" />
          </span>
        </h1>
      </Reveal>

      <Reveal delay={400}>
        <div className="text-xl md:text-3xl text-gray-400 mb-10 h-8 font-mono">
          I am a{" "}
          <span className="text-white border-r-2 border-purple-500 pr-1 animate-blink">
            {typedText}
          </span>
        </div>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          Building scalable solutions with the MERN stack and AI integration.
        </p>
      </Reveal>

      <Reveal delay={600}>
        <div className="flex flex-wrap justify-center gap-6 cursor-auto">
          <button
            onClick={() => setIsContactOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] hover:scale-105 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Let&apos;s Connect
          </button>
          <a
            href={DIRECT_RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center gap-2 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>
      </Reveal>

      <Reveal delay={800}>
        <div className="flex justify-center gap-8 mt-16 text-gray-500 cursor-auto">
          {heroSocials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="hover:text-purple-400 transition-colors transform hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default HeroSection;
