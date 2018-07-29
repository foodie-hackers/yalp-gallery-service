import React from 'react';
import Photo from './photo';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };
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
    return (
      <div>
        Hello
        <Photo photo={photos[current].url}/>
      </div>
    );
  }
}

export default Modal;
