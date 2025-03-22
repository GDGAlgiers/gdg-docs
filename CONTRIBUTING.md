# Contributing to GDG Docs

Thank you for your interest in contributing to GDG Docs! This document outlines the guidelines for contributing to our documentation project.

## 🤝 How to Contribute

1. **Fork the repository** & clone it to your local machine.
2. **Create an issue** or check existing issues to pick a task.
3. **Create a branch** using the naming convention:
   ```
   <your-name>/<framework>/<task>
   ```
   Example: `khalil/react/state-management`
4. Work on your branch and commit regularly.
5. **Open a Pull Request (PR)** once your task is completed.
6. A **co-manager** will review your PR and suggest any necessary changes.
7. After approval, the PR will be merged!

## 🔄 Pull Request Guidelines

When opening a PR:

- ✅ Ensure the PR title follows: `[Framework] - Task Description`
  - Example: `[React] - State Management Docs`
- ✅ Provide a clear description of changes
- ✅ Reference the issue number (if applicable)
- ✅ Keep PRs focused (avoid including unrelated changes)

## 📌 Issues & Project Management

- Issues will be created for each major documentation task
- Tasks are managed via **GitHub Projects**, where progress will be tracked
- Assignments will be clearly defined in the issue descriptions

## 📝 Documentation Guidelines

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

- **Be concise**: Keep explanations clear and to the point
- **Use active voice**: "React renders components" instead of "Components are rendered by React"
- **Code examples**: Include practical, real-world examples
- **Explain why**: Don't just describe what to do, explain why it's important
- **Consistency**: Maintain consistent terminology throughout
- **Accessibility**: Write for developers of various experience levels

### Code Examples

- Include imports in examples
- Use meaningful variable/component names
- Add comments to explain complex logic
- Show both good and bad examples where appropriate
- Ensure syntax highlighting by specifying the language in code blocks

### Formatting with Starlight

Our documentation is built using [Starlight](https://starlight.astro.build/), which means you should:

- Use Markdown (`.md`) or MDX (`.mdx`) for documentation files
- Add proper frontmatter to each file:

```yaml
---
title: "Your Page Title"
description: "A brief description of the document content"
---
```

- Utilize Starlight components when appropriate:
  - `Aside` for notes, tips, cautions
  - `Tabs` for alternative implementations
  - `Steps` for sequential instructions
  - `FileTree` for directory structures
  - `Card` or `CardGrid` for visually separated content sections (use sparingly)

Example using Starlight components:

````markdown
```mdx
import { Aside, Card, CardGrid } from "@astrojs/starlight/components";

<Aside type="tip">This is a helpful tip for React developers.</Aside>

<CardGrid>
  <Card title="Getting Started" icon="rocket">
    Begin with the basics of React state management.
  </Card>
  <Card title="Advanced Patterns" icon="setting">
    Learn about complex state patterns.
  </Card>
</CardGrid>
```
````

## 🔍 Review Process

1. **Initial Review**: Co-managers will review your PR for:

   - Content quality and accuracy
   - Adherence to documentation structure
   - Code example quality
   - Writing style and clarity
   - Proper use of markdown and Starlight components

2. **Feedback**: You may receive feedback requesting changes or clarifications

3. **Approval and Merge**: Once approved, your content will be merged into the main documentation

## 📋 Documentation Templates

### New Framework/Tool Documentation

````markdown
---
title: "[Tool/Framework] Overview"
description: "A comprehensive guide to [Tool/Framework] best practices, common patterns, and implementation tips"
---

import { Aside, Tabs, TabItem, FileTree } from '@astrojs/starlight/components';

[Tool/Framework] is a powerful technology that enables developers to [main purpose/benefit]. This documentation will help you understand how to use it effectively in your projects.

### When to Use [Tool/Framework]

[Tool/Framework] is particularly useful when:

- Building applications that require [specific feature]
- Working with [specific context or scenario]
- Solving [specific problem]

## Key Concepts

### Core Principle 1

Explanation of the first fundamental concept with examples.

```javascript
// src/examples/example1.js
import { something } from "[tool/framework]";

function basicExample() {
  // Implementation details
  return result;
}
```
````

### Core Principle 2

Explanation of the second fundamental concept.

## Implementation Patterns

### Pattern 1: [Common Implementation Pattern]

Detailed explanation of how to implement this pattern.

```js
// src/patterns/pattern1.js
import { feature } from "[tool/framework]";

// Implementation code
```

### Pattern 2: [Alternative Implementation Pattern]

When and why you might choose this alternative approach.

## Comparing [Tool/Framework] Options

| Feature           | Option A | Option B | Option C |
| ----------------- | -------- | -------- | -------- |
| Performance       | High     | Medium   | Low      |
| Bundle Size       | 12KB     | 22KB     | 5KB      |
| Learning Curve    | Steep    | Moderate | Easy     |
| Community Support | Active   | Growing  | Limited  |

## Best Practices

### Do's and Don'ts

✅ **DO** follow this recommended practice

```javascript
// src/examples/good-practice.js
// Good implementation example
```

❌ **DON'T** make this common mistake

```javascript
// src/examples/bad-practice.js
// Problematic implementation
```

### Common Pitfalls

<Aside type="caution">
  Watch out for [common issue] when implementing [specific feature].
</Aside>

## Troubleshooting

Solutions for common errors and issues you might encounter.

## Conclusion

[Tool/Framework] provides powerful capabilities for [summary of main benefits]. By following the patterns and practices outlined in this guide, you can avoid common pitfalls and create maintainable, efficient implementations.

When deciding whether to use [Tool/Framework] in your project, consider:

1. Your application's specific requirements
2. Your team's familiarity with the technology
3. Long-term maintenance considerations

## Further Reading / See Also

- [Official Documentation](https://example.com)
- [Helpful Tutorial](https://example.com/tutorial)
- [GitHub Repository](https://github.com/example/repo)
- [Community Forum](https://example.com/forum)

````

## 🚀 Getting Started with Starlight

If you're new to Starlight:

1. **Install dependencies**:

   ```bash
   npm install
````

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. **Preview your changes** at `http://localhost:4321`

4. **Build the documentation** (optional):
   ```bash
   npm run *build*
   ```

Happy contributing! 🎉
