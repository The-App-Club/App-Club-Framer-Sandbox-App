import {useRef, useMemo, createRef} from 'react';
import {createRoot} from 'react-dom/client';
import {motion, useElementScroll} from 'framer-motion';
import styled from '@emotion/styled';
import {Paragraph} from './components/Paragraph';
import {LoremIpsum} from 'lorem-ipsum';
import './index.scss';
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const StyledContainer = styled(motion.div)`
  width: 100%;
  max-width: 30rem;
  margin: 10vh auto 0;
  padding: 6rem 0 6rem;
  border: 3px solid;
  height: 50vh;
  overflow: hidden;
  overflow-y: auto;
  background: #222;
`;

const itemCount = 3;
const App = () => {
  const containerRef = useRef(null);
  const {scrollYProgress} = useElementScroll(containerRef);
  const itemRefs = useMemo(() => {
    return [...Array(itemCount)].map((n, index) => {
      return createRef();
    });
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      {[...Array(itemCount)].map((n, index) => {
        return (
          <Paragraph
            key={index}
            ref={itemRefs[index]}
            containerScrollYProgress={scrollYProgress}
            containerRef={containerRef}
          >
            {lorem.generateSentences(3)}
          </Paragraph>
        );
      })}
    </StyledContainer>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
