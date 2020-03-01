import style from "./style.scss";

import { Component } from "preact";

export default ({ img_src, caption, figure_style }) => {
  return (
    <div className={style.HeaderFigureContainer}>
      <figure>
        <img src={img_src} alt="" style={figure_style} />
      </figure>
      <figcaption className={style.HeaderFigureCaption}>{caption}</figcaption>
    </div>
  );
};
