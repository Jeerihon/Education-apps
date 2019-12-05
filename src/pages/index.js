import React, { useState } from 'react';

import styles from './index.module.css';

export default () => {
  const [decimal, setDecimal] = useState(10);
  const [animate, setAnimate] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleKeyDown = (event) => {
    const { target: { value }, keyCode } = event;
    const validKeyCodes = [48, 49, 37, 39, 8];

    if (!validKeyCodes.includes(keyCode)) {
      event.preventDefault(event);
      setAnimate(true);
      setIsValid(false);

      setTimeout(() => {
        setAnimate(false);
      }, 300);
      return;
    }

    setIsValid(true);

    if (value.length === 7) setDecimal(parseInt(value, 2));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Bin2Dec</h1>
        </header>

        <main className={styles.content}>
          <p className={styles.description}>
            Bin2Dec allows binary digits and then displays its decimal
            equivalent.
          </p>

          <div className={styles.item}>
            <span className={styles.label}>Enter binary digit:</span>

            <input
              className={animate ? styles.inputInvalid : styles.input}
              type="text"
              onKeyDown={handleKeyDown}
              maxLength="8"
            />

            {!isValid && <span className={styles.notification}>Only digits 0 and 1 approved</span>}
          </div>

          <div className={styles.item}>
            <span className={styles.label}>Get result:</span>

            <input
              className={styles.result}
              type="number"
              value={decimal}
              readOnly
            />
          </div>
        </main>
      </div>
    </div>
  );
};
