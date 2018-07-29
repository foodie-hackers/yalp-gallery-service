import React from 'react';

const Photo = ({
  photo, caption, toggleModal, index
}) => (
  <div>
    <img src={photo} onClick={toggleModal} index={index} />
    <div>
      {caption}
    </div>
  </div>
);

export default Photo;
