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
  PrismHelloworld,
  PrismBash
} from '../../../../components/index'

import AliWangwangThumbnail from './thumbnail.png'

class AliWangwangContent extends Component{
  render(){
    return(
      <p>
        aliwangwang helloworld
      </p>
    )
  }
}

export {
  AliWangwangContent,
  AliWangwangThumbnail
}
