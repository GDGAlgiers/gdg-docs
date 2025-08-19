#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * Dead Code Detection Script for GDG Docs
 * 
 * This script analyzes the codebase to find:
 * 1. Documentation files that exist but are not referenced in navigation
 * 2. Navigation links that point to non-existent files
 * 3. Unused assets and resources
 * 4. Potential typos in file paths
 */

class DeadCodeDetector {
  constructor() {
    this.issues = {
      deadFiles: [],
      brokenLinks: [],
      unusedAssets: [],
      possibleTypos: []
    };
    this.referencedFiles = new Set();
    this.existingFiles = new Set();
    this.warnings = [];
  }

  async run() {
    console.log('🔍 Starting dead code detection...\n');
    
    try {
      await this.extractReferencedFiles();
      await this.scanExistingFiles();
      await this.analyzeAssets();
      this.detectIssues();
      this.generateReport();
    } catch (error) {
      console.error('❌ Error during analysis:', error.message);
      process.exit(1);
    }
  }

  async extractReferencedFiles() {
    console.log('📋 Extracting referenced files from astro.config.mjs...');
    
    const configPath = path.join(rootDir, 'astro.config.mjs');
    if (!fs.existsSync(configPath)) {
      throw new Error('astro.config.mjs not found');
    }

    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Extract all link values from the sidebar configuration
    const linkRegex = /link:\s*["']([^"']+)["']/g;
    let match;
    
    while ((match = linkRegex.exec(configContent)) !== null) {
      const link = match[1];
      this.referencedFiles.add(link);
      
      // Check for corresponding file
      const possibleExtensions = ['.md', '.mdx'];
      let fileExists = false;
      
      for (const ext of possibleExtensions) {
        const filePath = path.join(rootDir, 'src', 'content', 'docs', `${link}${ext}`);
        if (fs.existsSync(filePath)) {
          fileExists = true;
          break;
        }
      }
      
      if (!fileExists) {
        this.issues.brokenLinks.push({
          link,
          message: `Referenced in navigation but file doesn't exist`
        });
      }
    }
    
    console.log(`✅ Found ${this.referencedFiles.size} referenced files`);
  }

