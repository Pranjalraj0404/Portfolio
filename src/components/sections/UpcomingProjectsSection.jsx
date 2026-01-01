import React from "react";
import { Rocket } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import TiltCard from "../ui/TiltCard";
import GlassCard from "../ui/GlassCard";

const UpcomingProjectsSection = () => (
  <section id="upcoming" className="relative z-10 py-24 bg-[#050511]">
    <div className="container mx-auto px-6 max-w-4xl">
      <Reveal>
        <SectionTitle subtitle>Upcoming Projects</SectionTitle>
      </Reveal>

      <Reveal delay={150}>
        <TiltCard>
          <GlassCard className="min-h-[220px] flex flex-col items-center justify-center text-center bg-[#11112b]/70">
            <div className="mb-4 flex items-center gap-3">
              <Rocket className="text-purple-400" size={24} />
              <h3 className="text-2xl font-bold text-white">
                New launches coming soon
              </h3>
            </div>

            <p className="text-gray-400 max-w-xl mb-4">
              I&apos;m currently building new full-stack and AI-powered
              projects. This space will auto-update as soon as they are ready to
              deploy.
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-xs text-cyan-300">
              <span className="px-3 py-1 rounded-full bg-[#1a1a2e] border border-cyan-500/20">
                MERN
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1a1a2e] border border-cyan-500/20">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1a1a2e] border border-cyan-500/20">
                AI Integrations
              </span>
            </div>
          </GlassCard>
        </TiltCard>
      </Reveal>
    </div>
  </section>
);

export default UpcomingProjectsSection;
