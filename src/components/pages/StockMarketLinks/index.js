import { Component } from "preact";
import { useContext } from "preact/hooks";

import { Theme } from "../../../context/index";
import theme_setting from "../../../style/theme";
import { NewWindowLink } from "../..";

// import theme from '../../../style/theme'

function getStockMarketLinks(item_name) {
  return (
    <div>
      <NewWindowLink
        link={`https://www.facebook.com/marketplace/hongkong/search/?query=${item_name}&vertical=C2C&sort=CREATION_TIME_DESCEND`}
        text={"facebook selling: " + item_name}
      />
      <br />
    </div>
  );
}

export default class About extends Component {
  render() {
    const theme = useContext(Theme);
    const is_mobile = theme.isMobile;

    const style = {
      page: {
        display: "flex",
        flexFlow: "column",
        flexWrap: "nowrap",

        padding: is_mobile ? "1em 1em" : "5em 10em"
        // paddingLeft: '10em',
        // paddingRight: '10em',
        // paddingTop: '5em',
        // paddingBottom: '10em'
      }
    };

    return (
      <div style={style.page}>
        Stock market links
        <NewWindowLink
          link={`https://www.bnppwarrant.com/tc/market/money-flow`}
          text="法巴資金流"
        />
      </div>
    );
  }
}
