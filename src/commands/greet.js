const vscode = require("vscode");
const STORAGE_KEY = require("../utils/constants");

/****************************
 * Command: Greet *
 ****************************/
let commandGreet = vscode.commands.registerCommand(
  "first-extension.greeting",
  async () => {
    const savedName = context.globalState.get(STORAGE_KEY);

    // Check if the user has already provided their name
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
        vscode.window.showErrorMessage("You must enter a name to be greeted!");
      }
    }
  }
);

module.exports = commandGreet;
