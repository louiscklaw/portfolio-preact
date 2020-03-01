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

import head_pic from "./thumbnail.png";

import DriverTrainingThumbnail from "./thumbnail.png";

// import system_structure_svg from "./system_structure.svg";
// import behave_grammer_svg from "./behave_grammer.svg";

class DriverTrainingContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="DriverTraining Page"
          description="DriverTraining Page"
          image={DriverTrainingThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="DriverTraining Page" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="Drive training" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Linux toolbox:</h3>
            <p>ack, entr, inotify-tools</p>

            <h3 className={projectDetailStyle.DescTopic}>Videos:</h3>

            <ul>
              <li>
                <NewWindowLink
                  link="https://www.facebook.com/246219535800679/videos/501986076890689"
                  text="Facebook - 牛頭角大儒俠-牛師傅"
                />
              </li>
              <li>
                <NewWindowLink
                  link="https://www.youtube.com/watch?v=FM1y-5XGDaE&list=PLvRl22mTpcX7yC6lw4UvinYdo56pOBAJp"
                  text="youtube - 沙田駕駛學院考車路線 2018"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { DriverTrainingContent, DriverTrainingThumbnail };
