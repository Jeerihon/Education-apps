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
  <main className={styles.container}>
    <ul className={styles.grid}>
      {APPS.map((app) => (
        <li className={styles.item}>
          <Link
            to={app.route}
            key={app.name}
          >
            {app.name}
          </Link>
        </li>
      ))}
    </ul>
  </main>
);
