import React, {useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {useInView} from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion';
import './index.css';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {Image} from './components/Image';

function FadeInWhenVisible({children}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{duration: 1.7}}
      variants={{
        // visible: {opacity: 1, scale: 1},
        // hidden: {opacity: 0, scale: 0},
        visible: {filter: 'grayscale(0%)'},
        hidden: {filter: 'grayscale(100%)'},
      }}
      className={css`
        width: 100%;
        &:first-child {
          margin-top: 200px;
        }
        &:last-child {
          margin-bottom: 200px;
        }
      `}
    >
      {children}
    </motion.div>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20vh;
  height: 50vh;
  width: 40vw;
  margin: 10vh auto 0;
  overflow: hidden;
  overflow-y: auto;
`;

function App() {
  return (
    <StyledContainer>
      <FadeInWhenVisible>
        <Image
          src={'https://media.giphy.com/media/3XUbDJ3rPBK1y/giphy.gif'}
          alt={''}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Image
          src={'https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif'}
          alt={''}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Image
          src={'https://media.giphy.com/media/Q14xjb0kt9Bss/giphy.gif'}
          alt={''}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Image
          src={'https://media.giphy.com/media/Yl26F6nPrShCE/giphy.gif'}
          alt={''}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Image
          src={'https://media.giphy.com/media/JnwzVoKpIvZEQ/giphy.gif'}
          alt={''}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Image
          src={'https://media.giphy.com/media/vRKJTZ1w731kc/giphy.gif'}
          alt={''}
        />
      </FadeInWhenVisible>
    </StyledContainer>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
