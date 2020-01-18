import _util from './util'


const THEME_COLOR_LIGHTEST=_util.ColorLuminance(THEME_COLOR_LIGHTER,0.2)
const THEME_COLOR_LIGHTER=_util.ColorLuminance(THEME_COLOR,0.2)
const THEME_COLOR=`#273c75`

const THEME_COLOR_DARKER=_util.ColorLuminance(THEME_COLOR,-0.2)
const THEME_COLOR_DARKEST=_util.ColorLuminance(THEME_COLOR_DARKER,-0.2)

export default {
  THEME_COLOR,
  THEME_COLOR_LIGHTER, THEME_COLOR_LIGHTEST,
  THEME_COLOR_DARKER, THEME_COLOR_DARKEST
}