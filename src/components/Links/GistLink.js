import style from './GistLink.scss';
import {Component} from 'preact';

// import ReactEmbedGist from 'react-embed-gist';
import Gist from 'react-gist';

// import Gist from 'react-gist';
// import ReactEmbedGist from 'react-embed-gist';

// class testGist extends React.Component
export default class GistLink extends Component{
  render({id}) {
    return (
      <div>
        {/* <ReactEmbedGist gist={this.props.gist_id} /> */}
        <Gist id={this.props.id} />
      </div>
    )
  }
}
