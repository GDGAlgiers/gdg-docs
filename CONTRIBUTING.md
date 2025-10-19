# Contributing to GDG Docs

Thank you for your interest in contributing to GDG Docs! We're excited to have you join our community of developers working to create comprehensive, high-quality documentation.

Whether you're fixing a typo, adding a new guide, or improving existing content, your contributions help developers worldwide. This guide will help you get started.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Documentation Guidelines](#documentation-guidelines)
- [Writing Style Guide](#writing-style-guide)
- [Code Examples](#code-examples)
- [Review Process](#review-process)
- [Need Help?](#need-help)

## Code of Conduct

By participating in this project, you agree to maintain a respectful, inclusive, and collaborative environment. We expect all contributors to:

- Be respectful and considerate in communication
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- Git
- A GitHub account
- Basic knowledge of Markdown/MDX

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR-USERNAME/gdg-docs.git
   cd gdg-docs
   ```

3. **Add upstream remote**:

   ```bash
   git remote add upstream https://github.com/GDGAlgiers/gdg-docs.git
   ```

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Open your browser** to `http://localhost:4321`

### Keeping Your Fork Up to Date

Before starting new work, sync with the upstream repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

## How to Contribute

### Types of Contributions We Welcome

- **Documentation Improvements**: Fix typos, clarify explanations, add missing information
- **New Guides**: Add documentation for new topics or technologies
- **Code Examples**: Contribute practical, production-ready code examples
- **Issue Reports**: Report bugs, broken links, or outdated content
- **Suggestions**: Propose new topics or improvements to existing content

### Finding Something to Work On

1. **Check existing issues**: Browse [open issues](https://github.com/GDGAlgiers/gdg-docs/issues) labeled with `good first issue` or `help wanted`
2. **Create a new issue**: If you have an idea, create an issue to discuss it first (use the issue template in `.github/` as a guide)
3. **Ask questions**: Join our [Discord](https://discord.gg/tX2rAAvkxX) if you need guidance

### Branch Naming Convention

Create descriptive branch names following this pattern:

```
<category>/<description>
```

**Example**:

- `react/state-management-guide`

## Pull Request Process

### Before Submitting a PR

1. **Test your changes** locally - ensure the dev server runs without errors
2. **Check for typos** and formatting issues
3. **Verify all links** work correctly
4. **Review your own changes** in the browser
5. **Update relevant documentation** if you've changed file structures

### PR Title Format

Use clear, descriptive titles following this format:

```
[Category] - Brief description of changes
```

**Examples**:

- `[React] - Add advanced state management patterns`
- `[Express] - Update authentication security guide`
- `[Fix] - Correct typos in Flutter navigation docs`

### PR Description Template

When opening a PR, you can use the PR template in `.github/` and adjust as needed. Make sure to:

**Link your PR to an issue** for automatic closure when merged:

- Use `Closes #123` or `Fixes #123` in the PR description
- This will automatically close the related issue when your PR is merged

Simple Example:

```markdown
## Description

Brief description of what this PR does

## Type of Change

- [ ] New documentation
- [ ] Documentation improvement
- [ ] Bug fix (typo, broken link, etc.)
- [ ] Code example update
- [ ] Other (please describe)

## Related Issue

Closes #issue-number (if applicable)

## Checklist

- [ ] I've tested my changes locally
- [ ] All links work correctly
- [ ] Code examples are tested and functional
- [ ] Content follows the style guide
- [ ] I've updated relevant sections
- [ ] No spelling or grammar errors

## Screenshots (if applicable)

Add screenshots showing your changes
```

### Review and Merge

1. A **co-manager** will review your PR when possible
2. Address any **requested changes** promptly
3. Once approved, your PR will be **merged** into main
4. Your contribution will be **deployed** automatically

## Documentation Guidelines

### Document Structure

Each documentation page should follow this general structure:

1. **Title and Description**

   - Clear, concise title
   - Brief description of what the document covers

2. **Introduction/Overview**

   - The first section can be a general overview of the topic
   - You can directly start with an introduction that explains the basics
   - Explain why it's important and when to use the described patterns/techniques

3. **Main Content**

   - Divide into logical sections with clear headings
   - Use code examples to illustrate concepts
   - Explain both the "how" and "why" of best practices

4. **Best Practices & Common Pitfalls**

   - Do's and don'ts
   - Common mistakes and how to avoid them

5. **Conclusion/Decision Framework and/or Further Reading**
   - Summarize key points or provide a framework for making decisions
   - Links to official documentation, articles, tutorials, and other resources

### Writing Style Guidelines

- **Be concise and clear**: Get to the point quickly, avoid unnecessary jargon
- **Use active voice**: "React renders components" instead of "Components are rendered by React"
- **Write for all levels**: Assume basic programming knowledge, but explain framework-specific concepts
- **Explain the "why"**: Don't just describe what to do, explain why it's important
- **Be consistent**: Use the same terminology throughout the documentation
- **Use present tense**: "This function returns" not "This function will return"
- **Avoid assumptions**: Don't assume readers know advanced concepts

### Tone and Voice

- **Professional yet friendly**: Strike a balance between authoritative and approachable
- **Encouraging**: Help readers feel confident they can learn this
- **Direct**: Use "you" to address the reader directly
- **Humble**: Acknowledge when topics are complex or have trade-offs

## Code Examples

All code examples should be:

- **Tested and functional**: Don't include untested code
- **Production-ready**: Show real-world patterns, not oversimplified demos, but still not those very long code snippets that they become unreadable and hard to digest
- **Well-commented**: Explain complex logic with inline comments
- **Complete**: Include necessary imports and context
- **Properly formatted**: Use consistent indentation and style
- **Language-tagged**: Always specify the language for syntax highlighting

### Formatting with Starlight

Our documentation uses [Starlight](https://starlight.astro.build/), which provides powerful components for documentation.

#### Required Frontmatter

- Use Markdown (`.md`) or MDX (`.mdx`) for documentation files
- Add proper frontmatter to each file:

```yaml
---
title: "Your Page Title"
description: "A clear, concise description (used for SEO and page previews)"
---
```

#### Starlight Components

Use these components to enhance documentation:

**Aside Component** - For notes, tips, cautions, and warnings

**Tabs Component** - For showing alternative implementations

**FileTree Component** - For showing directory structures

**Steps Component** - For sequential instructions

**Card and CardGrid** - Use sparingly for highlighting key concepts

## Review Process

### What Reviewers Look For

1. **Content Quality**

   - Accurate and up-to-date information
   - Clear explanations and logical flow
   - Appropriate depth for the topic

2. **Code Examples**

   - Tested and functional
   - Follow best practices
   - Include proper error handling
   - Use consistent naming conventions

3. **Writing Quality**

   - Clear, concise language
   - Proper grammar and spelling
   - Consistent tone and style
   - Appropriate use of technical terms

4. **Formatting**
   - Proper use of Markdown/MDX
   - Correct Starlight component usage
   - Consistent heading hierarchy
   - Working links and references

## Best Practices for Contributors

### Do's

- **Read existing documentation** to understand our style and standards
- **Start small** if you're new - fix typos or improve existing content
- **Ask questions** in issues or Discord before starting large contributions
- **Test thoroughly** before submitting
- **Keep PRs focused** - one topic or fix per PR
- **Write clear commit messages** following conventional commit format
- **Be patient** with the review process

### Don'ts

- **Don't plagiarize** - write original content or properly attribute sources
- **Don't submit untested code** - always verify examples work
- **Don't make unrelated changes** in a single PR
- **Don't ignore feedback** from reviewers
- **Don't submit AI-generated content** without thorough review and testing
- **Don't copy-paste** from other documentation without permission

## Need Help?

### Getting Support

- **Discord**: Join our [community Discord](https://discord.gg/tX2rAAvkxX) for quick help
- **GitHub Issues**: Create an issue with the `question` label
- **Discussions**: Use GitHub Discussions for general questions
- **Email**: Reach out to the GDG Algiers team

### Useful Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build/)
- [MDX Documentation](https://mdxjs.com/)
- [Markdown Guide](https://www.markdownguide.org/)

## Thank You!

Every contribution, no matter how small, makes GDG Docs better for developers of the whole community. We appreciate your time and effort in helping build this resource.

Your contributions help:

- **Students** learning new technologies
- **Professionals** solving real-world problems
- **Teams** maintaining consistent standards
- **The community** growing stronger together

Happy contributing! 🎉

---

<p align="center">
  <i>Questions? Reach out on <a href="https://discord.gg/tX2rAAvkxX">Discord</a> or open an issue!</i>
</p>
