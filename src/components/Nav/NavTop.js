import style from './NavTop.scss'

import {Component} from 'preact';

import avatar from './avatar.jpeg';

export default class NavTop extends Component{
  render(){
    return(
      <div className={style.NavTop}>
        <div className={style.GreetingPlate}>
          Hi, I'm louis <span role="img" aria-label="Hi">👋</span>
        </div>
        <div className={style.NavAvatar}>
          <img src={avatar} />
        </div>
      </div>

    )
  }
}