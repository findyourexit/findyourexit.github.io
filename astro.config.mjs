// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tomlarcher.com",
  // Preserve HTML-aware whitespace between inline elements. Astro v7 changed the
  // `compressHTML` default to 'jsx', which strips the spaces around inline links
  // in prose (e.g. "technology and" -> "technologyand").
  compressHTML: true,
  integrations: [
    icon(),
    sitemap(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
