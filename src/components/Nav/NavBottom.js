import { Component } from 'preact';
import { Link } from 'preact-router'

// import style from './NavBottom.scss'
import style from '../../style/index.js';

import {NewWindowLink} from '../index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBottom extends Component{
  render(){
    return(
      <div style={style.nav.nav_bottom}>
        <div style={style.nav.social_links_container}>

          <ul style={style.nav.social_links}>
            <li>
              <a style={style.nav.social_link_a} href="https://www.facebook.com/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook' ]}/>
              </a>

            </li>
            <li>
              <a style={style.nav.social_link_a} href="https://github.com/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github' ]}/>
              </a>
            </li>
            <li>
              <a style={style.nav.social_link_a} href="https://keybase.io/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'keybase' ]}/>
              </a>
            </li>
            <li>
              <a style={style.nav.social_link_a} href="https://www.linkedin.com/in/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin' ]}/>
              </a>
            </li>
            <li>
              <a style={style.nav.social_link_a} href="https://louislabs.slack.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'slack' ]}/>
              </a>
            </li>
            <li>
              <a style={style.nav.social_link_a} href="https://t.me/louislabs" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'telegram' ]}/>
              </a>
            </li>
          </ul>
        </div>

        <div style={style.nav.build_status}>
          <a href="https://travis-ci.org/louiscklaw/portfolio-preact/branches" target="_blank" rel="noopener noreferrer">
            <img src="https://travis-ci.org/louiscklaw/portfolio-preact.svg?branch=master" alt="" srcSet="" />
          </a>
        </div>

        <div style={style.nav.source_code_link}>
          <NewWindowLink link="//github.com/louiscklaw/portfolio-preact" text="source code" />
        </div>


        <div style={style.nav.credit_container}>
          <span role="img" aria-label="heart">❤️</span> coded by louiscklaw.<br />
          Built on the solder of <br />

          <div style={style.nav.credits_link}>
            <a href="/credits">THESE GIANTS</a>
          </div>

        </div>
      </div>
    )
  }
}