import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/common/Button/Button';
import * as classes from './greeting.module.css';

function Greeting() {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  const buttons = [{ path: '/catalog', label: 'Explore our offers' }];

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
      </div>
    </section>
  );
}

export default Greeting;
