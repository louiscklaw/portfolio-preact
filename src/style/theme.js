import _util from "./util";

const CHECK_DEV_ENV = () => {
  // true => development, false => production
  return process.env.NODE_ENV === "development";
};

const PRODUCTION_THEME_COLOR = "#273c75";
const DEVELOPMENT_THEME_COLOR = "#2c3e50";

const THEME_COLOR = true ? DEVELOPMENT_THEME_COLOR : PRODUCTION_THEME_COLOR;

const THEME_COLOR_LIGHTEST = _util.ColorLuminance(THEME_COLOR_LIGHTER, 0.2);
const THEME_COLOR_LIGHTER = _util.ColorLuminance(THEME_COLOR, 0.2);

const THEME_COLOR_DARKER = _util.ColorLuminance(THEME_COLOR, -0.2);
const THEME_COLOR_DARKEST = _util.ColorLuminance(THEME_COLOR_DARKER, -0.2);

const DEFAULT_LINK_COLOR = THEME_COLOR_LIGHTER;
export default {
  THEME_COLOR,
  THEME_COLOR_LIGHTER,
  THEME_COLOR_LIGHTEST,
  THEME_COLOR_DARKER,
  THEME_COLOR_DARKEST,

  DEFAULT_LINK_COLOR,
};
