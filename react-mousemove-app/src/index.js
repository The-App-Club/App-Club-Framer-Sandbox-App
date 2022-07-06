import {useState, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {motion, transform} from 'framer-motion';
import styled from '@emotion/styled';
import {getRelativeCoordinates} from './plugins/getRelativeCoordinates';

import './index.scss';

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #a0bcc2;
`;

const StyledItem = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #f9ebc8;
`;

const Box = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();

  const handleMouseMove = (e) => {
    const info = getRelativeCoordinates(e, boxRef.current);
    setMousePosition(info);
  };

  return (
    <StyledBox
      ref={boxRef}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      {[...Array(11)].map((n, index) => {
        const inputRange = [0, 11 - 1];
        const outputRange = [1, 5];
        const output = transform(index, inputRange, outputRange);
        return (
          <StyledItem
            key={index}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{type: 'spring', stiffness: output * 13}}
          />
        );
      })}
    </StyledBox>
  );
};

const App = () => {
  return (
    <StyledContainer>
      <Box />
    </StyledContainer>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
