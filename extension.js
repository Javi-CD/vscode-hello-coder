const vscode = require("vscode");

const STORAGE_KEY = "userName";

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
          vscode.window.showErrorMessage(
            "You must enter a name to be greeted!"
          );
        }
      }
    }
  );

  /**************************************
   * Command: Change Name *
   **************************************/
  let commandChangeName = vscode.commands.registerCommand(
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

  /**********************************
   * Command: Delete Name *
   **********************************/
  let commandDelete = vscode.commands.registerCommand(
    "first-extension.deleteSavedName",
    async () => {
      context.globalState.update(STORAGE_KEY, undefined);
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
