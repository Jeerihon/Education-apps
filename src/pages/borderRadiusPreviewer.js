import React from 'react';

import styles from './borderRadiusPreviewer.module.css';

export default () => (
// const [topLeft, setTopLeft] = useState(30);
// const [topRight, setTopRight] = useState(70);
// const [rightTop, setRightTop] = useState(70);
// const [rightBottom, setRightBottom] = useState(30);
// const [bottomRight, setBottomRight] = useState(30);
// const [bottomLeft, setBottomLeft] = useState(0);
// const [leftTop, setLeftTop] = useState(100);
// const [leftBottom, setLeftBottom] = useState(70);
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
            style={{ borderRadius: '10% 10% 10% 10% / 10% 10% 10% 10%' }}
          />

          <span
            className={styles.handle}
            data-handle="top-left"
            style={{ left: '10%' }}
          />

          <span
            className={styles.handle}
            data-handle="top-right"
            style={{ right: '10%' }}
          />

          <span
            className={styles.handle}
            data-handle="right-top"
            style={{ top: '10%' }}
          />

          <span
            className={styles.handle}
            data-handle="right-bottom"
            style={{ bottom: '10%' }}
          />

          <span
            className={styles.handle}
            data-handle="bottom-right"
            style={{ right: '10%' }}
          />

          <span
            className={styles.handle}
            data-handle="bottom-left"
            style={{ left: '10%' }}
          />

          <span
            className={styles.handle}
            data-handle="left-bottom"
            style={{ bottom: '10%' }}
          />

          <span
            className={styles.handle}
            data-handle="left-top"
            style={{ top: '10%' }}
          />
        </div>

        <div className={styles.copyBar}>
          <span className={styles.copyLabel}>Border-radius:</span>

          <span className={styles.copyText}>
            10% 10% 10% 10% / 10% 10% 10% 10%
          </span>

          <button className={styles.copyButton} type="button">Copy</button>
        </div>
      </main>
    </div>
  </div>
);
