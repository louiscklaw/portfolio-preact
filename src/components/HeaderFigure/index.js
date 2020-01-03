import style from './style.scss';

import { Component } from 'preact';

export default ({img_src, caption}) => {
  return(
    <div className={style.HeaderFigure} >
      <figure>
        <img src={img_src} alt="" />
      </figure>
      <figcaption className={style.HeaderFigureCaption}>{caption}</figcaption>
    </div>
  )
}