// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
  },

  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24 * 7,
    },
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [mdx(), icon(), react()],
});
