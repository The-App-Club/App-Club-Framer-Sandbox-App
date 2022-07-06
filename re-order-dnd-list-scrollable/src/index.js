import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import {Reorder} from 'framer-motion/dist/framer-motion';
import {Item} from './components/Item';

import './index.scss';

const initialItems = ['🍅 Tomato', '🥒 Cucumber', '🧀 Cheese', '🥬 Lettuce'];
function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      onReorder={setItems}
      values={items}
      style={{height: 250, border: '1px solid black', overflowY: 'auto'}}
      layoutScroll
    >
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
