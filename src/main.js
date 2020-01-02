
import { Component } from 'preact';
import { Router } from 'preact-router';

import {
  Nav,
  Helloworld,
  Home,
  About,
  Credits,
  Logs,
  pagesHelloworld,
  PageProjectCatalogue,
  PageProjectDetail
} from './components/index';

// import {
//   // PagesHelloworld,
//   // About,
//   // Logs,
//   // Credits,
//   // ProjectCatalogue,
//   // ProjectDetail
// } from './pages/index'

import './main.scss'

export default class Main extends Component{
  render(){
    return(
      <div className="main">
        <Nav />
        <div className="content">
          <Router>
            <Home path="/" />
            <PageProjectCatalogue path="/project_catalogue" />
            <PageProjectDetail path="/project_detail/:project_to_show" />
            <Logs path="/logs" />
            <About path="/about" />
            <Credits path="/credits" />
          </Router>
        </div>
      </div>
    )
  }
}