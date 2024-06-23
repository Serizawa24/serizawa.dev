import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';
import { forwardRef } from "react";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  nav=false,
  social = false,
  children,
  icon,
  disable,
  className,
  ...passProps
},ref) {

  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return ( 
    <Comp
        title="Visit Link"
        className={cx(`wrapper`, {
          [className]: className,
        })}
        {...props}
        ref={ref}
      > 
        {children}
      </Comp>
  );
}

export default forwardRef(Button);