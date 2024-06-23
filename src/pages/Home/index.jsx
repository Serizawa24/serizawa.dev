import light from '../../assets/light.svg';
import spinIcon from '../../assets/spinIcon.svg';
import spinIcon2 from '../../assets/spinIcon2.svg';
import {useSelector} from 'react-redux';
import TransitionEffect from '../../components/TransitionEffect';
//
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Content from '../../layouts/components/Content';
const cx = classNames.bind(styles);
function Home() {
  const { theme } = useSelector(state => state.theme);
  return ( 
    <>
      <TransitionEffect />
      <div className={cx('wrapper')} >
        <Content />
        <img src={light} alt="light" className={cx('light')} />
        <div className={cx('spin-box')}>
          <div className={cx('spin-wrapper')}>
            <img alt='spin' src={theme==="dark"?spinIcon2:spinIcon} className={cx('spinIcon')} />
            <a title="Visit Link" className={cx('hire')} href="mailto:elite.serizawa@gmail.com">Hire me!</a>
          </div>
        </div>
        <div className={cx('home-space')}>

        </div>
      </div>
    </>
  );
}

export default Home;