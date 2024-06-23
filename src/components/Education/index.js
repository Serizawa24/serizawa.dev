import {motion} from 'framer-motion'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from '../LiIcon';
//
import styles from "./Education.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

const Details = ({ 
  position,
  time, 
  address, 
  work 
  }) => {

    const ref= useRef(null)
  return <li ref={ref} className={cx("experience-item")}>
    <LiIcon reference={ref}/>
    <motion.div className={cx("experience-item-wrapper")}
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type: "spring"}}
    >
      <h3 className={cx("experience-item-position")}>{position}</h3>
      <span className={cx("experience-item-time-address")}>
        {time} | {address}
      </span>
      <p className={cx("experience-item-work")}>
        {work}
      </p>
    </motion.div>
  </li>
};

function Education() {
  const experienceList=[
    {
      position: "Bachelor Of Science In Computer Science",
      time: "2016-2020", 
      address: "Massachusetts Institute Of Technology (MIT)", 
      work:  "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
    },
    {
      position: "Master Of Computer Science",
      time: "2020-2022", 
      address: "Stanford University", 
      work:  "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
    },
    {
      position: "Online Coursework",
      time: "2016-2020", 
      address: "Coursera And EdX", 
      work:  "Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.",
    },

    
  ]
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end","center start"],
    layoutEffect:false,
  });

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("experience-title")}>Education</h2>
      <div className={cx("experience-wrapper")}>
        <motion.div 
          style={{
            scaleY:scrollYProgress
          }}
          ref = {ref}
          className={cx('experience-line')}
        />
        <ul className={cx("experience-list")}>
          {experienceList.map((item,index)=>
            <Details 
              key={index}
              position={item.position}
              time={item.time} 
              address={item.address} 
              work={item.work}  
            
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default Education;
