import {
  Component
} from 'preact';

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

// import for nav
import style from './style.scss'

import hamburger_menu from './hamburgers.css'

function click_helloworld(){
  // console.log(hamburger_menu)

  var button_classlist = document.querySelector('.'+hamburger_menu['hamburger']).classList
  button_classlist.toggle(hamburger_menu['is-active']);



  // console.log(button_classlist.contains(hamburger_menu['is-active']));

  if (button_classlist.contains(hamburger_menu['is-active'])){
    document.querySelector('.menuBody').style.display='unset';
  }else{
    document.querySelector('.menuBody').style.display='none';
  }

}

function checkMobileMenuVisible(){
  console.log(document.querySelector('.'+style['mobile_menu']).style.display);
  return document.querySelector('.'+style['mobile_menu']).style.display != 'none'
}

export default class Nav extends Component{
  componentDidMount(){
    // console.log('component did mount');
    console.log(checkMobileMenuVisible());
  }

  render(){
    return(
      <nav className={style.navContainer}>
        <div className={style.mobile_menu}>
          <button className={hamburger_menu['hamburger'] + ' ' + hamburger_menu['hamburger--collapse']} type="button" onClick={click_helloworld}>
            <span className={hamburger_menu['hamburger-box']}>
              <span className={hamburger_menu['hamburger-inner']}></span>
            </span>
          </button>

        </div>
        <div className="menuBody">
          <NavTop></NavTop>
          <NavMiddle></NavMiddle>
          <NavBottom></NavBottom>
        </div>
      </nav>
    )
  }
}