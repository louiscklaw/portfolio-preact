import { Component } from "preact";

import style from "./index.scss";
import ThemeSetting from "./style/theme";

import Main from "./components/pages/Main/main";

import { active_config } from "./config/config";

import ReactGA from "react-ga";

import { Theme, BuildInfo } from "./context/index";

import { BUILD_VER, BUILD_DATE } from "./build_info";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, fas, far);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowInnerWidth: 0,
      windowInnerHeight: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    ReactGA.initialize(active_config.GAKey);
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  isMobile() {
    const { windowInnerWidth, windowInnerHeight } = this.state;
    return windowInnerWidth < 501;
  }

  updateDimensions() {
    let windowInnerWidth =
      typeof window !== "undefined" ? window.innerWidth : 0;
    let windowInnerHeight =
      typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({
      windowInnerWidth,
      windowInnerHeight,
    });
  }
  render() {
    const { windowInnerWidth, windowInnerHeight } = this.state;

    const styles = {
      showSidebar: windowInnerWidth > 768,
      showAvatar: windowInnerHeight > 875,
      windowInnerWidth,
      windowInnerHeight,
      isMobile: this.isMobile(),
      is_mobile: this.isMobile(),
      currTheme: ThemeSetting,
    };

    const build_info = { BUILD_VER, BUILD_DATE };

    return (
      <>
        <BuildInfo.Provider value={build_info}>
          <Theme.Provider value={styles}>
            <Main style={styles} />
          </Theme.Provider>
        </BuildInfo.Provider>
      </>
    );
  }
}
