import {Component} from 'preact';
import Helmet from 'preact-helmet';

import {active_config} from '../../config/config'

console.log(active_config.ROOT_URL);

export default ({slug}) => {
  console.log('slug,', slug);

  return(
    <>
      <Helmet
        meta={[
          {property: "og:url", content: slug}
        ]}
      />
    </>
  )
}