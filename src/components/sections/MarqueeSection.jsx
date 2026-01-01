import React from "react";
import { MARQUEE_ITEMS } from "../../data/portfolioData";

const MarqueeSection = () => {
  return (
    <div className="w-full py-10 bg-[#050511] border-y border-white/5 relative overflow-hidden z-10">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#03030c] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#03030c] to-transparent z-10"></div>

      <div className="flex w-max animate-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
          (item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 mx-8 opacity-50 hover:opacity-100 transition-opacity"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}`}
                alt={item.name}
                className={`w-10 h-10 ${item.invert ? "invert" : ""}`}
              />
              <span className="text-lg font-mono text-gray-400">
                {item.name}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MarqueeSection;
