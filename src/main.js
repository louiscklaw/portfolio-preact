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
      <div className="main">
				<BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/project_catalogue" component={PageProjectCatalogue} />
              </div>
            </Switch>
          </div>
				</BrowserRouter>
      </div>
    )
  }
}
