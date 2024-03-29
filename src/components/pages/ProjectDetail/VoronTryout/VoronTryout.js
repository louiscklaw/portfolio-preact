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
  GithubLinkList,
} from "../../../../components/index";

import head_pic from "./IMG_20190325_115322.jpg";

import VoronTryoutThumbnail from "./thumbnail.png";

class VoronTryoutContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="VORON 3D printer"
          description="VORON 3D printer"
          image={VoronTryoutThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="VORON 3D printer" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="voron printer frame" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Purpose:</h3>
            <p>to build a opensource 3d printer named voron</p>
          </div>

          <h3 className={projectDetailStyle.DescTopic}>Demo:</h3>
          <YoutubeContainer vid="YNCB23V38x0" video_title="passing example" />

          <div className={projectDetailStyle.DescBody}>
            <GithubLinkList
              github_links={[
                "https://www.reddit.com/r/voroncorexy",
                "https://github.com/KevinOConnor/klipper/blob/master/docs/G-Codes.md",
                "https://travis-ci.com/github/louiscklaw/Slic3r-settings",
                "https://github.com/louiscklaw/3d-printer-head-pcb",
              ]}
            />
          </div>

          <h3 className={projectDetailStyle.DescTopic}>Parts library:</h3>
          <ul>
            <li>
              <NewWindowLink link="https://www.traceparts.com/" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export { VoronTryoutContent, VoronTryoutThumbnail };
