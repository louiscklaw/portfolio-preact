import { Component } from 'preact';

import style from './style.js';

export default class Credits extends Component {
  render(){
    return(
      <div style={style.page_credit}>

        <div style={style.page_header}>
          Credits
        </div>

        <div style={style.paragraph_body}>
          <section style={style.paragraph_body_section}>
            <h4 style={style.paragraph_body_h4}>Tools:</h4>
            <ul>
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
            <ul>
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