import {Component} from 'preact'
import {Link} from 'preact-router/match'

import {TradingviewDashboard} from './index'

function getProjectDetailLink(href, text){
  return (
    <>
      <Link href={'/project_detail/'+href} >{text}</Link>
    </>
  )
}

export default class ProjectDetail extends Component{
  constructor(){
    super()
  }
  render(){
    let project_list = [
      [ 'tradingview_dashboard', 'tradingview dashboard' ],
      [ 'tradingview_dashboard1', 'tradingview dashboard1' ],
      [ 'tradingview_dashboard2', 'tradingview dashboard2' ],
      [ 'tradingview_dashboard3', 'tradingview dashboard3' ],
      [ 'tradingview_dashboard4', 'tradingview dashboard4' ]
    ]
    let test_jsx = project_list.map( a => getProjectDetailLink(a[0], a[1]))
    return(
      <div>
        <h1>project catalogue</h1>
          {test_jsx}
      </div>
    )
  }
}