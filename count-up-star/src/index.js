import React from 'react';
import ReactDOM from 'react-dom';
import {StarButton} from '../src/components/StarButton';
import './index.scss';

// Ported from https://codepen.io/popmotion/pen/oNGxjpr?editors=1111
function App() {
  return <StarButton></StarButton>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
