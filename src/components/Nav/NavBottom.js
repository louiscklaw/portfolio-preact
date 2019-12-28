import {Component} from 'preact';

import './NavBottom.scss'

export default class NavBottom extends Component{
  render(){
    return(
      <div>
        <a href="https://www.facebook.com/louiscklaw" target="_blank" rel="noopener noreferrer">
          <i  className="fab fa-facebook"></i>
        </a>
      </div>
    )
  }
}