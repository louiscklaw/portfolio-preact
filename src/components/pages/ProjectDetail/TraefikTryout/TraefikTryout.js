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
  ProjectDetailHelmets
} from '../../../../components/index'

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from './thumbnail.png'

import TraefikTryoutThumbnail from './thumbnail.png';

class TraefikTryoutContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Traefik API router"
          description="A Traefik API router"
          image={TraefikTryoutThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="Traefik API router"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="traefik api router"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Purpose:
            </h3>
            <p>
              This is a page to monitor multiple channels in youtube.
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              Demo:
            </h3>
            <NewWindowLink link="https://louiscklaw.github.io/youtube-split-view-tryout/" />

            <h3 className={projectDetailStyle.DescTopic}>
              ref/repo:
            </h3>
            <NewWindowLink link="https://github.com/louiscklaw/youtube-split-view-tryout" />
          </div>
        </div>
      </div>
    )
  }
}

export {
  TraefikTryoutContent,
  TraefikTryoutThumbnail
}
