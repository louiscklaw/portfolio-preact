import { Component } from 'preact';
import {useContext} from 'preact/hooks';
import {BuildInfo} from '../../context/index';

import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

// import for nav
// import style from './style.scss'
// import style from '../../style/index'
import style from './style'

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

  componentDidUpdate(){

  }

  render(){
    const styles = this.props.style;


    return(
      <nav style={style.nav_container}>
        <div style={style.menu_body} id="side-menu">
          <NavTop style={styles}/>
          <NavMiddle
            hamburger_is_active_class={hamburger_menu['is-active']}
            menu_body_class={style['menuBody']}
            style={styles}
            />
          <NavBottom />
        </div>
      </nav>
    )
  }
}