import {Component} from 'preact';
import { Link } from 'preact-router/match';
// import {Link} from 'react-router-dom';

export default class BackToProjects extends Component{
  render(){
    return(
      <div>
        <Link href="/project_catalogue">Back</Link>
      </div>
    )
  }
}