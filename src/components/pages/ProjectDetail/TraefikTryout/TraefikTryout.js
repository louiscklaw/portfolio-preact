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
  ProjectDetailHelmets
} from "../../../../components/index";

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from "./thumbnail.png";

import TraefikTryoutThumbnail from "./thumbnail.png";
import TraefikBlockDiagram from "./traefik_block_diagram.svg";

class TraefikTryoutContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="Traefik API router"
          description="A Traefik API router"
          image={TraefikTryoutThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="Traefik API router" />
            <Spare />
          </div>

          <HeaderFigure
            img_src={TraefikBlockDiagram}
            caption="traefik api router"
            figure_style={{ maxWidth: "600px" }}
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Purpose:</h3>
            <p>My personal tryout for traefik API router.</p>

            <h3 className={projectDetailStyle.DescTopic}>
              References / Repositories:
            </h3>

            <ul>
              <li>
                <GithubLink link="https://github.com/louiscklaw/traefik-tryout" />
              </li>
              <li>
                <GithubLink link="https://github.com/gaplo917/load-balancer-benchmark" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { TraefikTryoutContent, TraefikTryoutThumbnail };
