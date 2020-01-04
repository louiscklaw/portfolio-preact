import './main.scss';

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
} from './components/index';

// import {
//   // PagesHelloworld,
//   // About,
//   // Logs,
//   // Credits,
//   // ProjectCatalogue,
//   // ProjectDetail
// } from './pages/index'



export default class Main extends Component{
  render(){
    return(
      <div className="main">
        <Nav />

        <div className="content">
          <Router>
            <AsyncRoute path="/home" component={Home} />
            <AsyncRoute path="/project_catalogue" component={PageProjectCatalogue}/>

            <AsyncRoute path="/project_detail/:project_to_show" component={PageProjectDetail}/>

            <AsyncRoute path="/logs" component={Logs} />
            <AsyncRoute path="/about" component={About} />
            <AsyncRoute path="/credits" component={Credits} />

          </Router>
        </div>
      </div>

    )
  }
}
