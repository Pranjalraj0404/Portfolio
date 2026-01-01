
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const DIRECT_PROFILE_URL = `${SUPABASE_URL}/storage/v1/object/public/portfolio/profile.jpg`;
export const DIRECT_RESUME_URL = `${SUPABASE_URL}/storage/v1/object/public/portfolio/resume.pdf`;
export const DEFAULT_IMAGE_URL = "https://placehold.co/128x128/333344/AAAAAA?text=No+Image";

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_YOUR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_YOUR_TEMPLATE_ID;
export const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
