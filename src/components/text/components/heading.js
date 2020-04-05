import React from 'react';
import PropTypes from 'prop-types';
import styles from '../text.module.scss';

const Heading = ({
  level,
  children,
  className,
  color,
  weight,
  align,
  font,
  theme,
  highlight
}) => {
  const Element = `h${level < 1 ? 1 : level}`;

  return (
    <Element
      className={`
        ${styles[`heading-${level}`]} ${styles[color]}
        ${styles[`weight-${weight}`]} ${styles[`align-${align}`]}
        ${styles[highlight ? 'highlight' : '']}
        ${styles[`font-${font}`]} ${styles[theme]}
        ${className}
      `}
    >
      {children}
    </Element>
  );
};

Heading.displayName = 'Heading';
Heading.propTypes = {
  level: PropTypes.number && PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'white',
    'blue',
    'dark-blue',
    'darkest-grey',
    'red'
  ]),
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
  ]),
  font: PropTypes.oneOf([
    'lato',
    'ballpen'
  ]),
  theme: PropTypes.string,
  highlight: PropTypes.bool
};
Heading.defaultProps = {
  level: 2,
  children: '',
  className: '',
  color: 'black',
  weight: 'normal'
};

export default Heading;
