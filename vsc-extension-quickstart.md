# Welcome to First Extension Development!

## What's in the folder

This folder contains all the files necessary for your **First Extension** - a VS Code extension that greets users and manages their names:

### Core Files

- **`package.json`** - Extension manifest declaring commands and metadata
  - Registers three commands: `Greet user`, `Change username`, and `Delete UserName`
  - Defines extension metadata, dependencies, and VS Code compatibility
- **`extension.js`** - Main entry point with activation logic
  - Exports `activate` function called when extension loads
  - Handles welcome messages and command registration
  - Manages initial user onboarding experience

### Source Code Structure

- **`src/commands/`** - Command implementations
  - `greet.js` - Interactive greeting with name input and storage
  - `changeName.js` - Name modification functionality
  - `deleteName.js` - Name deletion from global state
  - `index.js` - Centralized command exports
- **`src/utils/`** - Utility modules
  - `constants.js` - Global constants (storage keys, etc.)

### Documentation & Assets

- **`public/`** - Media assets
  - `screenshot.png` - Extension interface screenshot
- **`README.md`** - Comprehensive project documentation
- **`CONTRIBUTING.md`** - Contribution guidelines
- **`SECURITY.md`** - Security policy and vulnerability reporting
- **`CHANGELOG.md`** - Version history and release notes

## Get up and running straight away

### Development Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Launch Extension Development Host**:

   - Press `F5` to open a new VS Code window with your extension loaded
   - The new window will have "[Extension Development Host]" in the title

3. **Test the commands**:

   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open Command Palette
   - Type and run these commands:
     - **"Greet user"** - Test the greeting functionality
     - **"Change username"** - Test name modification
     - **"Delete UserName"** - Test name deletion

4. **Debug your extension**:
   - Set breakpoints in your code (especially in `extension.js` and command files)
   - Use the Debug Console to inspect variables and execution flow
   - Check the Output panel for extension logs

### Testing Scenarios

#### First-time User Experience

1. Open Extension Development Host
2. Should see: "No name saved. Do you want to add one now?"
3. Click "Add Name" and test the flow

#### Returning User Experience

1. After setting a name, close and reopen Extension Development Host
2. Should see: "Welcome back, [YourName]!"

#### Command Testing

1. **Greet Command**: Test with and without existing name
2. **Change Name**: Test with valid input, empty input, and cancellation
3. **Delete Name**: Test deletion and subsequent behavior

## Make changes

### Development Workflow

1. **Edit code** in any of the source files
2. **Reload extension**:
   - Use the debug toolbar "Restart" button, OR
   - Press `Ctrl+R` (or `Cmd+R` on Mac) in the Extension Development Host window
3. **Test changes** using the Command Palette
4. **Check console** for any errors or logs

### Common Modifications

#### Adding New Commands

1. Create new file in `src/commands/`
2. Export registration function
3. Add to `src/commands/index.js`
4. Register in `extension.js`
5. Add command to `package.json`

#### Modifying Messages

1. Edit message strings in command files
2. Consider adding constants to `src/utils/constants.js`
3. Test different scenarios (success, error, cancellation)

#### Adding Storage

1. Use `context.globalState` for persistent data
2. Use `context.workspaceState` for workspace-specific data
3. Always handle undefined/null values gracefully

## Explore the API

### VS Code Extension API

- Open `node_modules/@types/vscode/index.d.ts` for complete API reference
- Key APIs used in this extension:
  - `vscode.commands.registerCommand()` - Command registration
  - `vscode.window.showInformationMessage()` - User notifications
  - `vscode.window.showInputBox()` - User input collection
  - `context.globalState` - Persistent storage

### Useful Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Extension Guides](https://code.visualstudio.com/api/extension-guides/overview)
- [UX Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)

## Package and Publish

### Building for Distribution

1. **Install vsce** (VS Code Extension Manager):

   ```bash
   npm install -g vsce
   ```

2. **Package extension**:

   ```bash
   vsce package
   ```

   This creates a `.vsix` file for distribution

3. **Test packaged extension**:
   - Install the `.vsix` file locally
   - Test all functionality in a clean VS Code instance

### Publishing to Marketplace

1. **Create Publisher Account**:

   - Visit [Visual Studio Marketplace](https://marketplace.visualstudio.com/)
   - Create publisher account

2. **Prepare for Publishing**:

   - Update `package.json` with proper metadata
   - Ensure README.md is comprehensive
   - Add appropriate categories and keywords
   - Include demo video and screenshots

3. **Publish**:
   ```bash
   vsce publish
   ```

### Best Practices

- **Follow [UX guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)** for seamless VS Code integration
- **Implement [accessibility features](https://code.visualstudio.com/api/extension-guides/accessibility)** for inclusive design
- **Set up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration)** for automated testing
- **Add [telemetry](https://code.visualstudio.com/api/extension-guides/telemetry)** for usage insights (with user consent)

### Advanced Features

- **Configuration**: Add extension settings via `contributes.configuration`
- **Webviews**: Create custom UI panels
- **Tree views**: Add custom sidebar views
- **Status bar**: Show information in status bar
- **File system**: Interact with workspace files

## Contributing

Ready to contribute? Check out our [Contributing Guide](CONTRIBUTING.md) for:

- Development setup instructions
- Coding standards and conventions
- Pull request process
- Issue reporting guidelines

## Security

For security-related questions or to report vulnerabilities, see our [Security Policy](SECURITY.md).

## Support

- [Create an Issue](https://github.com/Javi-CD/vscode-hello-coder/issues)
- javierperezdeveloper@gmail.com

---

**Happy coding! Welcome to the VS Code extension development community!**
