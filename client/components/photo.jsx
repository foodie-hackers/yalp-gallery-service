import React from 'react';

const Photo = ({ photo, caption, size, toggleModal, index }) => (
  <div>
    <img width={size} src={photo} onClick={toggleModal} index={index}/>
    <div>
      {caption}
    </div>
  </div>
);

export default Photo;
