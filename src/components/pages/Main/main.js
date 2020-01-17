import { Component } from 'preact';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import {
  Nav,
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

import style from './main.scss';

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
    return(
      <div className={style.main}>
        <Nav />

        <div className={style.content}>
          <Router onChange={onRouteChangeHelloworld}>

            <AsyncRoute path="/project_catalogue" component={PageProjectCatalogue}/>

            <AsyncRoute path="/project_detail/:project_to_show" component={PageProjectDetail}/>

            <AsyncRoute path="/logs" component={Logs} />
            <AsyncRoute path="/about" component={About} />
            <AsyncRoute path="/credits" component={Credits} />

            {/* default page */}
            <AsyncRoute path="/" component={PageProjectCatalogue} />

          </Router>
        </div>
      </div>

    )
  }
}
