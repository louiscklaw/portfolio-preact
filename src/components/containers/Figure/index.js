import { Component } from "preact";

const style = {
  img: {
    maxWidth: "100%"
  },
  figure_caption: {
    textAlign: "center",
    textDecoration: "underline",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  figure: {
    paddingTop: "1em",
    paddingBottom: "1.5em"
  }
};

export default ({ img_src, caption }) => {
  return (
    <div style={style.figure}>
      <figure>
        <img src={img_src} alt={caption} style={style.img} />
      </figure>
      <figcaption style={style.figure_caption}>{caption}</figcaption>
    </div>
  );
};
