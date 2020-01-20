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
        color: theme.THEME_COLOR_LIGHTEST
      },
      greeting_container:{

      },
      narrow_menu_container:{
        paddingTop: '2em',
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
              projects
            </li>

            <li>
              about
            </li>

            <li>
              credits
            </li>
          </ul>

        </div>
      </div>
    )
  }
}