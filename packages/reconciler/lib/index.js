import React from 'react';
import createRendererForReact19 from './reconciler-31.js';
import createRendererForReact18AndLess from './reconciler-23.js';

const isReact19 = React.version.startsWith('19');
var index = isReact19
    ? createRendererForReact19
    : createRendererForReact18AndLess;

export { index as default };
