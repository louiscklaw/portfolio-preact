import {Component} from 'preact';

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainers,
  MetaTitle,
  GithubLink,
  MetaProjectDetail
} from '../../../components/index'


import testimg from './4664932266934272.png'

import "./HKData.scss"

class HKData extends Component{
  render(){
    return(
      <div className="desc-container">
        <div className="project-description">
          <BackToProjects></BackToProjects>
          <ProjectTitle project_title="hk open data searcher"></ProjectTitle>

          <div className="project-image-container">
            <div className="project-image">
              <img src={testimg} alt="" srcset="" />
            </div>
          </div>

          <div className="text-description">
            <h2 className="description-title subtitle is-4">Description</h2>
            <p>
              try to make a search interface for hko data information
            </p>

            <div className="rel-links">
              <h2 className="subtitle is-4">related links</h2>
              <ul>
                <li><a href="https://data.gov.hk/en/">資料一線通</a></li>
                <li>
                  <a href="https://geodata.gov.hk/gs/">https://geodata.gov.hk/gs/</a>
                </li>
                <li><a href="https://api.mplus.org.hk/tc/documentation/about#thedata">https://api.mplus.org.hk/tc/documentation/about#thedata</a></li>
              </ul>
            </div>

            <div className="rel-links">
              <h2 className="subtitle is-4">worth mentioning</h2>
              <ul>
                <li>
                  firebase function
                </li>
              </ul>
            </div>
            <div className="rel-links">
              <h2 className="subtitle is-4">Demo</h2>
              <ul>
                <li>
                  <a href="demo-link">demo link</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default HKData