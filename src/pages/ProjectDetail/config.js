import TradingviewDashboard from './TradingviewDashboard/TradingviewDashboard'
import AppiumBehaveNotes from './AppiumBehaveNotes/AppiumBehaveNotes'
import AllwinnerV3sTryout from './AllwinnerV3sTryout/AllwinnerV3sTryout'

let project_list = [
  [ 'tradingview_dashboard', 'tradingview dashboard' ],
  [ 'appium_behave_notes', 'appium_behave_notes' ],
  [ 'AllwinnerV3sTryout', 'AllwinnerV3sTryout' ]
]

function showProject(proj_name){
  return(
  <pre>{proj_name}</pre>
  )
}

export {
  project_list,
  showProject
}