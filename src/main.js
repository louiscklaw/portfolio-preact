import './main.scss';

import { Component } from 'preact';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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



export default class Main extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="main">
            <Nav />
            <Switch>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/project_catalogue" component={PageProjectCatalogue} />

                <Route path="/project_detail/:project_name" component={PageProjectDetail} />
                <Route path="/logs" component={Logs} />
                <Route path="/credits" component={Credits} />

              </div>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
