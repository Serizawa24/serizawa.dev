import { motion } from 'framer-motion'
///
import styles from './AnimatedText.module.scss'
import classnames from 'classnames/bind';
const cx = classnames.bind(styles)
///

const quote = {

  initial:{
    opacity:1,

  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren:0.08,
    }
  }
}

const singleWord = {
  initial:{
    opacity:0,
    y:50,
  },
  animate : {
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  }

}
function AnimatedText({
  text,fontSize="1rem",mb="0",jc="center",mt="0"
}) {
  return ( 
    <div className={cx('wrapper')} style={{
      marginBottom: mb + "rem",
      marginTop: mt + "rem"
    }}>
      <motion.h1 className={cx('text-1')} style={{
        display: 'flex',
        flexWrap:"wrap",
        justifyContent:jc,
      }} 
      variants={quote}
      initial="initial"
      animate="animate"
      >
        {
          text.split(" ").map((word,index)=>
          <motion.span key={index} style={{
            fontSize: fontSize,
            display: "inline-block",
          }}
          variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>)
        }
      </motion.h1>
    </div>
  );
}

export default AnimatedText;