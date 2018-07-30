import React from 'react';
import styled from 'styled-components';
import Photo from './photo';
import Arrow from './arrow';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 5;
`;

const ModalBox = styled.div`
  background: white;
  width: 70%;
  height: 90%;
  top: 50%
  left: 50%
`;

const PhotoBox = styled.div`
  background-color: black;
  position: relative;
  float: left;
  height: 100%;
  width: 80%
`;

const InfoBox = styled.div`

  float: right;
  height: 100%;
  width: 20%
`;

const Text = styled.p`
  font-family: arial;
  padding: 10px;
`;

const Left = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 10px;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 3;
  user-select: none;
`;

const Right = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  right: 0;
  user-select: none;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: parseInt(this.props.index),
    };

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  prev() {
    const { current } = this.state;
    const { photos } = this.props;
    const last = photos.length - 1;
    const index = current === 0 ? last : current - 1;
    this.setState({ current: index });
  }

  next() {
    const { current } = this.state;
    const { photos } = this.props;
    const last = photos.length - 1;
    const index = current === last ? 0 : current + 1;
    this.setState({ current: index });
  }

  render() {
    const { current } = this.state;
    const { photos } = this.props;
    const { captions } = this.props;
    return (
      <div>
        <Overlay>
          <ModalBox>
            <PhotoBox>
              <Left>
                <Arrow click={this.prev} icon="<" />
              </Left>

              <Right>
                <Arrow click={this.next} icon=">" />
              </Right>

              <Photo photo={photos[current].url} />
            </PhotoBox>
            <InfoBox>
              <img src='https://puu.sh/B5oxj/f0d0ac2f3a.png' />
              <Text>
                {captions[current].caption}
              </Text>
              <img src='https://puu.sh/B5oWt/e263868ec2.png' />
            </InfoBox>
          </ModalBox>
        </Overlay>
      </div>
    );
  }
}

export default Modal;
