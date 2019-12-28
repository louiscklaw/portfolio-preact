import {Component} from 'preact';

import './NavTop.css'

export default class NavTop extends Component{
  render(){
    return(
      <div className="nav-top">
        <div className="greeting-plate">
          Hi, I'm louis <span role="img" aria-label="Hi">👋</span>
        </div>
      </div>
    )
  }
}