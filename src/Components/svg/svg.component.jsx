import React from 'react';

const SVG = ({ className, url }) => (
  <svg className={className}>
    <use href={url} />
  </svg>
);

export default SVG;
