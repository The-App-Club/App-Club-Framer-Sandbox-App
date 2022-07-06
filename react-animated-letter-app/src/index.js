import {createRoot} from 'react-dom/client';
import '@fontsource/kaushan-script';
import './styles/index.scss';
import {Banner} from './components/Banner';
import {css} from '@emotion/css';

const App = ({context}) => {
  return (
    <div
      className={css`
        display: grid;
        place-items: center;
        height: 100vh;
        width: 100vw;
      `}
    >
      <Banner />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
