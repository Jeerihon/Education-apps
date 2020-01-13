import React from 'react';

import styles from './index.module.css';

export default () => (
  <header className={styles.hero}>
    <h1 className={styles.name}>Artem Korytov</h1>

    <h3 className={styles.position}>
      <span>Frontend Developer </span>
      <span role="img" aria-label="Developer Emoji">👨🏽‍💻</span>
    </h3>

    <p className={styles.description}>
      <span> My implementation of </span>

      <a
        className={styles.link}
        href="https://github.com/florinpop17/app-ideas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>App Ideas</span>
        <span className={styles.idea} role="img" aria-label="Idea Emoji">
          💡
        </span>
      </a>
    </p>
  </header>
);
