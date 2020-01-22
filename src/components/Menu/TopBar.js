import { Component } from 'preact';

import theme from '../../style/theme'

import { faFileExcel } from '@fortawesome/free-regular-svg-icons';

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

        fontSize: '2em',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: '1em'

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

      },
      narrow_menu_container:{
        height: '10vh',
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