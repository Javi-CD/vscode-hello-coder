const vscode = require("vscode");
const STORAGE_KEY = require("./src/utils/constants");
const {
  registerChangeNameCommand,
  registerDeleteNameCommand,
  registerGreetCommand,
} = require("./src/commands");

/**
 * @param {vscode.ExtensionContext} context
 */

const activate = (context) => {
  /*******************************
   * Execute At The Beginning *
   *******************************/
  const savedName = context.globalState.get(STORAGE_KEY);

  if (savedName) {
    vscode.window.showInformationMessage(`Welcome back, ${savedName}!`);
  } else {
    vscode.window
      .showInformationMessage(
        "No name saved. Do you want to add one now?",
        "Add Name"
      )
      .then((selection) => {
        if (selection === "Add Name") {
          vscode.commands.executeCommand("first-extension.greeting");
        }
      });
  }

  context.subscriptions.push(
    registerGreetCommand(context),
    registerChangeNameCommand(context),
    registerDeleteNameCommand(context)
  );
};

const deactivate = () => {};

module.exports = {
  activate,
  deactivate,
};
