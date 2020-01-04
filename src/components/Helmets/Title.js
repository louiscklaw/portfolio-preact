import {Component} from 'preact';
import Helmet from 'preact-helmet';

class DefaultTitleHelmet extends Component{
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


class TitleHelmet extends Component{
  render({title}){
    return(
      <>
        <DefaultTitleHelmet />
        <Helmet title={title} />
      </>
    )
  }
}

export default TitleHelmet
