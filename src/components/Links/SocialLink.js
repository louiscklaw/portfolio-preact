import {Component} from 'preact';
import theme from '../../style/theme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var style = {
  color: theme.THEME_COLOR_LIGHTEST,
  fontSize: '1.5em',
  fontWeight: 'normal',
  paddingLeft: '3px',
  paddingRight: '3px',
  paddingBottom: '10px'
}

export default class SocialLink extends Component{
  render({href, icon}) {
    return (
      <a style={style} href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon}/>
    </a>
    )
  }
}
