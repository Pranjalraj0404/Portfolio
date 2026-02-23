
import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";

const Footer = ({ scrollToTop }) => {
  return (
    <footer className="relative z-10 py-8 bg-[#03030c] border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-[#1a1a2e] border border-white/10 text-white hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/50"
        >
          <ArrowUp size={20} />
        </button>

        <p className="text-gray-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
          reserved.
        </p>
        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Pranjal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
