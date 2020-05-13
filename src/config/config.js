import DEV_CONFIG from "./dev.config";
import PROD_CONFIG from "./prod.config";

const CHECK_DEV_ENV = () => {
  // true => development, false => production
  return process.env.NODE_ENV === "development";
};

const active_config = CHECK_DEV_ENV ? DEV_CONFIG : PROD_CONFIG;

export { CHECK_DEV_ENV, active_config };
