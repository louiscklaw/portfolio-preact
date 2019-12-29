import {Component} from 'preact';
import { Link } from 'preact-router/match';

export default class BackToProjects extends Component{
  render(){
    return(
      <div>
        <Link to="/projects">Back</Link>
      </div>
    )
  }
}