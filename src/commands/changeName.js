const vscode = require("vscode");
const STORAGE_KEY = require("../utils/constants");

function registerChangeNameCommand(context) {
  return vscode.commands.registerCommand(
    "first-extension.changeName",
    async () => {
      const currentName = context.globalState.get(STORAGE_KEY);

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
        context.globalState.update(STORAGE_KEY, newName);
        vscode.window.showInformationMessage(
          `Name updated! I'll call you now. ${newName}.`
        );
      } else {
        vscode.window.showWarningMessage("The name was not changed.");
      }
    }
  );
}

module.exports = { registerChangeNameCommand };
