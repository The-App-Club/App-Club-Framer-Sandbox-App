import * as React from 'react';
import {
  useMotionValue,
  Reorder,
  useDragControls,
} from 'framer-motion/dist/framer-motion';
import {useRaisedShadow} from '../hooks/useRaisedShadow';
import {Icon} from '../components/Icon';
import styled from '@emotion/styled';

const StyledLabelItem = styled.span`
  user-select: none;
`;

const Item = ({item}) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      id={item}
      style={{boxShadow, y}}
      dragListener={false}
      dragControls={dragControls}
    >
      <StyledLabelItem>{item}</StyledLabelItem>
      <Icon dragControls={dragControls} />
    </Reorder.Item>
  );
};

export {Item};
