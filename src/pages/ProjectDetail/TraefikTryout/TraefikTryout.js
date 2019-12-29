import {Component} from 'preact'

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainers,
  MetaTitle,
  GithubLink,
  MetaProjectDetail
} from '../../../components/index'

// import './ProjectDescription.css';
// import './VoronTryout.css'

// import head_pic from '../../assets/down_sampled/voron-tryout/IMG_20190325_115322.jpg'
import head_pic from '../../../components/misc/parking.png'

let page_topic = 'traefik tryout'


class ProjectDescription extends React.Component{
  render(){
    return (
      <>
      <MetaProjectDetail />
      <MetaTitle text={page_topic} />

      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title={[page_topic]} />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div style={{maxWidth: "30%" }}>
              <img src={head_pic}  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
            </div>
          </div>

          <div className="desc-body">
            <h3 className="topic">Purpose</h3>
            <p>123321 to build a opensource 3d printer named voron</p>

            <h3 className="topic">Demo</h3>
            <NewWindowLink link="https://louiscklaw.github.io/tradingview-tile-tryout" />

            <h3 className="topic">ref/repo:</h3>
            <NewWindowLink link="https://www.reddit.com/r/voroncorexy/" />

          </div>
        </div>
      </div>
      </>
    )
  }
}

export default ProjectDescription