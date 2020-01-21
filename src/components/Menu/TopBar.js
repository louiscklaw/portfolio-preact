import { Component } from 'preact';

import theme from '../../style/theme'

import { faFileExcel } from '@fortawesome/free-regular-svg-icons';

export default class TopBar extends Component{
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
        height: '10vh'
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

        <div style={style.narrow_menu_container}>
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