import { Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './NavMiddle.scss'

export default class NavMiddle extends Component {
  render(){
    return(
      <div className={style.NavMiddle}>
        <ul>
          <li>
            <Link activeClassName="active" href="/">Home</Link>
          </li>
          <li>
            <Link activeClassName="active" href="/projects_catalogue">Projects</Link>
          </li>
          <li>
            <Link activeClassName="active" href="/about">About</Link>
          </li>
          <li>
            <Link activeClassName="active" href="/credits">Credits</Link>
          </li>
          <li>
            <Link href="//search-trend-vue.firebaseapp.com/">GOOGLE SEARCH TREND</Link>
          </li>
        </ul>
      </div>
    )
  }
}
