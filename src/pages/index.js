import React from 'react';
import { Link } from 'gatsby';

import styles from './index.module.css';

const APPS = [{
  name: 'bin2dec',
  route: '/bin2dec',
  decription: 'Binary-to-Decimal number converter',
}, {
  name: 'Border Radius Previewer',
  route: '/border-radius-previewer',
  decription: 'Preview how CSS3 border-radius values affect an element',
}];

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Hello, Stranger!
          <br />
          My name is Artem and this is my education projects.
        </h1>
      </header>

      <main>
        <ul>
          {APPS.map((app) => (
            <li>
              <Link to={app.route}>{app.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  </div>
);
