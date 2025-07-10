# Security Policy

## Security Overview

We take the security of First Extension seriously. This document outlines our security practices and how to report security vulnerabilities.

## Table of Contents

- [Supported Versions](#supported-versions)
- [Data Privacy](#data-privacy)
- [Security Features](#security-features)
- [Reporting Vulnerabilities](#reporting-vulnerabilities)
- [Security Best Practices](#security-best-practices)
- [Response Process](#response-process)

## Supported Versions

We provide security updates for the following versions:

| Version | Supported |
| ------- | --------- |
| 0.0.x   | Yes       |
| < 0.0.1 | No        |

## Data Privacy

### What Data We Collect

First Extension collects minimal data to provide its functionality:

- **User Name**: Stored locally in VS Code's global state
- **No External Data**: No data is sent to external servers
- **No Analytics**: We don't collect usage analytics or telemetry

### Data Storage

- **Local Storage Only**: All data is stored locally using VS Code's `globalState`
- **No Cloud Storage**: No data is transmitted or stored in the cloud
- **User Control**: Users can delete their data at any time using the "Delete UserName" command

### Data Access

- **Extension Only**: Only this extension can access the stored name
- **No Third Parties**: No third-party services have access to user data
- **No Sharing**: We never share user data with anyone

## Security Features

### Input Validation

- **Safe Input Handling**: All user inputs are properly sanitized
- **No Code Execution**: User input is never executed as code
- **Length Limits**: Input length is limited to prevent abuse

### Secure Storage

- **VS Code API**: Uses VS Code's secure storage mechanisms
- **No Plain Text Files**: Data is not stored in plain text files
- **Encrypted Storage**: Leverages VS Code's built-in encryption

### Minimal Permissions

- **No Network Access**: Extension doesn't require network permissions
- **No File System Access**: Limited to VS Code's storage APIs
- **No External Commands**: Doesn't execute external commands

## Reporting Vulnerabilities

### How to Report

If you discover a security vulnerability, please report it responsibly:

1. **DO NOT** create a public GitHub issue
2. **Email us directly** at: javierperezdeveloper@gmail.com
3. **Include details** about the vulnerability
4. **Provide steps** to reproduce the issue

### What to Include

When reporting a vulnerability, please include:

```markdown
## Vulnerability Description

Clear description of the security issue

## Impact Assessment

- Severity: [Critical/High/Medium/Low]
- Affected versions:
- Potential impact:

## Steps to Reproduce

1. Step one
2. Step two
3. Step three

## Proof of Concept

[Code or screenshots if applicable]

## Suggested Fix

[If you have suggestions]

## Contact Information

- Name:
- Email:
- Preferred contact method:
```

## Security Best Practices

### For Users

- **Keep Updated**: Always use the latest version of the extension
- **Review Permissions**: Check what permissions extensions request
- **Report Issues**: Report any suspicious behavior immediately
- **Secure Environment**: Keep VS Code and your system updated

### For Developers

- **Code Review**: All code changes are reviewed for security
- **Dependency Scanning**: Regular security scans of dependencies
- **Input Validation**: All inputs are validated and sanitized
- **Minimal Privileges**: Extension requests minimal necessary permissions

## Security Measures

### Development Security

- **Secure Coding**: Following secure coding practices
- **Dependency Management**: Regular updates of dependencies
- **Code Analysis**: Static code analysis for security issues
- **Testing**: Security testing as part of our test suite

### Release Security

- **Signed Releases**: All releases are signed
- **Checksum Verification**: Checksums provided for verification
- **Secure Distribution**: Distributed through official VS Code marketplace
- **Version Control**: All changes tracked in version control

## Vulnerability Disclosure

### Responsible Disclosure

We follow responsible disclosure practices:

1. **Private Reporting**: Vulnerabilities reported privately first
2. **Coordinated Release**: Public disclosure coordinated with fix release
3. **Credit Given**: Security researchers credited (with permission)
4. **Timeline Respect**: Reasonable time given for fixes before disclosure

### Public Disclosure

After a fix is released:

- **Security Advisory**: Published on GitHub Security Advisories
- **CHANGELOG Update**: Security fixes noted in changelog
- **User Notification**: Users notified through appropriate channels
- **CVE Assignment**: CVE requested for significant vulnerabilities

## Contact Information

### Security Team

- **Email**: javierperezdeveloper@gmail.com

### General Security Questions

- **GitHub Discussions**: For general security questions
- **Documentation**: This security policy
- **Community**: VS Code extension security best practices

## Additional Resources

### Security Guidelines

- [VS Code Extension Security](https://code.visualstudio.com/api/extension-guides/security)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Secure Coding Practices](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/)

### Security Tools

- **npm audit**: For dependency vulnerability scanning
- **ESLint Security**: For static code analysis
- **Snyk**: For continuous security monitoring

<div align="center">
<b>Security is a shared responsibility. Thank you for helping keep First Extension secure!</b>
</div>
