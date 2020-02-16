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

import head_pic from "./appium-behave.png";

import AppiumThumbnail from "./thumbnail.png";

import system_structure_svg from "./system_structure.svg";
import behave_grammer_svg from "./behave_grammer.svg";

// content
const execute_code = `
$ virtualenv venv
$ source venv/bin/activate
`.trim();

const source_install_python_lib = `
$ pip install -r requirements.txt
`.trim();

const source_start = `
$ python behave
$ behave ./features/HKOApp_9DayForecast.feature
`.trim();

const source_mac_install = `
brew cask install visual-studio-code
brew install zsh-history-substring-search
brew install zsh
brew install zsh-lovers
brew install zsh-autosuggestions
brew install zsh-navigation-tools
brew install zsh-completions
brew install zsh-syntax-highlighting
brew install zsh-git-prompt
brew install zshdb
brew install git-flow
`.trim();

class AppiumContent extends Component {
  render() {
    return (
      <div className={projectDetailStyle.Container}>
        <ProjectDetailHelmets
          title="Appium behave tryout"
          description="A Appium behave tryout"
          image={AppiumThumbnail}
        />

        <div className={projectDetailStyle.ProjectDescription}>
          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle project_title="Appium driven by behave tryout" />
            <Spare />
          </div>

          <HeaderFigure img_src={head_pic} caption="appium flow" />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>Purpose:</h3>
            <p>to test mobile apps of hk observatory</p>

            <h3 className={projectDetailStyle.DescTopic}>environment:</h3>
            <ul>
              <li>linux</li>
              <li>appium</li>
              <li>python 3.6.1, behave, python-appium-client</li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>to setup:</h3>
            <PrismBash source_code="$ pip install -r requirements.txt" />

            <h3 className={projectDetailStyle.DescTopic}>to execute:</h3>
            <PrismBash source_code={execute_code} />

            <h3 className={projectDetailStyle.DescTopic}>
              install python libraries:
            </h3>
            <PrismBash source_code={source_install_python_lib} />

            <h3 className={projectDetailStyle.DescTopic}>
              start appium -> connect to android / genymotion appium:
            </h3>
            <PrismBash source_code={source_start} />

            <h3 className={projectDetailStyle.DescTopic}>
              stack on MAC machine:
            </h3>
            <PrismBash source_code={source_mac_install} />

            <h3 className={projectDetailStyle.DescTopic}>demo:</h3>
            <ul>
              <li>
                passing example
                <YoutubeContainer
                  vid="Ce-v1zTHhwU"
                  video_title="passing example"
                />
              </li>
              <li>
                failing example
                <YoutubeContainer
                  vid="uR8VLSwvf9Q"
                  video_title="failing example"
                />
              </li>
            </ul>

            <h3 className={projectDetailStyle.DescTopic}>system structure:</h3>
            <img src={system_structure_svg} />

            <h3 className={projectDetailStyle.DescTopic}>Behave grammer:</h3>
            <img src={behave_grammer_svg} />
          </div>
        </div>
      </div>
    );
  }
}

export { AppiumContent, AppiumThumbnail };
