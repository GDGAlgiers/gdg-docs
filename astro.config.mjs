import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
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
                // items: [
                // 	// Each item here is one entry in the navigation menu.
                // 	{ label: 'Example Guide', slug: 'guides/example' },
                // ],
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
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css',
        ],
		}), tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        })],
});
