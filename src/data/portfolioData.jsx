import { Code, Globe, Server, Layers } from "lucide-react";
import React from "react";

export const PERSONAL_INFO = {
  name: "Pranjal Raj",
  title: "Full Stack Developer",
  email: "pranjalraj0404@gmail.com",
  // Phone removed
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

export const EDUCATION = [
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

export const PROJECTS = [
  {
    id: 1,
    title: "AI Resume / Interview Prep AI",
    image:
      "https://opengraph.githubassets.com/1/Pranjalraj0404/Interview-prep-ai",
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
    github: "https://github.com/Pranjalraj0404/Interview-prep-ai",
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
  {
    id: 3,
    title: "EquiSplit",
    image:
      "https://raw.githubusercontent.com/Pranjalraj0404/EquiSplit/main/Screenshots/dashboard.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "Intelligent Group Expense Tracker - seamless expense splitting, automated debt settlement, and interactive analytics dashboard.",
    longDescription:
      "A production-ready MERN stack application for managing shared expenses. SplitApp enables users to create groups, log expenses, compute balances automatically, and visualize spending patterns through interactive dashboards. Features include JWT authentication, real-time balance tracking, and optimized MongoDB queries for analytics.",
    challenges: [
      "Implementing automated equal splitting logic across multiple users and transactions.",
      "Optimizing MongoDB aggregation pipelines for efficient expense analytics.",
      "Building a responsive Material UI dashboard with Chart.js visualizations for real-time balance updates.",
    ],
    link: "https://equisplit-pranjal.vercel.app/",
    github: "https://github.com/Pranjalraj0404/EquiSplit",
  },
];

export const UPCOMING_PROJECTS = [];

export const SKILL_CATEGORIES = [
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
    icon: <Globe className="w-5 h-5 text-blue-400" />,
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

export const MARQUEE_ITEMS = [
  ...SKILL_CATEGORIES[0].skills,
  ...SKILL_CATEGORIES[1].skills,
  ...SKILL_CATEGORIES[2].skills,
  ...SKILL_CATEGORIES[3].skills,
];
