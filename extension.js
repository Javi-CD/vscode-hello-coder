const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */

const activate = (context) => {
  // Register a Command
  let disposable = vscode.commands.registerCommand(
    "first-extension-greeting",
    () => {
      // Show a Message Box
      vscode.window.showInformationMessage(
        "Hello World from your first VS Code extension!"
      );
    }
  );

  context.subscriptions.push(disposable);
};

const deactivate = () => {};

module.exports = {
  activate,
  deactivate,
};
