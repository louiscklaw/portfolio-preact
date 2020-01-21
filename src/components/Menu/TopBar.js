import { Component } from 'preact';

import theme from '../../style/theme'

import { faFileExcel } from '@fortawesome/free-regular-svg-icons';

export default class TopBar extends Component{
  handleOnScroll(){
    console.log('capture onscroll')
    console.log(window.pageYOffset);
    var ele_top_menu_body = document.querySelector('.top-menu-body')

    if (window.pageYOffset > 91){
      ele_top_menu_body.style.backgroundColor = "green"
      ele_top_menu_body.style.top= '0px'
      ele_top_menu_body.style.position = 'fixed';

    }else{
      ele_top_menu_body.style.backgroundColor = "gold"
      ele_top_menu_body.style.top= 'unset'
      ele_top_menu_body.style.position = 'unset';
    }

  }
  componentDidMount(){
    window.onscroll = this.handleOnScroll
  }

  render(){
    const style = {
      hello_greeting:{
        paddingTop: '1em',
        height: '10vh',
        color: theme.THEME_COLOR_LIGHTEST,
        fontSize: '2em',
        textAlign: 'center'
      },
      narrow_menu:{
        display:'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        listStyle: 'none',
        color: theme.THEME_COLOR_LIGHTEST,

        backgroundColor: 'red'
      },
      greeting_container:{

      },
      narrow_menu_container:{
        paddingTop: '2em',
        height: '10vh',
        width: '100%',
        zIndex: '2'
      },
      a :{
        color: theme.THEME_COLOR_LIGHTEST
      }
    }

    return(
      <div style={style.greeting_container}>
        <div style={style.hello_greeting}>
          Hi, I am louis
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