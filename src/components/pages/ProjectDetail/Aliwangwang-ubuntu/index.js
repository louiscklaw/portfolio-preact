import projectDetailStyle from "../projectdetail.scss";

import { Component } from "preact";

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainer,
  MetaTitle,
  GithubLink,
  MetaProjectDetail,
  HeaderFigure,
  Spare,
  ProjectDetailHelmets,
  PrismHelloworld,
  PrismBash
} from "../../../../components/index";

import AliWangwangThumbnail from "./thumbnail.png";

class AliWangwangContent extends Component {
  render() {
    return (
      <>
        <p>aliwangwang helloworld</p>
        <h3>References / Repositories:</h3>
        <ul>
          <li>https://github.com/wszqkzqk/deepin-wine-ubuntu</li>
        </ul>
      </>
    );
  }
}

export { AliWangwangContent, AliWangwangThumbnail };
