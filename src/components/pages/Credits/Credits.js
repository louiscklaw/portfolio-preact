import { Component } from 'preact';
import { useContext } from 'preact/hooks';

import { Theme } from '../../../context/index'
// import style from './style.js';

export default class Credits extends Component {
  render(){
    const theme = useContext(Theme);
    const is_mobile = theme.isMobile;

    const style={
      page_credit: {
        display: 'flex',
        flexFlow: 'column',
        flexWrap: 'nowrap',

        padding: is_mobile? '1em 1em' :'5em 10em',
        // paddingLeft: '10em',
        // paddingRight: '10em',
        // paddingTop: '5em',
        // paddingBottom: '10em'

      },
      ul:{
        listStyle: 'none'
      },
      page_header: {
        fontSize: '2em',
        paddingBottom: '1.5em',
        width: '100%',
      },

      paragraph_body: {
        /* this one should be left */
        /* TODO: remove me */
        borderWidth: '1px',
        borderStyle: 'dotted',
        borderColor: 'yellow',
        width: '100%',
      },

      paragraph_body_section: {
        paddingTop: '1em',
        paddingBottom: '1em',
      },

      paragraph_body_h4: {
        paddingTop: '1em',
        paddingBottom: '1em',
      },

      pragraph_title: {
        width: '67%',
      }
    }

    return(
      <div style={style.page_credit}>

        <div style={style.page_header}>
          Credits
        </div>

        <div style={style.paragraph_body}>
          <section style={style.paragraph_body_section}>
            <h4 style={style.paragraph_body_h4}>Tools:</h4>
            <ul style={style.ul}>
              <li>
                <a href="https://github.com/preactjs/preact">preact</a>
              </li>
              <li>
                <a href="https://github.com/FortAwesome/Font-Awesome">font-awesome</a>
              </li>
            </ul>
          </section>

          <section style={style.paragraph_body_section}>
            <h4 style={style.paragraph_body_h4}>opensource projects:</h4>
            <ul style={style.ul}>
              <li>
                preact, react
              </li>
              <li>
                fontawesome
              </li>
            </ul>
          </section>

        </div>
      </div>
    )
  }
}