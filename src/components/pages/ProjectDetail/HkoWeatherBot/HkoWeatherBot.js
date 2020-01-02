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

import HKOWeatherBotThumbnail from './thumbnail.png';

class HKOWeatherBotContent extends Component{
  render(){
    return(
      <div>
        HKOWeatherBot behave notes
      </div>
    )
  }
}

export {
  HKOWeatherBotContent,
  HKOWeatherBotThumbnail
}
