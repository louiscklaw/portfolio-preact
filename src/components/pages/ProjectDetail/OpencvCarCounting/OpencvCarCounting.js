import {Component} from 'preact';

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainer,
  MetaTitle,
  GithubLink,
  MetaProjectDetail
} from '../../../../components/index'

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

// import head_pic from './appium-behave-notes.png'

import OpencvCarThumbnail from './thumbnail.png';

class OpencvCarContent extends Component{
  render(){
    return(
      <div>
        OpencvCar behave notes
      </div>
    )
  }
}

export {
  OpencvCarContent,
  OpencvCarThumbnail
}
