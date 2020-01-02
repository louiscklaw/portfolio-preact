import { Component } from 'preact';
// import { Link } from 'preact-router/match';
import {Link} from 'react-router-dom';

import style from './NavMiddle.scss'

export default class NavMiddle extends Component {
  render(){
    return(
      <div className={style.NavMiddle}>
        <ul>
          <li>
            <Link activeClassName="active" to="/">Home</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/project_catalogue">Projects</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about">About</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/credits">Credits</Link>
          </li>
          <li>
            <Link to="//search-trend-vue.firebaseapp.com/">GOOGLE SEARCH TREND</Link>
          </li>
          <li>
            <Link to="//staging-portfolio-c7cb5.web.app/projects_catalogue">Staging site</Link>
          </li>
          <li>
            <Link to="//travis-ci.org/louiscklaw/portfolio-preact/branches">travis build</Link>
          </li>
        </ul>
      </div>
    )
  }
}
