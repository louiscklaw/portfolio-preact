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

import head_pic from './appium-behave-notes.png';

import AppiumThumbnail from './thumbnail.png';

class AppiumContent extends Component{
  render(){
    return(
      <div>
        appium behave notes
      </div>
    )
  }
}

export {
  AppiumContent,
  AppiumThumbnail
}
