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

import PortfolioThumbnail from './thumbnail.png';

class PortfolioContent extends Component{
  render(){
    return(
      <div>
        Portfolio behave notes
      </div>
    )
  }
}

export {
  PortfolioContent,
  PortfolioThumbnail
}
