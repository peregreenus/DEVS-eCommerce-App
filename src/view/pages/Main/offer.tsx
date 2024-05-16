import React from 'react';
import * as classes from './offer.module.css';
import * as classesMain from './main.module.css';

function Offer() {
  return (
    <section className={`${classes.offer} ${classesMain.mainSection}`}>
      <div className={classesMain.textContent}>
        <p className={classesMain.title}>We offer</p>
        <p className={classesMain.subtitle}>
          Islands: Your dream of a private paradise is now a reality! Choose from our selection of
          premium islands and immerse yourself in luxury and privacy.
        </p>
        <p className={classesMain.subtitle}>
          Bridges: Connect your worlds with others by selecting our exclusive bridges that add
          luxury and style to your real estate.
        </p>
        <p className={classesMain.subtitle}>
          Asteroids: Want your own cosmic land? On our website, you&apos;ll find the best asteroids
          to create your own space empire.
        </p>
        <p className={classesMain.subtitle}>
          Moon Estates: Discover the most prestigious estates on the Moon, where you can build your
          own cosmic residence and enjoy panoramic views of Earth.
        </p>
      </div>
    </section>
  );
}

export default Offer;
