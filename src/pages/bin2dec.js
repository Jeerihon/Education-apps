import React, { useState } from 'react';

import styles from './bin2dec.module.css';

export default () => {
  const [result, setResult] = useState(10);
  const [animate, setAnimate] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleKeyDown = (event) => {
    const { keyCode } = event;
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
  };

  const handleKeyUp = ({ target: { value } }) => {
    setResult(parseInt(+value, 2));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Bin2Dec</h1>

          <p className={styles.description}>
            Bin2Dec allows binary digits and then displays its result
            equivalent.
          </p>
        </header>

        <main className={styles.content}>
          <div className={styles.item}>
            <span className={styles.label}>Enter binary digit:</span>

            <input
              className={animate ? styles.inputInvalid : styles.input}
              type="text"
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              maxLength="8"
            />

            {!isValid && <span className={styles.notification}>Only digits 0 and 1 approved</span>}
          </div>

          <div className={styles.item}>
            <span className={styles.label}>Get result:</span>

            <span className={styles.result}>{result}</span>
          </div>
        </main>
      </div>
    </div>
  );
};
