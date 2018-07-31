import React from 'react';
import styled from 'styled-components';

const Caption = styled.div`
  background-color: transparent;
  color: transparent;
  bottom: 0;
  width: 100%;
  position: absolute;
  font-family: arial;
  font-size: 12px;
`;

const Frame = styled.div`
  position: relative;
  display: flex;
  height: 220px;
  width: 220px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.13);
    position: relative;
    transition: 0.4s ease;
    z-index: 2;
    box-shadow: 0px 0px 15px 0px grey;
    div {
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      transition: 0.5s ease;
    }
  }
`;

const Thumb = ({
  photo, caption, toggleModal, index
}) => (
  <div>
    <Frame>
      <img src={photo} onClick={toggleModal} index={index} />
      <Caption>
        {caption}
      </Caption>
    </Frame>
  </div>
);

export default Thumb;
