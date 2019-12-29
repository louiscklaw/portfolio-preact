import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './source-code.css'

export default ({lang, children}) => {
  return (
    <div>
      <SyntaxHighlighter language={lang} style={monokai} >
        {children.trim() }
      </SyntaxHighlighter>
    </div>
  )
}
