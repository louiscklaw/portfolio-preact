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

export default class ProjectDetail extends Component{
  constructor(){
    super()
  }
  render(){

    let test_jsx = project_list.map( a => getProjectDetailLink(a[0], a[1]))
    return(
      <div>
        <h1>project catalogue</h1>
          {test_jsx}
      </div>
    )
  }
}