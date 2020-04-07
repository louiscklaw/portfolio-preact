import React, { Component } from "react";

import GithubLink from "./GithubLink";

export default class GithubLinkList extends Component {
  render({ github_links }) {
    return (
      <>
        <h3>References:</h3>
        <ul>
          {github_links.map(x => (
            <li>
              <GithubLink link={x} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
