import projectDetailStyle from '../projectdetail.scss';

import {Component} from 'preact';

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
} from '../../../../components/index'

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from './thumbnail.png'
import PrinterBoardThumbnail from './thumbnail.png';

class PrinterBoardContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="3d printer circuit board tryout"
          description="3d printer circuit board tryout"
          image={PrinterBoardThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="3d printer circuit board tryout"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="3d printer circuit board"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Brief description:
            </h3>
            <p>
              This is a project to test the making of 3d printer controller pcb
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              system structure:
            </h3>
            <NewWindowLink link="https://github.com/louiscklaw/3D-printer-board" />
            <NewWindowLink link="https://github.com/louiscklaw/3d-printer-head-pcb" />

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
