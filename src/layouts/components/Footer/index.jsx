import Button from '../../../components/Button';
///
import styles from './Footer.module.scss'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)
function Footer() {
  return ( 
    <footer className={cx('wrapper')}>
      <span>
      © 2023 Serizawa
      </span>
      <Button
        to='termsprivacy'
        className={cx('button-terms')}
      >Terms & Privacy</Button>
    </footer>
  );
}

export default Footer;