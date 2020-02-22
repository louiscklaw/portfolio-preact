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

// import head_pic from "./DriverTraining-behave.png";

import DriverTrainingThumbnail from "./thumbnail.png";

// import system_structure_svg from "./system_structure.svg";
// import behave_grammer_svg from "./behave_grammer.svg";

class DriverTrainingContent extends Component {
  render() {
    return <div>DriverTraining Page</div>;
  }
}

export { DriverTrainingContent, DriverTrainingThumbnail };
