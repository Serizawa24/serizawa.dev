import styles from './Auth.module.scss';
import classnames from 'classnames/bind'
import { useState,useEffect,useRef } from 'react';
import TransitionEffect from '../../components/TransitionEffect';
import { Link } from 'react-router-dom';
///
const cx = classnames.bind(styles)
function Login() {


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [formLog,setFormLog] = useState('');

  const emailRegex =  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValid = emailRegex.test(email) ? undefined : 'Email is not valid';
  
  const passwordRegex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}).*$/g;
  const passwordValid = passwordRegex.test(password) ? undefined: 'Password is not valid'

  const emailRef = useRef()
  useEffect(() => {
    emailRef.current.focus()
  }
  ,[])

  let formLogValid =  formLog.error || formLog.msg;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLog({
      email,
      password
    })
    console.log('submit data',formLog);
    
  }

  return ( 
    <>
      <TransitionEffect />
      <div className={cx("wrapper")}>
        <form className={cx("form")} onSubmit={handleSubmit}>
          <h3 className={cx('heading')}>Login</h3>
          <div className={cx("spacer")}></div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")} htmlFor="email">
              Email
            </label>
            <input
              className={cx("form-control")}
              id="email"
              name="email"
              placeholder="Enter email..."
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
            <span className={cx("form-message")}>{emailValid}</span>
          </div>
          <div className={cx("spacer")}></div>
          <div className={cx('form-group')}>
            <label htmlFor="password" className={cx('form-label')}>
              Password
            </label>
            <input
              className={cx("form-control")}
              id="password"
              autoComplete="on"
              name="password"
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={cx('form-message')}>{passwordValid}</span>
          </div>
          <div className={cx("spacer")}></div>
          <button className={cx('form-submit')}>Login</button>
          <div className={cx("spacer")}></div>
          <div className={cx("form-group")}>
            <span className={cx('reg-log-info')}>Don't have a account yet ?</span> <Link to='/Register'><span className={cx('reg-log-button')}>Register</span></Link>
          </div>
          <div className={cx("spacer")}></div>
          <div className={cx("form-group")}>
            <span className={cx("form-message")}>{formLogValid}</span>
          </div>
        </form>

      </div> 
    </>
  );
}

export default Login;