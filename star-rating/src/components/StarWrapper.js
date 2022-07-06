import styled from '@emotion/styled';
import React, {useState, useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {StarIcon} from './StarIcon';

const starVariants = {
  initial: {
    scale: 0,
  },
  animate: (i) => ({
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.25,
      type: 'spring',
      stiffness: 175,
    },
  }),
  exit: (i) => ({
    scale: 0,
    transition: {
      duration: 0.25,
      delay: 0.2 - i * 0.04,
    },
  }),
  hovered: {
    scale: 1.01,
    transition: {
      duration: 0.2,
    },
  },
};

const StyledStarWrapper = styled.div`
  --size: 100px;
  --icon-color: darkgrey;
  --width: var(--size);
  --height: var(--size);
  position: relative;
  width: var(--width);
  height: var(--height);
  background: transparent;
  &::before {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--icon-color);
    content: '\\e838';
    font-family: 'Material Icons';
    width: 100%;
    height: 100%;
    font-size: calc(var(--width) * 0.8);
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledStarNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 800;
`;

const StarWrapper = ({
  children,
  starNumber,
  spClassName,
  handleMouseOver,
  handleClick,
  isClicked,
  style,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const starControls = useAnimation();
  const backgroundControls = useAnimation();
  useEffect(() => {
    if (isClicked && isHovering) {
      starControls.start('hovered');
    } else if (isClicked) {
      starControls.start('animate');
    } else {
      starControls.start('exit');
    }
  }, [isClicked, isHovering]);

  return (
    <StyledStarWrapper
      style={{...style}}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      className={`star-wrapper ${spClassName}`}
      data-star-number={starNumber}
    >
      {children}
      <StyledStarNumber>{starNumber + 1}</StyledStarNumber>

      <motion.div
        onMouseOver={() => {
          setIsHovering(true);
        }}
        onMouseOut={() => {
          setIsHovering(false);
        }}
        variants={starVariants}
        initial="initial"
        animate={starControls}
        custom={starNumber}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StarIcon
          style={{
            '--width': {...style}['--size'],
            '--height': {...style}['--size'],
          }}
        ></StarIcon>
      </motion.div>
    </StyledStarWrapper>
  );
};

export {StarWrapper};
