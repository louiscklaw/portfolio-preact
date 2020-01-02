import {Component} from 'preact';

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainers,
  MetaTitle,
  GithubLink,
  MetaProjectDetail
} from '../../../../components/index'

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

// import head_pic from './appium-behave-notes.png'

import LinuxToolboxThumbnail from './thumbnail.png';

class LinuxToolboxContent extends Component{
  render(){
    return(
      <div>
        LinuxToolbox behave notes
      </div>
    )
  }
}

export {
  LinuxToolboxContent,
  LinuxToolboxThumbnail
}
