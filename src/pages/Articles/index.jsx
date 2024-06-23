import AnimatedText from '../../components/AnimatedText';
import { motion } from 'framer-motion'
//
import styles from './Articles.module.scss';
import classNames from 'classnames/bind';
import TransitionEffect from '../../components/TransitionEffect';
const cx = classNames.bind(styles);

const ArticleItem = ({
  img,
  title,
  time,
  sumary,
  link,
  articleType,
}) =>{

  return(
    <div className={cx(`article-${articleType}`)}>
      <div className={cx(`article-shadow-${articleType}`)} />

      <article className={cx(`article-wrapper-${articleType}`)}>
        <a title="Visit Link" className={cx(`article-link-${articleType}`)} href={link} target='_blank' rel='noreferrer'>
          <img src={img} alt={title} className={cx('article-image')} />
        </a>
        <div className={cx(`article-info-${articleType}`)}>
          <a  title="Visit Link" href={link} target='_blank' rel='noreferrer' >
            <h2  className={cx(`article-title-${articleType}`)}>{title}</h2>
          </a>
          <p className={cx(`article-sumary-${articleType}`)}>
            {sumary}
          </p>
          <span className={cx(`article-type-${articleType}`)}>
          {time}
        </span>
      </div>
      </article>
  </div>
  )
}

const Article = ({
  image,
  title,
  date,
  link
}) => {


  return(
    <>
      <TransitionEffect />
      <motion.div className={cx('aricle-list-box')}
        initial={{y:150}}
        whileInView={{
          y:0,
          transition:{
            duration:0.5,
            ease:"easeInOut"
          }
        }}
        viewport={{once:true}}
      >

        <li className={cx('aricle-list-wrapper')}>
          <a  title="Visit Link" className={cx('aricle-list-link')} href={link} target='_blank' rel="noreferrer">
            <h2 className={cx('aricle-list-title')}>{title}</h2>
          </a>
          <span className={cx('aricle-list-date')}>{date}</span>
        </li>
        <div  className={cx('aricle-list-shadow')}/>

      </motion.div>
    </>
  )
}

function Articles() {

  const articleList = [
    {
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpagination%20component%20in%20reactjs.030eba6a.jpg&w=1920&q=75",
      title:"BUILD A CUSTOM PAGINATION COMPONENT IN REACTJS FROM SCRATCH" ,
      time: "9 min read",
      sumary: "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
      link: "" ,
      articleType: "normal" ,
    },
    {
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcreate%20loading%20screen%20in%20react%20js.8ae23a75.jpg&w=1920&q=75",
      title:"CREATING STUNNING LOADING SCREENS IN REACT: A GUIDE TO BUILDING 3 TYPES OF LOADING" ,
      time: "10 min read",
      sumary: "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.",
      link: "" ,
      articleType: "normal" ,
    },
    {
      img:"https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcreate%20loading%20screen%20in%20react%20js.8ae23a75.jpg&w=1920&q=75",
      title:"CREATING STUNNING LOADING SCREENS IN REACT: A GUIDE TO BUILDING 3 TYPES OF LOADING" ,
      time: "10 min read",
      sumary: "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.",
      link: "" ,
      articleType: "feature",
    }
  ]
  const article = [
    {
      image: "https://devdreaming.com/_next/image?url=%2Fimages%2Fblogs%2Freact-form-validation-custom-hook%2Fform%20validation%20in%20reactjs%20using%20custom%20react%20hook-WGRVWMKY.png&w=1080&q=75",
      title: "Form Validation in ReactJS: Build a Reusable Custom Hook for Inputs and Error Handling",
      date: "January 27, 2023",
      link: "",
    },
    {
      image: "https://devdreaming.com/_next/image?url=%2Fimages%2Fblogs%2Fsmooth-scrolling-in-react-js%2Fsmooth%20scrolling%20in%20reactjs-255ZM2CZ.png&w=1080&q=75",
      title: "Silky Smooth Scrolling in ReactJS: A Step-by-Step Guide for React Developers",
      date: "January 30, 2023",
      link: "",
    },
    {
      image: "https://devdreaming.com/_next/image?url=%2Fimages%2Fblogs%2Fcreate-efficient-modal-react-portals%2Fcreate%20modal%20component%20in%20react%20using%20react%20portals-S65PCW42.png&w=1080&q=75",
      title: "Creating an Efficient Modal Component in React Using Hooks and Portals",
      date: "January 29, 2023",
      link: "",
    },
    {
      image: "https://devdreaming.com/_next/image?url=%2Fimages%2Fblogs%2Fbuild-react-redux-framer-motion-todo-app%2Ftodo%20list%20app%20built%20using%20react%20redux%20and%20framer%20motion-IDX3KHCV.png&w=1080&q=75",
      title: "Build a Fabulous Todo List App with React, Redux, and Framer Motion",
      date: "January 28, 2023",
      link: "",
    },
    {
      image: "https://devdreaming.com/_next/image?url=%2Fimages%2Fblogs%2Fredux-simply-explained%2FWhat%20is%20Redux%20with%20easy%20explanation-B5DTVWYE.png&w=1080&q=75",
      title: "Redux Simplified: A Beginner's Guide for Web Developers",
      date: "January 31, 2023",
      link: "",
    },
    {
      image: "https://devdreaming.com/_next/image?url=%2Fimages%2Fblogs%2Fhigher-order-component-hoc-react%2FWhat%20is%20higher%20order%20component%20in%20React-ZIZKWJXI.jpg&w=1080&q=75",
      title: "What is Higher Order Component (HOC) in React?",
      date: "January 4, 2023",
      link: "",
    },
  ]
  let metaDescription = document.querySelector('meta[name="description"]');
  metaDescription.setAttribute('content', `Words Can Change The World!. Explore my artwork.`);
  
  return ( 
    <div className={cx('wrapper')} >
      <div className={cx('title')}>
        <AnimatedText text="Lucy on Stage!" fontSize='var(--title-size-head)' mb="6.4"/>
      </div>
      <div className={cx('article')}>
        {articleList.map((item,index)=><ArticleItem
          key={index} 
          img={item.img}
          title={item.title}
          time={item.time}
          sumary={item.sumary}
          link={item.link}
          articleType={item.articleType}
        />)}
      </div>
      <div className={cx('title')}>
        <AnimatedText text="All Articles" fontSize='3.6rem' mb="6.4" mt="12.8"/>
      </div>
      <ul className={cx('aricle-list')}>
        {article.map((item,index)=><Article 
          key={index}
          image={item.image}
          title={item.title}
          date={item.date}
          link={item.link}
        />)}
      </ul>
    </div>
  );
}

export default Articles;