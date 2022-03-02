const makeSandwich2 = require("./make-sandwich2");

const password = { task: "secret" };

function makeSandwich() {
  console.log(`not Making ${makeSandwich2()}`);
  console.log("password", password);
}

module.exports = { makeSandwich, password };
