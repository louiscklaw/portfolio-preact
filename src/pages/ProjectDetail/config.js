
import TradingviewDashboard from './TradingviewDashboard/TradingviewDashboard'
import AppiumBehaveNotes from './AppiumBehaveNotes/AppiumBehaveNotes'
import AllwinnerV3sTryout from './AllwinnerV3sTryout/AllwinnerV3sTryout'
import HKData from './HKData/index'
import HKOWeatherBot from './HkoWeatherBot/HkoWeatherBot'
import LinuxToolbox from './LinuxToolbox/LinuxToolbox'
import OpenCVCarCounting from './OpencvCarCounting/OpencvCarCounting'

import PetPugProject from './PetPugProject/PetPugProject'
import Portfolio from './Portfolio/Portfolio'
import PrinterBoard from './PrinterBoard/PrinterBoard'
import Rthk31Rthk32LinuxViewer from './Rthk31Rthk32LinuxViewer/Rthk31Rthk32LinuxViewer'
import Slic3rBatchExport from './Slic3rBatchExport/Slic3rBatchExport'
import Tappy from './Tappy/Tappy'

import TraefikTryout from './TraefikTryout/TraefikTryout'
import VoronTryout from './VoronTryout/VoronTryout'
import YoutubeSplitViewTryout from './YoutubeSplitViewTryout/YoutubeSplitViewTryout'
import ZTransferDemo from './ZTransferDemo/ZTransferDemo'


let project_list = [
  [ 'tradingview_dashboard', 'tradingview dashboard' ],
  [ 'appium_behave_notes', 'appium_behave_notes' ],
  [ 'AllwinnerV3sTryout', 'AllwinnerV3sTryout' ],

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