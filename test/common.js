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

function translatePageName(in_addr) {
  if (in_addr == "/") {
    return "index";
  } else if (in_addr.match(/\/.*\//g)) {
    // /project_detail/xxxxx
    return in_addr.substring(1).replace(/\//, "_");
  } else if ((in_addr[0] == "/") & (in_addr.length > 1)) {
    // /about
    return in_addr.substring(1);
  } else {
    consoleWarning(`no matching found for ${in_addr}`);
    return "not found";
  }
}

module.exports = {
  consolePass,
  consoleStatus,
  consoleWarning,
  consoleFail,
  translatePageName,
};
