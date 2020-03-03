import { Component } from "preact";

class ProjectDetailTitle extends Component {
  render() {
    return (
      <>
        <h3>{this.props.text}</h3>
      </>
    );
  }
}

export default ProjectDetailTitle;
