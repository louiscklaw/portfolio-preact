import DEV_CONFIG from "./dev.config";
import PROD_CONFIG from "./prod.config";

var active_config = PROD_CONFIG;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  console.warn("activate dev config");
  active_config = DEV_CONFIG;
} else {
  // production code
}

const CHECK_DEV_ENV = () => {
  // true => development, false => production
  return process.env.NODE_ENV === "development";
};

export { active_config, CHECK_DEV_ENV };
