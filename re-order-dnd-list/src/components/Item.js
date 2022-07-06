import {useMotionValue, Reorder} from 'framer-motion/dist/framer-motion';
import {useRaisedShadow} from '../hooks/useRaisedShadow';

const Item = ({item}) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={item} id={item} style={{boxShadow, y}}>
      <span>{item}</span>
    </Reorder.Item>
  );
};

export {Item};
