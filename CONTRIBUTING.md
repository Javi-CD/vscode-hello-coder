# Contributing to First Extension

Thank you for your interest in contributing to First Extension! We welcome contributions from everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **VS Code** (latest version recommended)
- **Git**

### Development Setup

1. **Fork the repository**

   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/your-username/vscode-hello-coder.git
   cd vscode-hello-coder
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Open in VS Code**

   ```bash
   code .
   ```

5. **Start development**
   - Press `F5` to open a new Extension Development Host window
   - Test your changes in the new window

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug fixes**
- **New features**
- **Documentation improvements**
- **Tests**
- **UI/UX improvements**
- **Translations**

### Before You Start

1. **Check existing issues** - Look for existing issues or feature requests
2. **Create an issue** - If none exists, create one to discuss your idea
3. **Get feedback** - Wait for maintainer feedback before starting work

## Development Workflow

### 1. Create a Branch

```bash
# Create and switch to a new branch
git checkout -b type/branch-name
# or
git checkout -b type/branch-name
```

### 2. Make Your Changes

- Follow our [coding standards](#coding-standards)
- Write tests for new functionality
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run linting
npm run lint

# Run tests
npm test

# Test the extension manually
# Press F5 in VS Code to launch Extension Development Host
```

### 4. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "type(scope): Description"
```

#### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 5. Push and Create Pull Request

```bash
# Push to your fork
git push origin type/branch-name

# Create a Pull Request on GitHub
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Manual Testing

1. Press `F5` to launch Extension Development Host
2. Test all commands:
   - `Greet user`
   - `Change username`
   - `Delete UserName`
3. Test edge cases (empty input, special characters, etc.)

## Reporting Issues

1. **Search existing issues** - Check if the issue already exists
2. **Try the latest version** - Make sure you're using the latest version
3. **Reproduce the issue** - Ensure you can consistently reproduce it

## Additional Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [VS Code Extension Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)
- [Node.js Documentation](https://nodejs.org/docs/)
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

<div style="text-align:center">
<i><b>Thank you for contributing to First Extension!</b></i>
</div>
