import { Component } from 'preact';

import theme from '../../style/theme'

// import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import {
  SocialLink
} from '../index'

import {avatar} from './res';

export default class TopBar extends Component{

  handleOnScroll(sticky_menu_trigger_px){
    // console.log('capture onscroll')
    // console.log(window.pageYOffset);
    const ELE_TOP_MENU_BODY = document.querySelector('.top-menu-body');

    if(ELE_TOP_MENU_BODY != null){
      if (window.pageYOffset > sticky_menu_trigger_px){
        // ELE_TOP_MENU_BODY.style.backgroundColor = "green"
        ELE_TOP_MENU_BODY.style.top= '0px'
        ELE_TOP_MENU_BODY.style.position = 'fixed';
        ELE_TOP_MENU_BODY.style.background = 'linear-gradient(180deg, rgba(39,60,117,1) 0%, rgba(39,60,117,1) 60%, rgba(39,60,117,0) 100%)'
        // ELE_TOP_MENU_BODY.style.background="linear-gradient(180deg, rgba(39,60,117,1) 0%, rgba(39,60,117,1) 60%, rgba(39,60,117,0) 100%)";
        // ELE_TOP_MENU_BODY.style.backgroundColor="red";

      }else{
        // ELE_TOP_MENU_BODY.style.backgroundColor = "gold"
        ELE_TOP_MENU_BODY.style.top= 'unset'
        ELE_TOP_MENU_BODY.style.position = 'unset';
        ELE_TOP_MENU_BODY.style.background = 'unset';
      }
    }
  }

  componentDidMount(){
    const ELE_TOP_MENU_BODY = document.querySelector('.top-menu-body');

    if (ELE_TOP_MENU_BODY != null){
      window.addEventListener('scroll',(event) => {
        this.handleOnScroll(ELE_TOP_MENU_BODY.offsetTop)
      })
    }
  }

  render(){
    const style = {
      hello_greeting:{
        // paddingTop: '1em',
        // height: '10vh',
        // color: theme.THEME_COLOR_LIGHTEST,
        // textAlign: 'center'

        fontSize: '1.2em',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: '1em',
        height: '33%'
      },
      narrow_menu:{
        paddingTop: '2em',

        display:'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        listStyle: 'none',
        color: theme.THEME_COLOR_LIGHTEST
      },
      greeting_container:{
        // backgroundColor: 'red'
      },
      narrow_menu_container:{
        height: '34%',
        width: '100%',
        zIndex: '2'
      },
      nav_avatar :{
        display: 'block',
      },
      nav_top_avatar_img : {
        width: '50px',
        height: '50px',
        // marginTop: '50px',
        borderRadius: '50%',
        paddingRight: '5px',
      },
      a :{
        color: theme.THEME_COLOR_LIGHTEST
      },
      hello_text:{
        color:theme.THEME_COLOR_LIGHTEST,
        paddingLeft: '5px'
      },
      social_link:{
        padding: '0em 1em',
      },
      social_links:{
        display: 'inline-flex',
        listStyle: 'none',
        padding: '0em 0.5em'
      },
      social_link_container:{
        height: '33%',
        textAlign: 'center',
        paddingTop: '1em'
      }
    }

    return(
      <div style={style.greeting_container}>
        <div style={style.hello_greeting}>
          <img src={avatar} style={style.nav_top_avatar_img} alt="avatar image"/>
          <div style={style.hello_text}>
            Hi, I am louis
          </div>
        </div>

        <div style={style.social_link_container}>
          <ul style={style.social_links}>
            <li style={style.social_link}>
              <SocialLink href="https://www.facebook.com/louiscklaw" icon={['fab', 'facebook' ]} />
            </li>
            <li style={style.social_link}>
              <SocialLink href="https://github.com/louiscklaw" icon={['fab', 'github' ]} />
            </li>
            <li style={style.social_link}>
              <SocialLink href="https://keybase.io/louiscklaw" icon={['fab', 'keybase' ]} />
            </li>
            <li  style={style.social_link}>
              <SocialLink href="https://www.linkedin.com/in/louiscklaw" icon={['fab', 'linkedin' ]}/>
            </li>
            <li style={style.social_link}>
              <SocialLink href="https://louislabs.slack.com" icon={['fab', 'slack' ]} />
            </li>
            <li style={style.social_link}>
              <SocialLink href="https://t.me/louislabs" icon={['fab', 'telegram' ]} />

            </li>
          </ul>
        </div>

        <div style={style.narrow_menu_container} className="top-menu-body">
          <ul style={style.narrow_menu}>
            <li>
              <a style={style.a} href="/project_catalogue" >Projects</a>
            </li>

            <li>
              <a style={style.a} href="/about" >About</a>
            </li>

            <li>
              <a style={style.a} href="/credits">Credits</a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}