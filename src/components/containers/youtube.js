import {Component} from 'preact';

import './youtube.css'

export default class YoutubeContainers extends Component{
  render(){
    let video_id = src.split('/').pop()

    return (
      <div className="test-container">
        <div className="video-container">
          <iframe title={'video_id_'+video_id}
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    )
  }
}

// export default ({src}) => {
//   let video_id = src.split('/').pop()
//   return (
//     <div className="test-container">
//       <div className="video-container">
//         <iframe title={'video_id_'+video_id}
//           src={src}
//           frameBorder="0"
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>

//     </div>
//   )
// }