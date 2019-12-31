
import {
  Component
} from 'preact';

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

import './index.scss'

export default class Nav extends Component{
  render(){
    return(
      <nav className="nav">
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