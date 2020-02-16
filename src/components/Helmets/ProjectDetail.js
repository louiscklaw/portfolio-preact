import { Component } from "preact";
import Helmet from "preact-helmet";

class TitleHelmet extends Component {
  render() {
    return (
      <>
        <Helmet
          defaultTitle="louislabs.com"
          titleTemplate="%s | louislabs.com"
        />
      </>
    );
  }
}

export default ({ title, description, image }) => {
  if (description.length < 50) {
    console.error("error from preact-helmet, description too short");
  }

  // {/* https://css-tricks.com/essential-meta-tags-social-media/ */}

  return (
    <div>
      <TitleHelmet />
      <Helmet
        title={title}
        meta={[
          { name: "description", content: description },

          { property: "og:type", content: "article" },
          { property: "og:title", content: title },
          ,
          { property: "og:image", content: image },
          { property: "og:description", content: description },

          { name: "twitter:title", content: title },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: image },
          { name: "twitter:card", content: description }
        ]}
      />
    </div>
  );
};
