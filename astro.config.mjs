import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// Astro Configuration
export default defineConfig({
    integrations: [
        starlight({
            title: 'GDG Docs',
            logo: {
                src: "./src/assets/gdg-logo.svg",
            },
            social: {
                github: 'https://github.com/GDGAlgiers',
                discord: "https://discord.gg/tX2rAAvkxX",
            },
            sidebar: [
                {
                    label: 'Overview',
                    autogenerate: { directory: 'overview' },
                },
                {
                    label: 'Code Guidelines',
                    autogenerate: { directory: 'code-guidelines' },
                },
                {
                    label: 'Guides',
                    autogenerate: { directory: 'guides' },
                },
                {
                    label: 'Tools',
                    autogenerate: { directory: 'tools', exclude: ['react-scan'] },
                },
                {
                    label: 'Workflows',
                    autogenerate: { directory: 'workflows' },
                },
                {
                    label: 'References',
                    autogenerate: { directory: 'references' },
                },
            ],
            customCss: ['./src/tailwind.css'],
        }),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
