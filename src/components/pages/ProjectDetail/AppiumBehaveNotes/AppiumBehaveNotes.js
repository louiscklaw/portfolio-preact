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
  ProjectDetailHelmets,
  HelloPrism
} from '../../../../components/index'



import head_pic from './appium-behave.png';

import AppiumThumbnail from './thumbnail.png';
import TradThumbnail from './thumbnail.png';

import system_structure_svg from './system_structure.svg';
import behave_grammer_svg from './behave_grammer.svg';

class AppiumContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Appium behave tryout"
          description="A Appium behave tryout"
          image={AppiumThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="Tradingview Dashboard"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="appium flow"
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

            <HelloPrism></HelloPrism>
          </div>
        </div>
      </div>
    )
  }
}

export {
  AppiumContent,
  AppiumThumbnail
}
