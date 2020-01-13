import { Component } from 'preact';
import { Link } from 'preact-router/match';
// import {Link} from 'react-router-dom';

import style from './NavMiddle.scss'

function getStagingSite(){
  if (true){
    return(
      <li>
        <a href="//staging-portfolio-c7cb5.firebaseapp.com" target="_blank">Staging site</a>
      </li>
    )
  }
}

function getTravisBuildSite(){
  if (true){
    return(
      <li>
        <a href="//travis-ci.org/louiscklaw/portfolio-preact/branches" target="_blank">travis build</a>
      </li>
    )
  }
}

export default class NavMiddle extends Component {
  render(){
    return(
      <div className={style.NavMiddle}>
        <ul>
          {/* <li>
            <Link activeClassName="active" href="/">Home</Link>
          </li> */}
          <li>
            <Link activeClassName="active" href="/project_catalogue">Projects</Link>
          </li>
          <li>
            <Link activeClassName="active" href="/about">About</Link>
          </li>
          <li>
            <Link activeClassName="active" href="/credits">Credits</Link>
          </li>
          <li>
            <a href="//search-trend-vue.firebaseapp.com/" target="_blank" >GOOGLE SEARCH TREND</a>
          </li>
          {getStagingSite()}
          {getTravisBuildSite()}
        </ul>
      </div>
    )
  }
}
