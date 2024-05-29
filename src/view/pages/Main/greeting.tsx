import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/common/Button/MyButton';
import * as classes from './greeting.module.css';
import * as classesMain from './main.module.css';

function Greeting() {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  const buttons = [
    { path: '/catalog', label: 'Catalog' },
    { path: '/product', label: 'Product' },
    { path: '/product/ee9499ae-03b9-46e2-9de0-01bd3441c439', label: 'ProductID' }
  ];

  return (
    <section className={`${classes.greeting} ${classesMain.mainSection}`}>
      <div className={classesMain.textContent}>
        <p className={classesMain.title}>Welcome to &quot;Galactic Exclusive&quot;</p>
        <p className={classesMain.subtitle}>
          &quot;Galactic Exclusive&quot; – your ultimate destination for premium real estate in the
          universe! We offer the most exclusive properties in the galaxy for the most discerning
          clients. From luxurious islands to futuristic asteroids – you&apos;ll find everything for
          your exclusive life in space.
        </p>
        <div className={classes.wrapper}>
          {buttons.map((button) => (
            <MyButton
              key={button.path}
              type="button"
              className={`${classes.btnCenter} ${classes.myBtn}`}
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
