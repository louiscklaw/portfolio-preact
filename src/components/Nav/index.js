import {
  Component
} from 'preact';

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

// import for nav
import style from './style.scss'

import hamburger_menu from './hamburgers.css'

var menu_body_class = '.'+style['menuBody']

function hideMobileMenu(){
  console.log('hideMobileMenu');
  var button_classlist = document.querySelector('.'+hamburger_menu['hamburger']).classList
  document.querySelector(menu_body_class).style.display='none';
}

function showMobileMenu(){
  console.log("showMobileMenu");

  document.querySelector(menu_body_class).style.display='unset';
}

function click_helloworld(){
  // console.log(hamburger_menu)

  var button_classlist = document.querySelector('.'+hamburger_menu['hamburger']).classList
  button_classlist.toggle(hamburger_menu['is-active']);
  // console.log(button_classlist.contains(hamburger_menu['is-active']));

  if (button_classlist.contains(hamburger_menu['is-active'])){
    showMobileMenu();
  }else{
    hideMobileMenu();
  }

}

export default class Nav extends Component{
  componentDidMount(){
    // console.log('component did mount');

  }

  render(){
    return(
      <nav className={style.navContainer}>
        <div className={style.mobile_menu}>
          <button className={'mobile_menu_container'+' '+ hamburger_menu['hamburger'] + ' ' + hamburger_menu['hamburger--collapse']} type="button" onClick={click_helloworld} aria-label="Menu">
            <span className={hamburger_menu['hamburger-box']}>
              <span className={hamburger_menu['hamburger-inner']}></span>
            </span>
          </button>
        </div>

        <div className={style.menuBody}>
          <NavTop></NavTop>
          <NavMiddle
            hamburger_is_active_class={hamburger_menu['is-active']}
            menu_body_class={style['menuBody']}
            ></NavMiddle>
          <NavBottom></NavBottom>
        </div>
      </nav>
    )
  }
}