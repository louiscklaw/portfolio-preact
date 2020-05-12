import { Component } from "preact";
import { useContext } from "preact/hooks";

import style from "./style";

import { NewWindowLink, SocialLink } from "../index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BuildInfo } from "../../context/index";
import theme from "../../style/theme";

export default class NavBottom extends Component {
  render() {
    var build_info_context = useContext(BuildInfo);
    var { BUILD_VER, BUILD_DATE } = build_info_context;

    const style_js = {
      build_version: {
        textDecoration: "underline",
        marginTop: "10px",
        fontWeight: "bold",
        color: theme.THEME_COLOR_LIGHTEST,
        fontSize: "0.8em",
        textAlign: "center",
      },
      build_date: {
        textDecoration: "underline",
        marginTop: "10px",
        fontWeight: "bold",
        color: theme.THEME_COLOR_LIGHTEST,
        fontSize: "0.8em",
        textAlign: "center",
      },
    };

    return (
      <div style={style.nav_bottom}>
        <div style={style.social_links_container}>
          <ul style={style.social_links}>
            <li>
              <SocialLink
                href="//www.facebook.com/louiscklaw"
                icon={["fab", "facebook"]}
              />
            </li>
            <li>
              <SocialLink
                href="//github.com/louiscklaw"
                icon={["fab", "github"]}
              />
            </li>
            <li>
              <SocialLink
                href="//keybase.io/louiscklaw"
                icon={["fab", "keybase"]}
              />
            </li>
            <li>
              <SocialLink
                href="//www.linkedin.com/in/louiscklaw"
                icon={["fab", "linkedin"]}
              />
            </li>
            <li>
              <SocialLink
                href="//louislabs.slack.com"
                icon={["fab", "slack"]}
              />
            </li>
            <li>
              <SocialLink href="//t.me/louislabs" icon={["fab", "telegram"]} />
            </li>
          </ul>
        </div>

        <div style={style.build_status}>
          <a
            href="//travis-ci.com/louiscklaw/portfolio-preact/branches"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="//travis-ci.com/louiscklaw/portfolio-preact.svg?branch=master"
              alt=""
              srcSet=""
            />
          </a>
        </div>

        <div style={style.source_code_link_container}>
          <NewWindowLink
            link="//github.com/louiscklaw/portfolio-preact"
            text="source code"
            link_style={{ color: theme.THEME_COLOR_LIGHTEST }}
          />
        </div>

        <div style={style.credit_container}>
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          coded by louiscklaw.
          <br />
          Built on the solder of <br />
          <div style={style.credits_link_container}>
            <NewWindowLink
              link="/credits"
              text="THESE GIANTS"
              link_style={style.credits_link}
            />
          </div>
        </div>

        <div style={style_js.build_version}>{BUILD_VER}</div>
        <div style={style_js.build_date}>last build on: {BUILD_DATE}</div>
      </div>
    );
  }
}
