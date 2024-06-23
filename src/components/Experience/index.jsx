import {motion} from 'framer-motion'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from '../LiIcon';
//
import styles from "./Experience.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

const Details = ({ 
  position,
  company,
  companyLink,
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
      <h3 className={cx("experience-item-position")}>{position}&nbsp;<a className={cx("experience-item-link")} href={companyLink} >@{company}</a></h3>
      <span className={cx("experience-item-time-address")}>
        {time} | {address}
      </span>
      <p className={cx("experience-item-work")}>
        {work}
      </p>
    </motion.div>
  </li>
};

function Experience() {
  const experienceList=[
    {
      position: "Software Engineer",
      company: "Google",
      companyLink: "https://www.google.com",
      time: "2022-Present", 
      address: "Mountain View, CA", 
      work:  "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
    },
    {
      position: "Intern",
      company: "Facebook",
      companyLink: "https://www.facebook.com",
      time: "Summer 2021", 
      address: "Menlo Park, CA.", 
      work:  "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
    },
    {
      position: "Software Developer",
      company: "Amazon",
      companyLink: "https://www.amazon.com",
      time: "2020-2021", 
      address: "Seattle, WA.", 
      work:  "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
    },
    {
      position: "Software Developer Intern",
      company: "Microsoft",
      companyLink: "https://www.microsoft.com",
      time: "Summer 2019", 
      address: "Redmond, WA.", 
      work:  "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
    },
    {
      position: "Teaching Assistant",
      company: "MIT",
      companyLink: "https://www.mit.com",
      time: "Fall 2018", 
      address: "Massachusetts Ave, Cambridge, MA.", 
      work:  "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.",
    },
    
  ]
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end","center start"],
    layoutEffect: false,
  });

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("experience-title")}>Experience</h2>
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
              company={item.company}
              companyLink={item.companyLink}
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

export default Experience;
