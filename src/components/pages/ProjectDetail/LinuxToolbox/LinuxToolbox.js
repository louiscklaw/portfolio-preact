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

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

// import head_pic from './appium-behave-notes.png'

import head_pic from "./linux_toolbox.png";

import LinuxToolboxThumbnail from "./thumbnail.png";

class LinuxToolboxContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="Linux toolbox"
          description="A Linux toolbox"
          image={LinuxToolboxThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="Linux toolbox" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="Linux toolbox" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Linux toolbox:</h3>
            <p>ack, entr, inotify-tools</p>

            <h3 className={projectDetailStyle.DescTopic}>Repo:</h3>

            <ul>
              <li>
                <GithubLink link="https://github.com/louiscklaw/archlinux_postinstall" />
              </li>
              <li>git@bitbucket.org:louiscklaw/linux_postinstall.git</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { LinuxToolboxContent, LinuxToolboxThumbnail };
