import React from 'react';

import { Graphviz } from 'graphviz-react';

import './graphviz.css';

export default ({dot}) => {
  return (
    <div>
      <Graphviz dot={dot} />
    </div>
  )
}