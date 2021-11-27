import React from 'react';
import ReactDOM from 'react-dom';

import './assets/fonts/PermanentMarker/PermanentMarker-Regular.ttf';
import './assets/fonts/Quicksand/Quicksand-VariableFont.ttf';
import './index.scss';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
