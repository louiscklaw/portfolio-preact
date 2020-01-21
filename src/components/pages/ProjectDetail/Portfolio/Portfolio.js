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
  PrismBash
} from '../../../../components/index'

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from './screen_capture.jpeg'
import PortfolioThumbnail from './thumbnail.png';

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
            <h3 style={projectDetailStyle.DescTopic}>
              Purpose:
            </h3>
            <p>
              create a pcb for voron printer.
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
