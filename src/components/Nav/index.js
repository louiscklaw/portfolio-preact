import {
  Component
} from 'preact';

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

// import for nav
import style from './style.scss'

export default class Nav extends Component{
  render(){
    console.log(style);

    return(
      <nav className={style.navContainer}>
        <NavTop></NavTop>
        <NavMiddle></NavMiddle>
        <NavBottom></NavBottom>
      </nav>
    )
  }
}