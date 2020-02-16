#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const MONTH_TEXT_LOOKUP = "Jan Feb Mar Apr May Jum Jul Aug Sep Oct Nov Dec".split(
  " "
);

const DATE_ISO = new Date().toISOString();
const [TODAY_ISO, TIME_ISO] = DATE_ISO.split("T");
var [YEAR_ISO, MONTH_ISO, DAY_ISO] = TODAY_ISO.split("-");
var MONTH_TEXT = MONTH_TEXT_LOOKUP[parseInt(MONTH_ISO) - 1];

const CURR_DIR = __dirname;
const SCRIPT_DIR = CURR_DIR;
const PROJ_HOME = path.join(SCRIPT_DIR, "..");
const SRC_DIR = path.join(PROJ_HOME, "src");

const BUILD_INFO_TEMPLATE_FILEPATH = path.join(
  SCRIPT_DIR,
  "build_info.js.template"
);
const BUILD_INFO_FILEPATH = path.join(SRC_DIR, "build_info.js");

var build_date = [YEAR_ISO, MONTH_TEXT, DAY_ISO].join("-");

var build_info_content = fs.readFileSync(BUILD_INFO_TEMPLATE_FILEPATH, {
  encoding: "utf-8"
});

var output_build_info = build_info_content
  .replace(`<<BUILD_DATE>>`, build_date)
  .replace(`<<BUILD_VER>>`, "");
console.log(output_build_info);

fs.writeFileSync(BUILD_INFO_FILEPATH, output_build_info);
