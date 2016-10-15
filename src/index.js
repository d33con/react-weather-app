import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
require('materialize-css/dist/css/materialize.css');
window.jQuery = require('jquery');
window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
