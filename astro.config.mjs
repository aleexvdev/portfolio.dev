import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";
import dotenv from "dotenv";

dotenv.config();
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), svelte()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
    /* define: {
      'import.meta.env.SMTP_HOST': JSON.stringify(process.env.SMTP_HOST),
      'import.meta.env.SMTP_PORT': JSON.stringify(process.env.SMTP_PORT),
      'import.meta.env.SMTP_SECURE': JSON.stringify(process.env.SMTP_SECURE),
      'import.meta.env.SMTP_USER': JSON.stringify(process.env.SMTP_USER),
      'import.meta.env.SMTP_PASS': JSON.stringify(process.env.SMTP_PASS),
      'import.meta.env.FROM_NAME': JSON.stringify(process.env.FROM_NAME),
      'import.meta.env.FROM_EMAIL': JSON.stringify(process.env.FROM_EMAIL),
      'import.meta.env.TO_EMAIL': JSON.stringify(process.env.TO_EMAIL),
    }, */
  },
  /* server: {
    proxy: {
      '/api': 'http://localhost:4321',  // Proxy para el backend
    },
  }, */
});