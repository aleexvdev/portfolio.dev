import { defineConfig, envField } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), svelte()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  /* experimental: {
    env: {
      schema: {
        EMAIL_HOST: envField.string({
          context: "server",
          access: "secret",
          optional: false
        }),
        EMAIL_PORT: envField.string({
          context: "server",
          access: "secret",
          optional: false
        }),
        EMAIL_USER: envField.string({
          context: "server",
          access: "secret",
          optional: false
        }),
        EMAIL_PASS: envField.string({
          context: "server",
          access: "secret",
          optional: false
        }),
      }
    }
  }, */
});