import {Component} from 'preact';
import {showProject} from './config';

import HelloworldContent from './Helloworld/Helloworld'
import {TradContent, TradThumbnail} from './TradingviewDashboard/TradingviewDashboard'

export default ({project_to_show}) => {
  console.log("project_to_show", project_to_show);
  console.log(showProject(project_to_show));
  console.log('tradcontent,', (<div><TradContent /></div>))
　 return(
    <div>
      {showProject(project_to_show)}
      {/* <TradContent /> */}
    </div>
  )
}
