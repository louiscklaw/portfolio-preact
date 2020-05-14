const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");
// const iPhonex = devices['iPhone X'];

const { mobile_devices, page_list, getTestWebAddress } = require("./test_set");
const {
  consolePass,
  consoleStatus,
  consoleWarning,
  translatePageName,
} = require("./common");
const { RESULT_STORE_DIR } = require("./config");

mobile_devices.forEach((device_in_test) => {
  var _device = devices[device_in_test];
  page_list.forEach(async (test_address) => {
    consoleStatus(`going to page ${test_address}`);

    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.emulate(_device);

    await page.goto(getTestWebAddress(test_address));
    await page.screenshot({ path: getFileName(test_address, device_in_test) });

    return browser.close();
  });
});

function getFileName(in_addr, mobile_device_name) {
  var page_name = translatePageName(in_addr);
  var mobile_device_name = mobile_device_name.replace(/ /g, "_");
  return `${RESULT_STORE_DIR}/${page_name}_${mobile_device_name}.png`;
}
