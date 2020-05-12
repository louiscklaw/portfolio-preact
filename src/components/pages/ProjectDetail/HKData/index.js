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
  PrismBash,
} from "../../../../components/index";

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

// import head_pic from './HKData-behave-notes.png'

import HKDataThumbnail from "./thumbnail.png";
import HKDataScreenshot from "./screen_shot.png";

class HKDataContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="HK Data search"
          description="A HK Data search"
          image={HKDataThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="HKData search" />
            <Spare />
          </div>

          <HeaderFigure
            img_src={HKDataScreenshot}
            caption="screen shot for hkdata search"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Linux toolbox:</h3>
            <p>
              working directory
              /home/logic/_workspace/vote-registration-statistic
            </p>

            <h3 className={projectDetailStyle.DescTopic}>Repository:</h3>

            <ul>
              <li>
                <GithubLink link="https://github.com/louiscklaw/vote-registration-statistic.git" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { HKDataContent, HKDataThumbnail };
