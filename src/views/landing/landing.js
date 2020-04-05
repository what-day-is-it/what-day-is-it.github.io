import React, { useState } from 'react';

import Text from 'components/text/text';
import Button from 'components/button/button';

import napolean1 from 'assets/giphy.gif';
import napolean2 from 'assets/giphy-2.gif';
import napolean3 from 'assets/giphy-3.gif';

import styles from './landing.module.scss';

const Landing = () => {
  const [napoleans, setNapoleans] = useState([]);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const currentDate = new Date(Date.now());
  const gifArray = [
    napolean1,
    napolean2,
    napolean3
  ];
  const turnUp = () => {
    const photoArr = [...napoleans];
    const photoIndex = Math.floor(Math.random() * Math.floor(3));
    const window_Height = window.innerHeight;
    const window_Width = window.innerWidth;

    const image_Height = 200;
    const image_Width = 200;

    const availSpace_V = window_Height - image_Height;
    const availSpace_H = window_Width - image_Width;
    const randNum_V = Math.round(Math.random() * availSpace_V);
    const randNum_H = Math.round(Math.random() * availSpace_H);
    const position = {
      top: `${randNum_V}px`,
      left: `${randNum_H}px`
    }

    photoArr.push({
      file: gifArray[photoIndex],
      position
    });
    setNapoleans(photoArr);
  };
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <Text.Heading level={1} align="center">
          Today is {days[currentDate.getDay()]}
        </Text.Heading>
        <button
          className={styles['turn-up']}
          onClick={turnUp}
        >
          Turn up
        </button>
      </div>
      {
        napoleans.map((image, idx) => (
          <img
            id="napolean-dynamite"
            key={idx}
            src={image.file}
            style={image.position}
            className={styles.napolean}
          />
        ))
      }
    </div>
  );
}

export default Landing;
