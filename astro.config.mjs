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
            { label: "Formatting", link: "code-guidelines/formatting" },
            { label: "Linting", link: "code-guidelines/linting" },
          ],
          collapsed: true,
        },
        {
          label: "Common Techniques",
          items: [
            {
              label: "API Design Principles",
              link: "common-techniques/api-design-principles",
            },
            {
              label: "Deployment Strategies",
              link: "common-techniques/deployment",
            },
          ],
          collapsed: true,
        },
        {
          label: "TypeScript",
          items: [
            { label: "General", link: "typescript/general" },
            { label: "React with TypeScript", link: "typescript/react" },
            { label: "Express with TypeScript", link: "typescript/express" },
          ],
          collapsed: true,
        },
        {
          label: "GitHub Workflows",
          items: [
            { label: "Issues & Pull Requests", link: "github/issues-prs" },
            {
              label: "Branching & Contribution",
              link: "github/contribution-flow",
            },
            { label: "Conventional Commits", link: "github/commits" },
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
            { label: "Performance", link: "react/performance" },
          ],
          collapsed: true,
        },
        {
          label: "Express",
          items: [
            { label: "Project Structure", link: "express/project-structure" },
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
            { label: "Performance", link: "express/performance-optimization" },
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
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
