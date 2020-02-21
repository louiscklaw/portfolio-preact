import projectDetailStyle from "../projectdetail.scss";

import { Component } from "preact";

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
} from "../../../../components/index";

// import './ProjectDescription.css';
// import './TradingviewDashboard.css';

// import head_pic from './appium-behave-notes.png'

import head_pic from "./opencv-car-counting.jpg";

import OpencvCarThumbnail from "./thumbnail.png";

class OpencvCarContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="OpencvCar Counting"
          description="A OpencvCar Counting"
          image={OpencvCarThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="OpencvCar Counting" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="OpencvCar Counting" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Purpose / description:
            </h3>
            <p>
              To count the number of cars passing by images only. This project
              is craeted on top of the another github works work.
            </p>

            <h3 className={projectDetailStyle.DescTopic}>Demo:</h3>
            <YoutubeContainer vid="8P3VEGvMeTQ" video_title="working demo" />

            <h3 className={projectDetailStyle.DescTopic}>How to install:</h3>

            <ul>
              <li>python</li>
              <li>docker</li>
              <li>linux</li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>Repository:</h3>

            <GithubLink link="https://github.com/louiscklaw/car_tracking_tryout" />
          </div>
        </div>
      </div>
    );
  }
}

export { OpencvCarContent, OpencvCarThumbnail };
