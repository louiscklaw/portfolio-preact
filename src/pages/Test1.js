import {Component} from 'preact';

import style from './test_style.scss';

export default class Test1 extends Component{
  render(){
    console.log(style)
    return(
      <div>
        <div className={style.test_classname}>
          Test1
        </div>
      </div>
    )
  }
}