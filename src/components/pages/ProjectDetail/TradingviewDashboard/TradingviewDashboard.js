import projectDetailStyle from "../projectdetail.scss";
import style from "./TradingviewDashboard.scss";

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
  ProjectDetailHelmets
} from "../../../../components/index";

import head_pic from "./tradingview-dashboard.png";

import TradThumbnail from "./thumbnail.png";

class TradContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="Tradingview Dashboard"
          description="A tradingview dashboard"
          image={TradThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="Tradingview Dashboard" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="trading view dashboard" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Purpose:</h3>
            <p>
              a simple page to monitor stock, while data provided by tradingview
            </p>

            <h3 className={projectDetailStyle.DescTopic}>Demo:</h3>
            <NewWindowLink link="https://louiscklaw.github.io/tradingview-tile-tryout" />

            <h3 className={projectDetailStyle.DescTopic}>
              References / Repositories:
            </h3>
            <NewWindowLink link="https://github.com/louiscklaw/tradingview-tile-tryout" />
          </div>
        </div>
      </div>
    );
  }
}

class TradContent1 extends Component {
  render() {
    return <div>test trad content</div>;
  }
}

export { TradContent, TradThumbnail };
