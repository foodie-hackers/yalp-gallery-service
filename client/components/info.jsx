import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  background-color: white;
  font-size: 12px;
  font-weight: bold;
  height: 28px;
  border: solid #ccc 1px;
  color: #666;
`;

const Date = styled.div`
  font-family: arial;
  font-size: 12px;
  color: #bbb;
  padding-bottom: 15px;
  user-select: none;
`;

const Question = styled.div`
  font-family: arial;
  font-size: 12px;
  font-weight: bold;
  color: #666;
  padding-bottom: 5px;
  user-select: none;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-family: arial;
  font-size: 14px;
  font-weight: bold;
  color: blue;
  padding-bottom: 10px;
`;

const Text = styled.span`
  padding-left: 3px;
  padding-right: 7px;
  font-family: arial;
  font-size: 12px;
  font-weight: bold;
  color: #666;
  vertical-align: 2px;
  user-select: none;
`;

const Footer = styled.div`

`;

const Box = styled.div`
  padding: 15px;
`;

const Cap = styled.div`
  font-family: arial;
  font-size: 14px;
  padding-bottom: 10px;
  user-select: none;
`;

const Info = ({ caption }) => (
  <Box>
    <Header>
      <img width='30px' height='30px' style={{marginRight: '7px', borderRadius: '5px'}}src='https://s3-us-west-1.amazonaws.com/review-list/Photos/Justin+L..jpg' />
      <div>
        <div>
          Justin L.
        </div>
        <img width='18px' src='https://s3-us-west-1.amazonaws.com/yalp-photos/people.svg' />
        <Text>
          494
        </Text>
        <img width="18px" src='https://s3-us-west-1.amazonaws.com/yalp-photos/star.svg' />
        <Text>
          123
        </Text>
      </div>
    </Header>
    <Cap>
      {caption}
    </Cap>
    <Footer>
      <Date>
        October 5, 2017
      </Date>

      <Question>
        Was this photo ...?
      </Question>
      <Button type="button">
        <img style={{ paddingRight: '0.4em' }} src="https://s3-us-west-1.amazonaws.com/yalp-photos/UpArrow.png" />
        Helpful 1
      </Button>
      <span>&nbsp;</span>
      <Button type="button">
        <img style={{ paddingRight: '0.4em' }} src="https://s3-us-west-1.amazonaws.com/yalp-photos/DownArrow.png" />
        Not Helpful
      </Button>
    </Footer>
  </Box>
);

export default Info;
