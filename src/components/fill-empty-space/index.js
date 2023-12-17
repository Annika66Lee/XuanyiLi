import { motion, useAnimation } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { cards } from '../../constants/nav-bar';

export default function FillEmptySpace() {
  const location = useLocation();
  const path = location.pathname;
  const style = {
    height: '200px',
    width: '100%',
    backgroundColor: cards.filter((a) => a.path === path)[0].backgroundColor,
  };

  const controls = useAnimation();
  const animateSmoke = () => {
    controls.start({
      opacity: [1, 0],
      scale: [1, 2],
      rotate: [0, 360],
      transition: { duration: 2, ease: 'easeInOut', repeat: Infinity },
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {cards.map((item) => (
        <div style={style}>
          <motion.div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'yellowgreen',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            onMouseEnter={animateSmoke}
          ></motion.div>
        </div>
      ))}
    </motion.div>
  );
}
