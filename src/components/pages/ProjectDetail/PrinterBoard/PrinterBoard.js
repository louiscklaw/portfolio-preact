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

import PrinterBoardThumbnail from './thumbnail.png';

class PrinterBoardContent extends Component{
  render(){
    return(
      <div>
        PrinterBoard behave notes
      </div>
    )
  }
}

export {
  PrinterBoardContent,
  PrinterBoardThumbnail
}
