import {Component} from 'preact';
// import {showProject} from './config';

import HelloworldContent from './Helloworld/Helloworld'
import {TradContent, TradThumbnail} from './TradingviewDashboard/TradingviewDashboard'

export default () => {
　 return(
    <div>
      {/* {showProject(project_to_show)} */}
      <TradContent />
    </div>
  )
}
