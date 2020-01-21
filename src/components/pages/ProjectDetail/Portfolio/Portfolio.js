import projectDetailStyle from '../projectDetailStyle';
import {Component} from 'preact';

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
} from '../../../../components/index'

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from './screen_capture.jpeg'
import PortfolioThumbnail from './thumbnail.png';

import build_flow from './build_flow.svg';

class PortfolioContent extends Component{

  render(){
    console.log(projectDetailStyle);
    return(
      <div style={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="My portfolio page"
          description="My portfolio page"
          image={PortfolioThumbnail}
        />

        <div style={projectDetailStyle.ProjectDescription}>

          <div style={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="Making of my portfolio page"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="screenshot of my portfolio page"
          />

          <div style={projectDetailStyle.DescBody}>
            <p>
              This is my portfolio.
            </p>
            <p>
              This website contains my project information.
            </p>
          </div>

          <div style={projectDetailStyle.DescBody}>
            <h3 style={projectDetailStyle.DescTopic}>>
              Background information.
            </h3>
            <p>
              production site: production-portfolio.web.app (https://louiscklaw.github.io/)
            </p>
            <p>
              repository: https://github.com/louiscklaw/portfolio-preact
            </p>
          </div>
          <div style={projectDetailStyle.DescBody}>
            <h3 style={projectDetailStyle.DescTopic}>>
              Build flow:
            </h3>
            <FigureContainer img_src={build_flow} caption="current build flow of my portfolio" />
            <p>
              production site: production-portfolio.web.app (https://louiscklaw.github.io/)
            </p>
            <p>
              repository: https://github.com/louiscklaw/portfolio-preact
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export {
  PortfolioContent,
  PortfolioThumbnail
}
