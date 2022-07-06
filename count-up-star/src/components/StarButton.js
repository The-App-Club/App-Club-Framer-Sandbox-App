import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {css} from '@emotion/css';
import {motion} from 'framer-motion';

import {StarIcon} from './StarIcon';
import {Number} from './Number';

import {useInterval} from '../hooks/useInterval';
import {usePrevious} from '../hooks/usePrevious';

const StarButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const previousValue = usePrevious(currentValue);

  // https://stackoverflow.com/questions/64200208/how-to-use-animation-multiple-times-in-framer-motion
  // 自動化ポーリングをエミュレート
  useInterval(() => {
    setCurrentValue(currentValue + 1);
    setIsLiked(!isLiked);
    // setRotate((prevState) => {
    //   return prevState - 360;
    // });
  }, 1000);

  const [rotate, setRotate] = useState(0);

  return (
    <motion.button
      initial={false}
      whileTap="press"
      onHoverStart={(e) => {
        // console.log(e);
      }}
      onHoverEnd={(e) => {
        // console.log(e);
      }}
      onClick={() => {
        setRotate((prevState) => {
          return prevState - 360;
        });
        setCurrentValue(currentValue + 1);
        setIsLiked(!isLiked);
      }}
      className={css`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        border: none;
        cursor: pointer;
        background-color: #fff;
        color: #5e5e5e;
        border-radius: 30px;
        outline: none;
        height: 5rem;
        width: 13rem;
        font-family: 'Montserrat Alternates';
        font-size: 3rem;
        font-weight: 600;
      `}
    >
      <motion.div
        animate={{
          x: 30,
          rotate: rotate,
          transition: {duration: 0.4},
        }}
        className={css`
          width: 100%;
          height: 100%;
        `}
      >
        <StarIcon
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-115%,-50%)',
            '--width': '60px',
            '--height': '60px',
          }}
        />
      </motion.div>
      <Number
        isLiked={isLiked}
        previousNumber={previousValue}
        currentNumber={currentValue}
      ></Number>
    </motion.button>
  );
};

export {StarButton};
