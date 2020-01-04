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

import RTHK31Thumbnail from './thumbnail.png';

class RTHK31Content extends Component{
  render(){
    return(
      <div>
        RTHK31 behave notes
      </div>
    )
  }
}

export {
  RTHK31Content,
  RTHK31Thumbnail
}
