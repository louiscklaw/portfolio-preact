import {Component} from 'preact';

import {showProject} from './config';

import {active_config} from '../../../config/config'

// import HelloworldContent from './Helloworld/Helloworld'

// import {TradContent, TradThumbnail} from './TradingviewDashboard/TradingviewDashboard'

import {TestHelmet} from '../../index'

export default ({project_to_show}) => {
  console.log("project_to_show", project_to_show);
  console.log('test url ', `${active_config.ROOT_URL}/project_detail/${project_to_show}`)
  // console.log(showProject(project_to_show));
  // console.log('tradcontent,', (<div><TradContent /></div>))
　 return(
    <div className="ProjectDetail">
      <TestHelmet url={active_config.ROOT_URL+'/project_detail/'+project_to_show} />

      {showProject(project_to_show)}

    </div>
  )
}
