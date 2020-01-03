import style from './catalogue.scss'

import {Component} from 'preact'
import {Link} from 'preact-router/match'

import {project_list} from './config'

function getProjectDetailLink(href, text, thumbnail_path){
  return (
    <>
      <li style={{backgroundImage:`url("${thumbnail_path}")`}}>
        <Link href={'/project_detail/'+href}>{text}</Link>
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
      <div className={style.helloworld}>
        {test_jsx}
      </div>
    )
  }
}