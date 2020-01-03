import style from './NewWindowLink.css'

import {Component} from 'preact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({link, text}) => {
  return (
    <div >
      <a href={link} target="_blank" className={style.windowLink} rel="noopener noreferrer" >
        {text || link}
        <div className={style.atest}>
          <FontAwesomeIcon icon={['fas', 'external-link-alt' ]}/>
      </div>
      </a>
    </div>
  )
}