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

import head_pic from './thumbnail.png'

import PetPugProjectThumbnail from './thumbnail.png';

class PetPugProjectContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Pet pug project"
          description="A Pet pug project"
          image={PetPugProjectThumbnail}
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
            caption="a pet pug project"
          />


          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              Purpose:
            </h3>
            <p>
              My pet projects
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              Repo:
            </h3>
            <ul>
              <li>
                <NewWindowLink link="https://github.com/louiscklaw/pug-startbootstrap-sb-admin-2" />
              </li>
              <li>
                <NewWindowLink link="https://github.com/louiscklaw/pug_hugo_slate" />
              </li>
              <li>
                <NewWindowLink link="https://github.com/louiscklaw/pug_landing_page" />
              </li>
              <li>
                <NewWindowLink link="https://github.com/louiscklaw/pug-startbootstrap-coming-soon" />
              </li>
              <li>
                <NewWindowLink link="https://github.com/louiscklaw/pug-stylish-portfolio" />
              </li>
            </ul>



          </div>

        </div>

      </div>
    )
  }
}

export {
  PetPugProjectContent,
  PetPugProjectThumbnail
}
