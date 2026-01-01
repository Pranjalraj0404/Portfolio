import React from "react";
import { Mail } from "lucide-react";
import TiltCard from "../ui/TiltCard";
import GlassCard from "../ui/GlassCard";
import { PERSONAL_INFO } from "../../data/portfolioData";

const ContactSection = ({ setIsContactOpen }) => {
  return (
    <section id="contact" className="relative z-10 py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <TiltCard>
            <GlassCard className="p-8 md:p-12 text-center cursor-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Whether you have a question, a project idea, or just want to say
                hi, my inbox is always open.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#1a1a2e] border border-white/10 rounded-xl text-gray-300 hover:border-purple-500/50 hover:text-white transition-all group"
                >
                  <Mail
                    size={20}
                    className="text-purple-500 group-hover:text-purple-400"
                  />
                  {PERSONAL_INFO.email}
                </a>
                {/* Phone number removed as requested */}
              </div>

              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_-5px_rgba(147,51,234,0.5)] hover:-translate-y-1"
              >
                Say Hello
              </button>
            </GlassCard>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
