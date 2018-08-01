import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './components/app';

const AppWithRouter = withRouter(props => <App {...props} />);

ReactDOM.render(
  <BrowserRouter>
    <AppWithRouter />
  </BrowserRouter>, document.getElementById('Gallery')
);
