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
          <MyButton type="button" className="btn-center" onClick={() => goToPage('/catalog')}>
            Catalog
          </MyButton>
          <MyButton type="button" className="btn-center" onClick={() => goToPage('/about')}>
            About
          </MyButton>
          <MyButton type="button" className="btn-center" onClick={() => goToPage('/signup')}>
            Signup
          </MyButton>
          <MyButton type="button" className="btn-center" onClick={() => goToPage('/login')}>
            Login
          </MyButton>
          <MyButton type="button" className="btn-center" onClick={() => goToPage('/logout')}>
            LogOut
          </MyButton>
          <MyButton type="button" className="btn-center" onClick={() => goToPage('/cart')}>
            Cart
          </MyButton>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
