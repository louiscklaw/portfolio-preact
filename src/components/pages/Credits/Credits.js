import { Component } from 'preact';
import style from './Credits.scss';

export default class Credits extends Component {
  render(){
    return(
      <div>
        <div className={style.helloworld}>
          Credits
        </div>
      </div>
    )
  }
}