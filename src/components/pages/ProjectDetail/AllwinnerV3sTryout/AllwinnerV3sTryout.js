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

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

import head_pic from './allwinner-v3s-tryout.jpg';

import AllWinnerThumbnail from './thumbnail.png';

class AllwinnerContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Appium behave tryout"
          description="A Appium behave tryout"
          image={AllWinnerThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="Appium driven by behave tryout"
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
              This is a tryout of homemake embedded linux project using allwinner v3s chips inspired by
              <NewWindowLink link="https://www.reddit.com/r/electronics/comments/83141t/i_made_an_allwinner_v3s_evaluation_board_based/" />
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              progress:
            </h3>
            <p>
              Currently in progress with the second try:<br />
              The first try:
              <GithubLink link="https://github.com/louiscklaw/allwinner-v3s-tryout/tree/20181118-print-1" />
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              The second try CHANGE LOG:
            </h3>
            <ul>
              <li>fix SVREF wire</li>
              <li>4k7 on SDIO CLK wire</li>
              <li>fix power facilities</li>
              <li>add GL827L sdcard reading facilities</li>
              <li>add ATMega328p for power and reset control</li>
              <li>add USB to serial</li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>
              Buildroot:
            </h3>
            <ul>
              <li>to setup ubuntu/docker for buildroot(tested under 18.04)</li>
              <li>sudo apt-get install iputils-ping vim git wget xz-utils bzip2 gcc device-tree-compiler python python-dev time make pkg-config</li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>
              References:
            </h3>
            <ul>
              <li>
                <NewWindowLink link="https://github.com/louiscklaw/allwinner-v3s-tryout"/>
              </li>
              <li>
                <NewWindowLink link="https://www.reddit.com/r/electronics/comments/83141t/i_made_an_allwinner_v3s_evaluation_board_based/" />
              </li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>
              BOM/Part list:
            </h3>
            <p>
              To be updated
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export {
  AllwinnerContent,
  AllWinnerThumbnail
}
