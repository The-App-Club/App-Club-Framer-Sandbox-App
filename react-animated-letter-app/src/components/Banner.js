import styled from '@emotion/styled';
import {motion} from 'framer-motion';

const StyledBannerRow = styled(motion.span)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

const StyledBannerLetter = styled(motion.span)`
  font-size: 4rem;
  font-weight: 500;
  display: inline-block;
`;

const StyledBannerTitle = StyledBannerLetter;

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: {y: 400},
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.1,
    },
  },
};

const AnimatedLetters = ({title, disabled}) => (
  <StyledBannerTitle variants={banner} initial="initial" animate="animate">
    {[...title].map((letter) => (
      <StyledBannerLetter variants={letterAni}>{letter}</StyledBannerLetter>
    ))}
  </StyledBannerTitle>
);

const BannerRowTop = ({title}) => {
  return (
    <StyledBannerRow>
      <AnimatedLetters title={title} />
    </StyledBannerRow>
  );
};

const Banner = () => {
  return (
    <motion.div variants={banner}>
      <BannerRowTop title={'Cowboy Bebop'} />
    </motion.div>
  );
};

export {Banner};
