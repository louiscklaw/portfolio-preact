
import {
  Component
} from 'preact';

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

// import for nav
import './style.scss'

export default class Nav extends Component{
  render(){
    return(
      <nav>
        <NavTop></NavTop>
        <NavMiddle></NavMiddle>
        <NavBottom></NavBottom>
      </nav>
    )
    // return(
    //   <div>
    //     helloworld
    //   </div>
    // )
  }
}