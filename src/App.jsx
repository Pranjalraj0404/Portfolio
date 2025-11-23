import React, { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Menu,
  X,
  Terminal,
  Globe,
  Database,
  Server,
  Layers,
  ArrowUp,
  CheckCircle2,
  Send,
  MessageSquare,
  Sparkles,
  Bot,
  Loader2,
  Rocket,
  Code,
} from "lucide-react";
// --- CONFIGURATION (from .env) ---
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_YOUR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_YOUR_TEMPLATE_ID;
const EMAILJS_AUTOREPLY_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;



// --- DIRECT ASSET URLs ---
const DIRECT_PROFILE_URL = `${SUPABASE_URL}/storage/v1/object/public/portfolio/profile.jpg`;
const DIRECT_RESUME_URL = `${SUPABASE_URL}/storage/v1/object/public/portfolio/resume.pdf`;
const DEFAULT_IMAGE_URL =
  "https://placehold.co/128x128/333344/AAAAAA?text=No+Image";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const PERSONAL_INFO = {
  name: "Pranjal Raj",
  title: "Full Stack Developer",
  email: "pranjalraj0404@gmail.com",
  phone: "+91-7091444011",
  bio: "Final year ECE student at Bangalore Institute of Technology. Passionate about building scalable web applications, solving algorithmic challenges, and leveraging AI in software solutions.",
  socials: {
    github: "https://github.com/Pranjalraj0404",
    linkedin: "https://www.linkedin.com/in/pranjalraj0404",
    leetcode: "https://leetcode.com/u/Qyh7D1bgnb",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/pranjalraj0404",
  },
  detailedAbout: [
    "Pursuing B.E. in Electronics and Communication Engineering with strong focus computer science. Building practical skills in DSA and full-stack development through hands-on projects, labs, and hackathons. Actively strengthening problem-solving, teamwork, and technical depth for a software development career.",
  ],
  quote: "Leveraging AI as a professional tool, not a replacement.",
};

const EDUCATION = [
  {
    id: 1,
    institution: "Bangalore Institute of Technology",
    degree: "B.E. in Electronics & Communication engg",
    duration: "2023 - 2027",
    grade: "CGPA: 8.1",
    desc: "Pursuing B.E. in Electronics and Communication Engineering, computer science fundamentals, DSA, AI, and full-stack development through projects and practical learning.",
  },
  {
    id: 2,
    institution: "Bridgeford School, Ranchi",
    degree: "Senior Secondary (Class 12)",
    duration: "2022",
    grade: "84%",
    desc: "Developed strong PCM foundations, enhancing analytical thinking and problem-solving skills that guided my shift toward engineering and technology.",
  },
  {
    id: 3,
    institution: "Bridgeford School, Ranchi",
    degree: "Secondary (Class 10)",
    duration: "2020",
    grade: "88%",
    desc: "Built solid fundamentals in science and mathematics, sparking early interest in technology and shaping the discipline needed for higher studies in engineering.",
  },
];


const PROJECTS = [
  {
    id: 1,
    title: "AI Resume / Interview Prep AI",
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Gemini API", "MongoDB", "Tailwind"],
    description:
      "AI-based interview platform generating adaptive questions for mock interviews. Reduces prep time using generative AI models.",
    longDescription:
      "This platform leverages the Gemini API to simulate real-world technical interviews. It analyzes the user's resume and job description to generate tailored questions and gives structured feedback on clarity, correctness, and relevance.",
    challenges: [
      "Handling latency with AI responses while keeping the UI smooth.",
      "Designing prompts that adapt to different roles and tech stacks.",
      "Storing and organizing interview history securely and efficiently.",
    ],
       link: "https://interview-prep-ai0404.vercel.app/",
    github: "https://github.com/Pranjalraj0404/AI-Resume",
  },
  {
    id: 2,
    title: "TaskLink Manager",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    description:
      "Project management backend with JWT auth, role-based access control, and scalable entity management.",
    longDescription:
      "TaskLink is a comprehensive project management API designed for scalability. It supports hierarchical tasks, real-time updates, and granular permissions for roles like Admin, Manager, and Developer.",
    challenges: [
      "Implementing recursive database queries for nested subtasks.",
      "Preventing role-escalation and securing protected routes with middleware.",
      "Optimizing indexes to handle active entities without performance drops.",
    ],
    link: "#", // put live demo URL here if you host the API/UI
    github: "https://github.com/Pranjalraj0404/TaskLink",
  },
];


