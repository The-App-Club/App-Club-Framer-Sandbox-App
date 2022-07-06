import React, {useState, useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {StarWrapper} from './StarWrapper';
import {BrowserView, MobileView} from 'react-device-detect';
import styled from '@emotion/styled';

const StarContainerPc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  gap: 1vw;
`;

const StarContainerSp = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2vw;
  grid-row-gap: 5vh;
  &.div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  &.div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  &.div3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  &.div4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  &.div5 {
    grid-area: 1 / 5 / 2 / 6;
  }
  &.div6 {
    grid-area: 2 / 1 / 3 / 2;
  }
  &.div7 {
    grid-area: 2 / 2 / 3 / 3;
  }
  &.div8 {
    grid-area: 2 / 3 / 3 / 4;
  }
  &.div9 {
    grid-area: 2 / 4 / 3 / 5;
  }
  &.div10 {
    grid-area: 2 / 5 / 3 / 6;
  }
`;

const StarRating = () => {
  const [isClicked, setIsClicked] = useState(0);
  const [isHovering, setIsHovering] = useState(0);

  const deactiveAllStar = () => {
    const domList = [...document.querySelectorAll('.star-wrapper')];
    for (let index = 0; index < domList.length; index++) {
      const dom = domList[index];
      dom.classList.remove('is-active');
    }
  };
  const activateAllStar = ({fromIndex, toIndex}) => {
    const domList = [...document.querySelectorAll('.star-wrapper')];
    for (let index = 0; index < domList.length; index++) {
      if (fromIndex <= index && index <= toIndex) {
        const dom = domList[index];
        dom.classList.add('is-active');
      }
    }
  };
  return (
    <>
      <BrowserView>
        <StarContainerPc>
          {[...new Array(10)].map((_, index) => {
            return (
              <StarWrapper
                key={index}
                starNumber={index}
                handleMouseOver={() => {
                  setIsHovering(index);
                }}
                handleClick={(e) => {
                  setIsClicked(index);
                  deactiveAllStar();
                  activateAllStar({
                    fromIndex: 0,
                    toIndex: Number(
                      e.currentTarget.getAttribute('data-star-number')
                    ),
                  });
                }}
                isClicked={isClicked >= index}
              ></StarWrapper>
            );
          })}
        </StarContainerPc>
      </BrowserView>
      <MobileView>
        <StarContainerSp>
          {[...new Array(10)].map((_, index) => {
            return (
              <StarWrapper
                key={index}
                style={{'--size': '60px'}}
                starNumber={index}
                spClassName={`.div${index + 1}`}
                handleMouseOver={() => {
                  setIsHovering(index);
                }}
                handleClick={(e) => {
                  setIsClicked(index);
                  deactiveAllStar();
                  activateAllStar({
                    fromIndex: 0,
                    toIndex: Number(
                      e.currentTarget.getAttribute('data-star-number')
                    ),
                  });
                }}
                isClicked={isClicked >= index}
              ></StarWrapper>
            );
          })}
        </StarContainerSp>
      </MobileView>
    </>
  );
};

export {StarRating};
