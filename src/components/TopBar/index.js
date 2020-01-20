import { Component } from 'preact';


export default class TopBar extends Component{
  render(){
    return(
      <div>
        <ul>
          <li>
            projects
          </li>

          <li>
            about
          </li>

          <li>
            credits
          </li>

        </ul>
      </div>
    )
  }
}