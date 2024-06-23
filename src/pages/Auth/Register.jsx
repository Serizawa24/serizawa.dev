import styles from "./Auth.module.scss";
import classnames from "classnames/bind";
import {useState,} from "react";
import TransitionEffect from "../../components/TransitionEffect";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);
function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formRes,setFormRes] = useState("");


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };




  const emailRegex =  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValid = emailRegex.test(email) ? undefined : 'Email is not valid';
  
  const passwordRegex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}).*$/g;
  const passwordValid = passwordRegex.test(password) ? undefined: 'A password contains at least six characters, including at least one number and includes both lower and uppercase letters'

  const confirmPasswordValid = confirmPassword === password ? undefined : 'Password do not match';
  
  const usernameValid = !!username ? undefined : 'Username is required'

  const formResValid = formRes.error || formRes.msg;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormRes({
      username,
      email,
      password
    })
    console.log('submit data',formRes);
  };


  return (
    <>  
      <TransitionEffect />
      <div className={cx("wrapper")}>
        <form className={cx("form")} onSubmit={handleSubmit}>
          <h3 className={cx('heading')}>Register</h3>
          <div className={cx("spacer")}></div>
          <div className={cx("spacer")}></div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")} htmlFor="username">
              Username
            </label>
            <input
              className={cx("form-control")}
              id="username"
              name="username"
              placeholder="Enter username..."
              type="text"
              onChange={handleUsernameChange}

            />
            <span className={cx("form-message")}>{usernameValid}</span>
          </div>
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
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}

            />
            <span className={cx('form-message')}>{passwordValid}</span>
          </div>
          <div className={cx("spacer")}></div>
          <div className={cx('form-group')}>
            <label htmlFor="password-confirm" className={cx('form-label')}>
              Confirm Password
            </label>
            <input
              className={cx("form-control")}
              id="password-confirm"
              autoComplete="on"
              name="password-confirm"
              type="password"
              placeholder="Confirm password..."
              onChange={handleConfirmPasswordChange}
            />
            <span className={cx('form-message')}>{confirmPasswordValid}</span>
          </div>
          <div className={cx("spacer")}></div>
          <button className={cx('form-submit')}>Register</button>
          <div className={cx("spacer")}></div>
          <div className={cx("form-group")}>
            <span className={cx('reg-log-info')}>Already have an account?</span> <Link to='/Login'><span className={cx('reg-log-button')}>Login</span></Link>
          </div>
          <div className={cx("spacer")}></div>
          <div className={cx("form-group")}>
            <span className={cx("form-message")}>{formResValid}</span>
          </div>
        </form>

        <script src="./valid.js"></script>
      </div>
    </>
  );
}

export default Register;
