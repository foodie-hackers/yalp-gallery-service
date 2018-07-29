import React from 'react';
import $ from 'jquery';
import Modal from './modal';
import Photo from './photo';


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

  render() {
    const {
      photos, captions, modal, current, modalIndex,
    } = this.state;

    return (
      <div>
        <div>
          <h1>
            Yalp: Photo Gallery
          </h1>
          <Photo
            photo={photos[current].url}
            toggleModal={this.toggleModal}
            caption={captions[current].caption}
            index={current}
            size="250"
          />
        </div>

        <div>
          {modal && <Modal photos={photos} captions={captions} index={modalIndex} />}
        </div>
      </div>
    );
  }
}


export default App;
