import { Component } from 'preact';
import { Link } from 'preact-router/match';
// import {Link} from 'react-router-dom';

import style from './NavMiddle.scss'

// // TODO: using react context
const CHECK_DEV_ENV = () => {
  // true => development, false => production
	let check_result = process.env.NODE_ENV === 'development';
  return check_result;
}

function getStagingSite(){
  if (CHECK_DEV_ENV()){
    return(
      <li>
        <a href="//staging-portfolio-c7cb5.firebaseapp.com" target="_blank">Staging site</a>
      </li>
    )
  }
}

function getTravisBuildSite(){
  if (CHECK_DEV_ENV()){
    return(
      <li>
        <a href="//travis-ci.com/louiscklaw/portfolio-preact/branches" target="_blank">travis build</a>
      </li>
    )
  }
}

function closeMobileMenu(){
  console.log('close mobile menu');
}

export default class NavMiddle extends Component {
  componentDidMount(){
    console.log(document.querySelectorAll(`.${style['NavMiddle']} ul li a`));
    document.querySelectorAll(`.${style['NavMiddle']} ul li a`).forEach(ele => {
      ele.addEventListener('click', () => {
        console.log("adding testing Link ??");
      });
    })
  }
  render(){
    return(
      <div className={style.NavMiddle}>
        <ul>
          {/* <li>
            <Link activeClassName="active" href="/">Home</Link>
          </li> */}
          <li>
            <a href="/project_catalogue" >Projects</a>
          </li>
          <li>
            <a href="/about" >About</a>
          </li>
          <li>
            <a href="/credits">Credits</a>
          </li>
          <li>
            <a href="//search-trend-vue.firebaseapp.com" target="_blank">GOOGLE SEARCH TREND</a>
          </li>
          {getStagingSite()}
          {getTravisBuildSite()}
        </ul>
      </div>
    )
  }
}
