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

const page_list = [
  "/",
  "/about",
  "/project_catalogue",
  "/credits",
  "/favourite_link",
  "/project_detail/tradingview_dashboard",
  "/project_detail/appium_behave_notes",
];

module.exports = {
  page_list,
  vp_list,
};
