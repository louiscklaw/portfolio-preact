
import {Component} from 'preact';
import Helmet from "preact-helmet";

export default ({title}) => {
  return (
    <div>
      <Helmet title={`${title} | louislabs.com`} />
    </div>

  )
}