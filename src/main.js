#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const gitignoreTemplate = `
# Node.js dependencies
node_modules/

# Logs
logs/

# Environment variables
.env

# Operating system files
.DS_Store
Thumbs.db

# Build and dist directories
build/
dist/

# Express-specific ignores
*.log
*.pid

# IDE-specific ignores
# IntelliJ IDEA
.idea/
# Visual Studio Code
.vscode/

# Other ignores
*.tmp
*.cache
*.DS_Store
*.swp

# Comments:
# Ignore node_modules to avoid committing dependencies
# Ignore logs to avoid committing log files
# Ignore .env to avoid committing environment variables
# Ignore operating system files to avoid committing unnecessary files
# Ignore build and dist directories to avoid committing compiled files
# Ignore Express-specific files to avoid committing unnecessary files
# Ignore IDE-specific files to avoid committing IDE settings
# Ignore other unnecessary files
`;

const cwd = process.cwd();
const gitignoreFile = path.join(cwd, '.gitignore');

fs.writeFileSync(gitignoreFile, gitignoreTemplate);
console.log(`Created .gitignore file in ${cwd}`);