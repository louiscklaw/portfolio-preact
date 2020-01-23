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


class OpenDpsTryoutContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="OpenDps tryout"
          description="A OpenDps tryout"
          image={OpenDpsTryoutThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="OpenDps tryout"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="OpenDps tryout"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Linux toolbox:
            </h3>
            <p>
              ack, entr, inotify-tools
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              Repo:
            </h3>

            <ul>
              <li>
                <GithubLink link="https://github.com/louiscklaw/opendps-tryout" />
              </li>
            </ul>


          </div>
        </div>
      </div>
    )
  }
}

export {
  OpenDpsTryoutContent,
  OpenDpsTryoutThumbnail
}
