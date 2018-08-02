import React from 'react';
import styled from 'styled-components';

const Caption = styled.div`
  background-color: transparent;
  color: transparent;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px 2.5px 5px 2.5px;
  height: 42px;
  position: absolute;
  font-family: arial;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;

`;

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  min-width 30px;
  margin-right: 8px;
  visibility: hidden;
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
      visibility: visible;
    }
  }
`;

const Thumb = ({
  photo, caption, toggleModal, index, center
}) => (
  <div>
    <Frame style={center ?
      {
        transform: 'scale(1.13)',
        zIndex: '2'
      } : {}}
    >
      <img src={photo} onClick={toggleModal} index={index} />
      <Caption style={center ?
        {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white'
        } : {}}
      >
        <Avatar style={center ?
          {
            visibility: 'visible'
          } : {}}>
          <img src="https://s3-us-west-1.amazonaws.com/review-list/Photos/Justin+L..jpg" />
        </Avatar>
        <span style={{ height: '30px' }}>
          {caption}
        </span>
      </Caption>
    </Frame>
  </div>
);

export default Thumb;
