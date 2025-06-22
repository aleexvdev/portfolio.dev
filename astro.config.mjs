// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import dotenv from "dotenv";

// https://astro.build/config
dotenv.config();
export default defineConfig({
  site: "http://localhost:4321/",
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['react-icons'],
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [react()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
