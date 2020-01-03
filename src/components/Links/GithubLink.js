import './GithubLink.scss';

import {Component} from 'preact';


export default class GithubLink extends Component{
  render(){
    return (
      <div className="github-link">
        githublink not updated
      </div>
    )
  }
}


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// export default ({link, text}) => {
//   return (
//     <div className="github-link">
//       <a href={link} target="_blank" className="window-link" rel="noopener noreferrer">
//         {text || link}
//         <div className="fa_icon">
//           <FontAwesomeIcon icon={['fab', 'github' ]} />
//         </div>
//         <div className="fa_icon">
//           <FontAwesomeIcon icon={['fas', 'external-link-alt' ]} />
//         </div>
//       </a>
//     </div>
//   )
// }