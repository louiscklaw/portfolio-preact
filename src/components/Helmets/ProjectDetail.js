
import {Component} from 'preact';
import Helmet from "preact-helmet";

class TitleHelmet extends Component{
  render(){
    return(
      <>
        <Helmet
          defaultTitle="louislabs.com"
          titleTemplate="%s | louislabs.com"
        />
      </>
    )
  }
}


export default ({
  title,
  description,
  image
}) => {

  if (description.length < 50) {
    console.error('error from preact-helmet, description too short');
  }

  return (
    <div>
      <TitleHelmet />
      <Helmet
        title={title}

        meta={[
          {name: "description", content: description},

          {property: "og:type", content: "article"},
          {property: "og:title", content: title},
          ,
          {property: "og:image", content: image},
          {property: "og:description", content: description}

        ]}

        link={[
          {rel: "canonical", href: "http://mysite.com/example"},
          {rel: "apple-touch-icon", href: "http://mysite.com/img/apple-touch-icon-57x57.png"},
          {rel: "apple-touch-icon", sizes: "72x72", href: "http://mysite.com/img/apple-touch-icon-72x72.png"}
        ]}

      />
    </div>

  )
}