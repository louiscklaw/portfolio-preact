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
  GithubLinkList
} from "../../../../components/index";

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from "./pet-pug-project.png";

import PetPugProjectThumbnail from "./thumbnail.png";

class PetPugProjectContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="Pet pug project"
          description="A Pet pug project"
          image={PetPugProjectThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="Pet pug project" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="Pet pug project" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Linux toolbox:</h3>
            <p>ack, entr, inotify-tools</p>

            <GithubLinkList
              github_links={[
                "https://github.com/jenil/bulmaswatch",
                "https://github.com/louiscklaw/travis-playlist"
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { PetPugProjectContent, PetPugProjectThumbnail };
