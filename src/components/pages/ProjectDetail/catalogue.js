import {Component} from 'preact'
import {Link} from 'preact-router/match'

import {project_list} from './config'

function getProjectDetailLink(href, text){
  return (
    <>
      <Link href={'/project_detail/'+href} >{text}</Link>
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
      <div>
        <h1>project catalogue</h1>
          {test_jsx}
      </div>
    )
  }
}