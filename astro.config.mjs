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
          items: [
            { label: "What is GDG Docs?", link: "overview/what-is-gdg-docs" },
          ],
          collapsed: true,
        },
        {
          label: "Code Guidelines",
          items: [
            { label: "General", link: "code-guidelines/general" },
            { label: "React", link: "code-guidelines/react" },
          ],
          collapsed: true,
        },
        {
          label: "Guides",
          items: [
            { label: "GitHub Issues", link: "guides/github-issues" },
            { label: "GitHub PRs", link: "guides/github-pull-requests" },
          ],
          collapsed: true,
        },
        {
          label: "React",
          items: [
            { label: "Project Structure", link: "react/project-structure" },
            { label: "State Management", link: "react/state-management" },
            { label: "Routing", link: "react/routing" },
            { label: "UI Styling", link: "react/ui-styling" },
            { label: "Forms & Validation", link: "react/forms-validation" },
            { label: "API Integration", link: "react/api-integration" },
            {
              label: "Authentication & Security",
              link: "react/authentication-security",
            },
            { label: "Debugging", link: "react/debugging" },
            { label: "Deployment", link: "react/deployment" },
          ],
          collapsed: true,
        },
        {
          label: "Express",
          items: [
            { label: "Project Structure", link: "express/project-structure" },
            {
              label: "API Design Principles",
              link: "express/api-design-principles",
            },
            { label: "Middleware", link: "express/middleware" },
            {
              label: "Authentication & Security",
              link: "express/authentication-security",
            },
            { label: "Databases", link: "express/databases" },
            {
              label: "Error Handling & Logging",
              link: "express/error-handling",
            },
            { label: "File Uploads", link: "express/file-uploads" },
            { label: "Testing", link: "express/testing" },
            { label: "Performance", link: "express/performance-optimization" },
            { label: "Deployment", link: "express/deployment" },
          ],
          collapsed: true,
        },
        {
          label: "Flutter",
          items: [
            { label: "Project Structure", link: "flutter/project-structure" },
            { label: "State Management", link: "flutter/state-management" },
            {
              label: "Navigation & Routing",
              link: "flutter/navigation-routing",
            },
            {
              label: "API Integration & Data Handling",
              link: "flutter/api-integration-data-handling",
            },
            {
              label: "Local Storage & Databases",
              link: "flutter/local-storage-databases",
            },
            {
              label: "Common Issues & Debugging",
              link: "flutter/common-issues-debugging",
            },
          ],
          collapsed: true,
        },
        {
          label: "Workflows",
          items: [
            { label: "Frontend", link: "workflows/frontend" },
            { label: "Backend", link: "workflows/backend" },
          ],
          collapsed: true,
        },
        {
          label: "References",
          items: [{ label: "Example", link: "references/example" }],
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
