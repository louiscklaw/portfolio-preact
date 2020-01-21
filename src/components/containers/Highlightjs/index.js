import {Component} from 'preact';

import 'highlight.js/styles/vs2015.css'

// import "./Highlightjs.scss"

// import hljs from 'highlight.js'

class CodeHighlight extends Component {
  getCodeId(){
    return `code_${Math.random().toString().slice(2,99)}`
  }

  constructor(){
    super()
    this.state={
      code_id: this.getCodeId(),
    }
  }

  componentDidMount() {
    document.querySelectorAll( `#${this.state.code_id}` )
      .forEach( ( block ) => {
        hljs.highlightBlock( block )
      } );
  }

  render() {
    return (
      <code id={this.state.code_id}>
        {this.props.children}
      </code>
    );
  }
}

class HighlightJavascript extends Component{
  render(){
    return(
      <CodeHighlight className="Javascript">
        {this.props.children}
      </CodeHighlight>
    )
  }
}

class HighlightPython extends Component{
  render(){
    return(
      <CodeHighlight className="Python">
        {this.props.children}
      </CodeHighlight>
    )
  }
}

class HighlightBash extends Component{
  render(){
    return(
      <CodeHighlight className="bash">
        {this.props.children}
      </CodeHighlight>
    )
  }
}

export {
  CodeHighlight,
  HighlightJavascript,
  HighlightPython,
  HighlightBash,
};