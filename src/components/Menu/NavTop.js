import { Component } from "preact";

// import style from '../../style/index.js';
// import style from './style';

import { avatar } from "./res";

export default class NavTop extends Component {
  render() {
    // console.log('nav_top', this.props.style);
    var show_hi_hands = this.props.style.windowInnerWidth > 1140;
    const { showAvatar } = this.props.style;
    const style = {
      nav_top: {
        height: "33vh",
        textAlign: "center"
      },
      nav_top_greeting_plate: {
        fontSize: "2em",
        color: "#fff",
        textAlign: "center",
        paddingTop: "3em"
      },
      nav_top_avatar: {
        display: showAvatar ? "block" : "none",
        width: "100%",
        textAlign: "center"
      },
      nav_top_avatar_img: {
        width: "115px",
        height: "115px",
        marginTop: "50px",
        borderRadius: "50%"
      },
      hi_container: {
        display: show_hi_hands ? "unset" : "none"
      }
    };

    return (
      <div style={style.nav_top} id="nav_top">
        <div style={style.nav_top_greeting_plate}>
          Hi, I'm louis{" "}
          <span style={style.hi_container} role="img" aria-label="Hi">
            👋
          </span>
        </div>
        <div style={style.nav_top_avatar} id="avatar_img_circle">
          <img src={avatar} style={style.nav_top_avatar_img} />
        </div>
      </div>
    );
  }
}
