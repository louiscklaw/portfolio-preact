
import {showProject} from './config'

export default ({project_to_show}) => {
  return(
    <div>
      {showProject(project_to_show)}
    </div>
  )
}
