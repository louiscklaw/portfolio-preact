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

            <h3 className={projectDetailStyle.DescTopic}>References:</h3>

            <ul>
              <li>
                <GithubLink link="https://github.com/jenil/bulmaswatch" />
              </li>
            </ul>
          </div>

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Freecad projects:</h3>

            <ul>
              <li>
                <GithubLink link="https://github.com/louiscklaw/freecad-playlist" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { PetPugProjectContent, PetPugProjectThumbnail };
