import React, { useState } from 'react';

import styles from './borderRadiusPreviewer.module.css';

export default () => {
  const [topLeft] = useState(10);
  const [topRight] = useState(16);
  const [bottomRight] = useState(31);
  const [bottomLeft] = useState(42);
  const [leftTop] = useState(44);
  const [rightTop] = useState(10);
  const [rightBottom] = useState(50);
  const [leftBottom] = useState(26);

  const borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%
    / ${leftTop}% ${rightTop}% ${rightBottom}% ${leftBottom}%`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Border radius previewer</h1>

          <p className={styles.description}>
            The border-radius property can have multiple values changed.
            <br />
            Preview how the shape looks while changing these values.
          </p>
        </header>

        <main className={styles.content}>
          <div className={styles.previewer}>
            <div
              className={styles.shape}
              style={{ borderRadius }}
            />

            <span
              className={styles.handle}
              data-handle="top-left"
              style={{ left: `${topLeft}%` }}
            />

            <span
              className={styles.handle}
              data-handle="top-right"
              style={{ right: `${topRight}%` }}
            />

            <span
              className={styles.handle}
              data-handle="right-top"
              style={{ top: `${rightTop}%` }}
            />

            <span
              className={styles.handle}
              data-handle="right-bottom"
              style={{ bottom: `${rightBottom}%` }}
            />

            <span
              className={styles.handle}
              data-handle="bottom-right"
              style={{ right: `${bottomRight}%` }}
            />

            <span
              className={styles.handle}
              data-handle="bottom-left"
              style={{ left: `${bottomLeft}%` }}
            />

            <span
              className={styles.handle}
              data-handle="left-bottom"
              style={{ bottom: `${leftBottom}%` }}
            />

            <span
              className={styles.handle}
              data-handle="left-top"
              style={{ top: `${leftTop}%` }}
            />
          </div>

          <div className={styles.copyBar}>
            <span className={styles.copyLabel}>Border-radius:</span>

            <span className={styles.copyText}>
              {borderRadius}
            </span>

            <button className={styles.copyButton} type="button">Copy</button>
          </div>
        </main>
      </div>
    </div>
  );
};
