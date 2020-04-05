import React from 'react';
import PropTypes from 'prop-types';
import styles from '../text.module.scss';

const Body = ({
  size = 'regular',
  children = '',
  className = '',
  color = 'black',
  weight = 'normal',
  align = 'left',
  ...props
}) => (
  <div
    className={`
      ${styles[`body-${size}`]} ${styles[color]}
      ${styles[`weight-${weight}`]} ${styles[`align-${align}`]}
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

Body.displayName = 'Body';
Body.propTypes = {
  size: PropTypes.oneOf(['tiny', 'small', 'regular', 'large']),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['black', 'white', 'grey', 'blue', 'darkest-grey', 'dark-blue', 'another-grey']),
  weight: PropTypes.oneOf([
    'extralight',
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black'
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ])
};

export default Body;
