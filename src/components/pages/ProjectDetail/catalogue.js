import style from './catalogue.scss'

import {Component} from 'preact'
import {Link} from 'preact-router/match'

import {TitleHelmet} from '../../index'

import {project_list} from './config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function getProjectDetailLink(href, text, thumbnail_path){
  return (
    <>
      <li>
        <TitleHelmet title="project catalogue" />
        <Link href={'/project_detail/'+href}>
          <div className={style.project_thumbnail_container}>
            <div className={style.project_thumbnail_background} style={{backgroundImage:`url("${thumbnail_path}")`}}>
            </div>
            <div className={style.blackBackdrop}>
              <div className={style.thumbnailTitleContainer} >
                <div className={style.MagniferIcon}>
                  <FontAwesomeIcon className="fa-2x" icon={['fas', 'search' ]}/>
                </div>
                <p>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  )
}

export default class ProjectCatalogue extends Component{
  render(){
    // let test_jsx = project_list.map( a => getProjectDetailLink(a[0], a[1]))
    let test_jsx = Object.keys(project_list)
      .map( k => getProjectDetailLink(k, project_list[k][0], project_list[k][2]))

    return(
      <div className={style.project_catalogue}>
        <ul>
          {test_jsx}
        </ul>
      </div>
    )
  }
}