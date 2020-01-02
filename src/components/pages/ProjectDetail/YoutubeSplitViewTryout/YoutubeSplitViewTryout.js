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

import YoutubeSplitThumbnail from './thumbnail.png';

class YoutubeSplitContent extends Component{
  render(){
    return(
      <div>
        Slic3r behave notes
      </div>
    )
  }
}

export {
  YoutubeSplitContent,
  YoutubeSplitThumbnail
}
