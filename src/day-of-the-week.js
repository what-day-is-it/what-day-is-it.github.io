import React from 'react';

import Router from 'router/routes';

import styles from './day-of-the-week.module.scss';

const DayOfTheWeek = () => {
  return (
    <div className={styles.app}>
      <Router />
    </div>
  );
}

export default DayOfTheWeek;
