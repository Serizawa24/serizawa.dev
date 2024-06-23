import Header from '../components/Header';
import styles from './AnotherLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function AnotherLayout({children}) {
  return ( 
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
   );
}

export default AnotherLayout;