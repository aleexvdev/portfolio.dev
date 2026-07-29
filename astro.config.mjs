// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import dotenv from "dotenv";

// https://astro.build/config
dotenv.config();

const site = "https://alexvalverde.dev";

export default defineConfig({
  site,
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['react-icons'],
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    react(),
    sitemap({
      customPages: [
        `${site}/`,
        `${site}/en`,
        `${site}/archive`,
        `${site}/en/archive`,
      ],
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
