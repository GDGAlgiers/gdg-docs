# Dead Code Detection

This repository includes an automated dead code detection system to help maintain code quality and keep the codebase clean.

## What It Detects

The dead code detection script (`scripts/detect-dead-code.mjs`) analyzes the codebase to find:

1. **Dead Files**: Documentation files that exist but are not referenced in the navigation
2. **Broken Links**: Navigation links that point to non-existent files
3. **Unused Assets**: Image and other asset files that appear to be unused
4. **Possible Typos**: File paths that are very similar to existing files (potential typos)

## Usage

### Running Locally

```bash
# Run dead code detection
npm run check:dead-code

# Run all checks (currently just dead code, but extensible)
npm run check:all
```

### Example Output

When issues are found, the script provides detailed output:

```
🔍 Starting dead code detection...

📋 Extracting referenced files from astro.config.mjs...
✅ Found 33 referenced files
📁 Scanning existing documentation files...
✅ Found 34 existing documentation files
🖼️  Analyzing assets...
✅ Found 2 assets, 186 referenced
🔍 Detecting issues...

📊 DEAD CODE DETECTION REPORT
==================================================

🗂️  DEAD FILES (exist but not referenced):
  ❌ workflows/old-guide - File exists but is not referenced in navigation

🔗 BROKEN LINKS (referenced but don't exist):
  ❌ react/advanced-patterns - Referenced in navigation but file doesn't exist

✏️  POSSIBLE TYPOS:
  ⚠️  workflows/frontend → workflows/fronend (94% similar)
     Possible typo: "workflows/frontend" referenced but "workflows/fronend" exists

🖼️  UNUSED ASSETS:
  ⚠️  old-logo.png - Asset exists but appears to be unused

📈 SUMMARY:
  • Dead files: 1
  • Broken links: 1
  • Possible typos: 1
  • Unused assets: 1

==================================================
```

### Exit Codes

- **0**: No issues found
- **1**: Issues detected (useful for CI/CD failure conditions)

## How It Works

### Navigation Analysis
The script parses `astro.config.mjs` to extract all file paths referenced in the sidebar navigation configuration.

### File System Scanning
It scans the `src/content/docs/` directory to find all existing documentation files (`.md` and `.mdx`).

### Asset Analysis
The script looks for assets in:
- `src/assets/`
- `public/`

And checks for references in all source files.

### Smart Filtering
The script automatically excludes commonly used files that don't need explicit references:
- `favicon.svg`
- `favicon.ico`
- `robots.txt`
- `sitemap.xml`

## Integration with CI/CD

The script is designed to be used in CI/CD pipelines. When issues are detected, it exits with code 1, which will fail the build and alert developers to the problems.

### GitHub Actions Example

```yaml
name: Code Quality Checks

on: [push, pull_request]

jobs:
  dead-code-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run check:dead-code
```

## Contributing

When adding new documentation:

1. Make sure to add the file to the appropriate section in `astro.config.mjs`
2. Run `npm run check:dead-code` to verify no issues are introduced
3. Remove any unused assets or files

When removing documentation:

1. Remove the file reference from `astro.config.mjs`
2. Delete the actual file
3. Run `npm run check:dead-code` to verify cleanup was complete

## Troubleshooting

### False Positives

If the script reports false positives for assets:

1. Check if the asset is referenced in a way not detected by the regex patterns
2. Consider adding the file to the `implicitlyUsedFiles` list in the script if it's genuinely needed but not directly referenced

### Performance

The script is designed to be fast and should complete in a few seconds for most documentation sites. If performance becomes an issue with very large repositories, consider:

1. Adding file type filters
2. Implementing parallel processing
3. Adding caching for unchanged files