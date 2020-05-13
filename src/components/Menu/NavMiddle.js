import { Component } from "preact";
import { Link } from "preact-router/match";

import {
  HREF_TO_STAGING_SITE,
  HREF_TO_HACKMD,
  HREF_TO_FIREBASE_CONSOLE,
  HREF_TO_GOOGLE_SEARCH_TREND,
  HREF_TO_GITHUB,
} from "../../config/constants";

// import style from '../../style/index.js';
import style from "./style";

// // TODO: using react context
const CHECK_DEV_ENV = () => {
  // true => development, false => production
  let check_result = process.env.NODE_ENV === "development";
  return check_result;
};

const CHECK_STAGING_ENV = () => {
  // true => development, false => production
  return window.location.href.search(/\/\/staging-portfolio/) > 0;
};

const SHOW_HIDDEN_MENU_ITEM = () => {
  return CHECK_DEV_ENV() || CHECK_STAGING_ENV();
};

function getStagingSite() {
  if (SHOW_HIDDEN_MENU_ITEM()) {
    return (
      <li style={style.nav_middle_li}>
        <a style={style.a} href={HREF_TO_STAGING_SITE} target="_blank">
          Staging site
        </a>
      </li>
    );
  }
}

function getHackmdSite() {
  if (SHOW_HIDDEN_MENU_ITEM()) {
    return (
      <li style={style.nav_middle_li}>
        <a style={style.a} href={HREF_TO_HACKMD} target="_blank">
          Hackmd TODO
        </a>
      </li>
    );
  }
}

function getTravisBuildSite() {
  if (SHOW_HIDDEN_MENU_ITEM()) {
    return (
      <li style={style.nav_middle_li}>
        <a
          style={style.a}
          href={HREF_TO_GITHUB + "/travis-playlist"}
          target="_blank"
        >
          travis build dashboard
        </a>
      </li>
    );
  }
}

function getFirebaseConsole() {
  if (SHOW_HIDDEN_MENU_ITEM()) {
    return (
      <li style={style.nav_middle_li}>
        <a style={style.a} href={HREF_TO_FIREBASE_CONSOLE} target="_blank">
          firebase console
        </a>
      </li>
    );
  }
}

function getFavouriteLink() {
  if (SHOW_HIDDEN_MENU_ITEM()) {
    return (
      <li style={style.nav_middle_li}>
        <a style={style.a} href="/favourite_link" target="_blank">
          favourite_link
        </a>
      </li>
    );
  }
}

function checkIfSmallScreen() {
  console.log("checkIfSmallScreen", windowWidth);
  return windowWidth < 500;
}

export default class NavMiddle extends Component {
  componentDidMount() {
    // console.log(document.querySelectorAll(`.${style['NavMiddle']} ul li a`));
    console.log("this.props", this.props["hamburger_is_active_class"]);

    var hamburger_button_is_active_class = this.props[
      "hamburger_is_active_class"
    ];

    var menu_body_class = this.props["menu_body_class"];
    var selector_menu_body = "." + menu_body_class;

    document
      .querySelectorAll(`.${style["NavMiddle"]} ul li a`)
      .forEach((ele) => {
        ele.addEventListener("click", function () {
          console.log(hamburger_button_is_active_class);

          let windowWidth =
            typeof window !== "undefined" ? window.innerWidth : 0;

          if (windowWidth < 500) {
            // fallback menu button
            var mobile_menu_classlist = document.querySelector(
              ".mobile_menu_container"
            ).classList;
            mobile_menu_classlist.remove(hamburger_button_is_active_class);

            // hide menu body
            document.querySelector(selector_menu_body).style.display = "none";
          }
        });
      });
  }
  render() {
    return (
      <div style={style.nav_middle}>
        <ul style={style.ul}>
          <li style={style.nav_middle_li}>
            <a style={style.a} href="/project_catalogue">
              Projects
            </a>
          </li>
          <li style={style.nav_middle_li}>
            <a style={style.a} href="/about">
              About
            </a>
          </li>
          <li style={style.nav_middle_li}>
            <a style={style.a} href="/credits">
              Credits
            </a>
          </li>
          <li style={style.nav_middle_li}>
            <a
              style={style.a}
              href={HREF_TO_GOOGLE_SEARCH_TREND}
              target="_blank"
            >
              GOOGLE SEARCH TREND
            </a>
          </li>
          {getStagingSite()}
          {getTravisBuildSite()}
          {getFirebaseConsole()}
          {getFavouriteLink()}
          {getHackmdSite()}
        </ul>
      </div>
    );
  }
}
