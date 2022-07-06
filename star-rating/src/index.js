import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {StarRating} from '../src/components/StarRating';
function App() {
  return (
    <>
      <h2>Cowboy Bebop</h2>
      <StarRating></StarRating>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
