import './index.scss';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import {
  motion,
  Reorder,
  AnimatePresence,
} from 'framer-motion/dist/framer-motion';
import {Tab} from './components/Tab';
import {AddIcon} from './components/AddIcon';
import {
  allIngredients,
  Ingredient,
  initialTabs,
  getNextIngredient,
} from './components/Ingredients';
import {removeItem, closestItem} from './plugins/utils';

function App() {
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const remove = (item: Ingredient) => {
    if (item === selectedTab) {
      setSelectedTab(closestItem(tabs, item));
    }

    setTabs(removeItem(tabs, item));
  };

  const add = () => {
    const nextItem = getNextIngredient(tabs);

    if (nextItem) {
      setTabs([...tabs, nextItem]);
      setSelectedTab(nextItem);
    }
  };

  return (
    <div className="window">
      <nav>
        <Reorder.Group
          as="ul"
          axis="x"
          onReorder={setTabs}
          className="tabs"
          values={tabs}
        >
          <AnimatePresence initial={false}>
            {tabs.map((item) => (
              <Tab
                key={item.label}
                item={item}
                isSelected={selectedTab === item}
                onClick={() => setSelectedTab(item)}
                onRemove={() => remove(item)}
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
        <motion.button
          className="add-item"
          onClick={add}
          disabled={tabs.length === allIngredients.length}
          whileTap={{scale: 0.9}}
        >
          <AddIcon />
        </motion.button>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            animate={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 20}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.15}}
          >
            {selectedTab ? selectedTab.icon : '😋'}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
