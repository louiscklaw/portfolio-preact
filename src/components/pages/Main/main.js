import { Component } from 'preact';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import theme from '../../../style/theme.js'

import {
  SideMenu,
  TopBar,
  Helloworld,
  Home,
  About,
  Credits,
  Logs,
  pagesHelloworld,
  PageProjectCatalogue,
  PageProjectDetail,
  CommonHelmet,
} from '../../index';

// import style from './main.scss';
// import style_js from './style'

function onRouteChangeHelloworld(){
  // console.log('on route change helloworld');
  try{
    window.scrollTo({
      top: 0
    });

  } catch(oErr){
    console.log(oErr);
  }

}

export default class Main extends Component{
  render(){
    var styles = this.props.style;
    console.log('styles', styles);

    const style_js = {
      main: {
        display: 'flex',
        flexDirection: styles.showSidebar? 'row' : 'column',

        width: '100%',
        minHeight: '100vh'
      },

      content: {
        position: 'relative',

        left: styles.showSidebar? '20vw' : 'unset',
        width: styles.showSidebar? '80vw' : 'unset',
        top: styles.showSidebar? 'unset': '20vh',

        backgroundColor: theme.THEME_COLOR_LIGHTER,
      },

      nav_container: {
        position: 'fixed',
        backgroundColor: theme.THEME_COLOR,
        width: styles.showSidebar? '20vw': '100vw',

        minHeight: styles.showSidebar? '100vh': '20vh',
      }
    }

    return(
      <div style={style_js.main}>
        <div style={style_js.nav_container}>
        { styles.showSidebar ? (
          <SideMenu style={styles} />
          ) : (
          <TopBar />
        ) }
        </div>

        <div style={style_js.content}>
          <Router onChange={onRouteChangeHelloworld}>

            <AsyncRoute path="/project_catalogue" component={PageProjectCatalogue}/>

            <AsyncRoute path="/project_detail/:project_to_show" component={PageProjectDetail}/>

            <AsyncRoute path="/logs" component={Logs} />
            <AsyncRoute path="/about" component={About} style={'helloworld_style'}/>
            <AsyncRoute path="/credits" component={Credits} />

            {/* // default page */}
            <AsyncRoute path="/" component={PageProjectCatalogue} />

          </Router>
        </div>
      </div>

    )
  }
}
