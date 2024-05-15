import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/common/Button/MyButton';
import * as classes from './greeting.module.css';
import * as classesMain from './main.module.css';

function Greeting() {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate('/catalog');
  };

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
        <MyButton type="button" className="btn-center" onClick={goToCatalog}>
          Go...
        </MyButton>
      </div>
    </section>
  );
}

export default Greeting;
