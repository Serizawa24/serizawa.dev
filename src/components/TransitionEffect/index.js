import { motion } from 'framer-motion';

//
import styles from './TransitionEffect.module.scss'
import classnames from 'classnames/bind';
const cx = classnames.bind(styles)
function TransitionEffect() {
  return ( 
    <div className={cx('wrapper')}>
      <motion.div className={cx('slide-1')} 
        initial={{
          x:'100%',
          width:'100%',
        }}
        animate={{
          x:'0%',
          width:'0%',
        }}
        exit={{
          x:["0%", "100%"],
          width:["0%", "100%"]
        }}
        transition={{
          duration:0.8,
          ease:"easeInOut",
        }}
      />
      <motion.div className={cx('slide-2')} 
        initial={{
          x:'100%',
          width:'100%',
        }}
        animate={{
          x:'0%',
          width:'0%',
        }}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay:0.2
        }}
      />
      <motion.div className={cx('slide-3')} 
        initial={{
          x:'100%',
          width:'100%',
        }}
        animate={{
          x:'0%',
          width:'0%',
        }}
        transition={{
          duration:0.8,
          ease:"easeInOut",
          delay:0.4,
        }}
      />
    </div>
  );
}

export default TransitionEffect;
