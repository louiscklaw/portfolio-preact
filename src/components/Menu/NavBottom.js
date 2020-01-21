import { Component } from 'preact';
import {useContext} from 'preact/hooks';

import style from './style';

import {NewWindowLink} from '../index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {BuildInfo} from '../../context/index';

export default class NavBottom extends Component{
  render(){
    var build_info_context = useContext(BuildInfo);
    var {BUILD_VER, BUILD_DATE} = build_info_context;

    return(
      <div style={style.nav_bottom}>
        <div style={style.social_links_container}>

          <ul style={style.social_links}>
            <li>
              <a style={style.social_link_a} href="https://www.facebook.com/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook' ]}/>
              </a>

            </li>
            <li>
              <a style={style.social_link_a} href="https://github.com/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github' ]}/>
              </a>
            </li>
            <li>
              <a style={style.social_link_a} href="https://keybase.io/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'keybase' ]}/>
              </a>
            </li>
            <li>
              <a style={style.social_link_a} href="https://www.linkedin.com/in/louiscklaw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin' ]}/>
              </a>
            </li>
            <li>
              <a style={style.social_link_a} href="https://louislabs.slack.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'slack' ]}/>
              </a>
            </li>
            <li>
              <a style={style.social_link_a} href="https://t.me/louislabs" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'telegram' ]}/>
              </a>
            </li>
          </ul>
        </div>

        <div style={style.build_status}>
          <a href="https://travis-ci.com/louiscklaw/portfolio-preact/branches" target="_blank" rel="noopener noreferrer">
            <img src="https://travis-ci.com/louiscklaw/portfolio-preact.svg?branch=master" alt="" srcSet="" />
          </a>
        </div>

        <div style={style.source_code_link}>
          <NewWindowLink link="//github.com/louiscklaw/portfolio-preact" text="source code" />
        </div>

        <div style={style.credit_container}>
          <span role="img" aria-label="heart">❤️</span> coded by louiscklaw.<br />
          Built on the solder of <br />
          <div style={style.credits_link_container}>
            <a style={style.credits_link} href="/credits">THESE GIANTS</a>
          </div>
        </div>

        <div>
          {BUILD_VER}
          {BUILD_DATE}
        </div>

      </div>
    )
  }
}