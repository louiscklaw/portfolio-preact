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

import head_pic from './tappy_tryout.jpg'

class ProjectDescription extends React.Component{
  render(){
    return (
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects />

          <ProjectTitle project_title="tappy" />

          <div className="desc-header-picture" style={{display:"flex"}}>
            <div >
              <img src={head_pic}  alt="" />
            </div>
            <div style={{maxWidth: "30%" }}>
              <YoutubeContainers src="https://www.youtube.com/embed/YNCB23V38x0" />
            </div>
          </div>

          <h3 className="topic">currently working on this project</h3>

        </div>
      </div>
    )
  }
}

export default ProjectDescription