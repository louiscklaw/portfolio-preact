const config = require("./config");

const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

var expected_screen_capture_dir = config.EXPECTED_SCREEN_CAPTURE_DIR;
var test_screen_capture_dir = config.RESULT_STORE_DIR;

fs.readdir(expected_screen_capture_dir, (err, file) => {
  return file
    .filter((filename) => filename.search(".png") > 0)
    .map((expected_screen_capture) => {
      var test_png_path =
        test_screen_capture_dir + "/" + expected_screen_capture;
      var expected_png_path =
        expected_screen_capture_dir + "/" + expected_screen_capture;
      return [test_png_path, isPNGSame(test_png_path, expected_png_path)];
    })
    .forEach((img_check_result) => {
      var img_path = img_check_result[0];
      var img_result = img_check_result[1];
      if (img_result) {
        // png the same
        console.log(`${img_path} pass`);
      } else {
        // png not the same
        console.log(`${img_path} failed`);
      }
    });
});

function getDiffPngPath(test_png_path) {
  return test_png_path.replace(/.png$/, "_diff.png");
}

function bloatPNGDataArray(png_buffer) {
  var output = [];

  for (i = 0; i < png_buffer.length; i = i + 4) {
    output.push([
      png_buffer[i],
      png_buffer[i + 1],
      png_buffer[i + 2],
      png_buffer[i + 3],
    ]);
  }
  return output;
}

function checkAlertColor(png_buffer) {
  return bloatPNGDataArray(png_buffer).filter((RGBA) => RGBA[0] == 255).length;
}

function isPNGSame(actual_screen, expected_screen) {
  const expected_img = PNG.sync.read(fs.readFileSync(expected_screen));
  const actual_img = PNG.sync.read(fs.readFileSync(actual_screen));
  const diff_img = actual_screen.replace(/.png/, "_diff.png");

  const { width, height } = expected_img;
  const diff = new PNG({
    width,
    height,
  });

  pixelmatch(expected_img.data, actual_img.data, diff.data, width, height, {
    threshold: 0.5,
  });

  if (checkAlertColor(diff.data) > 1) {
    // should not see the alert color in diff png

    fs.writeFileSync(diff_img, PNG.sync.write(diff));

    return false;
  } else {
    return true;
  }
}

function main() {
  return 0;
}

main();
