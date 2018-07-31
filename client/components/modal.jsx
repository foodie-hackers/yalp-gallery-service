import React from 'react';
import styled from 'styled-components';
import Photo from './photo';
import Arrow from './arrow';
import Info from './info';

// <img src='https://puu.sh/B5oWt/e263868ec2.png' />

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
  height: 93%;
  top: 50%
  left: 50%
  border-radius: 8px;
`;

const PhotoBox = styled.div`
  background-color: black;
  position: relative;
  float: left;
  height: 100%;
  width: 77%
  border-radius: 8px 0px 0px 8px;
`;

const InfoBox = styled.div`
  float: right;
  height: 100%;
  width: 23%;
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

const Close = styled.div`
  position: absolute;
  top: 1%;
  right: 15%;
  font-family: arial;
  cursor: pointer;
  color: grey;
  font-size: 12;
  :hover {
    color: white;
  }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: parseInt(this.props.index),
    };

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.closeEsc = this.closeEsc.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.closeEsc, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.closeEsc, false);
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

  closeEsc(e) {
    const { close } = this.props;
    if (e.keyCode === 27) {
      close();
    }
    window.removeEventListener('keyup', this.closeEsc, false);
  }

  render() {
    const { current } = this.state;
    const { photos } = this.props;
    const { captions } = this.props;
    const { close } = this.props;
    return (
      <div>
        <Overlay>
          <ModalBox>
            <Close type='button' onClick={close}>Close X</Close>
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
              <Info caption={captions[current].caption} />
            </InfoBox>
          </ModalBox>
        </Overlay>
      </div>
    );
  }
}

export default Modal;
