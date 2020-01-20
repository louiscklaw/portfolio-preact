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
const ACTIVE_CONFIG = (CHECK_DEV_ENV() ? DevConfig: ProdConfig);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowInnerWidth: 0,
      windowInnerHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount(){
    ReactGA.initialize(ACTIVE_CONFIG.GAKey);
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowInnerWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowInnerHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowInnerWidth, windowInnerHeight });
  }

  render() {
    const { windowInnerWidth, windowInnerHeight } = this.state;
    const styles = {
      showSidebar: windowInnerWidth > 768,
      showAvatar: windowInnerHeight > 875
    }

    return (
      <>
        <Main style={styles}/>
      </>
    );
  }

}
