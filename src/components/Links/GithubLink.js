import { Component } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./GithubLink.scss";

export default ({ link, text }) => {
  return (
    <div className={style.GithubLinkContainer}>
      <a
        href={link}
        target="_blank"
        className={style.GithubLink}
        rel="noopener noreferrer"
      >
        {text || link}
        <div className={style.fa_icon}>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </div>
        <div className={style.fa_icon}>
          <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
        </div>
      </a>
    </div>
  );
};

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
