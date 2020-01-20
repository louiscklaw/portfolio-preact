import { Component } from 'preact';
import { Link } from 'preact-router/match';

// import style from '../../style/index.js';
import style from './style';

// // TODO: using react context
const CHECK_DEV_ENV = () => {
  // true => development, false => production
	let check_result = process.env.NODE_ENV === 'development';
  return check_result;
}

function getStagingSite(){
  if (CHECK_DEV_ENV()){
    return(
      <li style={style.nav_middle_li}>
        <a style={style.a} href="//staging-portfolio-c7cb5.firebaseapp.com" target="_blank">
          Staging site
        </a>
      </li>
    )
  }
}

function getTravisBuildSite(){
  if (CHECK_DEV_ENV()){
    return(
      <li style={style.nav_middle_li}>
        <a style={style.a} href="//travis-ci.com/louiscklaw/portfolio-preact/branches" target="_blank">
          travis build
        </a>
      </li>
    )
  }
}

function getFirebaseConsole(){
  if(CHECK_DEV_ENV()){
    return(
      <li style={style.nav_middle_li}>
        <a style={style.a} href='//console.firebase.google.com/u/1/project/preactjs-projects/overview' target="_blank">
          firebase console
        </a>
      </li>
    )
  }
}

function checkIfSmallScreen(){

  console.log('checkIfSmallScreen', windowWidth);
  return windowWidth < 500;
}

export default class NavMiddle extends Component {


  componentDidMount(){
    // console.log(document.querySelectorAll(`.${style['NavMiddle']} ul li a`));
    console.log('this.props', this.props['hamburger_is_active_class']);

    var hamburger_button_is_active_class = this.props['hamburger_is_active_class'];

    var menu_body_class = this.props['menu_body_class'];
    var selector_menu_body = '.'+menu_body_class

    document.querySelectorAll(`.${style['NavMiddle']} ul li a`).forEach(ele => {
      ele.addEventListener('click', function(){
        console.log(hamburger_button_is_active_class);

        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

        if (windowWidth < 500){
          // fallback menu button
          var mobile_menu_classlist = document.querySelector('.mobile_menu_container').classList
          mobile_menu_classlist.remove(hamburger_button_is_active_class);

          // hide menu body
          document.querySelector(selector_menu_body).style.display='none';

        }
      });
    })
  }
  render(){
    console.log('style_js', style);
    return(
      <div style={style.nav_middle}>
        <ul style={style.ul}>
          <li style={style.nav_middle_li}>
            <a style={style.a} href="/project_catalogue" >Projects</a>
          </li>
          <li style={style.nav_middle_li}>
            <a style={style.a} href="/about" >About</a>
          </li>
          <li style={style.nav_middle_li}>
            <a style={style.a} href="/credits">Credits</a>
          </li>
          <li style={style.nav_middle_li}>
            <a style={style.a} href="//search-trend-vue.firebaseapp.com" target="_blank">GOOGLE SEARCH TREND</a>
          </li>
          {getStagingSite()}
          {getTravisBuildSite()}
          {getFirebaseConsole()}
        </ul>
      </div>
    )
  }
}
