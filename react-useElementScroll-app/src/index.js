import {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion, useElementScroll, useTransform} from 'framer-motion';
import styled from '@emotion/styled';
import './index.scss';

const StyledScrollContainer = styled.div`
  height: 50vh;
  padding: 5vh;
`;

const StyledScrollTrigger = styled.div`
  height: 100%;
  overflow: auto;
`;

const StyledScrollContent = styled.div`
  display: flex;
  justify-content: center;
  height: 300vh;
  background-image: linear-gradient(to bottom, #a8c0ff, #3f2b96);
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const StyledScrollObserver = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vh;
  height: 25vh;
  font-size: 32;
  background-color: hotpink;
  font-size: 3rem;
`;

const App = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const {scrollYProgress} = useElementScroll(ref);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0.5, 0.75, 0.5, 1]
  );
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  scrollYProgress.onChange(setProgress);
  return (
    <>
      <StyledScrollContainer>
        <StyledScrollTrigger ref={ref}>
          <StyledScrollContent>
            <h1 style={{color: 'white'}}>Scroll me</h1>
          </StyledScrollContent>
        </StyledScrollTrigger>
      </StyledScrollContainer>
      <StyledItem>
        <StyledScrollObserver
          style={{
            scale,
            rotate,
          }}
        >
          {progress.toFixed(2)}
        </StyledScrollObserver>
      </StyledItem>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
