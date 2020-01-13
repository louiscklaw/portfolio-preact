import { Component } from 'preact';

import style from './Credits.scss';

export default class Credits extends Component {
  render(){
    return(
      <div className={style.page_credit}>

        <div className={style.page_header}>
          Credits
        </div>

        <div className={style.paragraph_body}>
          <section>
            <h4>Tools:</h4>
            <ul>
              <li>
                <a href="https://github.com/preactjs/preact">preact</a>
              </li>
              <li>
                <a href="https://github.com/FortAwesome/Font-Awesome">font-awesome</a>
              </li>
            </ul>
          </section>

          <section>
            <h4>opensource projects:</h4>
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