import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";
import dotenv from "dotenv";
import netlify from '@astrojs/netlify';

dotenv.config();
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), svelte()],
  output: 'server',
  adapter: [
    node({
      mode: 'standalone'
    }),
    netlify()
  ],
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
});