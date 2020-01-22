import { Component } from 'preact';
import { useContext } from 'preact/hooks';

import { Theme } from '../../../context/index'
import theme_setting from '../../../style/theme'

// import theme from '../../../style/theme'

export default class About extends Component {
	render(){
    const theme = useContext(Theme);
    const is_mobile = theme.isMobile;

    const style={
      page: {
        display: 'flex',
        flexFlow: 'column',
        flexWrap: 'nowrap',

        padding: is_mobile? '1em 1em' :'5em 10em',
        // paddingLeft: '10em',
        // paddingRight: '10em',
        // paddingTop: '5em',
        // paddingBottom: '10em'
      },

      page_header: {
        fontSize: '2em',
        paddingBottom: '1.5em',
        width: '100%',
      },

      paragraph_body: {
        /* this one should be left */
        /* TODO: remove me */
        borderWidth: '1px',
        borderStyle: 'dotted',
        borderColor: 'yellow',
        width: '100%',
      },

      paragraph_body_section: {
        paddingTop: '1em',
        paddingBottom: '1em',
      },

      paragraph_body_h4: {
        paddingTop: '1em',
        paddingBottom: '1em',
      },

      pragraph_title: {
        width: '67%',
      }
    }


    return(
      <div style={style.page}>

        <div style={style.page_header}>
          About Me
        </div>

        <div style={style.paragraph_body}>
          <section style={style.paragraph_body_section}>
            <h4 style={style.paragraph_body_h4}>Languages:</h4>
            <p>Cantonese, English, Mandarin, JavaScript, Java, Python, PHP, C</p>

          </section>

          <section style={style.paragraph_body_section}>
            <h4 style={style.paragraph_body_h4}>Hobbies:</h4>
            <p>HPC hardware, VR gaming, Rhythm games (BMS/Taiko/Beat Saber), Music composing, Drawing</p>
          </section>

          <section style={style.paragraph_body_section}>
            <h4 style={style.paragraph_body_h4}>Specialization:</h4>
            <p>Web scraping, Backend systems, Native Android application development, Obfuscation</p>
          </section>

          <section style={style.paragraph_body_section}>
            <h4 style={style.paragraph_body_h4}>Other skills:</h4>
            <p>Linux servers management, Web frontend (jquery/materialize.css/nuxt.js), SQL (Postgres, MySQL/MariaDB), NoSQL (Redis), Realtime DB (Firebase), Message Queues (bull), ORM (sequalize), Desktop applications (wxpython/tkinter/electron), Serverless (Cloudflare Worker/Firebase Cloud Functions), PaaS (Heroku), Docker with docker-compose, nginx (Load balancing + Failover), Minecraft plugins, Django, Simple JS/Canvas games, OCR/captcha study, KVM (Performance optimization, GPU Passthrough by OVMF), AUR packages maintaining, After Effects, Sony Vegas</p>
          </section>

          <section style={style.paragraph_body_section}>
            <h4 style={style.paragraph_body_h4}>Worth mentioning:</h4>
            <p>ABOUT This is Louis Law. Handy - Hi. inc. Quality Assurance Engineer(Automation) Sierrawireless validation engineer CMHK Engineer(RAN) City University of Hong Kong Tsing Yi IVE Kwun Tong Ti</p>
          </section>
        </div>
      </div>
		)
	}
}