const UPCOMING_PROJECTS = [
  
];

// --- SKILLS DATA ---
const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5 text-cyan-400" />,
    skills: [
      { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "SQL", icon: "sqlite/sqlite-original.svg" },
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
    ],
  },
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: "React.js", icon: "react/react-original.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Server className="w-5 h-5 text-green-400" />,
    skills: [
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "express/express-original.svg", invert: true },
      { name: "Socket.IO", icon: "socketio/socketio-original.svg" },
      { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Tools/DevOps",
    icon: <Layers className="w-5 h-5 text-yellow-400" />,
    skills: [
      { name: "Git", icon: "git/git-original.svg" },
      { name: "GitHub", icon: "github/github-original.svg", invert: true },
      { name: "Docker", icon: "docker/docker-original.svg" },
      { name: "Vercel", icon: "vercel/vercel-original.svg", invert: true },
    ],
  },
];

const MARQUEE_ITEMS = [
  ...SKILL_CATEGORIES[0].skills,
  ...SKILL_CATEGORIES[1].skills,
  ...SKILL_CATEGORIES[2].skills,
  ...SKILL_CATEGORIES[3].skills,
];

// --- GEMINI API UTILS ---
const callGeminiAPI = async (prompt, systemContext = "") => {
  if (!apiKey) {
    console.error("Gemini API key is missing.");
    return "AI assistant is currently offline.";
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemContext }] },
  };

  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I couldn't generate a response."
      );
    } catch (error) {
      attempt++;
      if (attempt === maxRetries)
        return "Sorry, I'm having trouble connecting to my AI brain right now.";
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 * Math.pow(2, attempt))
      );
    }
  }
};

// --- CUSTOM HOOKS & UTILS ---
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

const useTypewriter = (
  phrases,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseTime = 2000
) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleTyping = () => {
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

// --- FX COMPONENTS ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-screen hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_2px_rgba(168,85,247,0.8)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500/30 rounded-full blur-md transition-all duration-100 ease-out"></div>
    </div>
  );
};

const SystemBootPreloader = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
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
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === bootSequence.length - 1) {
          setTimeout(() => {
            setShowPreloader(false);
            onComplete();
          }, 800);
        }
      }, delay);
    });

    const fallbackTimer = setTimeout(() => {
      setShowPreloader(false);
      onComplete();
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [onComplete]);

  if (!showPreloader) return null;

  return (
    <div className="fixed inset-0 bg-[#03030c] z-[10000] flex flex-col items-start justify-end p-10 md:p-20 font-mono text-green-500">
      {lines.map((line, i) => (
        <div key={i} className="mb-2 animate-fade-in">
          {line}
        </div>
      ))}
      <div className="w-3 h-6 bg-green-500 animate-blink inline-block ml-1"></div>
    </div>
  );
};

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

