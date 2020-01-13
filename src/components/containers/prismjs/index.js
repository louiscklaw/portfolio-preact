import { Component } from 'preact';

import Prism from 'prismjs';
import Helmet from "preact-helmet";

const code = `var data = 1;`;
const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

class PrismBash extends Component{
  render({source_code}){
    const html = Prism.highlight(source_code, Prism.languages.javascript, 'javascript');

    return(
      <div>
        <Helmet
          link={[
            {rel:"stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-tomorrow.css"}
          ]}
        />

        <pre>
          <code class="language-js">
            <div dangerouslySetInnerHTML={{__html:html}}>
            </div>
          </code>
        </pre>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/prism.js"></script>

      </div>
    )
  }
}

class PrismHelloworld extends Component {
  render(){
    return(
      <div>
        <Helmet
          link={[
            {rel:"stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-tomorrow.css"}
          ]}
        />

        test import prism
        <pre>
          <code class="language-js">
            <div dangerouslySetInnerHTML={{__html:html}}>
            </div>
          </code>
        </pre>

      </div>
    )
  }
}

export {PrismHelloworld, PrismBash}