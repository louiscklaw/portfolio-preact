import { Component } from 'preact';

import style from './NewWindowLinkStyle.js';

// import style from './NewWindowLink.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ link, text }) => {
  return (
    <div >
      <a href={link} target="_blank" style={style.WindowLink} rel="noopener noreferrer" >
        {text || link}
        <div style={style.FaNewWinIcon}>
          <FontAwesomeIcon icon={['fas', 'external-link-alt' ]}/>
        </div>
      </a>
    </div>
  )
}