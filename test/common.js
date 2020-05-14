const chalk = require("chalk");

function consolePass(pass_text) {
  console.log(chalk.green(pass_text));
}

function consoleStatus(status_text) {
  console.log(chalk.green(status_text));
}

function consoleWarning(warning_text) {
  console.log(chalk.yellow(warning_text));
}

function consoleFail(fail_text) {
  console.log(chalk.red(fail_text));
}

module.exports = {
  consolePass,
  consoleStatus,
  consoleWarning,
  consoleFail,
};
