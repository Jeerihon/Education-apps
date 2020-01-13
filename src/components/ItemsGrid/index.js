import React, { useEffect } from 'react';
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

export default () => {
  const handleScroll = () => {
    const scrollTop = document.body.scrollTop
      ? document.body.scrollTop
      : document.scrollingElement.scrollTop;
    const newPos = `${scrollTop}px`;
    document.scrollingElement.style.setProperty('--scrollPos', newPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <main className={styles.container}>
      <ul className={styles.grid}>
        {APPS.map((app) => (
          <li className={styles.item} key={app.name}>
            <Link className={styles.link} to={app.route}>
              <span className={styles.appName}>{app.name}</span>
              <span className={styles.description}>{app.decription}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
