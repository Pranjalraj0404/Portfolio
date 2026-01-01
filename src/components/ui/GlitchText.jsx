import React from "react";

const GlitchText = ({ text }) => (
  <span
    className="relative inline-block group hover:text-transparent transition-colors duration-100 cursor-default"
    data-text={text}
  >
    <span className="relative z-10 group-hover:text-white transition-colors">
      {text}
    </span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1 translate-x-[2px]">
      {text}
    </span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-400 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2 -translate-x-[2px]">
      {text}
    </span>
  </span>
);

export default GlitchText;
