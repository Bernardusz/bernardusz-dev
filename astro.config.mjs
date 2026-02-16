// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
	site: 'https://bernardusz-dev.vercel.app', 
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
    plugins: [tailwindcss()],
  },
  build: {
	inlineStylesheets: "always"
  },
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [icon(), react()],
});
