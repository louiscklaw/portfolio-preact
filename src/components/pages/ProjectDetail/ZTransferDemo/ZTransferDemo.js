import projectDetailStyle from "../projectdetail.scss";

import { Component } from "preact";

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainer,
  MetaTitle,
  GithubLink,
  GistLink,
  MetaProjectDetail,
  HeaderFigure,
  Spare,
  ProjectDetailHelmets,
  PrismHelloworld,
  PrismBash
} from "../../../../components/index";

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from "./z-transfer-demo.png";

import ZTransferDemoThumbnail from "./thumbnail.png";

class ZTransferDemoContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="Z transfer Demo"
          description="A Z transfer Demo"
          image={ZTransferDemoThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="Z transfer Demo" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="Z transfer Demo" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Purpose:</h3>
            <p>
              transfer.sh is a simple file sharing service. Users can simply
              share files by uploading files to their web site. This simple
              script can go a step further by compress files with password and
              upload it to transfer.sh and grab the link return from transfer.sh
              by using a single command.
            </p>

            <h3 className={projectDetailStyle.DescTopic}>Requirement:</h3>

            <ul>
              <li>ubuntu</li>
              <li>python</li>
              <li>pwgen</li>
              <li>curl</li>
              <li>p7zip-full</li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>How to install:</h3>

            <ul>
              <li>install pwgen pip3 install pwgen</li>
              <li>open ~/.bashrc or ~/.zshrc</li>
              <li>paste the following source into it</li>
              <li>logout from linux -> login</li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>How to install:</h3>

            <ul>
              <li>install pwgen pip3 install pwgen</li>
              <li>open ~/.bashrc or ~/.zshrc</li>
              <li>paste the following source into it</li>
              <li>logout from linux -> login</li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>Source:</h3>

            <GistLink id="f9a49076aff09449a5e5e0078b30ce65" />

            <h3 className={projectDetailStyle.DescTopic}>How to install:</h3>

            <ul>
              <li>ztransfer</li>
              <li>it return a link with transfer.sh</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { ZTransferDemoContent, ZTransferDemoThumbnail };
