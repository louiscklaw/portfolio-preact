const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

const config = require("./config");
const {
  consolePass,
  consoleStatus,
  consoleWarning,
  consoleFail,
} = require("./common");

var expected_screen_capture_dir = config.EXPECTED_SCREEN_CAPTURE_DIR;
var test_screen_capture_dir = config.RESULT_STORE_DIR;

fs.readdir(expected_screen_capture_dir, (err, file_expected_result) => {
  fs.readdir(test_screen_capture_dir, (err, file_test_result) => {
    if (file_expected_result.length != file_test_result.length) {
      consoleWarning(
        "the file in directory are not the same, finding the missing file..."
      );

      file_expected_result.forEach((x) => {
        if (file_test_result.findIndex((y) => x == y) == -1) {
          consoleWarning(`${x} not found in test result png directory`);
        }
      });

      file_test_result
        .filter((x) => !(x.search(/diff.png/) >= 0))
        .forEach((x) => {
          if (file_expected_result.findIndex((y) => x == y) == -1) {
            consoleWarning(`${x} not found in expected result png directory`);
          }
        });

      return process.exit();
    } else {
      consoleStatus("the file in directory are the same, go ahead");

      fs.readdir(expected_screen_capture_dir, (err, file) => {
        return file
          .filter((filename) => filename.search(".png") > 0)
          .sort()
          .map((expected_screen_capture) => {
            var test_png_path =
              test_screen_capture_dir + "/" + expected_screen_capture;
            var expected_png_path =
              expected_screen_capture_dir + "/" + expected_screen_capture;
            return [test_png_path, isPNGSame(test_png_path, expected_png_path)];
          })
          .forEach((img_check_result) => {
            var img_path = img_check_result[0];
            var img_result = img_check_result[1][0];
            var img_error_value = img_check_result[1][1];
            if (img_result) {
              // png the same
              consolePass(`${img_path} pass`);
            } else {
              // png not the same
              consoleFail(
                `${img_path} failed with red pixels ${img_error_value}`
              );
            }
          });
      });
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
  return bloatPNGDataArray(png_buffer).filter((RGBA) => {
    return RGBA[0] == 255 && RGBA[1] == 0 && RGBA[2] == 0;
  }).length;
}

function checkPNGExist(png_file_path) {
  consoleStatus(png_file_path);
  return fs.existsSync(png_file_path);
}

function readPngFile(png_file_path) {
  try {
    fileContents = fs.readFileSync(png_file_path);
    return PNG.sync.read(fileContents);
  } catch (err) {
    // Here you get the error when the file was not found,
    // but you also get any other error
    consoleWarning(`cannot read png file, file wanted: ${png_file_path}`);
    throw err;
  }
}

function isPNGSame(actual_screen, expected_screen) {
  try {
    const actual_img = readPngFile(actual_screen);
    const expected_img = readPngFile(expected_screen);
    const diff_img = actual_screen.replace(/.png/, "_diff.png");

    const { width, height } = expected_img;
    const diff = new PNG({ width, height });

    pixelmatch(expected_img.data, actual_img.data, diff.data, width, height, {
      threshold: 0.5,
    });

    if (checkAlertColor(diff.data) > 1) {
      // should not see the alert color in diff png
      fs.writeFileSync(diff_img, PNG.sync.write(diff));
      return [false, checkAlertColor(diff.data)];
    } else {
      return [true, 0];
    }
  } catch (err) {
    throw err;
  }
}

function main() {
  return 0;
}

main();
