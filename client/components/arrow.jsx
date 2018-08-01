import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  font-size: 25px;
  z-index: 1;
  :hover {
    color: rgba(255, 255, 255, 1);
    transform:scale(1.5,4.5);
  }
  transform:scale(1,3);
`;

const Arrow = ({ click, icon }) => (
  <Button
    onClick={click}
  >
    { icon }
  </Button>
);

export default Arrow;
