
import {
  Component
} from 'preact';

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

export default class Nav extends Component{
  render(){
    return(
      <>
        <NavTop></NavTop>
        <NavMiddle></NavMiddle>
        <NavBottom></NavBottom>
      </>
    )
    // return(
    //   <div>
    //     helloworld
    //   </div>
    // )
  }
}