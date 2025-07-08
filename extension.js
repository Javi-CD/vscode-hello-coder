const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */

const activate = (context) => {
  // Register a Command
  let commandGreet = vscode.commands.registerCommand(
    "first-extension.greeting",
    async () => {
      // Show a message box to the user
      const savedName = context.globalState.get("userName");

      // Check if the user has already provided their name
      if (savedName) {
        vscode.window.showInformationMessage(`Hello Again ${savedName}!`);
      } else {
        // If not, prompt for the name
        const name = await vscode.window.showInputBox({
          placeHolder: "Enter your name",
          prompt: "Please enter your name to be greeted",
        });

        if (name) {
          context.globalState.update("userName", name);
          vscode.window.showInformationMessage(`Nice to meet you ${name}!`);
        } else {
          vscode.window.showErrorMessage(
            "You must enter a name to be greeted!"
          );
        }
      }
    }
  );

  let commandChangeName = vscode.commands.registerCommand(
    "first-extension.changeName",
    async () => {
      const currentName = context.globalState.get("userName");

      if (!currentName) {
        vscode.window.showWarningMessage("There are no names saved yet.");
        return;
      }

      const newName = await vscode.window.showInputBox({
        prompt: `Your current name is "${currentName}". Write a new name:`,
        placeHolder: "New Name",
        value: currentName,
      });

      if (newName) {
        context.globalState.update("UserName", newName);
        vscode.window.showInformationMessage(
          `Name updated! I'll call you now. ${newName}.`
        );
      } else {
        vscode.window.showWarningMessage("The name was not changed.");
      }
    }
  );

  let commandDelete = vscode.commands.registerCommand(
    "first-extension.deleteSavedName",
    async () => {
      // Delete the saved name from global state
      context.globalState.update("userName", undefined);
      vscode.window.showInformationMessage(
        "Your name has been deleted from the global state."
      );
    }
  );

  context.subscriptions.push(commandGreet, commandDelete, commandChangeName);
};

const deactivate = () => {};

module.exports = {
  activate,
  deactivate,
};
