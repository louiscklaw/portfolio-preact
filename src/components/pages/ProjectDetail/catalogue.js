import {Component} from 'preact'
import { useContext } from 'preact/hooks';

import {project_list} from './config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Theme} from '../../../context/index';

export default class ProjectCatalogue extends Component{


  proj_thumbnail_mouseover(e){
    var theme = useContext(Theme);
    var {is_mobile} = theme;

    var target_element = e.target;
    var target_backdrop = target_element.parentNode.querySelector('.blackBackdrop')

    if (is_mobile){

    }else{
      if (target_backdrop != null){
        target_backdrop.style.display="block";
      }
    }
  }

  proj_thumbnail_mouseleave(e){
    var theme = useContext(Theme);
    var {is_mobile} = theme;

    var target_element = e.target;
    var target_backdrop = target_element.parentNode.querySelector('.blackBackdrop')

    if (is_mobile){

    }else{
      if (target_backdrop != null){
        target_backdrop.style.display="none";
      }
    }
  }

  getProjectDetailLink(href, text, thumbnail_path){
    var theme = useContext(Theme);
    var is_mobile = theme.isMobile;

    var style = {
      li:{
        width: is_mobile? '100%':'25%',
        height: is_mobile? '20%':'25%',
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
        display:is_mobile? 'block': 'none',
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
      },
      a:{
        textDecoration: 'none',
        color: '#fff',
        fontWeight: '700',
      },
      p:{
        fontSize: '1.2em',
        fontFamily: "Montserrat,sans-serif",
      },
      MagniferIcon:{
        marginBottom: '1.1em',
      }

    }
    return (
      <>
        <li style={style.li} >
          <a href={'/project_detail/'+href} style={style.a}>
            <div style={style.project_thumbnail_container} className="project_thumbnail" onMouseOver={this.proj_thumbnail_mouseover} onMouseLeave={this.proj_thumbnail_mouseleave}>
              <div style={style.project_thumbnail_background}>
              </div>
              <div style={style.blackBackdrop} className="blackBackdrop">
                <div style={style.thumbnailTitleContainer} >
                  <div style={style.MagniferIcon}>
                    <FontAwesomeIcon className="fa-2x" icon={['fas', 'search' ]}/>
                  </div>
                  <p style={style.p}>
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </a>
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