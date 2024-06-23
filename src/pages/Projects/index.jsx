import AnimatedText from '../../components/AnimatedText';
import { GithubIcon } from '../../components/Icon';
import TransitionEffect from '../../components/TransitionEffect';
///
import styles from './Project.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
///

const FeatureProject = ({
  type,
  title,
  sumary,
  img,
  link,
  github,
  projectType,

}) =>{

  return <div className={cx(`project-${projectType}`)}>
    <div className={cx(`project-shadow-${projectType}`)} />
    <article className={cx(`project-wrapper-${projectType}`)}>
      <a  title="Visit Link" className={cx(`project-link-${projectType}`)} href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt={title} className={cx('project-image')} />
      </a>
      <div className={cx(`project-info-${projectType}`)}>
        <span className={cx(`project-type-${projectType}`)}>
          {type}
        </span>
        <a  title="Visit Link" href={link} target='_blank' rel='noreferrer' >
          <h2  className={cx(`project-title-${projectType}`)}>{title}</h2>
        </a>
        <p className={cx(`project-sumary-${projectType}`)}>
          {sumary}
        </p>
        <div className={cx(`project-button-${projectType}`)}>
        <a title="Visit Link" className={cx(`project-github-${projectType}`)} href={github} target='_blank' rel='noreferrer'>
          <GithubIcon  />
        </a>
        <a title="Visit Link" className={cx(`project-visit-${projectType}`)} href={link} target='_blank' rel='noreferrer'>
          {projectType === 'feature' ? 'Visit Project' : 'Visit'}
        </a>
        </div>
      </div>
    </article>
  </div>

}
function Projects() {
  const projectList = [
    {
      type: "Featured Project",
      title: "Crypto Screener Application",
      sumary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-screener-cover-image.5d2f6c4e.jpg&w=640&q=75",
      link:"",
      github:"",
      projectType:"feature"
    },
    {
      type: "Featured Project",
      title: "Crypto Screener Application",
      sumary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-screener-cover-image.5d2f6c4e.jpg&w=640&q=75",
      link:"",
      github:"",
      projectType:"normal",
    },
    {
      type: "Featured Project",
      title: "Crypto Screener Application",
      sumary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-screener-cover-image.5d2f6c4e.jpg&w=640&q=75",
      link:"",
      github:"",
      projectType:"normal",
    },
    {
      type: "Featured Project",
      title: "Crypto Screener Application",
      sumary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-screener-cover-image.5d2f6c4e.jpg&w=640&q=75",
      link:"",
      github:"",
      projectType:"feature"
    },
    {
      type: "Featured Project",
      title: "Crypto Screener Application",
      sumary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-screener-cover-image.5d2f6c4e.jpg&w=640&q=75",
      link:"",
      github:"",
      projectType:"normal",
    },
    {
      type: "Featured Project",
      title: "Crypto Screener Application",
      sumary: "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-screener-cover-image.5d2f6c4e.jpg&w=640&q=75",
      link:"",
      github:"",
      projectType:"normal",
    },

  ];
  let metaDescription = document.querySelector('meta[name="description"]');
  metaDescription.setAttribute('content', `Imagination Trumps Knowledge!. Explore my projects.`);
  
  return ( 
    <>
      <TransitionEffect />
      <div className={cx('wrapper')} >
        <div className={cx('title')}>
          <AnimatedText text="Lucy On Air! " fontSize='var(--title-size-head)' mb="6.4"/>
        </div>

        <div className={cx('project')}>
            { projectList.map((item,index)=><FeatureProject 
              key={index}  
              type={item.type}
              title={item.title}
              sumary={item.sumary}
              img={item.img}
              link={item.link}
              github={item.github}
              projectType={item.projectType}
            />)}
        </div>
      </div>
    </>
  );
}

export default Projects;