import React from "react";

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`relative overflow-hidden bg-[#11112b]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group ${className}`}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    {children}
  </div>
);

export default GlassCard;
