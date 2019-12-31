
import {
  Component
} from 'preact';

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

import './nav.scss'

export default class Nav extends Component{
  render(){
    return(
      <nav>
        <NavTop></NavTop>
        <div className="helloworld">
          <div className="greeting-plate">
            Hi, I'm louis <span role="img" aria-label="Hi">👋</span>
          </div>
        </div>
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