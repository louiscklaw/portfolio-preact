const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://172.17.0.1:8081");
  await page.screenshot({
    path: "example.png",
  });

  await browser.close();
})();

// ( async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto( 'https://facebook.com' );
//   await page.screenshot( {
//     path: 'facebook.png'
//   } );

//   await browser.close();
// } )();
