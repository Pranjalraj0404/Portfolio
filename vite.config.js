import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load all env variables starting with VITE_
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    build: {
      // ES2020 so import.meta and modern syntax work fine
      target: 'esnext',
    },
    optimizeDeps: {
      include: ['@supabase/supabase-js'],
    },
    // Optional: make sure env is inlined at build time if needed
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
      'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(
        env.VITE_SUPABASE_ANON_KEY
      ),
    },
  };
});