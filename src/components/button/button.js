import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({
  label,
  onClick,
  color,
  toTop,
  className,
  type,
  disabled,
  size,
  ...rest
}) => (
  <button
    type={type}
    className={`${styles.button} ${styles[size]} ${disabled ? styles.disabled : ''} ${
      styles[color]
    } ${className}`}
    onClick={
      toTop
        ? (event) => {
          window.scrollTo(0, 0);
          return onClick(event);
        }
        : (event) => {
          return onClick(event);
        }
    }
    {...rest}
  >
    {label}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  label: PropTypes.any,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['dark-blue', 'white', 'light-blue', 'blue']),
  toTop: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  size: PropTypes.string
};
Button.defaultProps = {
  label: '',
  color: 'dark-blue',
  toTop: false,
  className: '',
  type: 'button',
  disabled: false,
  size: 'regular'
}

export default Button;
