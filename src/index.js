import './style';
import { Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import ReactGA from 'react-ga';

import DevConfig from './config/dev.config'
import ProdConfig from './config/prod.config'

const CHECK_DEV_ENV = () => {
	let check_result = process.env.NODE_ENV === 'development';
  if(check_result){
    console.warn("check running environment.")
  }
  return check_result;
}

const ACTIVE_CONFIG = (CHECK_DEV_ENV() === 'development' ? DevConfig: ProdConfig)

class Home extends Component {
	render(){
		return(
			<h1>Home</h1>
		)
	}
}

class About extends Component {
	render(){
		return(
			<h1>About</h1>
		)
	}
}

export default class App extends Component {

	componentDidMount(){
		ReactGA.initialize(ACTIVE_CONFIG.GAKey);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<nav>
					<Link activeClassName="active" href="/">Home</Link>
					<Link activeClassName="active" href="/about">About</Link>
				</nav>
				<Router>
					<Home path="/" />
					<About path="/about" />
				</Router>

			</div>
		);
  }

}
