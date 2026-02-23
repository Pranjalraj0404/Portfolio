# Full Stack Developer Portfolio

A modern, animated, and AI-powered **full-stack developer portfolio** built using React, Vite, Tailwind CSS, Supabase, EmailJS, and Gemini AI.

Showcases projects, skills, journey, and includes a live **AI assistant**, Supabase-hosted assets, and a fully functional contact system.

---

##  Live Demo

https://portfolio-pranjalraj.vercel.app/

---

## Screenshots


### - Hero Section
![Hero Section](public/main.png)

### - Featured Projects
![Featured Projects](public/Project.png)

### - Contact Modal
![Contact Modal](public/Connect.png)

### - AI Chatbot
![AI Chatbot](public/ChatBot.png)


## Features

-  **Modern Glassmorphism UI**: High-end visuals with gradients, backdrop blur, custom cursor, and smooth scroll animations.
-  **Interactive Hero Section**: Features glitch text effects, typewriter animations, and a dynamic layout.
-  **Categorized Tech Stack**: Visual breakdown of skills (Languages, Frontend, Backend, Tools) with hover effects.
-  **Project Showcase**:
  - Detailed project cards with tech badges.
  - **AI "Explain Like I'm 5"**: Uses Google Gemini API to simplify technical descriptions instantly.
  - Direct links to GitHub and Live Demos.
-  **Supabase Storage**: Efficiently hosts profile images and resume files.
-  **Smart Contact System**:
  - Powered by EmailJS.
  - Sends inquiries directly to your inbox.
  - Auto-replies to senders with a confirmation message.
-  **"Pranjal AI" Chatbot**: A custom-trained AI assistant that answers questions about the portfolio owner's skills and background.
-  **Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
-  **High Performance**: Built with Vite for lightning-fast loading and HMR.

---

## Tech Stack

**Frontend**  
- React  
- Vite  
- Tailwind CSS  
- Lucide Icons  

**Services**  
- Supabase (Storage)  
- EmailJS (Contact Form)  
- Google Gemini API (AI Features)  

**Deployment**  
- Vercel

---

## Project Structure

The project follows a modular architecture for better maintainability and scalability:

```bash
my-portfolio/
├── public/
│   ├── Hero Section.png
│   ├── Featured Projects.png
│   ├── Contact Modal .png
│   ├── AI Chatbot .png
│   └── vite.svg
├── src/
│   ├── assets/             # Component-specific assets
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Structural components (Navbar, Footer)
│   │   ├── modals/         # Popup modals (Project, Contact)
│   │   ├── sections/       # Page sections (Hero, About, Projects, etc.)
│   │   ├── ui/             # Generic UI elements (Buttons, Cards, Loaders)
│   │   └── widgets/        # Standalone widgets (AIChatWidget)
│   ├── data/               # Static data files (portfolioData.jsx)
│   ├── hooks/              # Custom React hooks (useScrollReveal, etc.)
│   ├── utils/              # Utility functions & config (API, constants)
│   ├── App.jsx             # Main application component
│   ├── App.css             # Global styles
│   ├── index.css           # Tailwind & base styles
│   └── main.jsx            # Entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js

```


Environment Variables

Create a .env file in the project root:

``` bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_YOUR_TEMPLATE_ID=your_main_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

VITE_GEMINI_API_KEY=your_gemini_api_key
```


**Important**
```
1]All keys must start with VITE_ (Vite requirement).
2].env is ignored by git (via .gitignore) → secrets are safe.
3]Add the same keys in Vercel → Project → Settings → Environment Variables.
```

 Running Locally
 
1) Clone the repo
```bash
git clone https://github.com/Pranjalraj0404/Portfolio.git
cd Portfolio
```

2️)Install dependencies
```bash
npm install
```

3️)Setup .env
```bash
Create .env with the values shown above.
```

4️) Start dev server
```bash
npm run dev
```

Open: http://localhost:3000

5️)Build & preview production build
```bash
npm run build
npm run preview

```

Deploying to Vercel & Push to GitHub (steps below).

On Vercel Dashboard:
```bash
Import Portfolio repo from GitHub
Framework preset: Vite
Build command: npm run build
Output directory: dist
Add all environment variables
Click Deploy 
Every push to main will auto-redeploy.
```

 Git & GitHub Workflow

```bash
git init
git branch -M main
git remote add origin https://github.com/Pranjalraj0404/Portfolio.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

Go to Vercel and host, That’s it – Vercel will pick up the push and redeploy automatically.

Contributing / Reuse

You can:
```
Fork this repo
Replace content with your own details
Swap services (e.g., different AI provider or backend)
Extend the AI assistant or add new sections
```

Credits
```
Developer: Pranjal Raj
Hosting: Vercel
Icons: Lucide
Devicons: cdn.jsdelivr.net/gh/devicons/devicon
AI: Google Gemini
Storage: Supabase
```
