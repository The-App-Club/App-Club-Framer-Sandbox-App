import {forwardRef} from 'react';
import {motion, useTransform} from 'framer-motion';
import styled from '@emotion/styled';
import {useRefScrollProgress} from '../hooks/useRefScrollProgress';

const StyledParagraph = styled(motion.p)`
  padding: 4rem 2rem 4rem;
  &:first-child {
    padding: 5rem 2rem 4rem;
  }
  &:last-child {
    padding: 4rem 2rem 5rem;
  }
  font-size: 1.5rem;
  font-weight: bold;
  color: whitesmoke;
`;

const _Paragraph = (
  {children, containerScrollYProgress, containerRef},
  ref
) => {
  const {start, end} = useRefScrollProgress(containerRef, ref);
  console.log(start, end);
  const opacity = useTransform(
    containerScrollYProgress,
    [start, start + 0.000001, start + start / 4, start + start / 2, end],
    [0.3, 1, 1, 1, 0.3]
  );
  return (
    <StyledParagraph ref={ref} style={{opacity}}>
      {children}
    </StyledParagraph>
  );
};

const Paragraph = forwardRef(_Paragraph);

export {Paragraph};
