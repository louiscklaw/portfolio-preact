import React from 'react';

import './ProjectTitle.scss';

class ProjectTitle extends React.Component{
  render(){
    return(
      <div className="project-title">
        <h3>{this.props.project_title}</h3>
      </div>
    )
  }
}

export default ProjectTitle