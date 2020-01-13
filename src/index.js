import { Component } from 'preact';

import style from './index.scss';

import Main from './components/pages/Main/main';

import DevConfig from './config/dev.config';
import ProdConfig from './config/prod.config';

import ReactGA from 'react-ga';

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab, fas, far)


const CHECK_DEV_ENV = () => {
  // true => development, false => production
	let check_result = process.env.NODE_ENV === 'development';
  if(check_result){
    console.warn("check running environment.");
  }
  return check_result;
}

// get the final configuration by run environment
const ACTIVE_CONFIG = (CHECK_DEV_ENV() === 'development' ? DevConfig: ProdConfig);

export default class App extends Component {
	componentDidMount(){
		ReactGA.initialize(ACTIVE_CONFIG.GAKey);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<>
        <Main />
			</>
		);
  }

}
