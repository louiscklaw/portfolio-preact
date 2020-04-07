import React, { Component } from "react";

import GithubLink from "./GithubLink";
import style from "./GithubLinkList.scss";

export default class GithubLinkList extends Component {
  render({ github_links }) {
    return (
      <div className={style.GithubLinkList}>
        <h3 className={style.DescTopic}>References / Repositories:</h3>
        <ul>
          {github_links.map(x => (
            <li>
              <GithubLink link={x} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
