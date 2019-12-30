
import {
  Component
} from 'preact';

import { Router } from 'preact-router';

import {
  Nav,
  Helloworld,
  Home
} from './components/index';

import {
  // PagesHelloworld,
  About,
  Logs,
  ProjectCatalogue,
  Credits,
  // ProjectDetail
} from './pages/index'

export default class Main extends Component{
  render(){
    return(
      <div>
        <div className="main">
          <Nav />
          <div className="content">
            <Router>
              <Home path="/" />
              <ProjectCatalogue path="/projects_catalogue" />
              {/* <ProjectDetail path="/project_detail/:project_to_show" /> */}
              <Logs path="/logs" />
              <About path="/about" />
              <Credits path="/credits" />
            </Router>
          </div>
        </div>
      </div>
    )
  }
}