const vscode = require("vscode");
const STORAGE_KEY = require("../utils/constants");

function registerGreetCommand(context) {
  return vscode.commands.registerCommand(
    "first-extension.greeting",
    async () => {
      const savedName = context.globalState.get(STORAGE_KEY);

      if (savedName) {
        vscode.window.showInformationMessage(`Hello Again ${savedName}!`);
      } else {
        const name = await vscode.window.showInputBox({
          placeHolder: "Enter your name",
          prompt: "Please enter your name to be greeted",
        });

        if (name) {
          context.globalState.update(STORAGE_KEY, name);
          vscode.window.showInformationMessage(`Nice to meet you ${name}!`);
        } else {
          vscode.window.showErrorMessage(
            "You must enter a name to be greeted!"
          );
        }
      }
    }
  );
}

module.exports = { registerGreetCommand };
