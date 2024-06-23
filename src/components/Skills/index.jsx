import { motion } from "framer-motion"
// 
import styles from './Skills.module.scss'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)

const Skill = ({name,x,y,center=false}) => {
  
  return <motion.div className={cx('skills-cell')}
  whileHover={{
    scale:1.05,
  }}
  style={{
    position: 'absolute',
    padding: center ? '32px' : '12px 24px',

  }}
  initial={{
    x: 0,
    y: 0,
  }}
  whileInView={{
    x,y
  }}
  transition={{
    duration: 1.5,
    
  }}
  viewport={{
    once:true,
  }}
> 
  {name}
</motion.div>
}

function Skills() {
  const skillList = [
    {
      name:"Web",
      x: 0,
      y: 0,
      center:true,
    },
    {
      name:"JavaScript",
      x: "-0vw",
      y: "-13vw",
    },
    {
      name:"HTML",
      x: "-13vw",
      y: "2vw",
    },
    {
      name:"CSS",
      x: "10vw",
      y: "6vw",
    },
    {
      name:"ReactJs",
      x: "20vw",
      y: "13vw",
    },
    {
      name:"NodeJs",
      x: "20vw",
      y: "-15vw",
    },
    {
      name:"Git",
      x: "-16vw",
      y: "18vw",
    },
    {
      name:"Design",
      x: "-20vw",
      y: "-14vw",
    },
    {
      name:"Responsive",
      x: "-4vw",
      y: "-22vw",
    },
    {
      name:"Illustrator",
      x: "6vw",
      y: "20vw",
    },
    {
      name:"FrontEnd",
      x: "30vw",
      y: "0vw",
    },
    {
      name:"Backend",
      x: "-30vw",
      y: "0vw",
    },

  ]
  return ( 
    <div className={cx('wrapper')}>
      <h2 className={cx('skills-title')}>
        Skills
      </h2>
      <div className={cx('skills-graph')}>
        {skillList.map((skill,index) => 
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} center={skill.center} />
        )}
      </div>
    </div>
  );
}

export default Skills;