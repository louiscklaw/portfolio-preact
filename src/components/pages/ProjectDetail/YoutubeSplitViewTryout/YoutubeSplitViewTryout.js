import projectDetailStyle from '../projectdetail.scss';

import {Component} from 'preact';

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainers,
  MetaTitle,
  GithubLink,
  MetaProjectDetail,
  HeaderFigure,
  Spare,
  ProjectDetailHelmets
} from '../../../../components/index'

import head_pic from './youtube_split_view_tryout.png';

import YoutubeSplitThumbnail from './thumbnail.png';

class YoutubeSplitContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Youtube Split Viewer"
          description="A Youtube Split Viewer"
          image={TradThumbnail}
        />
        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="Youtube Split Viewer"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="Youtube Split Viewer"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Purpose:
            </h3>
            <p>
              a simple youtube split viewer
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              Demo:
            </h3>
            <NewWindowLink link="https://louiscklaw.github.io/youtube-split-view-tryout/" />

            <h3 className={projectDetailStyle.DescTopic}>
              ref/repo:
            </h3>
            <NewWindowLink link="https://github.com/louiscklaw/youtube-split-view-tryout" />
          </div>

        </div>

      </div>
    )
  }
}

export {
  YoutubeSplitContent,
  YoutubeSplitThumbnail
}
