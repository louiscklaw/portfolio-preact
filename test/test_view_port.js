const puppeteer = require("puppeteer");

// import {helloworld} from './config';
const config = require("./config");
const { page_list, vp_list, getTestWebAddress } = require("./test_set");

const {
  consolePass,
  consoleStatus,
  consoleWarning,
  translatePageName,
} = require("./common");

vp_list.forEach((vp) => {
  page_list.forEach((page) => {
    // test against view ports
    (async (vp_setting, nav_page) => {
      let vp_width = vp_setting.width;
      let vp_height = vp_setting.height;
      consoleStatus(
        `testing view port ${vp_width}x${vp_height} for ${nav_page}`
      );
      const browser = await puppeteer.launch({
        defaultViewport: vp_setting,
      });
      const page = await browser.newPage();

      await page.goto(getTestWebAddress(nav_page));
      await page.screenshot({
        path: getFileName(nav_page, vp_width, vp_height),
      });

      await browser.close();
    })(vp, page);
  });
});

async function gotoPageTakeScreenShot(page, dest_addr, dest_file) {}

function getFileName(in_addr, page_width, page_height) {
  var page_name = translatePageName(in_addr);
  return `${config.RESULT_STORE_DIR}/${page_name}_${page_width}_${page_height}.png`;
}
