import style from './catalogue.scss'

import {Component} from 'preact'
import {Link} from 'preact-router/match'

import {project_list} from './config'

function getProjectDetailLink(href, text){
  return (
    <>
      <li>
        <Link href={'/project_detail/'+href} >{text}</Link>
      </li>
    </>
  )
}

export default class ProjectCatalogue extends Component{

  render(){

    // let test_jsx = project_list.map( a => getProjectDetailLink(a[0], a[1]))
    let test_jsx = Object.keys(project_list)
      .map( k => getProjectDetailLink(k, project_list[k][0]))
    // console.log(project_list);
    // let test_jsx = '123321';

    return(
      <div className={style.helloworld}>
        <ul>
          {test_jsx}
        </ul>
      </div>
    )
  }
}