import React, { useState, useEffect } from "react";
import { X, Terminal, Sparkles, Loader2, CheckCircle2, Github, ExternalLink } from "lucide-react";
import { callGeminiAPI } from "../../utils/gemini";

const ProjectModal = ({ project, onClose }) => {
  const [aiExplanation, setAiExplanation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setAiExplanation("");
    setIsGenerating(false);
  }, [project]);

  if (!project) return null;

  const handleExplain = async () => {
    setIsGenerating(true);
    const prompt = `Explain this technical project description to a 5-year-old (ELI5) or non-technical person. Keep it short, exciting, and simple: "${project.longDescription}"`;
    const response = await callGeminiAPI(prompt);
    setAiExplanation(response);
    setIsGenerating(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative bg-[#0a0a16] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-fade-in-up custom-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-purple-500/50 rounded-full text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="relative h-64 sm:h-80 w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] to-transparent z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 sm:left-10 z-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Terminal className="text-purple-400" size={20} /> Project
                Overview
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-bold text-purple-300 flex items-center gap-2">
                    <Sparkles size={16} /> AI Simplified Explanation
                  </h4>
                  {!aiExplanation && !isGenerating && (
                    <button
                      onClick={handleExplain}
                      className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Explain Like I&apos;m 5
                    </button>
                  )}
                </div>

                {isGenerating ? (
                  <div className="flex items-center gap-2 text-gray-400 text-sm animate-pulse">
                    <Loader2 size={16} className="animate-spin" /> Generating
                    simplified summary...
                  </div>
                ) : aiExplanation ? (
                  <p className="text-gray-300 text-sm italic animate-fade-in">
                    "{aiExplanation}"
                  </p>
                ) : (
                  <p className="text-gray-500 text-xs">
                    Too technical? Click the button to generate a simple summary
                    using Gemini AI.
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-green-400" size={20} /> Key
                Challenges & Solutions
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-bold mb-4">Links</h4>
              <div className="flex flex-col gap-3">
                <a
                  href={project.github}
                  className="flex items-center justify-center gap-2 bg-[#24292e] hover:bg-[#2f363d] text-white py-3 rounded-lg transition-all"
                >
                  <Github size={18} /> View Code
                </a>
                <a
                  href={project.link}
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-all shadow-lg shadow-purple-500/20"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
