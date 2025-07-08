const vscode = require("vscode");
const STORAGE_KEY = require("../utils/constants");

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

module.exports = { commandDelete };
