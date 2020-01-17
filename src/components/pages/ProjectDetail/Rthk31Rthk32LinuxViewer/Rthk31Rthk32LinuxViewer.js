import projectDetailStyle from '../projectdetail.scss';

import {Component} from 'preact';

import {
  ProjectTitle,
  NewWindowLink,
  BackToProjects,
  YoutubeContainer,
  MetaTitle,
  GithubLink,
  GistLink,
  MetaProjectDetail,
  HeaderFigure,
  Spare,
  ProjectDetailHelmets,
  PrismHelloworld,
  PrismBash
} from '../../../../components/index'

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

// import head_pic from './appium-behave-notes.png'

import head_pic from './rthk31-rthk32-linux-viewer.png';

import RTHK31Thumbnail from './thumbnail.png';

const source_install_steamlink = 'pip3 install streamlink'
const streamlink_command = 'streamlink --player mpv https://www.twitch.tv/shinjishinji1 720p'

const install_watch_youtube_command = 'pip3 install install youtube-dl mps-youtube==0.2.7'
const watch_youtube_command = 'mpsyt playurl https://www.youtube.com/watch?v=wcnBl6gNIhQ'

const mpv_command = `
mpv http://viutv99-i.akamaihd.net/hls/live/265284/live1/stream4/streamPlaylist.m3u8
mpv http://viutv99-i.akamaihd.net/hls/live/265284/live1/master.m3u8
`

const cabletv_command = `mpv http://media.fantv.hk/m3u8/archive/channel2.m3u8`

class RTHK31Content extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="rthk31-rthk32 linux viewer"
          description="A rthk31-rthk32 linux viewer"
          image={RTHK31Thumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="rthk31-rthk32 linux viewer"
            />
            <Spare />
          </div>

          <HeaderFigure
            img_src={head_pic}
            caption="rthk31-rthk32 linux viewer"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Purpose:
            </h3>
            <p>
              To connect to the world while you’re working in linux environment at home…… inspired by<NewWindowLink link="https://blog.wtako.net/view/23" text="Linux桌面環境下收看ViuTV" />
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              Requirement:
            </h3>
            <ul>
              <li>linux, gnome</li>
              <li>python3, curl, gnome-mpv</li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>
              How to install:
            </h3>
            <ul>
              <il>open ~/.bashrc or ~/.zshrc and paste the following source into it</il>
              <il>logout linux -> login</il>
              <il>done</il>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>
              Source:
            </h3>

            <GistLink id="6a0206c038bbe82a969c1b7677713fb3" />

            <h3 className={projectDetailStyle.DescTopic}>
              Demo:
            </h3>
            <YoutubeContainer vid="hJdwEo4QNx8" />

            <h3 className={projectDetailStyle.DescTopic}>updated 2019-07-28</h3>
            <p>to watch twitch under linux</p>
            <ul>
              <li>to install
                <PrismBash source_code={source_install_steamlink} />
              </li>
              <li>to use
                <PrismBash source_code={streamlink_command} />
              </li>
            </ul>

            <p>to watch youtube under linux</p>
            <ul>
              <li>to install
                <PrismBash source_code={install_watch_youtube_command} />
              </li>
              <li>to use
                <PrismBash source_code={watch_youtube_command} />
              </li>
            </ul>

            <p>to watch ViuTV under linux</p>
            <ul>
              <li>to install
                <PrismBash source_code={mpv_command} />
              </li>
            </ul>

            <p>to watch CableTV under linux</p>
            <ul>
              <li>
                <PrismBash source_code={cabletv_command} />
              </li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}

export {
  RTHK31Content,
  RTHK31Thumbnail
}
