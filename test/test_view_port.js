const puppeteer = require("puppeteer");

// import {helloworld} from './config';
const config = require("./config");
const { page_list, vp_list } = require("./test_set");

const { consolePass, consoleStatus, consoleWarning } = require("./common");

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

      await gotoPageTakeScreenShot(
        page,
        `http://${config.REACT_HOST_ADDRESS}:8081${nav_page}`,
        getFileName(nav_page, vp_width, vp_height)
      );

      await browser.close();
    })(vp, page);
  });
});

async function gotoPageTakeScreenShot(page, dest_addr, dest_file) {
  await page.goto(dest_addr);
  await page.screenshot({ path: dest_file });
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

function getFileName(in_addr, page_width, page_height) {
  var page_name = translatePageName(in_addr);
  return `${config.RESULT_STORE_DIR}/${page_name}_${page_width}_${page_height}.png`;
}
