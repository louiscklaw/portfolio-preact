import { Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Nav extends Component {
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