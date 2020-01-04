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

import ZTransferDemoThumbnail from './thumbnail.png';

class ZTransferDemoContent extends Component{
  render(){
    return(
      <div>
        Slic3r behave notes
      </div>
    )
  }
}

export {
  ZTransferDemoContent,
  ZTransferDemoThumbnail
}
