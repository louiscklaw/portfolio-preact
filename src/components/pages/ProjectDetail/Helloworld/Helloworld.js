import { Component } from "preact";

import {
  TradContent,
  TradThumbnail
} from "../TradingviewDashboard/TradingviewDashboard";

class HelloworldContent extends Component {
  render() {
    console.log("test helloworld content");
    return TradContent;
  }
}

export default HelloworldContent;
