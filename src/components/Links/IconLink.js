import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NewWindowLink.css'

export default ({link, text, append_icon}) => {
  return (
    <div >
      <a href={link} target="_blank" className="window-link" rel="noopener noreferrer" >
        {text || link}
        <div className="atest">
          <FontAwesomeIcon icon={['fas', 'external-link-alt' ]}/>
      </div>
      </a>
    </div>
  )
}
