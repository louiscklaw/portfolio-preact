import { Component } from "preact";

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainer,
  MetaTitle,
  GithubLink,
  MetaProjectDetail
} from "../../../../components/index";

// import './ProjectDescription.css';
// import './LicheepiNanoDashboard.css';

// import head_pic from './appium-behave-notes.png'

import LicheepiNanoThumbnail from "./licheepi_nano.jpeg";

class LicheepiNanoContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="LicheepiNano Project"
          description="A LicheepiNano Project"
          image={LicheepiNanoThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="LicheepiNano Project" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="trading view dashboard" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Purpose:</h3>
            <p>
              This is a simple page to record the ROM generation of licheepi
              nano
            </p>

            <h3 className={projectDetailStyle.DescTopic}>ref/repo:</h3>
            <NewWindowLink link="https://github.com:louiscklaw/lichee-nano-one-key-package" />
          </div>
        </div>
      </div>
    );
  }
}

export { LicheepiNanoContent, LicheepiNanoThumbnail };
