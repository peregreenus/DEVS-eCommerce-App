import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/common/Button/Button';
import * as classes from './greeting.module.css';
import getDiscountCodes from '../../../data/api/getDiscountСodes';
import { PromoRequest } from '../../../data/types/interfaces/PromoRequest';

function Greeting() {
  const navigate = useNavigate();
  const [promo, setPromo] = useState<string>('');

  useEffect(() => {
    async function fetchPromo() {
      const promoRequest: PromoRequest | null = await getDiscountCodes();
      if (promoRequest && promoRequest.results.length > 0) {
        setPromo(promoRequest.results[0].code);
      }
    }
    fetchPromo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPage = (path: string) => {
    navigate(path);
  };

  const buttons = [{ path: '/catalog', label: 'Explore our offers' }];

  const handlePromoCopy = () => {
    if (promo) {
      navigator.clipboard
        .writeText(promo)
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('Promo code copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy promo code: ', err);
        });
    }
  };

  return (
    <section className={classes.greeting}>
      <div className={classes.textContent}>
        <h1>Welcome to &quot;Galactic Exclusive&quot;</h1>
        <p className={classes.subtitle}>
          Your ultimate destination for premium stuff! We offer the most exclusive properties in the
          galaxy for the most discerning clients. From luxurious islands to corporations and
          mass-media – you&apos;ll find everything for your exclusive life in our planet.
        </p>
        <div className={classes.wrapper}>
          {buttons.map((button) => (
            <MyButton
              key={button.path}
              type="button"
              className={classes.catalogButton}
              onClick={() => goToPage(button.path)}>
              {button.label}
            </MyButton>
          ))}
        </div>
        <div className={classes.promo}>
          <span className={classes.label}>Get promo code: </span>
          <button type="button" className={classes.value} onClick={handlePromoCopy}>
            {promo}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
