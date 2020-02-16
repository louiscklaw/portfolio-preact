import { Component } from "preact";

import style from "./NewWindowLinkStyle.js";

// import style from './NewWindowLink.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NewWindowLink extends Component {
  render() {
    console.log(this.props);
    console.log("findme");
    var { link, text } = this.props;
    return (
      <div>
        <a
          href={link}
          target="_blank"
          style={{ ...style.WindowLink, ...this.props.link_style }}
          rel="noopener noreferrer"
        >
          {text || link}
          <div style={style.FaNewWinIcon}>
            <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
          </div>
        </a>
      </div>
    );
  }
}
