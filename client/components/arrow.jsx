import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  font-size: 50px;
  z-index: 1;
  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Arrow = ({ click, icon }) => (
  <Button
    onClick={click}>
    { icon }
  </Button>
);

export default Arrow;
