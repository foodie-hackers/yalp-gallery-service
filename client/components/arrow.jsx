import React from 'react';

const Arrow = ({ click, icon }) => (
  <div
    onClick={click}>
    { icon }
  </div>
);

export default Arrow;
