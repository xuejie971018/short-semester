import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
    </div>
  );
}

export default connect()(IndexPage);