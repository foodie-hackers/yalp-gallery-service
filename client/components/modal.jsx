import React from 'react';
import Photo from './photo';
import Arrow from './arrow';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
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
        <Arrow click={this.prev} icon='<' />
        <Arrow click={this.next} icon='>' />
        <Photo photo={photos[current].url} caption={captions[current].caption}/>
    </div>
    );
  }
}

export default Modal;
