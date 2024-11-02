// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tomlarcher.com",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
  vite: {
    resolve: {
      alias: {
        "@styles": "/src/styles",
      },
    },
  },
});
