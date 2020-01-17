import projectDetailStyle from '../projectdetail.scss';

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

// import head_pic from './appium-behave-notes.png'
import head_pic from './printer-board.png';

import PrinterBoardThumbnail from './thumbnail.png';

class PrinterBoardContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Printer baord tryout"
          description="A Printer baord tryout"
          image={PrinterBoardThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="Printer baord tryout"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="Printer baord tryout"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
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
  PrinterBoardContent,
  PrinterBoardThumbnail
}
