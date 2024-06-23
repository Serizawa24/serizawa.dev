import AnimatedText from '../../components/AnimatedText';
import eheblush from '../../assets/picture.png';
import { useRef,useEffect } from 'react';
import { useMotionValue, useSpring, useInView, } from 'framer-motion';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Education from '../../components/Education';
import TransitionEffect from '../../components/TransitionEffect';
///
import styles from './About.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const AnimatedNumber = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{
    duration: 3000,
  });
  const isInView = useInView(ref,{once: true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,value,motionValue])

  useEffect(()=>{
    springValue.on('change', latest=>{
      if(ref.current && latest.toFixed(0) <= value ) {
        ref.current.textContent = latest.toFixed(0);
      } 
    })
  },[springValue,value])

  return <span ref={ref}></span>
}
//
function About() {
  const flexList = [
    {
      name:'Satisfied Clients',
      value:10,
    },
    {
      name:'Projects Completed',
      value:10,
    },
    {
      name:'Years Of Experience',
      value:1,
    },
  ]
  let metaDescription = document.querySelector('meta[name="description"]');
  metaDescription.setAttribute('content', `Hi, I'm Lucy, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 1 year of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.`);
  return ( 
    <>
      <TransitionEffect />
      <div className={cx('wrapper')} >
        <div className={cx('title')}>
          <AnimatedText text="Lucy on Fire!" fontSize='var(--title-size-head)' mb="6.4"/>
        </div>
        <div className={cx('bio')}>
          <div className={cx('bio-title-wrap')}>
            <h2 className={cx('bio-title')}>Biography</h2>
            <p className={cx('bio-desc')}>
            Hi, I'm <span className={cx('author')}>Lucy</span>, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 1 year of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
            </p>
            <p  className={cx('bio-desc')}>
            I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
            </p>
            <p  className={cx('bio-desc')}>
            Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>
          <div className={cx('bio-image-wrap')}>
            <div className={cx('bio-image-wrap-sub')}> 
              <img className={cx('bio-image')} src={eheblush} alt='pic'/>
              <div className={cx('bio-image-shadow')}> </div>
            </div>
          </div>
          <div className={cx('bio-flex-wrap')}>
            {flexList.map(item=>
              <div key={item.name} className={cx('bio-flex')}>
                <span className={cx('flex-value')}>
                  <AnimatedNumber value={item.value} />+ 
                </span>
                <h2 className={cx('flex-name')}>
                  {item.name}
                </h2>
            </div>
            )}
          </div>

        </div>
        <Skills />
        <Experience />
        <Education />
      </div>
    </>
  );
}

export default About;