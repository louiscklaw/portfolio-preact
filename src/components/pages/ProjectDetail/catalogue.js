import style from './catalogue.scss'

import {Component} from 'preact'
import {Link} from 'preact-router/match'
// import {Link} from 'react-router-dom';

import {project_list} from './config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class ProjectCatalogue extends Component{
  getProjectDetailLink(href, text, thumbnail_path){
    var style = {
      li:{
        width: '25%',
        height: '25%'
      },
      project_thumbnail_container:{
        width: '100%', height: '100%'
      },
      project_thumbnail_background:{
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundImage:`url("${thumbnail_path}")`
      },
      blackBackdrop:{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(1,1,1,0.5)',
        position: 'relative',
        top: '-100%',
        display:'none',
        backdropFilter: 'blur(2px)',
      },
      thumbnailTitleContainer: {
        width: '100%',
        position: 'relative',
        top: '25%',
        textAlign: 'center',
      },
      thumbnailTitle: {
        width: '100%',
        height: '100%',
        color: '#fff',
        fontWeight: '700',
      }

    }
    return (
      <>
        <li style={style.li}>
          <Link href={'/project_detail/'+href}>
            <div style={style.project_thumbnail_container}>
              <div style={style.project_thumbnail_background}>
              </div>
              <div style={style.blackBackdrop}>
                <div className={style.thumbnailTitleContainer} >
                  <div className={style.MagniferIcon}>
                    <FontAwesomeIcon className="fa-2x" icon={['fas', 'search' ]}/>
                  </div>
                  <p>
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </>
    )
  }

  render(){
    const style = {
      ul:{
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
        padding: '0px',
        margin: '0px',
        boxSizing: 'borderBox',
      }
    }

    // let test_jsx = project_list.map( a => getProjectDetailLink(a[0], a[1]))
    let test_jsx = Object.keys(project_list)
      .map( k => this.getProjectDetailLink(k, project_list[k][0], project_list[k][2]))

    return(
      <div>
        <ul style={style.ul}>
          {test_jsx}
        </ul>
      </div>
    )
  }
}