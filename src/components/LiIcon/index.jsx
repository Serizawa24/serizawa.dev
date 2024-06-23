import { motion,useScroll } from 'framer-motion';

///
import styles from './LiIcon.module.scss';
import classnames from 'classnames/bind';
const cc = classnames.bind(styles)

const LiIcon =  ({reference}) => {
  
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end","center start"],
    layoutEffect: false,
  });

  return ( 
    <figure style={{
      position: 'absolute',
      left: 0,
      stroke: "var(--text-black)"
    }}>
      <svg
        width='75'
        height='75'
        viewBox='0 0 100 100'
        className={cc('svg-icon')}
      >
        <circle cx="75" cy="50" r="20" className={cc('circle-1')}/>
        <motion.circle cx="75" cy="50" r="20" className={cc('circle-2')} 
          style={{
            pathLength: scrollYProgress
          }}
        />
        <circle cx="75" cy="50" r="10" className={cc('circle-3')}/>
      </svg>
    </figure>
  );
}

export default LiIcon;