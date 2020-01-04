import projectDetailStyle from '../projectdetail.scss';
// import style from './TradingviewDashboard.scss';

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

import head_pic from './slic3r-batch-export.png';

import Slic3rThumbnail from './thumbnail.png';

class Slic3rContent extends Component{
  render(){
    return(
      <div className={projectDetailStyle.Container}>

        <ProjectDetailHelmets
          title="Slic3r Dashboard"
          description="A Slic3r Dashboard"
          image={Slic3rThumbnail}
        />
        <div className={projectDetailStyle.ProjectDescription}>

          <div className={projectDetailStyle.ProjectHead}>
            <BackToProjects />
            <ProjectTitle
              project_title="Slic3r Dashboard"
            />
            <Spare />
          </div>


          <HeaderFigure
            img_src={head_pic}
            caption="Slic3r Dashboard"
          />

          <div className={projectDetailStyle.DescBody}>
            <h3 className={projectDetailStyle.DescTopic}>
              What is it ?
            </h3>
            <p>
              An easy tool to export gcode from slic3r.
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              background:
            </h3>
            <p>
              The option of slic3r command linx options wasn’t availabe under linux as described. The tools written to help perorming export 3mf -> save to stl -> export gcode as a batch operation.
            </p>

            <h3 className={projectDetailStyle.DescTopic}>
              How to use:
            </h3>
            <ul>
              <li>Clone repo:</li>
              <li>run under linux</li>
              <li>git clone git@github.com:louiscklaw/slic3r_batch_export.git</li>
              <li>pip install libxdo</li>
              <li>update the file list in:</li>

              <li>file_3mf_list # for the list of 3mf files</li>
              <li>WORKSPACE_DIR and PROJ_HOME</li>
              <li>SLIC3R_ACTIVE_CONFIG for slic3r configuration wanted</li>
              <li>SLIC3R_BIN_PATH for slic3r binary</li>

              <li>python batch_slic3r.py</li>

            </ul>

            <h3 className={projectDetailStyle.DescTopic}>
              How to use:
            </h3>

            <NewWindowLink link="https://louiscklaw.github.io/tradingview-tile-tryout" />

            <h3 className={projectDetailStyle.DescTopic}>
              How it works:
            </h3>
            <YoutubeContainer vid="YNCB23V38x0" video_title="passing example"/>

            <h3 className={projectDetailStyle.DescTopic}>
              Repoistory:
            </h3>
            <NewWindowLink link="https://github.com/louiscklaw/slic3r_batch_export" />

          </div>
        </div>

      </div>
    )
  }
}

export {
  Slic3rContent,
  Slic3rThumbnail
}
