import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Modal from './modal';
import Thumb from './thumb';
import Arrow from './arrow';

const Carousel = styled.div`
  display: flex;
  position: relative;
  width: 660px;
  margin: auto;
  align-items: center;
`;

const Left = styled.span`
  cursor: pointer;
  position: absolute;
  padding: 20px;
  align-items: center;
  z-index: 3;
  user-select: none;
`;

const Right = styled.span`
  cursor: pointer;
  position: absolute;
  padding: 20px;
  align-items: center;
  z-index: 3;
  right: 0;
  user-select: none;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: 'temporary',
      captions: 'temporary',
      modal: false,
      modalIndex: null,
      current: 1,
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    $.ajax({
      type: 'GET',
      url: 'restaurants/1/photos',
      success: (data) => {
        this.setState({ photos: data.photo, captions: data.caption });
      },
    });
  }

  toggleModal(e) {
    const { modal } = this.state;
    const index = e.target.getAttribute('index');

    this.setState({ modal: !modal, modalIndex: index });
  }

  prev() {
    const { current } = this.state;
    const { photos } = this.state;
    const last = photos.length - 1;
    const index = current === 0 ? last : current - 1;
    this.setState({ current: index });
  }

  next() {
    const { current } = this.state;
    const { photos } = this.state;
    const last = photos.length - 1;
    const index = current === last ? 0 : current + 1;
    this.setState({ current: index });
  }

  render() {
    const {
      photos, captions, modal, current, modalIndex,
    } = this.state;

    let one;
    let three;

    if (current === 0) {
      one = photos.length - 1;
      three = current + 1;
    } else if (current === photos.length - 1) {
      one = current - 1;
      three = 0;
    } else {
      one = current - 1;
      three = current + 1;
    }
    const two = current;

    return (
      <div>
        <div>
          <h1>
            Yalp: Photo Gallery
          </h1>
          <Carousel>
            <Left>
              <Arrow click={this.prev} icon="<" />
            </Left>

            <Right>
              <Arrow click={this.next} icon=">" />
            </Right>

            <Thumb
              photo={photos[one].url}
              toggleModal={this.toggleModal}
              caption={captions[one].caption}
              index={one}
            />
            <Thumb
              photo={photos[two].url}
              toggleModal={this.toggleModal}
              caption={captions[two].caption}
              index={two}
            />
            <Thumb
              photo={photos[three].url}
              toggleModal={this.toggleModal}
              caption={captions[three].caption}
              index={three}
            />
          </Carousel>
        </div>

        <div>
          {modal && <Modal photos={photos} captions={captions} index={modalIndex} />}
        </div>
      </div>
    );
  }
}


export default App;
