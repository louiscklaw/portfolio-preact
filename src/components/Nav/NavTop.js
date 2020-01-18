import {Component} from 'preact';

import style from '../../style/index.js';

import avatar from './avatar.jpeg';

export default class NavTop extends Component{
  render(){
    return(
      <div style={style.nav.nav_top}>
        <div style={style.nav.nav_top_greeting_plate}>
          Hi, I'm louis <span role="img" aria-label="Hi">👋</span>
        </div>
        <div style={style.nav.nav_top_avatar}>
          <img src={avatar} style={style.nav.nav_top_avatar_img}/>
        </div>
      </div>

    )
  }
}