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

import Slic3rThumbnail from './thumbnail.png';

class Slic3rContent extends Component{
  render(){
    return(
      <div>
        Slic3r behave notes
      </div>
    )
  }
}

export {
  Slic3rContent,
  Slic3rThumbnail
}
