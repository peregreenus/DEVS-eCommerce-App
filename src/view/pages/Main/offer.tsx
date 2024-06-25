import React, { useEffect, useState } from 'react';
import * as classes from './offer.module.css';
import islandPic from '../../../assets/img/island-1.jpg';
import corporationPic from '../../../assets/img/corp-1.jpg';
import massMediaPic from '../../../assets/img/mass-1.jpg';

const imageArray = [islandPic, corporationPic, massMediaPic];

function Offer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timerId);
  }, []);
  const image = imageArray[count % imageArray.length];
  return (
    <section className={classes.offer}>
      <div className={classes.textContent}>
        <h3>We offer</h3>
        <p className={classes.subtitle}>
          <span>Islands:</span> Your dream of a private paradise is now a reality! Choose from our
          selection of premium islands and immerse yourself in luxury and privacy.
        </p>
        <p className={classes.subtitle}>
          <span>Corporations:</span> Change the world by purchasing a corporation. You can destroy
          it or take over the world with it.
        </p>
        <p className={classes.subtitle}>
          <span>Mass-Media:</span> Influence people’s minds through your own media. Money will flow
          in your pocket from politicians and corporations
        </p>
      </div>
      <div className={classes.imgContent}>
        <img src={image} alt="beautiful island" />
      </div>
    </section>
  );
}

export default Offer;
