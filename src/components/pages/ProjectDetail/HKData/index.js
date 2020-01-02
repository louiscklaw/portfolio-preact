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

// import head_pic from './HKData-behave-notes.png'

import HKDataThumbnail from './thumbnail.png';

class HKDataContent extends Component{
  render(){
    return(
      <div>
        HKData behave notes
      </div>
    )
  }
}

export {
  HKDataContent,
  HKDataThumbnail
}
