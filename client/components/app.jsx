import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pictures: 'temporary' };
  }

  render() {
    const { pictures } = this.state;
    return (
      <div>
        <h1>
          Yalp: Photo Gallery
        </h1>
        {pictures}
      </div>
    );
  }
}


export default App;
