import { Component } from "preact";

// import style from "./YoutubeContainer.scss";

const container_style = {
  position: "relative",
  paddingBottom: "56.25%",
  paddingTop: "30px",
  height: "0",
  overflow: "hidden",
  boxShadow: "0px 0px 5px 0px rgba(64, 64, 64, 0.5)",
  maxWidth: "500px"
};

const container_title_style = {
  color: "black",
  fontWeight: "700",
  textDecoration: "underline"
};

const videoWrapper = {
  position: "relative",
  paddingBottom: "56.25%",
  paddingTop: "25px",
  height: "0"
};

const videoWrapper_iframe = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%"
};

class YoutubeContainer extends Component {
  state = {};
  render() {
    return (
      <div style={{ maxWidth: "500px" }}>
        <div style={videoWrapper}>
          <iframe
            style={videoWrapper_iframe}
            width="560"
            height="349"
            src={"https://www.youtube.com/embed/" + this.props.vid}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default YoutubeContainer;
