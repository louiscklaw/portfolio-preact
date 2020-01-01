import {Component} from 'preact';

import style from './NavTop.scss'

export default class NavTop extends Component{
  render(){
    return(
      <div className={style.NavTop}>
        <div className={style.GreetingPlate}>
          Hi, I'm louis <span role="img" aria-label="Hi">👋</span>
        </div>
      </div>

    )
  }
}