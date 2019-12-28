import { Component } from 'preact';
import { Link } from 'preact-router/match';

import './NavMiddle.css'

export default class NavMiddle extends Component {
  render(){
    return(
      <div>
        <Link activeClassName="active" href="/">Home</Link>
        <Link activeClassName="active" href="/projects">Projects</Link>
        <Link activeClassName="active" href="/about">About</Link>
        <Link activeClassName="active" href="/credits">Credits</Link>
      </div>
    )
  }
}
