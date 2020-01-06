import { render } from 'preact';

import Prism from 'prismjs';
import Helmet from "preact-helmet";

const code = `var data = 1;`;
const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

export default () => {

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