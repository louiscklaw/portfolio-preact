import { Component } from "preact";

import style from "./YoutubeContainer.scss";

class YoutubeContainer extends Component {
  state = {};
  render() {
    return (
      <div className={style.youtubeVideoContainer}>
        <div className={style.videoContainer}>
          <iframe
            title="youtube-iframe"
            width="853"
            height="480"
            src={"https://www.youtube.com/embed/" + this.props.vid}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
          />
        </div>
        <div className={style.videoTitle}>{this.props.video_title}</div>
      </div>
    );
  }
}

export default YoutubeContainer;
