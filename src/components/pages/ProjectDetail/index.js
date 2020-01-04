import {Component} from 'preact';
import Helmet from 'preact-helmet';

import {showProject} from './config';

import HelloworldContent from './Helloworld/Helloworld'

import {TradContent, TradThumbnail} from './TradingviewDashboard/TradingviewDashboard'

import {TestHelmet} from '../../index'

import config from '../../../config/config';

export default ({project_to_show}) => {
  console.log("project_to_show", project_to_show);
  // console.log(showProject(project_to_show));
  // console.log('tradcontent,', (<div><TradContent /></div>))
　 return(
    <div className="ProjectDetail">
      <TestHelmet slug={project_to_show} />

      {/* <Helmet
        meta={[
          {property: "og:url", content: `${config.ROOT_URL}/project_detail/` }
        ]}
      /> */}
      {showProject(project_to_show)}
      {/* <TradContent /> */}
    </div>
  )
}
