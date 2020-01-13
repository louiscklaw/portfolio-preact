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

import head_pic from './youtube_split_view_tryout.png';

import YoutubeSplitThumbnail from './thumbnail.png';

class YoutubeSplitContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="youtube split view tryout"
          description="A youtube split view tryout"
          image={YoutubeSplitThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="youtube split view tryout"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="youtube split view demo screen"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Purpose:
            </h3>
            <p>
              This is a page to monitor multiple channels in youtube.
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
