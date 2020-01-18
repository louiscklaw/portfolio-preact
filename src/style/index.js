
import nav from './nav.js'

const helloworld_style_js='helloworld-style-js';

const THEME_COLOR_LIGHTEST=ColorLuminance(THEME_COLOR_LIGHTER,0.2)
const THEME_COLOR_LIGHTER=ColorLuminance(THEME_COLOR,0.2)
const THEME_COLOR=`#2980b9`
const THEME_COLOR_DARKER=ColorLuminance(THEME_COLOR,-0.2)
const THEME_COLOR_DARKEST=ColorLuminance(THEME_COLOR_DARKER,-0.2)



const hello_red={
  color: 'red'
}

export default {
  THEME_COLOR,
  THEME_COLOR_DARKER, THEME_COLOR_DARKEST,
  THEME_COLOR_LIGHTER, THEME_COLOR_LIGHTEST,

  helloworld_style_js,
  hello_red,
  nav
}


function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}
