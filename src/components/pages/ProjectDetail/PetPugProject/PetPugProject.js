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
            <h3 className={projectDetailStyle.DescTopic}>Description:</h3>
            <p>Some pet software project from me</p>

            <ul>
              <li>
                <GithubLink link="https://github.com/louiscklaw/google-search-trends-v3" />
              </li>
              <li>
                <GithubLink link="https://github.com/louiscklaw/test-bulma-firebase-crud" />
              </li>
              <li>
                <GithubLink link="https://github.com/louiscklaw/bulma-admin-templates" />
              </li>
              <li>
                <GithubLink link="https://github.com/louiscklaw/bulma-firebase-crud-tryout" />
              </li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>
              Awesome Lists of the world:
            </h3>
            <p>Some highlighted awesome list</p>
            <ul>
              <li>
                <GithubLink link="https://github.com/alexpate/awesome-design-systems" />
              </li>
              <li>
                <GithubLink link="https://github.com/jenil/bulmaswatch" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { PetPugProjectContent, PetPugProjectThumbnail };
