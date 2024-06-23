import { ResumeIcon } from '../../../components/Icon';
import AnimatedText from '../../../components/AnimatedText';
///
import styles from './Content.module.scss'
import classnames from 'classnames/bind';
import ehehblush from '../../../assets/picture.png'
const cx = classnames.bind(styles)
function Content() {
  return ( 
    <div className={cx('wrapper')}>
      <div  className={cx('img')}>
        <img alt = "pic"  src = {ehehblush} className={cx('img-box')}/>
          
      </div>
      <div  className={cx('info')}>
        <h1 className={cx('info-header')}>
          <AnimatedText className={cx('info-content')} jc="flex-start" text = "Code Meets Design: Bringing Ideas to Life" fontSize='var(--title-size)' />
        </h1>
        <p className={cx('info-body')}>
        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
        </p>
        <div className={cx('info-button')}>
          <a title="Visit Link" download href="/path/to/file.pdf" className={cx('resume-button')}>
            <p className={cx('info-button-title')}>Resume</p> <ResumeIcon className={cx('info-button-icon')}/>
          </a>
          <a title="link" className={cx('info-contact')} href="mailto:elite.serizawa@gmail.com">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Content;