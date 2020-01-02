import {Component} from 'preact';
import { Link } from 'preact-router/match';

export default class BackToProjects extends Component{
  render(){
    return(
      <div>
        <Link href="/project_catalogue">Back</Link>
      </div>
    )
  }
}