import styled from '@emotion/styled';

const StyledStarIcon = styled.div`
  --icon-color: #eeb76b;
  --width: 30px;
  --height: 30px;
  position: relative;
  width: var(--width);
  height: var(--height);
  background: transparent;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
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
`;

const StarIcon = ({style}) => {
  return <StyledStarIcon style={{...style}}></StyledStarIcon>;
};

export {StarIcon};
