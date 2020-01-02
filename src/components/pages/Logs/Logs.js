import { Component } from 'preact';
import style from './Logs.scss';

export default class Logs extends Component {
  render(){
    return(
      <div>
        <div className={style.helloworld}>
          Logs
        </div>
      </div>
    )
  }
}