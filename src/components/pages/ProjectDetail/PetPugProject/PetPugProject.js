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

import PetPugProjectThumbnail from './thumbnail.png';

class PetPugProjectContent extends Component{
  render(){
    return(
      <div>
        PetPugProject behave notes
      </div>
    )
  }
}

export {
  PetPugProjectContent,
  PetPugProjectThumbnail
}
