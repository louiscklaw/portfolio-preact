var helloworld = "hello config.js";

const VIEW_PORTS = {
  VP_1920_1080: {
    width: 1920,
    height: 1080,
  },
  VP_1080_1920: {
    width: 1080,
    height: 1920,
  },
};

const vp_list = [VIEW_PORTS.VP_1920_1080, VIEW_PORTS.VP_1080_1920];

const REACT_HOST_ADDRESS = "127.0.0.1";

const page_list = ["/", "/about"];

const RESULT_STORE_DIR = __dirname + "/result";

module.exports = {
  VIEW_PORTS,
  vp_list,
  page_list,
  REACT_HOST_ADDRESS,
  RESULT_STORE_DIR,
  helloworld,
};
