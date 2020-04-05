import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const IconButton = ({
  title,
  icon,
  onClick,
  toTop,
  type,
  className,
  alt,
}) => (
  <button
    type={type}
    className={`${styles['icon-button']} ${className}`}
    onClick={
      toTop
        ? () => {
          window.scrollTo(0, 0);
          return onClick();
        }
        : onClick
    }
  >
    <span>{title}</span>
    <img src={icon} alt={alt} />
  </button>
);

IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  toTop: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string
};
IconButton.defaultProps = {
  title: '',
  toTop: false,
  type: 'button',
  className: '',
  alt: ''
};

export default IconButton;
