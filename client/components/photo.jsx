import React from 'react';

const Photo = ({ photo, caption }) => (
  <div>
    <img src={photo} />
    <div>
      {caption}
    </div>
  </div>
);

export default Photo;
