import React from 'react';

import style from './ProjectTitle.scss';

class ProjectTitle extends React.Component{
  render(){
    return(
      <div className={style.projectTitle}>
        <h1>{this.props.project_title}</h1>
      </div>
    )
  }
}

export default ProjectTitle