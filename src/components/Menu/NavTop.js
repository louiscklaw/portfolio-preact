import {Component} from 'preact';

// import style from '../../style/index.js';
// import style from './style';

import avatar from './avatar.jpeg';

export default class NavTop extends Component{

  render(){
    // console.log('nav_top', this.props.style);
    const {showAvatar} = this.props.style;
    const style={
      nav_top : {
        height: '33vh',
        textAlign: 'center',
      },
      nav_top_greeting_plate:{
        fontSize:'2em',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '80px'
      },
      nav_top_avatar :{
        display: showAvatar ? 'block':'none',
        width: '100%',
        textAlign:'center'
      },
      nav_top_avatar_img : {
        width: '115px',
        height: '115px',
        marginTop: '50px',
        borderRadius: '50%'
      },
      hi_container:{
        display: 'block'
      }
    }

    return(
      <div style={style.nav_top}>
        <div style={style.nav_top_greeting_plate}>
          Hi, I'm louis <span style={style.hi_container} role="img" aria-label="Hi">👋</span>
        </div>
        <div style={style.nav_top_avatar}>
          <img src={avatar} style={style.nav_top_avatar_img}/>
        </div>
      </div>
    )
  }
}