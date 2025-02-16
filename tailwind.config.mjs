/** @type {import('tailwindcss').Config} */
import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#F0F5FE",
          100: "#DCE9FD",
          200: "#B6D0FB",
          300: "#8FB7F8",
          400: "#699EF6",
          500: "#4285F4",
          600: "#0E63F0",
          700: "#0B4DBB",
          800: "#083786",
          900: "#052151",
          950: "#031636",
        },
        gray: colors.zinc,
      },
    },
  },
  plugins: [starlightPlugin()],
};
