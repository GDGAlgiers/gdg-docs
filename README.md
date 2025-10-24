# GDG Docs

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
   <a href="https://github.com/GDGAlgiers/gdg-docs"><img src="/public/gdg-docs.png" height="400" width="400" style="border-radius:50%"></a>
  <h3 align="center">GDG Docs</h3>
  <p align="center">
    A comprehensive, community-driven documentation platform providing standardized best practices, coding guidelines, and production-ready patterns for modern web and mobile development.
    <br />
    <a href="https://docs.gdgalgiers.dev"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/GDGAlgiers/gdg-docs/issues">Report Bug</a>
    ·
    <a href="https://github.com/GDGAlgiers/gdg-docs/issues">Request Guide</a>
  </p>
</p>

---

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Starlight](https://img.shields.io/badge/Starlight-8B5CF6?style=for-the-badge&logo=astro&logoColor=white)](https://starlight.astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white)](https://mdxjs.com/)

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

---

## What's Inside

### Tech Stack Coverage

- **Frontend Development**: React.js with comprehensive guides on state management, routing, API integration, authentication, and deployment
- **Backend Development**: Express.js covering API design, database integration, middleware patterns, error handling, and security
- **Mobile Development**: Flutter with architecture patterns, state management, and platform-specific guidance
- **Development Workflows**: GitHub collaboration, commit conventions, code review practices, and project management

### Content Focus

Our documentation emphasizes:

- **Production-Ready Patterns**: Real-world code examples you can trust
- **Standardized Best Practices**: Consistent approaches across all guides
- **Common Pitfalls**: Issues developers face and how to avoid them
- **Complete Workflows**: End-to-end guides from backend to frontend
- **Beginner to Advanced**: Content for all experience levels

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/GDGAlgiers/gdg-docs.git
cd gdg-docs

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## Contributing

We welcome contributions from developers of all skill levels! Whether you want to:

- Fix typos or improve existing documentation
- Add new guides or expand current topics
- Suggest improvements or report issues
- Share your expertise on a specific technology

**Please read our [Contributing Guide](./CONTRIBUTING.md)** for detailed instructions on:

- How to set up your development environment
- Our pull request process
- Documentation standards and writing guidelines
- Code example best practices

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch: `git checkout -b topic/feature`
3. Make your changes and commit: `git commit -m 'Add: feature description'`
4. Push to your fork: `git push origin topic/feature`
5. Open a Pull Request

---

## Project Structure

```
gdg-docs/
├── src/
│   ├── content/
│   │   ├── docs/           # Main documentation files
│   │   │   ├── overview/
│   │   │   ├── code-guidelines/
│   │   │   ├── react/
│   │   │   ├── express/
│   │   │   ├── flutter/
│   │   │   ├── github/
│   │   │   └── workflows/
│   │   └── config.ts       # Content collection config
│   ├── assets/             # Images and static assets
│   └── tailwind.css        # Global styles
├── public/                 # Public static files
├── astro.config.mjs        # Astro configuration
└── package.json
```

---

## Docker Deployment

Build and run using Docker:

```bash
# Build the image
docker build -t gdg-docs:latest .

# Run the container
docker run -p 8080:8080 gdg-docs:latest
```

The site will be available at `http://localhost:8080`

---

## Built With

- [Astro](https://astro.build/) - Modern web framework for content-driven sites
- [Starlight](https://starlight.astro.build/) - Documentation framework built on Astro
- [Starlight Galaxy Theme](https://github.com/HiDeoo/starlight-theme-galaxy) - Beautiful theme with enhanced UX
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [MDX](https://mdxjs.com/) - Markdown with JSX support

---

## Key Features

- **Fast Search**: Instantly find what you need with built-in search
- **Mobile Responsive**: Optimized for all device sizes
- **Dark Mode**: Automatic theme switching based on user preference
- **Interactive Examples**: Code snippets with syntax highlighting
- **Tabbed Content**: Compare different approaches side-by-side
- **Standardized Formats**: Consistent API responses, error handling, and more

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments

- **Contributors**: Everyone who has helped bring this documentation into life
- **Astro & Starlight Teams**: For creating amazing open-source tools

---

## Community & Support

- **Website**: [gdgalgiers.dev](https://gdgalgiers.dev)
- **Discord**: [Join our community](https://discord.gg/tX2rAAvkxX)
- **GitHub**: [GDGAlgiers](https://github.com/GDGAlgiers)
- **Issues**: [Report bugs or request features](https://github.com/GDGAlgiers/gdg-docs/issues)

---

<p align="center">Made with ❤️ by GDG Algiers</p>
<p align="center">
  <i>Empowering developers through knowledge sharing and community collaboration</i>
</p>
