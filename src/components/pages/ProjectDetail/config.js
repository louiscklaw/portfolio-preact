
import {TradContent, TradThumbnail} from './TradingviewDashboard/TradingviewDashboard'

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
  'tradingview_dashboard' : [ 'tradingview dashboard', TradContent, TradThumbnail ],
  // 'appium_behave_notes' : ['appium behave notes', AppiumBehaveNotes, './AppiumBehaveNotes/thumbnail.png' ],
  // 'allwinner_v3s_tryout' : ['AllwinnerV3sTryout', AllwinnerV3sTryout, './AllwinnerV3sTryout/thumbnail.png'],
  // 'hk_data' : ['HKData', HKData, './HKData/thumbnail.png'],
  // 'HKOWeatherBot' : ['HKOWeatherBot', HKOWeatherBot, './HkoWeatherBot/thumbnail.png'],
  // 'LinuxToolbox' : ['LinuxToolbox', LinuxToolbox, './LinuxToolbox/thumbnail.png'],
  // 'OpenCVCarCounting' : ['OpenCVCarCounting', OpenCVCarCounting, './OpencvCarCounting/thumbnail.png'],
  // 'PetPugProject' : ['PetPugProject', PetPugProject, './PetPugProject/thumbnail.png'],
  // 'Portfolio' : ['Portfolio', Portfolio, './Portfolio/thumbnail.png'],
  // 'PrinterBoard' : ['PrinterBoard', PrinterBoard, './PrinterBoard/thumbnail.png'],
  // 'Rthk31Rthk32LinuxViewer' : ['Rthk31Rthk32LinuxViewer', Rthk31Rthk32LinuxViewer, './Rthk31Rthk32LinuxViewer/thumbnail.png'],
  // 'Slic3rBatchExport' : ['Slic3rBatchExport', Slic3rBatchExport, './Slic3rBatchExport/thumbnail.png'],
  // 'Tappy' : ['Tappy', Tappy, './Tappy/thumbnail.png'],
  // 'TraefikTryout' : ['TraefikTryout', TraefikTryout, './TraefikTryout/thumbnail.png'],
  // 'VoronTryout' : ['VoronTryout', VoronTryout, './VoronTryout/thumbnail.png'],
  // 'YoutubeSplitViewTryout' : ['YoutubeSplitViewTryout', YoutubeSplitViewTryout, './YoutubeSplitViewTryout/thumbnail.png'],
  // 'ZTransferDemo' : ['ZTransferDemo', ZTransferDemo, './ZTransferDemo/thumbnail.png'],
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