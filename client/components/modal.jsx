import React from 'react';
import ReactDOM from 'react-dom';
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

const PhotoBar = styled.div`
  height: 30px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-family: arial;
  border-bottom-left-radius: 8px;
`;

const Count = styled.div`
  color: white;
  padding: 3px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  margin: 0 auto;
  opacity: 0.5;

`;

const Button = styled.span`
  display: flex;
  margin-left 3px;
  align-items: center;
  color: white;
  padding: 3px
  font-weight: 550;
  opacity: 0.5;
  img {
    padding: 3px;
  }
  :hover {
    opacity: 1;
  }
`;

const Action = styled.div`
  display: flex;
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
    this.prevKey = this.prevKey.bind(this);
    this.nextKey = this.nextKey.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.closeEsc, true);
    window.addEventListener('keyup', this.prevKey, false);
    window.addEventListener('keyup', this.nextKey, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick(e) {
    const { close } = this.props;
    if (e.target.getAttribute('class') === 'sc-iwsKbI jikBz') {
      close();
    }
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

  prevKey(e) {
    if (e.keyCode === 37) {
      this.prev();
    }
  }

  nextKey(e) {
    if (e.keyCode === 39) {
      this.next();
    }
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
              <PhotoBar>
                <Button>
                  <img src="https://s3-us-west-1.amazonaws.com/yalp-photos/Browse.png" />
                  Browse all
                </Button>
                <Count>
                  {current + 1}
                  &nbsp;of&nbsp;
                  {photos.length}
                </Count>
                <Action>
                  <Button>
                    <img src="https://s3-us-west-1.amazonaws.com/yalp-photos/Share.png" />
                    Share
                  </Button>
                  <Button>
                    <img src="https://s3-us-west-1.amazonaws.com/yalp-photos/Comp.png" />
                    Compliment
                  </Button>
                  <Button style={{ opacity: '1' }}>
                    <img src="https://s3-us-west-1.amazonaws.com/yalp-photos/Flag.png" />
                  </Button>
                </Action>
              </PhotoBar>
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
