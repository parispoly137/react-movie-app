import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './Potato'

ReactDOM.render(
  <React.StrictMode>
    <h1>
      <App />
    </h1>
    <Potato />
  </React.StrictMode>,
  document.getElementById('root')
);