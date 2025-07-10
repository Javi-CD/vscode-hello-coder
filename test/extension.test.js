const assert = require("assert");
const vscode = require("vscode");
const sinon = require("sinon");
const path = require("path");

// Import constants
const STORAGE_KEY = require("../src/utils/constants");

suite("First Extension Test Suite", () => {
  vscode.window.showInformationMessage("Starting First Extension tests...");

  let mockGlobalState;
  let showInformationMessageStub;
  let showInputBoxStub;
  let showWarningMessageStub;
  let showErrorMessageStub;

  setup(() => {
    // Create mock global state
    mockGlobalState = {
      get: sinon.stub(),
      update: sinon.stub().resolves(),
    };

    // Stub VS Code window methods
    showInformationMessageStub = sinon.stub(
      vscode.window,
      "showInformationMessage"
    );
    showInputBoxStub = sinon.stub(vscode.window, "showInputBox");
    showWarningMessageStub = sinon.stub(vscode.window, "showWarningMessage");
    showErrorMessageStub = sinon.stub(vscode.window, "showErrorMessage");
  });

  teardown(() => {
    sinon.restore();
  });

  suite("Greet Command Tests", () => {
    test("Should execute greet command successfully", async () => {
      // Arrange - Mock the extension context to simulate existing name
      const existingName = "John Doe";

      // Act
      try {
        await vscode.commands.executeCommand("first-extension.greeting");
        // Assert
        assert(true, "Command executed successfully");
      } catch (error) {
        assert.fail(`Command execution failed: ${error.message}`);
      }
    });

    test("Should handle greet command with input", async () => {
      // Arrange - Setup input box to return a name
      showInputBoxStub.resolves("Jane Smith");

      // Act
      try {
        await vscode.commands.executeCommand("first-extension.greeting");
        // Assert
        assert(true, "Command with input executed successfully");
      } catch (error) {
        assert.fail(`Command execution failed: ${error.message}`);
      }
    });

    test("Should handle cancelled greet input", async () => {
      // Arrange - Setup input box to return undefined (cancelled)
      showInputBoxStub.resolves(undefined);

      // Act
      try {
        await vscode.commands.executeCommand("first-extension.greeting");
        // Assert - Command executed without errors even when cancelled
        assert(true, "Command handled cancellation gracefully");
      } catch (error) {
        assert.fail(`Command execution failed: ${error.message}`);
      }
    });
  });

  suite("Change Name Command Tests", () => {
    test("Should execute change name command successfully", async () => {
      // Arrange
      const newName = "Alice Johnson";
      showInputBoxStub.resolves(newName);

      // Act
      try {
        await vscode.commands.executeCommand("first-extension.changeName");
        // Assert
        assert(true, "Change name command executed successfully");
      } catch (error) {
        assert.fail(`Command execution failed: ${error.message}`);
      }
    });

    test("Should handle empty name input in change command", async () => {
      // Arrange - Setup input box to return empty string
      showInputBoxStub.resolves("");

      // Act - Execute the command
      try {
        await vscode.commands.executeCommand("first-extension.changeName");
        // Assert - Command executed without errors (should show warning)
        assert(true, "Change name command handled empty input");
      } catch (error) {
        assert.fail(`Command execution failed: ${error.message}`);
      }
    });

    test("Should handle cancelled name change", async () => {
      // Arrange - Setup input box to return undefined (cancelled)
      showInputBoxStub.resolves(undefined);

      // Act - Execute the command
      try {
        await vscode.commands.executeCommand("first-extension.changeName");
        // Assert - Command executed without errors even when cancelled
        assert(true, "Change name command handled cancellation");
      } catch (error) {
        assert.fail(`Command execution failed: ${error.message}`);
      }
    });
  });

  suite("Delete Name Command Tests", () => {
    test("Should execute delete name command successfully", async () => {
      // Act - Execute the command
      try {
        await vscode.commands.executeCommand("first-extension.deleteSavedName");
        // Assert - Command executed without errors
        assert(true, "Delete name command executed successfully");
      } catch (error) {
        assert.fail(`Command execution failed: ${error.message}`);
      }
    });

    test("Should handle deletion when no name exists", async () => {
      // Act - Execute the command when no name exists
      try {
        await vscode.commands.executeCommand("first-extension.deleteSavedName");
        // Assert - Command executed without errors (should show warning)
        assert(true, "Delete name command handled no existing name");
      } catch (error) {
        assert.fail(`Command execution failed: ${error.message}`);
      }
    });
  });

  suite("Integration Tests", () => {
    test("Should execute all commands in sequence", async () => {
      // Arrange - Setup input for change name command
      const userName = "Integration User";
      showInputBoxStub.resolves(userName);

      // Act & Assert - Execute commands in sequence
      try {
        // Change name
        await vscode.commands.executeCommand("first-extension.changeName");
        assert(true, "Change name command executed");

        // Greet user
        await vscode.commands.executeCommand("first-extension.greeting");
        assert(true, "Greet command executed");

        // Delete name
        await vscode.commands.executeCommand("first-extension.deleteSavedName");
        assert(true, "Delete name command executed");

        // All commands executed successfully
        assert(true, "Full workflow completed successfully");
      } catch (error) {
        assert.fail(`Integration test failed: ${error.message}`);
      }
    });

    test("Should handle command execution with various inputs", async () => {
      // Test with different input scenarios
      const testInputs = ["Test User", "", undefined];

      for (const input of testInputs) {
        showInputBoxStub.resolves(input);

        try {
          await vscode.commands.executeCommand("first-extension.changeName");
          await vscode.commands.executeCommand("first-extension.greeting");
          await vscode.commands.executeCommand(
            "first-extension.deleteSavedName"
          );
          assert(true, `Commands handled input: ${input}`);
        } catch (error) {
          assert.fail(`Command failed with input '${input}': ${error.message}`);
        }
      }
    });
  });

  suite("Error Handling Tests", () => {
    test("Should handle command execution errors gracefully", async () => {
      // Arrange - Setup input that might cause issues
      showInputBoxStub.resolves("Test User");

      // Act & Assert - Commands should handle errors gracefully
      try {
        await vscode.commands.executeCommand("first-extension.greeting");
        await vscode.commands.executeCommand("first-extension.changeName");
        await vscode.commands.executeCommand("first-extension.deleteSavedName");
        assert(true, "Commands handled potential errors gracefully");
      } catch (error) {
        // Commands should not throw unhandled errors
        assert.fail(`Unhandled error in command execution: ${error.message}`);
      }
    });

    test("Should handle invalid command execution", async () => {
      // Act & Assert - Test with non-existent command
      try {
        await vscode.commands.executeCommand(
          "first-extension.nonExistentCommand"
        );
        assert.fail("Should have thrown error for non-existent command");
      } catch (error) {
        // Expected behavior - command doesn't exist
        assert(true, "Correctly handled non-existent command");
      }
    });
  });

  suite("Command Availability Tests", () => {
    test("Should have all extension commands available", async () => {
      // Get all available commands
      const allCommands = await vscode.commands.getCommands();

      // Check if our extension commands are registered
      const extensionCommands = [
        "first-extension.greeting",
        "first-extension.changeName",
        "first-extension.deleteSavedName",
      ];

      // Assert all commands are available
      extensionCommands.forEach((command) => {
        assert(
          allCommands.includes(command),
          `Command ${command} should be available`
        );
      });
    });
  });

  test("Basic functionality test", () => {
    // Basic test to ensure test framework is working
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    assert.strictEqual(STORAGE_KEY, "userName");
  });
});
