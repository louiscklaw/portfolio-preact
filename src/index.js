
import { Component } from 'preact';

import ReactGA from 'react-ga';

import './style';

import DevConfig from './config/dev.config';
import ProdConfig from './config/prod.config';

import Main from './main';

const CHECK_DEV_ENV = () => {
	let check_result = process.env.NODE_ENV === 'development';
  if(check_result){
    console.warn("check running environment.");
  }
  return check_result;
}

const ACTIVE_CONFIG = (CHECK_DEV_ENV() === 'development' ? DevConfig: ProdConfig);

export default class App extends Component {
	componentDidMount(){
		ReactGA.initialize(ACTIVE_CONFIG.GAKey);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<div>
        <Main />
			</div>
		);
  }

}
