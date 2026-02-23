import React, { useState, useRef, useEffect } from "react";
import { X, MessageSquare, Bot, Send, Loader2 } from "lucide-react";
import { callGeminiAPI } from "../../utils/gemini";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION } from "../../data/portfolioData";

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Pranjal's AI Assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getOfflineFallbackReply = (query) => {
    const q = query.toLowerCase();
    const allSkills = SKILL_CATEGORIES.flatMap((cat) => cat.skills.map((s) => s.name)).join(", ");

    if (q.includes("stack") || q.includes("skills") || q.includes("tech")) {
      return `Pranjal works mainly with ${allSkills}. Core stack: React, Node.js, Express, MongoDB, and Tailwind CSS.`;
    }

    if (q.includes("project") || q.includes("build") || q.includes("made")) {
      const projectNames = PROJECTS.map((p) => p.title).join(", ");
      return `Featured projects include: ${projectNames}. Ask me about any one project for details.`;
    }

    if (q.includes("education") || q.includes("study") || q.includes("college")) {
      return `${PERSONAL_INFO.name} is pursuing B.E. in ECE at ${EDUCATION[0]?.institution} (${EDUCATION[0]?.duration}).`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return `You can contact ${PERSONAL_INFO.name} at ${PERSONAL_INFO.email}.`;
    }

    return `${PERSONAL_INFO.name} is a ${PERSONAL_INFO.title}. Ask about skills, projects, education, or contact info.`;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const systemContext = `
      You are a friendly and professional AI assistant for Pranjal Raj's portfolio. 
      Here is his background:
      Name: ${PERSONAL_INFO.name}
      Role: ${PERSONAL_INFO.title}
      Bio: ${PERSONAL_INFO.bio}
      Skills: Frontend (React, Tailwind), Backend (Node.js, Express, MongoDB, C++), Tools (Git, Docker).
      Education: B.E. in ECE at Bangalore Institute of Technology (CGPA 8.1).
      Projects: Interview Prep AI (Next.js + Gemini), TaskLink Manager (Node.js + MongoDB).
      Socials: GitHub, LinkedIn, LeetCode.
      
      Your goal is to answer questions about Pranjal based on this data. 
      If the answer isn't in the data, politely say you don't know but suggest they contact him directly.
      Keep answers concise (under 3 sentences) and engaging.
    `;

    const responseText = await callGeminiAPI(input, systemContext);
    const isApiErrorResponse =
      responseText === "AI assistant is currently offline." ||
      responseText.includes("trouble connecting to my AI brain");
    const finalResponse = isApiErrorResponse
      ? getOfflineFallbackReply(input)
      : responseText;

    setMessages((prev) => [...prev, { type: "bot", text: finalResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 p-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 z-[200] hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <div
        className={`fixed bottom-24 left-8 w-80 sm:w-96 h-96 bg-[#061126]/95 backdrop-blur-md border border-blue-200/15 rounded-2xl shadow-2xl shadow-blue-900/30 z-[200] flex flex-col transition-all duration-300 origin-bottom-left ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 border-b border-blue-200/10 bg-blue-400/5 rounded-t-2xl flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-full">
            <Bot size={20} className="text-blue-300" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Pranjal AI</h3>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>{" "}
              Online
            </p>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.type === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-[#0f1f3a] text-blue-100 border border-blue-200/10 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#0f1f3a] p-3 rounded-xl rounded-bl-none border border-blue-200/10">
                <Loader2 size={16} className="animate-spin text-blue-300" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-3 border-t border-blue-200/10 bg-blue-400/5 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Pranjal..."
              className="flex-grow bg-[#07142b] border border-blue-200/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-blue-600 hover:bg-cyan-500 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIChatWidget;
