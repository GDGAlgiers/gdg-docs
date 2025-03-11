import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    starlight({
      title: "GDG Docs",
      logo: {
        src: "./src/assets/gdg-logo.svg",
      },
      social: {
        github: "https://github.com/GDGAlgiers",
        discord: "https://discord.gg/tX2rAAvkxX",
      },
      sidebar: [
        {
          label: "Overview",
          autogenerate: { directory: "overview" },
          collapsed: true,
        },
        {
          label: "Code Guidelines",
          autogenerate: { directory: "code-guidelines" },
          collapsed: true,
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          collapsed: true,
        },
        {
          label: "React",
          autogenerate: { directory: "react" },
          collapsed: true,
        },
        {
          label: "Express",
          autogenerate: { directory: "express" },
          collapsed: true,
        },
        {
          label: "Flutter",
          autogenerate: { directory: "flutter" },
          collapsed: true,
        },
        {
          label: "Workflows",
          autogenerate: { directory: "workflows" },
          collapsed: true,
        },
        {
          label: "References",
          autogenerate: { directory: "references" },
          collapsed: true,
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
