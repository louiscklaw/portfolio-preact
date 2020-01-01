import {Component} from 'preact';

import {Link} from 'preact-router'

import style from './NavBottom.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBottom extends Component{
  render(){
    return(
      <div className={style.NavBottom}>
        <div className={style.socialLinksContainer}>

          <ul className={style.socialLinks}>
            <li>
              <a href="https://www.facebook.com/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook' ]}/>
              </a>

            </li>
            <li>
              <a href="https://github.com/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github' ]}/>
              </a>
            </li>
            <li>
              <a href="https://keybase.io/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'keybase' ]}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin' ]}/>
              </a>
            </li>
            <li>
              <a href="https://louislabs.slack.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'slack' ]}/>
              </a>
            </li>
            <li>
              <a href="https://t.me/louislabs" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'telegram' ]}/>
              </a>
            </li>
          </ul>
        </div>

        <div className={style.buildStatus}>
          <a href="//travis-ci.org/louiscklaw/portfolio-react" target="_blank" rel="noopener noreferrer">
            <img src="https://travis-ci.org/louiscklaw/portfolio-react.svg?branch=master" alt="" srcSet="" />
          </a>
        </div>

        <div className={style.sourceCodeLink}>
          <a href="//github.com/louiscklaw/portfolio-react" target="_blank" rel="noopener noreferrer">
            source code
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>


        <div className={style.creditContainer}>
          <span role="img" aria-label="heart">❤️</span> coded by louiscklaw.<br />
          Built on the solder of <br />
          <Link to="/credits"> THESE GIANTS</Link>
        </div>
      </div>
    )
  }
}