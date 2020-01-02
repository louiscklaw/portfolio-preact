
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

let project_list = {
  'tradingview_dashboard' : ['tradingview dashboard', TradingviewDashboard ],
  'appium_behave_notes' : ['appium behave notes', AppiumBehaveNotes ],
  'allwinner_v3s_tryout' : ['AllwinnerV3sTryout', AllwinnerV3sTryout],
  'hk_data' : ['HKData', HKData],
  'HKOWeatherBot' : ['HKOWeatherBot', HKOWeatherBot],
  'LinuxToolbox' : ['LinuxToolbox', LinuxToolbox],
  'OpenCVCarCounting' : ['OpenCVCarCounting', OpenCVCarCounting],
  'PetPugProject' : ['PetPugProject', PetPugProject],
  'Portfolio' : ['Portfolio', Portfolio],
  'PrinterBoard' : ['PrinterBoard', PrinterBoard],
  'Rthk31Rthk32LinuxViewer' : ['Rthk31Rthk32LinuxViewer', Rthk31Rthk32LinuxViewer],
  'Slic3rBatchExport' : ['Slic3rBatchExport', Slic3rBatchExport],
  'Tappy' : ['Tappy', Tappy],
  'TraefikTryout' : ['TraefikTryout', TraefikTryout],
  'VoronTryout' : ['VoronTryout', VoronTryout],
  'YoutubeSplitViewTryout' : ['YoutubeSplitViewTryout', YoutubeSplitViewTryout],
  'ZTransferDemo' : ['ZTransferDemo', ZTransferDemo],
}

function showProject(proj_name){
  return(
    <pre>
      {project_list[proj_name][1]}
    </pre>
  )
}

export {
  project_list,
  showProject
}