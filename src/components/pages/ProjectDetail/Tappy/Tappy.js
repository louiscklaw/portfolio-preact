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

import TappyThumbnail from './thumbnail.png';
import head_pic from './thumbnail.png';

class TappyContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Tappy"
          description="Tappy a mobile application testing machine"
          image={TappyThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="Tappy tryout"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="tappy"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Purpose:
            </h3>
            <p>
              try to make a sample of non-intrusive mobile application testing.
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              References:
            </h3>
            <a href="https://github.com/hugs/tapsterbot">tapsterbot</a>
          </div>


        </div>
      </div>

    )
  }
}

export {
  TappyContent,
  TappyThumbnail
}
