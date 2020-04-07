import projectDetailStyle from "../projectdetail.scss";

import { Component } from "preact";

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
  PrismBash,
  GithubLinkList,
} from "../../../../components/index";

import head_pic from "./src/PS-STP-0600FPCGXX-G_d061bebe05a4488c96fe855efa35f9b3.jpg";

import SFXPowerSupplyThumbnail from "./thumbnail.jpg";

class SFXPowerSupplyContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="sfx power supply study"
          description="A sfx power supply study"
          image={SFXPowerSupplyThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="sfx power supply study" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="sfx power supply study" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Purpose:</h3>
            <p>some background information about SFX power supply</p>
          </div>

          {/*  */}

          <div className={projectDetailStyle.DescBody}>
            <GithubLinkList
              github_links={[
                "https://github.com/louiscklaw/sfx-power-supply-playlist.git",
                "https://github.com/louiscklaw/lichee-nano-one-key-package",
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { SFXPowerSupplyContent, SFXPowerSupplyThumbnail };