const TiltCard = ({ children, className = "", onClick }) => {
  const [transform, setTransform] = useState("");
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setTransform(
      `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Reveal = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

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

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`relative overflow-hidden bg-[#11112b]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300 group ${className}`}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    {children}
  </div>
);

// --- SUPABASE DATABASE STATUS COMPONENT ---
const DatabaseStatus = () => {
  const status = DIRECT_RESUME_URL ? "✅ Assets Linked" : "⚠️ Config Error";
  const color = DIRECT_RESUME_URL ? "text-green-400" : "text-red-400";

  return (
    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/10 text-xs font-mono">
      <Database size={12} className={color} />
      <span className={color}>{status}</span>
    </div>
  );
};

// --- ABOUT ME SECTION ---
const AboutMeSection = () => (
  <section id="about-me" className="relative z-10 py-32">
    <div className="container mx-auto px-6 max-w-6xl">
      <Reveal>
        <SectionTitle>About Me</SectionTitle>
        <div className="text-center text-gray-400 mb-12 -mt-10 flex justify-center gap-2 items-center">
          <Sparkles size={16} className="text-purple-500" /> Transforming ideas
          into digital experiences{" "}
          <Sparkles size={16} className="text-purple-500" />
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-12 items-center bg-[#11112b]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="md:col-span-2 space-y-6">
          <Reveal delay={150}>
            <h2 className="text-5xl font-bold text-white mb-2">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {PERSONAL_INFO.name}
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              {PERSONAL_INFO.detailedAbout[0]}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-[#1a1a2e] border border-purple-500/30 rounded-xl p-4 text-gray-300 italic text-sm shadow-xl shadow-purple-500/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
              <span className="text-xl text-purple-400 pr-2">"</span>
              {PERSONAL_INFO.quote}
              <span className="text-xl text-purple-400 pl-2">"</span>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <a
                href={DIRECT_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 shadow-md shadow-purple-500/30"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="#projects"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
              >
                <ExternalLink size={18} /> View Projects
              </a>
              <DatabaseStatus />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-1 flex justify-center md:justify-end cursor-auto order-first md:order-last">
          <Reveal delay={150}>
            <div className="relative w-full max-w-[280px] h-[280px] rounded-full overflow-hidden bg-gradient-to-br from-purple-600/50 to-cyan-500/50 p-2 shadow-2xl shadow-purple-500/20">
              <img
                src={DIRECT_PROFILE_URL}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DEFAULT_IMAGE_URL;
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

// --- UPCOMING PROJECTS SECTION (Single Glass Card) ---
const UpcomingProjectsSection = () => (
  <section id="upcoming" className="relative z-10 py-24 bg-[#050511]">
    <div className="container mx-auto px-6 max-w-4xl">
      <Reveal>
        <SectionTitle subtitle>Upcoming Projects</SectionTitle>
      </Reveal>

      <Reveal delay={150}>
        <TiltCard>
          <GlassCard className="min-h-[220px] flex flex-col items-center justify-center text-center bg-[#11112b]/70">
            <div className="mb-4 flex items-center gap-3">
              <Rocket className="text-purple-400" size={24} />
              <h3 className="text-2xl font-bold text-white">
                New launches coming soon
              </h3>
            </div>

            <p className="text-gray-400 max-w-xl mb-4">
              I&apos;m currently building new full-stack and AI-powered
              projects. This space will auto-update as soon as they are ready to
              deploy.
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-xs text-cyan-300">
              <span className="px-3 py-1 rounded-full bg-[#1a1a2e] border border-cyan-500/20">
                MERN
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1a1a2e] border border-cyan-500/20">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1a1a2e] border border-cyan-500/20">
                AI Integrations
              </span>
            </div>
          </GlassCard>
        </TiltCard>
      </Reveal>
    </div>
  </section>
);

// --- MODALS ---
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

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (window.emailjs && EMAILJS_PUBLIC_KEY) {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_email: PERSONAL_INFO.email,
      user_name: PERSONAL_INFO.name,
    };

    if (!window.emailjs) {
      console.error("EmailJS object not found.");
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      await window.emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_YOUR_TEMPLATE_ID,
  templateParams,
  EMAILJS_PUBLIC_KEY
);

await window.emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_AUTOREPLY_TEMPLATE_ID,
  templateParams,
  EMAILJS_PUBLIC_KEY
);

      setStatus("success");
      setTimeout(() => {
        setStatus(null);
        setFormData({ name: "", email: "", message: "" });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("EmailJS Send Failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative bg-[#0a0a16] border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl animate-fade-in-up p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
        <p className="text-gray-400 mb-6 text-sm">
          I usually respond within 24 hours.
        </p>

        {status === "error" && (
          <div className="p-3 mb-4 text-sm text-red-300 bg-red-900/30 rounded-lg border border-red-500/50">
            Failed to send message. Please check your browser console for API
            errors.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
              Your Name
            </label>
            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wide">
              Message
            </label>
            <textarea
              required
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-[#1a1a2e] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || status === "success"}
            className={`w-full py-4 rounded-lg font-bold text-white transition-all shadow-lg flex justify-center items-center gap-2 ${
              status === "success"
                ? "bg-green-600 shadow-green-500/20"
                : "bg-purple-600 hover:bg-purple-700 shadow-purple-500/20 hover:-translate-y-1"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 size={18} className="animate-spin" /> Sending...
              </span>
            ) : status === "success" ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} /> Success! Sent Auto-Reply.
              </span>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

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
        className="fixed bottom-8 left-8 p-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 z-50 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <div
        className={`fixed bottom-24 left-8 w-80 sm:w-96 h-96 bg-[#0a0a16]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-left ${
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

// --- MAIN APP ---
export default function App() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const typedText = useTypewriter([
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Problem Solver",
  ]);

  const heroSocials = [
    {
      icon: <Github size={24} />,
      href: PERSONAL_INFO.socials.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      href: PERSONAL_INFO.socials.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Mail size={24} />,
      href: `mailto:${PERSONAL_INFO.email}`,
      label: "Email",
    },
    {
      icon: <Phone size={24} />,
      href: `tel:${PERSONAL_INFO.phone}`,
      label: "Phone",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // change to "auto" if you want instant jump
    });
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about-me", label: "About Me" },
    { id: "education", label: "Journey" },
    { id: "skills", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "upcoming", label: "Upcoming" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // instant jump – no smooth scroll
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <>
      <SystemBootPreloader onComplete={() => setIsPreloaderComplete(true)} />

      {isPreloaderComplete && (
        <div className="min-h-screen font-sans bg-[#03030c] text-gray-300 selection:bg-purple-500/30 overflow-x-hidden relative cursor-none">
          <CustomCursor />
          <div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-[60]"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>

          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div
              className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* NAV */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-[#03030c]/80 backdrop-blur-md border-b border-white/5 cursor-auto">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold flex items-center gap-2 text-white">
                <Terminal className="text-purple-500" />
                <span>
                  PR<span className="text-purple-500">.</span>DEV
                </span>
              </div>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden bg-[#0a0a16] border-b border-white/10 p-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      handleNavClick(link.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-300 hover:text-purple-400 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </nav>

          {/* HERO */}
          <section
            id="home"
            className="relative z-10 pt-32 pb-20 container mx-auto px-6 min-h-screen flex flex-col justify-center items-center text-center"
          >
            <Reveal>
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium tracking-wide backdrop-blur-sm">
                ✨ Open to Work
              </div>
            </Reveal>

            <Reveal delay={200}>
              <img
                src={DIRECT_PROFILE_URL}
                alt={PERSONAL_INFO.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500/50 shadow-lg shadow-purple-500/30 transition-transform hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DEFAULT_IMAGE_URL;
                }}
              />

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Transforming Ideas into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
                  <GlitchText text="Digital Reality" />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <div className="text-xl md:text-3xl text-gray-400 mb-10 h-8 font-mono">
                I am a{" "}
                <span className="text-white border-r-2 border-purple-500 pr-1 animate-blink">
                  {typedText}
                </span>
              </div>
              <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
                Building scalable solutions with the MERN stack and AI
                integration.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex flex-wrap justify-center gap-6 cursor-auto">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] hover:scale-105 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Let&apos;s Connect
                </button>
                <a
                  href={DIRECT_RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center gap-2 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div className="flex justify-center gap-8 mt-16 text-gray-500 cursor-auto">
                {heroSocials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="hover:text-purple-400 transition-colors transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Reveal>
          </section>

          {/* MARQUEE */}
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

          {/* ABOUT ME */}
          <AboutMeSection />

          {/* EDUCATION */}
          <section id="education" className="relative z-10 py-32">
            <div className="container mx-auto px-6">
              <Reveal>
                <SectionTitle subtitle>My Journey</SectionTitle>
              </Reveal>

              <div className="max-w-4xl mx-auto relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30"></div>

                <div className="space-y-12">
                  {EDUCATION.map((edu, index) => (
                    <Reveal key={edu.id} delay={index * 200}>
                      <div
                        className={`relative flex flex-col md:flex-row gap-8 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#03030c] border-2 border-purple-500 rounded-full z-10 mt-6 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                        <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                          <TiltCard>
                            <GlassCard className="hover:-translate-y-2">
                              <span className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                                {edu.duration}
                              </span>
                              <h3 className="text-xl font-bold text-white mb-1">
                                {edu.institution}
                              </h3>
                              <p className="text-gray-400 text-sm mb-4">
                                {edu.degree}
                              </p>
                              <div className="inline-block px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                                {edu.grade}
                              </div>
                              {edu.desc && (
                                <p className="text-gray-400 text-sm mt-3 leading-relaxed border-t border-white/5 pt-3">
                                  {edu.desc}
                                </p>
                              )}
                            </GlassCard>
                          </TiltCard>
                        </div>
                        <div className="hidden md:block md:w-1/2"></div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="relative z-10 py-20">
            <div className="container mx-auto px-6">
              <Reveal>
                <SectionTitle subtitle>Tech Stack</SectionTitle>
              </Reveal>

              <div className="max-w-6xl mx-auto space-y-12">
                {SKILL_CATEGORIES.map((category, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-6 px-4">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {category.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 cursor-auto">
                        {category.skills.map((skill, sIdx) => (
                          <TiltCard key={sIdx}>
                            <div className="group bg-[#11112b]/40 border border-white/5 hover:border-purple-500/40 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-white/5">
                              <img
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                                alt={skill.name}
                                className={`w-12 h-12 transition-transform group-hover:scale-110 ${
                                  skill.invert ? "invert" : ""
                                }`}
                              />
                              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                          </TiltCard>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="relative z-10 py-20 bg-[#050511]">
            <div className="container mx-auto px-6">
              <Reveal>
                <SectionTitle subtitle>Featured Projects</SectionTitle>
              </Reveal>

              <div className="grid gap-8 max-w-6xl mx-auto cursor-auto grid-cols-1 md:grid-cols-2">
                {PROJECTS.map((project, idx) => (
                  <Reveal key={idx} delay={idx * 200}>
                    <TiltCard
                      className="h-full cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="bg-[#0e0e1f] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group h-full flex flex-col shadow-2xl relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
                          <span className="text-white font-bold px-4 py-2 border border-purple-500 rounded-lg bg-black/50 backdrop-blur-sm">
                            View Details
                          </span>
                        </div>

                        <div className="relative h-48 md:h-64 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e1f] to-transparent z-10"></div>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>

                        <div className="p-8 flex-grow flex flex-col relative z-20">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-gray-400 leading-relaxed mb-6 flex-grow text-sm">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 text-xs font-medium bg-[#1a1a2e] text-purple-300 rounded-full border border-purple-500/10"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* UPCOMING */}
          <UpcomingProjectsSection />

          {/* CONTACT */}
          <section id="contact" className="relative z-10 py-32">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <TiltCard>
                  <GlassCard className="p-8 md:p-12 text-center cursor-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Let&apos;s Build Something Amazing
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                      Whether you have a question, a project idea, or just want
                      to say hi, my inbox is always open.
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
                      <div className="flex items-center justify-center gap-3 px-6 py-4 bg-[#1a1a2e] border border-white/10 rounded-xl text-gray-300">
                        <Phone size={20} className="text-purple-500" />
                        {PERSONAL_INFO.phone}
                      </div>
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

          {/* BACK TO TOP */}
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 z-40 cursor-pointer ${
              showBackToTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 pointer-events-none"
            }`}
          >
            <ArrowUp size={24} />
          </button>

          {/* AI CHAT */}
          <AIChatWidget />

          {/* MODALS */}
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />

          {/* FOOTER */}
          <footer className="py-8 text-center text-gray-600 text-sm bg-[#03030c] border-t border-white/5 relative z-10 cursor-auto">
            <p>© 2025 {PERSONAL_INFO.name}. Crafted with React & Tailwind.</p>
          </footer>

          {/* GLOBAL STYLES */}
          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s step-end infinite;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            @keyframes gradient-x {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradient-x 5s ease infinite;
            }
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(1.1); }
            }
            .animate-pulse-slow {
              animation: pulse-slow 6s ease-in-out infinite;
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #0a0a16; 
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #2d2d44; 
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #4b4b6e; 
            }
            @keyframes fade-in-up {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.3s ease-out forwards;
            }
            @keyframes glitch-1 {
              0% { clip-path: inset(20% 0 80% 0); }
              20% { clip-path: inset(60% 0 10% 0); }
              40% { clip-path: inset(40% 0 50% 0); }
              60% { clip-path: inset(80% 0 5% 0); }
              80% { clip-path: inset(10% 0 70% 0); }
              100% { clip-path: inset(30% 0 20% 0); }
            }
            @keyframes glitch-2 {
              0% { clip-path: inset(10% 0 60% 0); }
              20% { clip-path: inset(30% 0 10% 0); }
              40% { clip-path: inset(80% 0 5% 0); }
              60% { clip-path: inset(15% 0 50% 0); }
              80% { clip-path: inset(60% 0 20% 0); }
              100% { clip-path: inset(40% 0 40% 0); }
            }
            .animate-glitch-1 {
              animation: glitch-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
            }
            .animate-glitch-2 {
              animation: glitch-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite reverse;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
