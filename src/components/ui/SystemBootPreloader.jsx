import React, { useState, useEffect } from "react";

const SystemBootPreloader = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Prevent running multiple times in Strict Mode
    let isMounted = true;
    const timeouts = [];

    const bootSequence = [
      "> Initializing Core Systems...",
      "> Loading Dependencies...",
      "> Verifying Security Protocols...",
      "> Accessing Portfolio Data...",
      "> System Online.",
    ];
    let delay = 0;

    bootSequence.forEach((line, index) => {
      delay += Math.random() * 300 + 400;
      const id = setTimeout(() => {
        if (isMounted) {
          setLines((prev) => [...prev, line]);
          if (index === bootSequence.length - 1) {
            const endId = setTimeout(() => {
              if (isMounted) {
                setShowPreloader(false);
                onComplete();
              }
            }, 800);
            timeouts.push(endId);
          }
        }
      }, delay);
      timeouts.push(id);
    });

    // Fallback in case something hangs
    const fallbackId = setTimeout(() => {
      if (isMounted) {
        setShowPreloader(false);
        onComplete();
      }
    }, 5000);
    timeouts.push(fallbackId);

    return () => {
      isMounted = false;
      timeouts.forEach(clearTimeout);
    };
  }, []); // Empty dependency array is correct here

  if (!showPreloader) return null;

  return (
    <div className="fixed inset-0 bg-[#03030c] z-[10000] flex flex-col items-start justify-end p-10 md:p-20 font-mono text-green-500 overflow-hidden">
      {lines.map((line, i) => (
        <div key={i} className="mb-2 animate-fade-in text-sm md:text-base">
          {line}
        </div>
      ))}
      <div className="w-3 h-6 bg-green-500 animate-blink inline-block ml-1"></div>
    </div>
  );
};

export default SystemBootPreloader;
