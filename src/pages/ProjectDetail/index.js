import {Component} from 'preact'

import {TradingviewDashboard} from './catalogue'


export default class ProjectDetail extends Component{
  constructor(){
    super()
  }
  render(){

    return(
      <div>
        project detail
        <TradingviewDashboard />
      </div>
    )
  }
}