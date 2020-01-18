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

import head_pic from './src/PS-STP-0600FPCGXX-G_d061bebe05a4488c96fe855efa35f9b3.jpg';

import Thumbnail from './thumbnail.jpg';


export default class PostContent extends Component{
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