  async scanExistingFiles() {
    console.log('📁 Scanning existing documentation files...');
    
    const docsDir = path.join(rootDir, 'src', 'content', 'docs');
    
    const scanDirectory = (dir, relativePath = '') => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativeFilePath = path.join(relativePath, item);
        
        if (fs.statSync(fullPath).isDirectory()) {
          scanDirectory(fullPath, relativeFilePath);
        } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
          // Convert file path to link format (remove extension)
          const linkPath = relativeFilePath.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
          this.existingFiles.add(linkPath);
        }
      }
    };
    
    scanDirectory(docsDir);
    console.log(`✅ Found ${this.existingFiles.size} existing documentation files`);
  }

  async analyzeAssets() {
    console.log('🖼️  Analyzing assets...');
    
    const assetDirs = [
      path.join(rootDir, 'src', 'assets'),
      path.join(rootDir, 'public')
    ];
    
    const existingAssets = new Set();
    const referencedAssets = new Set();
    
    // Scan for existing assets
    for (const assetDir of assetDirs) {
      if (!fs.existsSync(assetDir)) continue;
      
      const scanAssets = (dir, basePath = '') => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          if (fs.statSync(fullPath).isDirectory()) {
            scanAssets(fullPath, path.join(basePath, item));
          } else {
            existingAssets.add(path.join(basePath, item).replace(/\\/g, '/'));
          }
        }
      };
      
      scanAssets(assetDir);
    }
    
    // Scan for asset references in all files
    const scanForAssetReferences = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        
        if (fs.statSync(fullPath).isDirectory()) {
          scanForAssetReferences(fullPath);
        } else if (item.endsWith('.md') || item.endsWith('.mdx') || 
                   item.endsWith('.js') || item.endsWith('.mjs') ||
                   item.endsWith('.astro') || item.endsWith('.ts')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          // Look for asset references
          const assetRegex = /(?:src|href)=["']([^"']*\.(svg|png|jpg|jpeg|gif|ico|webp))["']/gi;
          let match;
          while ((match = assetRegex.exec(content)) !== null) {
            referencedAssets.add(match[1].replace(/^\.\//, ''));
          }
          
          // Also check for imports
          const importRegex = /import\s+.*?\s+from\s+["']([^"']*\.(svg|png|jpg|jpeg|gif|ico|webp))["']/gi;
          while ((match = importRegex.exec(content)) !== null) {
            referencedAssets.add(match[1].replace(/^\.\//, ''));
          }
        }
      }
    };
    
    scanForAssetReferences(path.join(rootDir, 'src'));
    scanForAssetReferences(rootDir); // For config files
    
    // Find unused assets
    for (const asset of existingAssets) {
      let isReferenced = false;
      
      // Skip common files that are implicitly used
      const implicitlyUsedFiles = ['favicon.svg', 'favicon.ico', 'robots.txt', 'sitemap.xml'];
      if (implicitlyUsedFiles.some(file => asset.includes(file))) {
        continue;
      }
      
      for (const ref of referencedAssets) {
        if (ref.includes(asset) || asset.includes(ref.replace('src/assets/', '').replace('./src/assets/', ''))) {
          isReferenced = true;
          break;
        }
      }
      
      if (!isReferenced) {
        this.issues.unusedAssets.push({
          file: asset,
          message: 'Asset exists but appears to be unused'
        });
      }
    }
    
    console.log(`✅ Found ${existingAssets.size} assets, ${referencedAssets.size} referenced`);
  }

  detectIssues() {
    console.log('🔍 Detecting issues...');
    
    // Find dead files (exist but not referenced)
    for (const file of this.existingFiles) {
      if (!this.referencedFiles.has(file) && file !== 'index') {
        this.issues.deadFiles.push({
          file,
          message: 'File exists but is not referenced in navigation'
        });
      }
    }
    
    // Detect possible typos
    for (const referenced of this.referencedFiles) {
      if (!this.existingFiles.has(referenced)) {
        // Look for similar files that might be typos
        for (const existing of this.existingFiles) {
          const similarity = this.calculateSimilarity(referenced, existing);
          if (similarity > 0.8 && similarity < 1) {
            this.issues.possibleTypos.push({
              referenced,
              existing,
              similarity: Math.round(similarity * 100),
              message: `Possible typo: "${referenced}" referenced but "${existing}" exists`
            });
          }
        }
      }
    }
  }

  calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const distance = this.levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  }

  levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  generateReport() {
    console.log('\n📊 DEAD CODE DETECTION REPORT');
    console.log('='.repeat(50));
    
    let hasIssues = false;
    
    if (this.issues.deadFiles.length > 0) {
      hasIssues = true;
      console.log('\n🗂️  DEAD FILES (exist but not referenced):');
      this.issues.deadFiles.forEach(issue => {
        console.log(`  ❌ ${issue.file} - ${issue.message}`);
      });
    }
    
    if (this.issues.brokenLinks.length > 0) {
      hasIssues = true;
      console.log('\n🔗 BROKEN LINKS (referenced but don\'t exist):');
      this.issues.brokenLinks.forEach(issue => {
        console.log(`  ❌ ${issue.link} - ${issue.message}`);
      });
    }
    
    if (this.issues.possibleTypos.length > 0) {
      hasIssues = true;
      console.log('\n✏️  POSSIBLE TYPOS:');
      this.issues.possibleTypos.forEach(issue => {
        console.log(`  ⚠️  ${issue.referenced} → ${issue.existing} (${issue.similarity}% similar)`);
        console.log(`     ${issue.message}`);
      });
    }
    
    if (this.issues.unusedAssets.length > 0) {
      hasIssues = true;
      console.log('\n🖼️  UNUSED ASSETS:');
      this.issues.unusedAssets.forEach(issue => {
        console.log(`  ⚠️  ${issue.file} - ${issue.message}`);
      });
    }
    
    if (!hasIssues) {
      console.log('\n✅ No dead code or unused files detected!');
    } else {
      console.log(`\n📈 SUMMARY:`);
      console.log(`  • Dead files: ${this.issues.deadFiles.length}`);
      console.log(`  • Broken links: ${this.issues.brokenLinks.length}`);
      console.log(`  • Possible typos: ${this.issues.possibleTypos.length}`);
      console.log(`  • Unused assets: ${this.issues.unusedAssets.length}`);
    }
    
    console.log('\n' + '='.repeat(50));
    
    // Exit with error code if issues found (for CI/CD)
    if (hasIssues) {
      process.exit(1);
    }
  }
}

// Run the detector
const detector = new DeadCodeDetector();
detector.run().catch(console.error);