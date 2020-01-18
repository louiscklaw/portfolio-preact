import { Component } from 'preact';

import style from './style.js';

export default class About extends Component {
	render(){
		return(
      <div style={style.page_about}>

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
