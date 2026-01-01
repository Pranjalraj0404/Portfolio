import React, { useState, useRef, useEffect } from "react";
import { X, MessageSquare, Bot, Send, Loader2 } from "lucide-react";
import { callGeminiAPI } from "../../utils/gemini";
import { PERSONAL_INFO } from "../../data/portfolioData";

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

    setMessages((prev) => [...prev, { type: "bot", text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 p-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 z-[200] hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <div
        className={`fixed bottom-24 left-8 w-80 sm:w-96 h-96 bg-[#0a0a16]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl z-[200] flex flex-col transition-all duration-300 origin-bottom-left ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 border-b border-white/10 bg-white/5 rounded-t-2xl flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 rounded-full">
            <Bot size={20} className="text-purple-400" />
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
                    ? "bg-purple-600 text-white rounded-br-none"
                    : "bg-[#1a1a2e] text-gray-300 border border-white/5 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a2e] p-3 rounded-xl rounded-bl-none border border-white/5">
                <Loader2 size={16} className="animate-spin text-purple-400" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-white/5 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Pranjal..."
              className="flex-grow bg-[#0a0a16] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors disabled:opacity-50"
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
