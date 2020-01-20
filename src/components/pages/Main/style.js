import theme from '../../../style/theme.js'

export default {
  main: {
    display: 'flex',
    fiexDirection: 'row',

    width: '100%',
    minHeight: '100vh'
  },

  content: {
    position: 'relative',
    left: '20vw',
    width: '80vw',

    backgroundColor: theme.THEME_COLOR_LIGHTER,
  },

  nav_container: {
    position: 'fixed',
    backgroundColor: theme.THEME_COLOR,
    width: '20vw',
    height: '100%'
  }
}