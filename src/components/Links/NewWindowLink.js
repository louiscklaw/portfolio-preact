import style from './NewWindowLink.scss'

import {Component} from 'preact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({link, text}) => {
  return (
    <div className={style.NewWindowLink}>
      <a href={link} target="_blank" className={style.WindowLink} rel="noopener noreferrer" >
        {text || link}
        <div className={style.FaNewWinIcon}>
          <FontAwesomeIcon icon={['fas', 'external-link-alt' ]}/>
        </div>
      </a>
    </div>
  )
}