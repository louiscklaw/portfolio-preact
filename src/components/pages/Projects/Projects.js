import { Component } from "preact";
import { Link } from "preact-router/match";

import { catalogue } from "../ProjectDetail/catalogue";

import { TradingviewDashboard } from "../ProjectDetail/index";
import "./Projects.css";

function getProjectDetailLink(href, text) {
  return (
    <>
      <Link href={"/project_detail/" + href}>{text}</Link>
    </>
  );
}

export default class Projects extends Component {
  render() {
    let project_list = [
      ["tradingview_dashboard", "tradingview dashboard"],
      ["tradingview_dashboard1", "tradingview dashboard1"],
      ["tradingview_dashboard2", "tradingview dashboard2"],
      ["tradingview_dashboard3", "tradingview dashboard3"],
      ["tradingview_dashboard4", "tradingview dashboard4"]
    ];

    let test_jsx = project_list.map(a => this.getProjectDetailLink(a[0], a[1]));
    return <div>{test_jsx}</div>;
  }
}
