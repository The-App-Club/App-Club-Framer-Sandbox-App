import {useEffect} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {motion, useAnimation} from 'framer-motion';

const currentCountVariants = {
  unliked: {opacity: [1, 0], y: [0, -40], transition: {duration: 0.35}},
  liked: {opacity: [1, 0], y: [0, -40], transition: {duration: 0.35}},
};

const newCountVariants = {
  unliked: {opacity: [0, 1], y: [40, 0], transition: {duration: 0.45}},
  liked: {opacity: [0, 1], y: [40, 0], transition: {duration: 0.45}},
};

const StyledNumber = styled.div`
  width: 100%;
  height: 100%;
`;

const Number = ({previousNumber, currentNumber, isLiked, style}) => {
  const starControls = useAnimation();
  useEffect(() => {
    if (isLiked) {
      starControls.start('liked');
      // console.log('isLiked', isLiked);
    } else {
      starControls.start('unliked');
      // console.log('isLiked', isLiked);
    }
  }, [isLiked]);

  return (
    <StyledNumber style={{...style}}>
      <motion.div
        animate={starControls}
        variants={currentCountVariants}
        className={css`
          color: #d9d9d9;
          position: absolute;
          top: 10px;
          right: -40px;
          width: 100%;
          height: 100%;
          padding: 0 1vw;
        `}
      >
        {previousNumber}
      </motion.div>
      <motion.div
        animate={starControls}
        variants={newCountVariants}
        className={css`
          color: #fed600;
          position: absolute;
          top: 10px;
          right: -40px;
          width: 100%;
          height: 100%;
          padding: 0 1vw;
        `}
      >
        {currentNumber}
      </motion.div>
    </StyledNumber>
  );
};

export {Number};
