import React from "react";

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
      {children}
    </h2>
    {subtitle && (
      <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full opacity-50"></div>
    )}
  </div>
);

export default SectionTitle;
