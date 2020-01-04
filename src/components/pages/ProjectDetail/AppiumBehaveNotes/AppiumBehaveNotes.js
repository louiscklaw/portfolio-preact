import projectDetailStyle from '../projectdetail.scss';

import {Component} from 'preact';

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainer,
  MetaTitle,
  GithubLink,
  MetaProjectDetail,
  HeaderFigure,
  Spare,
  ProjectDetailHelmets
} from '../../../../components/index'

import head_pic from './appium-behave.png';

import AppiumThumbnail from './thumbnail.png';
import { HighlightBash } from '../../../containers/Highlightjs';

class AppiumContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Appium behave tryout"
          description="A Appium behave tryout"
          image={AppiumThumbnail}
        />

        <HeaderFigure
          img_src={head_pic}
          caption="trading view dashboard"
        />

        <div className={projectDetailStyle.DescBody}>
          <h3 className={projectDetailStyle.DescTopic}>
            Purpose:
          </h3>
          <p>
            to test mobile apps of hk observatory
          </p>

          <h3 className={projectDetailStyle.DescTopic}>
            environment:
          </h3>
          <ul>
            <li>linux</li>
            <li>appium</li>
            <li>python 3.6.1, behave, python-appium-client</li>
          </ul>

          <h3 className={projectDetailStyle.DescTopic}>
            to setup:
          </h3>

          <HighlightBash>
            $ pip install -r requirements.txt
          </HighlightBash>


          <h3 className={projectDetailStyle.DescTopic}>
            to execute:
          </h3>
          <p>
            setup virtual environment
          </p>

          <HighlightBash>
            $ virtualenv venv
          </HighlightBash>

          <HighlightBash>
            $ source venv/bin/activate
          </HighlightBash>

          <p>
            install python libraries

          </p>

          <HighlightBash>
            $ pip install -r requirements.txt

          </HighlightBash>

          <p>
            start appium -> connect to android / genymotion appium
          </p>
          <HighlightBash>
            $ python behave
            $ behave ./features/HKOApp_9DayForecast.feature
          </HighlightBash>


          <h3 className={projectDetailStyle.DescTopic}>
            demo:
          </h3>
          <p>
            passing sample
          </p>
          <YoutubeContainer vid="Ce-v1zTHhwU" video_title="passing example"/>

          <p>
            failing sample
          </p>
          <YoutubeContainer vid="uR8VLSwvf9Q" video_title="passing example"/>


          <h3 className={projectDetailStyle.DescTopic}>
            system structure:
          </h3>


        </div>
      </div>
    )
  }
}

export {
  AppiumContent,
  AppiumThumbnail
}
