import React from 'react';
import styled from 'styled-components';

// height: 80vh;
// max-width: 100%;

const Frame = styled.span`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const Photo = ({
  photo, toggleModal, index
}) => (
    <Frame>
      <img src={photo} onClick={toggleModal} index={index} />
    </Frame>
);

export default Photo;
