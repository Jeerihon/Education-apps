import React from 'react';

import styles from '../styleguide.module.css';

export default () => {
  // const [binaryDigit, setBinaryDigit] = useState();

  const handleKeyDown = () => {
    // const { value } = event.target.value;
    // console.log(event, value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Bin2Dec</h1>
          <p className={styles.description}>
            Bin2Dec allows binary digits and then displays its decimal
            equivalent.
          </p>
        </header>

        <main className={styles.content}>
          <div className={styles.item}>
            <span className={styles.label}>Enter binary digit:</span>

            <input
              className={styles.input}
              type="text"
              onKeyDown={handleKeyDown}
              maxLength="8"
            />
          </div>

          <div className={styles.item}>
            <span className={styles.label}>Get result:</span>

            <input className={styles.result} type="number" readOnly />
          </div>
        </main>
      </div>
    </div>
  );
};
