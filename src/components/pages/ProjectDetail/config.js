import {
  TradContent,
  TradThumbnail
} from "./TradingviewDashboard/TradingviewDashboard";

import {
  AppiumContent,
  AppiumThumbnail
} from "./AppiumBehaveNotes/AppiumBehaveNotes";
import {
  AllwinnerContent,
  AllWinnerThumbnail
} from "./AllwinnerV3sTryout/AllwinnerV3sTryout";
import { HKDataContent, HKDataThumbnail } from "./HKData/index";
import {
  HKOWeatherBotContent,
  HKOWeatherBotThumbnail
} from "./HkoWeatherBot/HkoWeatherBot";
import {
  LinuxToolboxContent,
  LinuxToolboxThumbnail
} from "./LinuxToolbox/LinuxToolbox";
import {
  OpencvCarContent,
  OpencvCarThumbnail
} from "./OpencvCarCounting/OpencvCarCounting";

import {
  PetPugProjectContent,
  PetPugProjectThumbnail
} from "./PetPugProject/PetPugProject";
import { PortfolioContent, PortfolioThumbnail } from "./Portfolio/Portfolio";
import {
  PrinterBoardContent,
  PrinterBoardThumbnail
} from "./PrinterBoard/PrinterBoard";
import {
  RTHK31Content,
  RTHK31Thumbnail
} from "./Rthk31Rthk32LinuxViewer/Rthk31Rthk32LinuxViewer";
import {
  Slic3rContent,
  Slic3rThumbnail
} from "./Slic3rBatchExport/Slic3rBatchExport";

import { TappyContent, TappyThumbnail } from "./Tappy/Tappy";
import {
  TraefikTryoutContent,
  TraefikTryoutThumbnail
} from "./TraefikTryout/TraefikTryout";
import {
  VoronTryoutContent,
  VoronTryoutThumbnail
} from "./VoronTryout/VoronTryout";
import {
  YoutubeSplitContent,
  YoutubeSplitThumbnail
} from "./YoutubeSplitViewTryout/YoutubeSplitViewTryout";
import {
  ZTransferDemoContent,
  ZTransferDemoThumbnail
} from "./ZTransferDemo/ZTransferDemo";

import {
  SFXPowerSupplyContent,
  SFXPowerSupplyThumbnail
} from "./sfx-power-supply-study/index";

import { AliWangwangThumbnail, AliWangwangContent } from "./Aliwangwang-ubuntu";

import { h } from "preact";

let project_list = {
  tradingview_dashboard: ["tradingview dashboard", TradContent, TradThumbnail],
  appium_behave_notes: ["appium behave notes", AppiumContent, AppiumThumbnail],
  allwinner_v3s_tryout: [
    "AllwinnerV3sTryout",
    AllwinnerContent,
    AllWinnerThumbnail
  ],
  hk_data: ["HKData", HKDataContent, HKDataThumbnail],
  HKOWeatherBot: [
    "HKOWeatherBot",
    HKOWeatherBotContent,
    HKOWeatherBotThumbnail
  ],
  LinuxToolbox: ["LinuxToolbox", LinuxToolboxContent, LinuxToolboxThumbnail],
  OpenCVCarCounting: [
    "OpenCVCarCounting",
    OpencvCarContent,
    OpencvCarThumbnail
  ],
  PetPugProject: [
    "PetPugProject",
    PetPugProjectContent,
    PetPugProjectThumbnail
  ],
  Portfolio: ["Portfolio", PortfolioContent, PortfolioThumbnail],
  PrinterBoard: ["PrinterBoard", PrinterBoardContent, PrinterBoardThumbnail],
  Rthk31Rthk32LinuxViewer: [
    "Rthk31Rthk32LinuxViewer",
    RTHK31Content,
    RTHK31Thumbnail
  ],
  Slic3rBatchExport: ["Slic3rBatchExport", Slic3rContent, Slic3rThumbnail],
  Tappy: ["Tappy", TappyContent, TappyThumbnail],
  TraefikTryout: [
    "TraefikTryout",
    TraefikTryoutContent,
    TraefikTryoutThumbnail
  ],
  VoronTryout: ["VoronTryout", VoronTryoutContent, VoronTryoutThumbnail],
  YoutubeSplitViewTryout: [
    "YoutubeSplitViewTryout",
    YoutubeSplitContent,
    YoutubeSplitThumbnail
  ],
  ZTransferDemo: [
    "ZTransferDemo",
    ZTransferDemoContent,
    ZTransferDemoThumbnail
  ],
  SFXPowerSupplyStudy: [
    "SFXPowerSupplyStudy",
    SFXPowerSupplyContent,
    SFXPowerSupplyThumbnail
  ],
  AliWangwangUbuntu: [
    "AliWangwangUbuntu",
    AliWangwangContent,
    AliWangwangThumbnail
  ]
};

function showProject(proj_name) {
  let test = new project_list[proj_name][1]();
  return test.render();
}

export { project_list, showProject };
