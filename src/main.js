
import {
  Component
} from 'preact';

import { Router } from 'preact-router';

import {
  Leftmenu,
  Helloworld,
  Home
} from './components/index';

import {
  Projects,
  About,
  Credits,
  Logs
} from './pages/index'

export default class Main extends Component{
  render(){
    return(
      <div>
        <div className="main">
          <Leftmenu />
          <div className="content">
            <Router>
              <Home path="/" />
              <Projects path="/projects" />
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