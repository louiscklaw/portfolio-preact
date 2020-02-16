import { Component } from "preact";

// import style from './ProjectTitle.scss';
import style from "./style.js";

class ProjectTitle extends Component {
  render() {
    return (
      <div style={style.project_title}>
        <h1>{this.props.project_title}</h1>
      </div>
    );
  }
}

export default ProjectTitle;
