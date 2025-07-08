const { registerChangeNameCommand } = require("./changeName");
const { registerDeleteNameCommand } = require("./deleteName");
const { registerGreetCommand } = require("./greet");

module.exports = {
  registerChangeNameCommand,
  registerDeleteNameCommand,
  registerGreetCommand,
};
