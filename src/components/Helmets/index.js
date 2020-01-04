import {Component} from 'preact';
import Helmet from 'preact-helmet';

export default ({url}) => {
  return(
    <>
      <Helmet
        meta={[
          {property: "og:url", content: url}
        ]}
      />
    </>
  )
}