import React from 'react';

const Thumb = ({
  photo, caption, toggleModal, index
}) => (
  <div>
    <img width='250' src={photo} onClick={toggleModal} index={index} />
    <div>
      {caption}
    </div>
  </div>
);

export default Thumb;
