import projectDetailStyle from "../projectDetailStyle";
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
  PrismBash,
  FigureContainer
} from "../../../../components/index";

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from "./screen_capture.jpeg";
import PortfolioThumbnail from "./thumbnail.png";

import build_flow from "./build_flow.svg";

class PortfolioContent extends Component {
  render() {
    return (
      <div style={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="My portfolio page"
          description="My portfolio page"
          image={PortfolioThumbnail}
        />

        <div style={projectDetailStyle.ProjectDescription}>
          <div style={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="Making of my portfolio page" />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="screenshot of my portfolio page"
          />
          <div style={projectDetailStyle.DescBody}>
            <h3 style={projectDetailStyle.DescTopic}>
              Background information.
            </h3>
            <p>This is my portfolio.</p>
            <p>This website contains my project information.</p>
          </div>
          <div style={projectDetailStyle.DescBody}>
            <h3 style={projectDetailStyle.DescTopic}>Build flow:</h3>
            <FigureContainer
              img_src={build_flow}
              caption="current build flow of my portfolio"
            />
          </div>
          <div style={projectDetailStyle.DescBody}>
            <h3 style={projectDetailStyle.DescTopic}>Some information:</h3>
            <ul style={projectDetailStyle.ul}>
              <li>production site: https://louiscklaw.github.io/</li>
              <li>
                firebase hosting of production site:
                https://production-portfolio.web.app
              </li>
              <li>
                firebase hosting of staging site:
                https://staging-portfolio-c7cb5.web.app/
              </li>
            </ul>
          </div>

          <div style={projectDetailStyle.DescBody}>
            <h3 style={projectDetailStyle.DescTopic}>Repository:</h3>
            <ul style={projectDetailStyle.ul}>
              <li>
                <NewWindowLink href="https://github.com/louiscklaw/portfolio-preact" />
              </li>
              <li>
                <NewWindowLink href="https://github.com/developit/preact-boilerplate" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { PortfolioContent, PortfolioThumbnail };
