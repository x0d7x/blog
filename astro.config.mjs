// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import { remarkReadingTime } from "./renderTime.mjs";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  site: "https://d7man.netlify.app/",

  output: "server",

  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
    },
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkReadingTime],
  },

  integrations: [
    react(),
    icon({
      include: {
        mdi: ["*"], // (Default) Loads entire Material Design Icon set
        openmoji: ["*"],
      },
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    fallback: {
      ar: "en",
    },
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite",
    },
  },

  adapter: netlify(),
});

